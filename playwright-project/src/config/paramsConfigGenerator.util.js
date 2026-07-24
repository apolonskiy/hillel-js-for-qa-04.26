import * as fs from "fs";
import * as path from "path";

export class ParamsConfigGenerator {
  constructor(configFilePath) {
    if (!fs.existsSync(configFilePath)) {
      throw new Error(
        `ParamsConfigGenerator: Config file not found at ${configFilePath}`,
      );
    }
    const parsed = JSON.parse(fs.readFileSync(configFilePath, "utf-8"));
    this.config = {
      global: parsed.global ?? {},
      groups: parsed.groups ?? {},
      tests: parsed.tests ?? {},
    };
  }

  /**
   * Getter of the internal attribute - config
   */
  get getConfig() {
    return this.config;
  }

  /**
   * Merge parameters given any number of tags.
   * - Unknown tags (not in groups or tests) are ignored.
   * - Multiple group tags are allowed.
   * - At most one test-ID tag: if more are provided, only the first is used and a warning is logged.
   *
   * Merging order: global → groups (in the order tags were passed) → test override.
   */
  getParams(...tags) {
    const { global, groups, tests } = this.config;

    if (global) {
      console.log(`Global parameters found: ${JSON.stringify(global)}`);
    }

    const validGroupTags = [];
    const validTestTags = [];

    for (const tag of tags) {
      if (groups.hasOwnProperty(tag)) {
        validGroupTags.push(tag);
      } else if (tests && tests.hasOwnProperty(tag)) {
        validTestTags.push(tag);
      }
    }
    if (validGroupTags.length > 0) {
      console.log(
        `Test group(s) "${validGroupTags}" found; using it for test group overrides.`,
      );
    }

    if (validTestTags.length > 1) {
      console.warn(
        `ParamsConfigGenerator: multiple test tags [${validTestTags.join(
          ", ",
        )}] found; only the first ("${validTestTags[0]}") will be used.`,
      );
    }
    const testTag = validTestTags[0];
    if (testTag) {
      console.log(
        `ParamsConfigGenerator: "${testTag}" exists; overriding it for test.`,
      );
    }

    let merged = { ...global };

    for (const groupName of validGroupTags) {
      merged = ParamsConfigGenerator.mergeConfigs(merged, groups[groupName]);
    }

    if (testTag) {
      merged = ParamsConfigGenerator.mergeConfigs(merged, tests[testTag]);
    }
    console.log(`Test will be run with parameters: ${JSON.stringify(merged)}`);
    return merged;
  }

  /**
   *  Util func to merge two configuration objects deeply.
   *  Arrays are replaced and not merged.
   *  */
  static mergeConfigs(base, override) {
    const result = Array.isArray(base) ? [...base] : { ...base };
    for (const key of Object.keys(override)) {
      const overrideValue = override[key];
      if (Array.isArray(overrideValue)) {
        // Override arrays by replacing them entirely
        result[key] = [...overrideValue];
      } else if (overrideValue !== null && typeof overrideValue === "object") {
        // If both base and override values are objects, merge them recursively
        const baseValue = result[key];
        if (
          baseValue !== null &&
          typeof baseValue === "object" &&
          !Array.isArray(baseValue)
        ) {
          result[key] = ParamsConfigGenerator.mergeConfigs(
            baseValue,
            overrideValue,
          );
        } else {
          // Otherwise, take a shallow copy of the override object
          result[key] = { ...overrideValue };
        }
      } else {
        // Primitive values (string, number, boolean, etc.) or null: override directly
        result[key] = overrideValue;
      }
    }
    return result;
  }
}

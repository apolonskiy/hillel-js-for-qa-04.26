import { test } from "@playwright/test";
import { ParamsConfigGenerator } from "../config/paramsConfigGenerator.util";
import { join, isAbsolute } from "path";

/**
 * Fixture to load parameters from a YAML file.
 */
export const paramsFixtures = test.extend({
  paramsFilePath: ["parameters.json", { option: true }],
  params: async ({ paramsFilePath }, use, testInfo) => {
    const filePath = isAbsolute(paramsFilePath)
      ? paramsFilePath
      : join(process.cwd(), paramsFilePath);
    const loader = new ParamsConfigGenerator(filePath);
    const tags = testInfo.tags.map((t) => t.substring(1)); // drop '@'
    const merged = loader.getParams(...tags);
    await use(merged);
  },
});

export { expect } from "@playwright/test";

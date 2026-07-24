import { mergeTests } from "@playwright/test";
import { test as loginTest } from "./login.fixture";
import { test as pomTest } from "./pomGenerator.fixture";

export const test = mergeTests(loginTest, pomTest);

export { expect } from "@playwright/test";

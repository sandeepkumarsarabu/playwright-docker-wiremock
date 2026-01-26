import { test, expect } from "@playwright/test";

test("UI shows asset data when API is up @ui @smoke", async ({ page }) => {
  await page.goto("/");

  await page.click("#loadBtn");

  const result = page.locator("#result");

  // Wait until loading finishes
  await expect(result).not.toHaveText("Loading...");

  // Validate data from API + WireMock
  await expect(result).toContainText("Eindhoven");
});

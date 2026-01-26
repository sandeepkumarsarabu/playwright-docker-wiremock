import { test, expect } from "@playwright/test";
import { execSync } from "child_process";

test("UI shows ERROR message when API is down @ui @negative", async ({ page }) => {
  // Stop API service (Compose)
  execSync("docker compose stop api", { stdio: "inherit" });

  try {
    await page.goto("http://127.0.0.1:3000");
    await page.click("#loadBtn");

    const result = page.locator("#result");

    // Wait until UI finishes updating
    await expect(result).not.toHaveText("Loading...");

    // Validate error is visible
    await expect(result).toContainText("ERROR:");
  } finally {
    // Start API service back up
    execSync("docker compose start api", { stdio: "inherit" });
  }
});

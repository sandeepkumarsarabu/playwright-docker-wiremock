import {test,expect}from "@playwright/test";
test("E2E: UI loads asset data via API and stub UI → API → WireMock chain works @e2e", async({page})=>{
    await page.goto("/");
    await page.click("#loadBtn");
    const result=page.locator("#result");
    // Wait until UI finishes updating from Loading
    await expect(result).not.toHaveText("Loading...");

    //Full chain assertion (comes from wiremock mapping)
    await expect(result).toContainText("Eindhoven");

   // Optional: extra confidence checks
  //await expect(result).toContainText("api-dotnet");
  //await expect(result).toContainText("ASSET-1001");
});
import { test, expect } from "@playwright/test";

test("API returns data from stubbed SAP service @api @smoke", async ({ request }) => {
  const res = await request.get("http://127.0.0.1:8080/api/assets/ASSET-1001");
  expect(res.ok()).toBeTruthy();

  const json = await res.json();
  expect(json.source).toBe("api-dotnet");
  expect(json.sap.assetId).toBe("ASSET-1001");
  expect(json.sap.location).toBe("Eindhoven");
});
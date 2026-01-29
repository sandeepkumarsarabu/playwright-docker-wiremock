import { test, expect } from "@playwright/test";

const API_BASE = process.env.API_BASE_URL || "http://127.0.0.1:8080";

test("API returns data from stubbed SAP service @api @smoke", async ({ request }) => {
  const res = await request.get(`${API_BASE}/api/assets/ASSET-1001`);
  expect(res.ok()).toBeTruthy();

  const json = await res.json();
  expect(json.sap.location).toBe("Eindhoven");
});

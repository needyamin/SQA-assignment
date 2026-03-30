import { expect, test } from "@playwright/test";

test("search flow renders mocked response", async ({ page }) => {
  await page.route("**/generate", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        data: {
          summary: "Found 1 relevant legal document(s): Mock Legal Act.",
          matched_docs: [
            {
              id: 100,
              title: "Mock Legal Act",
              content: "Mock response content",
            },
          ],
        },
        message: "Search completed successfully",
        success: true,
        status: 200,
      }),
    });
  });

  await page.goto("/");
  await page.getByPlaceholder("Search for legal documents...").fill("privacy");
  await page.getByRole("button", { name: "Search" }).click();

  await expect(page.getByText("Found 1 relevant legal document(s)")).toBeVisible();
  await expect(page.getByText("Mock Legal Act")).toBeVisible();
});

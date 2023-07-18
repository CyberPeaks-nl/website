import { test, expect } from "@playwright/test";

test("should render correctly", async ({ page }, testInfo) => {
  testInfo.snapshotSuffix = "";
  await page.goto("/");
  await expect(page).toHaveScreenshot("screenshot.png", {
    maxDiffPixelRatio: 0.05,
  });
});

test("should navigate to LinkedIn", async ({ page }) => {
  await page.goto("/");
  await page.getByTitle("LinkedIn").click();
  await expect(page).toHaveURL(/linkedin\.com/);
});

test("should navigate to GitHub", async ({ page }) => {
  await page.goto("/");
  await page.getByTitle("GitHub").click();
  await expect(page).toHaveURL(/github\.com/);
});

test("should download the curriculum vitae", async ({ page }) => {
  const promise = page.waitForEvent("download");
  await page.goto("/");
  await page.getByTitle("Curriculum Vitae").click();
  const download = await promise;
  await expect(await download.path()).toBeDefined();
});

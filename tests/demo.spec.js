const { test, expect } = require("playwright/test");

test("My First Test", async ({ page }) => {
    await page.goto("https://www.google.com");
    let currUrl = await page.url();
    expect(currUrl).toBe("https://www.google.com/");
    expect(await page.title()).toContain("Google");
});

test("APP_TOKEN is set as environment variable", () => {
  const envValue = process.env.APP_TOKEN;
  expect(envValue).toBe("2aae6c35c94fcfb415dbe95f408b9ce91ee846ed");
});

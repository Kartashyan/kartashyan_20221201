describe("smoke tests", () => {
  it("should allow you to navigate to the upload page", () => {
    cy.visitAndCheck("/");
    cy.findByRole("link", { name: /Upload/i }).click();
  });
  it.skip("should allow you to upload a video", () => {

  });
});

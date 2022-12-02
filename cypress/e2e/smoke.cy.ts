describe("smoke tests", () => {
  it("should allow you to navigate to the upload page", () => {
    cy.visitAndCheck("/");
    cy.findByRole("link", { name: /Upload/i }).click();
  });
  it("should allow you to attach a video", () => {
    cy.get("input[type=file]").selectFile({
      contents: Cypress.Buffer.from("file contents"),
      fileName: "file.mov",
      lastModified: Date.now(),
    });
  });
});

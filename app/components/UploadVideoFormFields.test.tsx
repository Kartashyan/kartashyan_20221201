import { render, RenderResult } from "@testing-library/react";
import { UploadVideoFormFields } from "./UploadVideoFormFields";

describe("UploadVideo component", () => {
  let utils: RenderResult;
  const categoryFieldName = "category";
  const fileFieldName = "video";
  const titleFieldName = "title";
  const thumbnailFieldName = "thumbnail";

  beforeEach(() => {
    utils = render(
      <UploadVideoFormFields
        categoryList={[]}
        titleFieldName={titleFieldName}
        categoryFieldName={categoryFieldName}
        fileFieldName={fileFieldName}
        thumbnailFieldName={thumbnailFieldName}
      />
    );
  });
  it("should have a title input field", () => {
    expect(utils.getByTestId(titleFieldName)).toBeTruthy();
    expect(utils.getByTestId(titleFieldName).getAttribute("name")).toEqual(
      titleFieldName
    );
  });
  it("should have a file input field", () => {
    expect(utils.getByTestId(fileFieldName)).toBeTruthy();
    expect(utils.getByTestId(fileFieldName).getAttribute("name")).toEqual(
      fileFieldName
    );
  });
  it("should have a dropdown with category options", () => {
    expect(utils.getByTestId(categoryFieldName)).toBeTruthy();
    expect(utils.getByTestId(categoryFieldName).getAttribute("name")).toEqual(
      categoryFieldName
    );
  });
  it("should have a image tag for showing video thumbnail", () => {
    expect(utils.getByTestId(thumbnailFieldName)).toBeTruthy();
    expect(utils.getByTestId(thumbnailFieldName).getAttribute("name")).toEqual(
      thumbnailFieldName
    );
  });
  it("should have a submit button", () => {
    expect(utils.getByRole("submit")).toBeTruthy();
  });
});

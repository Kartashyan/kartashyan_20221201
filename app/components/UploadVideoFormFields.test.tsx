import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { UploadVideoFormFields } from "./UploadVideoFormFields";

describe("UploadVideo component", () => {
  const categoryFieldName = "category";
  const fileFieldName = "video";
  const titleFieldName = "title";
  const thumbnailFieldName = "thumbnail";
  const smallThumbnailFieldName = "smThumbnail";
  const mediumThumbnailFieldName = "mdThumbnail";
  const largeThumbnailFieldName = "lgThumbnail";

  it("should have a title input field", () => {
    render(
      <UploadVideoFormFields
        categoryList={[]}
        titleFieldName={titleFieldName}
        categoryFieldName={categoryFieldName}
        fileFieldName={fileFieldName}
        smallThumbnailFieldName={smallThumbnailFieldName}
        mediumThumbnailFieldName={mediumThumbnailFieldName}
        largeThumbnailFieldName={largeThumbnailFieldName}
      />
    );
    expect(screen.getByTestId(titleFieldName)).toBeInTheDocument();
    expect(screen.getByTestId(titleFieldName)).toHaveAttribute("name");
    // Linter warrning here because of using getAttribute, commented out until figuring out
    // expect(screen.getByTestId(titleFieldName).getAttribute("name")).toBe(titleFieldName)
  });

  it("should have a file input field", () => {
    render(
      <UploadVideoFormFields
        categoryList={[]}
        titleFieldName={titleFieldName}
        categoryFieldName={categoryFieldName}
        fileFieldName={fileFieldName}
        smallThumbnailFieldName={smallThumbnailFieldName}
        mediumThumbnailFieldName={mediumThumbnailFieldName}
        largeThumbnailFieldName={largeThumbnailFieldName}
      />
    );
    expect(screen.getByTestId(fileFieldName)).toBeInTheDocument();
    expect(screen.getByTestId(fileFieldName)).toHaveAttribute("name");
  });
  it("should have a dropdown with category options", () => {
    render(
      <UploadVideoFormFields
        categoryList={[]}
        titleFieldName={titleFieldName}
        categoryFieldName={categoryFieldName}
        fileFieldName={fileFieldName}
        smallThumbnailFieldName={smallThumbnailFieldName}
        mediumThumbnailFieldName={mediumThumbnailFieldName}
        largeThumbnailFieldName={largeThumbnailFieldName}
      />
    );
    expect(screen.getByTestId(categoryFieldName)).toBeInTheDocument();
    expect(screen.getByTestId(categoryFieldName)).toHaveAttribute("name");
  });
  it("should have a image tag for showing video thumbnail", () => {
    render(
      <UploadVideoFormFields
        categoryList={[]}
        titleFieldName={titleFieldName}
        categoryFieldName={categoryFieldName}
        fileFieldName={fileFieldName}
        smallThumbnailFieldName={smallThumbnailFieldName}
        mediumThumbnailFieldName={mediumThumbnailFieldName}
        largeThumbnailFieldName={largeThumbnailFieldName}
      />
    );
    expect(screen.getByTestId(thumbnailFieldName)).toBeInTheDocument();
    expect(screen.getByTestId(thumbnailFieldName)).toHaveAttribute("name");
  });
  it("should have a submit button", () => {
    render(
      <UploadVideoFormFields
        categoryList={[]}
        titleFieldName={titleFieldName}
        categoryFieldName={categoryFieldName}
        fileFieldName={fileFieldName}
        smallThumbnailFieldName={smallThumbnailFieldName}
        mediumThumbnailFieldName={mediumThumbnailFieldName}
        largeThumbnailFieldName={largeThumbnailFieldName}
      />
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});

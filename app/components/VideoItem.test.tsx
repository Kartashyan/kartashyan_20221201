import { render, screen } from "@testing-library/react";
import { VideoItem } from "./VideoItem";

describe("VideoItem component", () => {
  it("should have a title", () => {
    render(
      <VideoItem
        title="qwerty"
        categoryName="Education"
        videoUrl="http://localhost:3000/qwerty"
        lgTmbnail="asdasd"
      />
    );
    const element = screen.getByText("qwerty");
    expect(element).toBeInTheDocument();
  });
  it("should have a category", () => {
    render(
      <VideoItem
        title="qwerty"
        categoryName="Education"
        videoUrl="http://localhost:3000/qwerty"
        lgTmbnail="asdasd"
      />
    );
    const element = screen.getByText("Education");
    expect(element).toBeInTheDocument();
  });
});

import { render, RenderResult } from '@testing-library/react';
import { UploadVideoFormFields } from './UploadVideoFormFields';

describe("UploadVideo component", () => {
    let utils: RenderResult;
    beforeEach(() => {
        utils = render(<UploadVideoFormFields/>);
    })
    it("should have a title input field", () => {
        expect(utils.getByLabelText("Title")).toBeTruthy();
    });
    it("should have a file input field", () => {
        expect(utils.getByRole("upload-video")).toBeTruthy();
    });
    it("should have a image tag for showing video thumbnail", () => {
        expect(utils.getByRole("show-thumbnail")).toBeTruthy();
    });
    it("should have a submit button", () => {
        expect(utils.getByRole("submit")).toBeTruthy();
    });
});
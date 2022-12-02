import { unstable_createFileUploadHandler as createFileUploadHandler } from "@remix-run/node";
import { composeUploadHandlers } from "@remix-run/server-runtime/dist/formData";
import type { UploadHandler } from "@remix-run/server-runtime/dist/formData";
import { createMemoryUploadHandler } from "@remix-run/server-runtime/dist/upload/memoryUploadHandler";

export const fileUploadToDiskHandler = createFileUploadHandler({
  maxPartSize: 2e8, //200mb
  directory: "public/videos",
  file: ({ filename }) => filename,
});

export const uploadHandler: UploadHandler = composeUploadHandlers(
  fileUploadToDiskHandler,
  createMemoryUploadHandler()
);

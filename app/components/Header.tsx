import { Link } from "@remix-run/react";

export const Header = () => {
  return (
    <div className="sticky top-0 z-10 flex h-16 w-full items-center justify-end bg-teal-400 pr-8">
      <Link to="upload-video">Upload</Link>
    </div>
  );
};

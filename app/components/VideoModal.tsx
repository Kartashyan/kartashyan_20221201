import { useCallback, useEffect } from "react";
import { useVideoModalContext } from "~/hooks/useVideoModalContext";

export const VideoModal = () => {
  const { source, setSource } = useVideoModalContext();

  const handleClose = useCallback(() => {
    setSource(null);
  }, [setSource]);

  const closeOnEscapeKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    },
    [handleClose]
  );

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKey);

    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [closeOnEscapeKey]);

  if (!source) return null;

  return (
    <div
      className="fixed inset-0 z-20 flex items-center justify-center bg-slate-400/50"
      onClick={(e) => {
        if (e.target !== e.currentTarget) return;
        handleClose();
      }}
    >
      <video src={source} width={600} controls autoPlay />
    </div>
  );
};

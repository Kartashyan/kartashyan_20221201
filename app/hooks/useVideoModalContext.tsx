import { createContext, useContext, useState } from "react";

export interface VideoModalContext {
  source: string | null;
  setSource: (source: string | null) => void;
}

function useInitialContext(): VideoModalContext {
  const [source, setSource] = useState<string | null>(null);

  return {
    source,
    setSource,
  };
}

const Context = createContext<VideoModalContext | null>(null);

export function useVideoModalContext(): VideoModalContext {
  const context = useContext(Context);
  if (!context) {
    throw Error("VideoModalContext used without being initialized.");
  }
  return context;
}

export function VideoModalProvider(props: { children: React.ReactNode }) {
  const context = useInitialContext();
  return <Context.Provider value={context}>{props.children}</Context.Provider>;
}

import { useContext, createContext } from "react";

interface ViewPortContextProps {
  height: number;
  width: number;
}

export const ViewportContext = createContext<ViewPortContextProps>({
  height: 0,
  width: 0,
});

export const useViewport = () => {
  const { width, height } = useContext(ViewportContext);
  return { width, height };
};

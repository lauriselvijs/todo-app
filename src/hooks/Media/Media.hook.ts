import { useMedia } from "react-use";
import Media from "../../style/main.scss";

const { mobile } = Media;

export const useMobile = (): boolean => {
  const isMobile = useMedia(mobile);

  return isMobile;
};

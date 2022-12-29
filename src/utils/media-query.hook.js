import { useEffect, useState } from "react";

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}

export const useIsXXSmall = () => useMediaQuery("(max-width: 392px)");
export const useIsXSmall = () => useMediaQuery("(max-width: 575px)");
export const useIsSmall = () => useMediaQuery("(max-width: 767px)");
export const useIsMedium = () => useMediaQuery("(max-width: 991px)");
export const useIsLarge = () => useMediaQuery("(max-width: 1199px)");
export const useIsXLarge = () => useMediaQuery("(max-width: 1399px)");
export const useIsXXLarge = () => useMediaQuery("(min-width: 1400px)");

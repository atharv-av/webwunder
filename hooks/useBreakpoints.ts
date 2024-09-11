import { useWindowSize } from "@uidotdev/usehooks";

const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 } as const
export default function useBreakpoints() {
    const size = useWindowSize();

    let isMobile = true
    if(size.width)
        isMobile = size.width < BREAKPOINTS.tablet

    return {
        isMobile
    }
}

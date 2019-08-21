import { ScrollNavigation } from ".";

// @ts-ignore
(window as any).ScrollNavigation = ScrollNavigation;

export default ScrollNavigation;

window.addEventListener("DOMContentLoaded", () => {
  // @ts-ignore
  (window as any).scrollNavigation = new ScrollNavigation(
    document.scrollingElement as HTMLElement
  );
});

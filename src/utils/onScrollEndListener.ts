type OnScrollEndListenerCallback = () => void;

export const onScrollEndListener = (callback: OnScrollEndListenerCallback) => {
  if (!callback || typeof callback !== "function") return;

  let touching = false;

  addEventListener("touchstart", () => (touching = true));
  addEventListener("touchend", () => (touching = false));

  let isScrolling: number;

  window.addEventListener(
    "scroll",
    () => {
      window.clearTimeout(isScrolling);

      isScrolling = window.setTimeout(() => {
        !touching && callback();
      }, 66);
    },
    false
  );
};

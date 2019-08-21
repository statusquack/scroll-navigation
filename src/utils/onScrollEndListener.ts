type OnScrollEndListenerCallback = () => void;

export const onScrollEndListener = (callback: OnScrollEndListenerCallback) => {
  if (!callback || typeof callback !== "function") return;

  let isScrolling: number;

  window.addEventListener(
    "scroll",
    () => {
      window.clearTimeout(isScrolling);

      isScrolling = window.setTimeout(function() {
        callback();
      }, 66);
    },
    false
  );
};

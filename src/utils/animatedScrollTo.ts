const suppportsScrollBehavior = CSS.supports("scroll-behavior");

const requestAnimFrame = (() => {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();

const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};

let userScroll = false;
const startUserScroll = () => {
  if (!userScroll) console.log("startUserScroll");
  userScroll = true;
};
// addEventListener("wheel", startUserScroll);
// addEventListener("mousewheel", startUserScroll);
// addEventListener("DOMMouseScroll", startUserScroll);
// addEventListener("keyup", startUserScroll);
// addEventListener("mousedown", startUserScroll);
// addEventListener("touchmove", startUserScroll);

export const animatedScrollTo = (
  element: HTMLElement,
  to: number,
  duration: number = 0,
  callback?: () => void
) => {
  // if (suppportsScrollBehavior) {
  //   element.scrollTo({ top: to });
  //   return;
  // }

  const start = element.scrollTop,
    change = to - start,
    animationStart = +new Date();
  let animating = true;
  let lastpos: number = 0;

  const animateScroll = () => {
    if (!animating || userScroll) {
      userScroll = false;
      return;
    }
    requestAnimFrame(animateScroll);
    const now = +new Date();
    const val = Math.floor(
      easeInOutQuad(now - animationStart, start, change, duration)
    );
    if (lastpos) {
      if (lastpos === element.scrollTop) {
        lastpos = val;
        element.scrollTop = val;
      } else {
        animating = false;
      }
    } else {
      lastpos = val;
      element.scrollTop = val;
    }
    if (now > animationStart + duration) {
      element.scrollTop = to;
      animating = false;
      if (callback) {
        callback();
      }
    }
  };
  requestAnimFrame(animateScroll);
};

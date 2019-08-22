import { onScrollEndListener } from "./utils/onScrollEndListener";
import { animatedScrollTo } from "./utils/animatedScrollTo";

export class ScrollNavigation {
  root: HTMLElement | HTMLBodyElement;
  children: Element[];
  dotsRoot: HTMLElement;
  dotsChildren: HTMLElement[];
  currentIndex: number;

  constructor(root: HTMLElement) {
    this.root = root;
    this.root.style.scrollBehavior = "smooth";
    this.refreshChildren();
    this.initOnScrollListener();
    this.initOnWindowSizeChangeListener();
    this.initOnScrollEndListener();

    console.log(this.children);
  }

  refreshChildren() {
    this.children = Array.from(
      this.root.querySelectorAll("[data-component=scroll-navigation-item]")
    ).filter(
      element =>
        element.getAttribute("data-component") === "scroll-navigation-item"
    );
    this.refreshDots();
  }

  refreshDots() {
    if (!this.dotsRoot) {
      this.dotsRoot = document.createElement("div");
      this.dotsRoot.setAttribute("data-component", "scroll-navigation-dots");
    }
    this.dotsChildren = this.children.map<HTMLElement>((child, index) => {
      const dot = document.createElement("div");
      dot.setAttribute("data-component", "scroll-navigation-dot");
      dot.addEventListener("click", () => {
        this.snapToSlide(index);
      });
      this.dotsRoot.appendChild(dot);
      return dot;
    });
    this.root.appendChild(this.dotsRoot);
  }

  setDotIndex(index: number) {
    if (this.currentIndex === index) {
      return;
    }

    this.dotsChildren[this.currentIndex || 0].removeAttribute(
      "data-scroll-navigation-state"
    );

    this.dotsChildren[index].setAttribute(
      "data-scroll-navigation-state",
      "active"
    );

    this.currentIndex = index;
  }

  private initOnScrollEndListener() {
    onScrollEndListener(() => {
      console.log("onScrollEndListener");
      this.snapToSlide();
    });
  }

  private initOnWindowSizeChangeListener() {
    addEventListener("resize", () => {
      this.snapToSlide();
    });
  }

  private initOnScrollListener() {
    this.setDotIndex(this.getCurrentIndex());

    window.addEventListener("scroll", () => {
      this.setDotIndex(this.getCurrentIndex());
    });
  }

  private snapToSlide(snapToIndex?: number) {
    const snapElement = snapToIndex
      ? (this.children[snapToIndex] as HTMLElement)
      : this.getElementInTheMiddle();

    if (!snapElement) {
      return;
    }

    if (snapElement.offsetHeight < this.root.offsetHeight) {
      // animatedScrollTo(
      //   this.root,
      //   snapElement.offsetTop +
      //     snapElement.offsetHeight / 2 -
      //     this.root.offsetHeight / 2
      // );
      this.root.scrollTo({
        top:
          snapElement.offsetTop +
          snapElement.offsetHeight / 2 -
          this.root.offsetHeight / 2
      });
      return;
    }

    if (
      snapElement.offsetTop > this.root.scrollTop &&
      snapElement.offsetTop + snapElement.offsetHeight <
        this.root.scrollTop + this.root.offsetHeight
    ) {
      return;
    }

    if (snapElement.offsetTop > this.root.scrollTop) {
      // animatedScrollTo(this.root, snapElement.offsetTop);
      this.root.scrollTo({ top: snapElement.offsetTop });
      return;
    }

    if (
      snapElement.offsetTop + snapElement.offsetHeight <
      this.root.scrollTop + this.root.offsetHeight
    ) {
      // animatedScrollTo(
      //   this.root,
      //   snapElement.offsetTop +
      //     snapElement.offsetHeight -
      //     this.root.offsetHeight
      // );
      this.root.scrollTo({
        top:
          snapElement.offsetTop +
          snapElement.offsetHeight -
          this.root.offsetHeight
      });
      return;
    }
  }

  private getElementInTheMiddle(): HTMLElement | null {
    const scrollMiddle = this.root.scrollTop + this.root.offsetHeight / 2;
    let elementInTheMiddle: HTMLElement = null;

    this.children.every((child: HTMLElement) => {
      if (
        child.offsetTop < scrollMiddle &&
        child.offsetTop + child.offsetHeight > scrollMiddle
      ) {
        elementInTheMiddle = child;
        return false;
      }
      return true;
    });

    return elementInTheMiddle;
  }

  private getCurrentIndex(): number {
    const scrollMiddle = this.root.scrollTop + this.root.offsetHeight / 2;
    let currentIndex: number = 0;

    this.children.every((child: HTMLElement, index) => {
      if (
        child.offsetTop < scrollMiddle &&
        child.offsetTop + child.offsetHeight > scrollMiddle
      ) {
        currentIndex = index;
        return false;
      }
      return true;
    });

    return currentIndex;
  }
}

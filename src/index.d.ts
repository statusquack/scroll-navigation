export declare class ScrollNavigation {
    root: HTMLElement | HTMLBodyElement;
    children: Element[];
    dotsRoot: HTMLElement;
    dotsChildren: HTMLElement[];
    currentIndex: number;
    constructor(root: HTMLElement);
    refreshChildren(): void;
    refreshDots(): void;
    setDotIndex(index: number): void;
    private initOnScrollEndListener;
    private initOnWindowSizeChangeListener;
    private initOnScrollListener;
    private snapToSlide;
    private getElementInTheMiddle;
    private getCurrentIndex;
}

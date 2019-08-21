export declare class ScrollNavigation {
    root: HTMLElement | HTMLBodyElement;
    children: Element[];
    constructor(root: HTMLElement);
    refreshChildren(): void;
    private initOnScrollEndListener;
    private initOnWindowSizeChangeListener;
    private initOnScrollListener;
    private snapToSlide;
    private getElementInTheMiddle;
}

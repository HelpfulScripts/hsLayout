import { Vnode } from '../mithril';
export declare class Layout {
    style: string;
    protected getComponents(node: Vnode): Vnode;
    protected getCSS(node: Vnode): string;
    private normalizeContent;
    view(node: Vnode): Vnode;
}

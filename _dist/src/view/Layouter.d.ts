import { Vnode } from '../mithril';
import { LayoutToken } from './Tokens';
import { Layout } from './Layout';
export declare abstract class Layouter {
    areaDesc: LayoutToken[];
    static layoutStyles: {
        string?: Layouter;
    };
    private static translate(params);
    static register(keyword: string, style: typeof Layouter): void;
    static createLayout(attrs: any, components: Array<Vnode>): string;
    spacing: number;
    constructor(areaDesc: LayoutToken[]);
    protected abstract getStyles(components: Array<Vnode | Layout>): string;
}

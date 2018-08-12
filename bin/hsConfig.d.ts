export declare class HsConfig {
    protected context: any[];
    constructor(context: any[]);
    attachNodeTree(config: any, root: any): Promise<void>;
    private getContent;
    private load;
}

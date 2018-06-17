export class LayoutToken {
    constructor(size) {
        this.size = size;
    }
    getSize() { return this.size; }
}
export class DefinedToken extends LayoutToken {
    constructor(size) { super(size); }
}
export class FillToken extends LayoutToken {
    constructor() { super(-1); }
}
export class PixelToken extends DefinedToken {
    constructor(size) { super(size); }
}
export class PercentToken extends DefinedToken {
    constructor(size) { super(size); }
}
export function px(px) { return new PixelToken(px); }
export function pc(pc) { return new PercentToken(pc); }
export const FILL = new FillToken();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9rZW5zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3ZpZXcvVG9rZW5zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBLE1BQU07SUFDRixZQUFvQixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtJQUFHLENBQUM7SUFDN0IsT0FBTyxLQUFLLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Q0FDekM7QUFLRCxNQUFNLG1CQUE2QixTQUFRLFdBQVc7SUFDbEQsWUFBWSxJQUFZLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUM3QztBQUtELE1BQU0sZ0JBQWlCLFNBQVEsV0FBVztJQUN0QyxnQkFBZ0IsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQy9CO0FBS0QsTUFBTSxpQkFBa0IsU0FBUSxZQUFZO0lBQ3hDLFlBQVksSUFBVyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDNUM7QUFLRCxNQUFNLG1CQUFvQixTQUFRLFlBQVk7SUFDMUMsWUFBWSxJQUFXLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUM1QztBQU1ELE1BQU0sYUFBYSxFQUFTLElBQU0sT0FBTyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFNOUQsTUFBTSxhQUFhLEVBQVMsSUFBTSxPQUFPLElBQUksWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUtoRSxNQUFNLENBQUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQyJ9
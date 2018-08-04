import * as hslayout from "../";
import { FillToken } from './Tokens';


describe('Tokens', () => {
    test('LayoutToken', () => {
        const t = new FillToken();
        expect(t.getSize()).toBe(-1);
    });
    test('FILL', ()=> expect(hslayout.FILL.getSize()).toBe(-1));
});


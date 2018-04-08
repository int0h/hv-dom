import {HyperValue} from 'hyper-value';
import {read} from 'hyper-value/hs/read';
import {cast} from 'hyper-value/hs/cast';
import {auto} from 'hyper-value/hs/auto';

import {registerGlobalProp} from 'hv-jsx';

export type EveryStyleProp = keyof CSSStyleDeclaration;

export type StyleDict = {
    [key in EveryStyleProp]?: string | null | HyperValue<string | null>;
};

export type StyleProp = StyleDict | HyperValue<StyleDict>;

registerGlobalProp<StyleProp>('style', ({owner, hs, name, value}) => {
    const elem = owner.targetNode as HTMLElement;

    const styleHv = cast(value);
    auto(hs, () => {
        const styles = styleHv.$;
        for (const name in styles) {
            const value = styles[name as keyof StyleDict];

            if (value === undefined) {
                continue;
            }
            (elem.style as any)[name] = read(value);
        }
    });
});

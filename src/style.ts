import {HyperValue, scopes} from 'hyper-value';

import {registerGlobalProp} from 'hv-jsx';

export type EveryStyleProp = keyof CSSStyleDeclaration;

export type StyleDict = {
    [key in EveryStyleProp]?: string | null | HyperValue<string | null>;
};

export type StyleProp = StyleDict | HyperValue<StyleDict>;

registerGlobalProp<StyleDict | HyperValue<StyleDict>>('style', ({owner, hs, name, value}) => {
    const elem = owner.targetNode as HTMLElement;

    const styleHv = hs.cast(value);
    hs.auto(() => {
        const styles = styleHv.$;
        for (const name in styles) {
            const value = styles[name as keyof StyleDict];

            if (value === undefined) {
                continue;
            }
            (elem.style as any)[name] = hs.read(value);
        }
    });
});

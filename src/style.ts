// import {HyperValue} from 'hv';
// import {HyperElm} from './blocks/element';

// export type HyperStyle = {
//     [name in keyof CSSStyleDeclaration]?: string | null | HyperValue<string | null> | undefined;
// }

// export function styleMapper(props: HyperStyle, target: HyperElm) {
//     for (let key in props) {
//         const name = key as keyof CSSStyleDeclaration;
//         let value = props[name];
//         if (value instanceof HyperValue) {
//             value.watch(newValue => {
//                 (target.elm as HTMLElement).style.setProperty(name, newValue || null);
//             });
//             value = value.g(true);
//         }
//         (target.elm as HTMLElement).style.setProperty(name, value || null);
//     }
// }
import {HyperValue, scopes} from 'hv';

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

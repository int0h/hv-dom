import {
    Target,
    ContextMeta,
    Children,
    targetRenderChildren,
    closestComponent as jsxClosestComponent,
    Component,
} from 'hv-jsx';

import './events';

import {Tags} from './domTypes';

import {Meta, DomNode, Data, XmlNamespace} from './domHelpers';

import {
    append,
    appendSequence,
    closest,
    create,
    createPlaceholder,
    createTextNode,
    getData,
    // remove,
    replaceSequence,
    replace,
    setData,
    setProp
} from './domHelpers';


export const dom: Target<DomNode, Meta, number, Data> = {
    append,
    closest,
    create,
    createPlaceholder,
    createTextNode,
    getData,
    // remove,
    replaceSequence,
    replace,
    setData,
    setProp
};

export const defaultTargetMeta: Meta = {
    ns: 'html'
};

export interface MetaParams {
    ns?: XmlNamespace;
}

export function renderDom(jsx: Children, params: MetaParams = {}): DomNode[] {
    const contextMeta: ContextMeta = {
        target: dom,
        targetMeta: defaultTargetMeta
    } as any as ContextMeta;

    return targetRenderChildren(contextMeta, jsx) as DomNode[];
}

export function renderIn(where: HTMLElement, params: MetaParams, jsx: Children) {
    where.innerHTML = '';

    const content = renderDom(jsx, params);

    appendSequence(defaultTargetMeta, defaultTargetMeta, where, content);
}

export function closestComponent<T extends Component<any>>(elem: DomNode): T | null {
    return jsxClosestComponent(defaultTargetMeta, dom, elem);
}

declare global {
    namespace JSX {
        interface IntrinsicElements extends Tags {}
    }
}

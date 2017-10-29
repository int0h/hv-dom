import {
    Target,
    HvNode,
    ContextMeta,
    closestComponent as jsxClosestComponent,
    Component
} from 'hv-jsx';

import {Meta, DomNode, Data, XmlNamespace} from './domHelpers';

import {
    append,
    closest,
    create,
    createPlaceholder,
    createTextNode,
    getData,
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
    replace,
    setData,
    setProp
};

export const targetMeta: Meta = {
    ns: 'html'
};

export interface MetaParams {
    ns?: XmlNamespace;
}

export function renderDom(jsx: HvNode, params: MetaParams = {}): DomNode {
    const contextMeta: ContextMeta = {
        target: dom,
        targetMeta: targetMeta
    } as any as ContextMeta;

    return jsx.targetRender(contextMeta) as DomNode;
}

export function closestComponent<T extends Component<any>>(elem: DomNode): T | null {
    return jsxClosestComponent(targetMeta, dom, elem);
}

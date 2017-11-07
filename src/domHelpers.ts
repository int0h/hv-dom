export type DomNode = Text | Element | null;
export type XmlNamespace = 'html' | 'svg';

interface XmlNamespaces {
    selfNs: XmlNamespace;
    childNs: XmlNamespace;
}

const nsTable = {
    html: 'http://www.w3.org/1999/xhtml',
    svg: 'http://www.w3.org/2000/svg'
};

export interface Meta {
    ns: XmlNamespace;
}

export interface Data {
    [key: string]: any;
}

export function append(meta: Meta, parentMeta: Meta, parent: DomNode, elm: DomNode) {
    if (elm === null || parent === null) {
        return;
    }
    parent.appendChild(elm);
}

export function appendSequence(meta: Meta, parentMeta: Meta, parent: DomNode, elems: DomNode[]) {
    if (elems.length <= 0 || parent === null) {
        return;
    }

    for (let elem of elems) {
        if (!elem) {
            throw new Error('empty child');
        }

        parent.appendChild(elem);
    }
}

export function closest(meta: Meta, from: DomNode, matcher: (elem: DomNode) => boolean): DomNode {
    let elem = from;

    while (elem) {
        if (matcher(elem)) {
            return elem;
        }
        elem = elem.parentElement;
    }

    return null;
}

export function create(meta: Meta, tagName: string): [DomNode, Meta, Meta] {
    const {childNs, selfNs} = guessNs(tagName, meta.ns);
    const elem = document.createElementNS(nsTable[selfNs], tagName);
    const nestedMeta: Meta = {
        ...meta,
        ns: childNs
    };
    const selfMeta: Meta = {
        ...meta,
        ns: selfNs
    };
    return [elem, selfMeta, nestedMeta];
}

export function createPlaceholder(meta: Meta): DomNode {
    const elem = meta.ns === 'html'
        ? document.createElementNS(nsTable.html, 'script')
        : document.createElementNS(nsTable.svg, 'g');
    return elem;
}

export function createTextNode(meta: Meta, text: string): DomNode {
    return document.createTextNode(text);
}

export function getData(meta: Meta, elem: DomNode): Data {
    if (!elem) {
        return {};
    }
    return (elem as HTMLElement).dataset;
}

export function remove(meta: Meta, elem: DomNode) {
    if (!elem) {
        throw new Error('empty child');
    }

    const parent = elem.parentElement;

    if (!parent) {
        throw new Error('not mounted');
    }

    parent.removeChild(elem);
}

export function replace(meta: Meta, oldElem: DomNode, newElm: DomNode): any {
    if (!oldElem) {
        return;
    }

    if (!newElm) {
        oldElem.remove();
    }

    const parent = oldElem.parentElement;

    if (!parent) {
        throw new Error('cannot replace dom');
    }

    parent.replaceChild(newElm as HTMLElement, oldElem as HTMLElement);
}

export function replaceSequence(meta: Meta, oldElems: DomNode[], newElms: DomNode[]): any {
    const lastOld = oldElems[oldElems.length - 1];

    if (!lastOld) {
        throw new Error('no placeholder');
    }

    const parent = lastOld.parentElement;

    if (!parent) {
        throw new Error('no parent');
    }

    for (let elem of newElms) {
        if (!elem) {
            throw new Error('empty child');
        }
        parent.insertBefore(elem, lastOld);
    }

    for (let elem of oldElems) {
        remove(meta, elem);
    }
}

export function setData(meta: Meta, elem: DomNode, value: Data) {
    if (!elem) {
        return;
    }

    const dataset = (elem as HTMLElement).dataset;

    for (let name in value) {
        dataset[name] = value[name];
    }
}

export function setProp(meta: Meta, elem: DomNode, name: string, value: any) {
    if (!elem || elem instanceof Text) {
        throw new Error('cannot set property of null');
    }

    switch (meta.ns) {
        case 'html':
            if (typeof value === 'string' || typeof value === 'number') {
                elem.setAttribute(name, String(value));
            }
            (elem as any)[name] = value;
            return;
        case 'svg':
            elem.setAttribute(name, value);
            return;
    }
}

function guessNs(tagName: string, currentNs: XmlNamespace): XmlNamespaces {
    if (tagName === 'svg') {
        return {
            selfNs: 'svg',
            childNs: 'svg'
        };
    }
    if (tagName === 'foreignObject') {
        return {
            selfNs: 'svg',
            childNs: 'html'
        }
    }
    return {
        selfNs: currentNs,
        childNs: currentNs
    };
}

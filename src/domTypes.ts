import {HyperValue} from 'hv';

export type EventHandler = () => void | boolean;

export interface HTMLAttributes extends JSX.GlobalProps {
    accessKey?: string | HyperValue<string>;
    class?: string | HyperValue<string>;
    className?: string | HyperValue<string>;
    contentEditable?: boolean | HyperValue<boolean>;
    contextMenu?: string | HyperValue<string>;
    dir?: string | HyperValue<string>;
    draggable?: boolean | HyperValue<boolean>;
    hidden?: boolean | HyperValue<boolean>;
    id?: string | HyperValue<string>;
    lang?: string | HyperValue<string>;
    slot?: string | HyperValue<string>;
    spellCheck?: boolean | HyperValue<boolean>;
    tabIndex?: number | HyperValue<number>;
    title?: string | HyperValue<string>;
    role?: string | HyperValue<string>;
}

export interface AnchorHTMLAttributes extends HTMLAttributes {
    download?: any | HyperValue<any>;
    href?: string | HyperValue<string>;
    hrefLang?: string | HyperValue<string>;
    media?: string | HyperValue<string>;
    rel?: string | HyperValue<string>;
    target?: string | HyperValue<string>;
    type?: string | HyperValue<string>;
    as?: string | HyperValue<string>;
}

export interface ButtonHTMLAttributes extends HTMLAttributes {
    autoFocus?: boolean | HyperValue<boolean>;
    disabled?: boolean | HyperValue<boolean>;
    form?: string | HyperValue<string>;
    formAction?: string | HyperValue<string>;
    formEncType?: string | HyperValue<string>;
    formMethod?: string | HyperValue<string>;
    formNoValidate?: boolean | HyperValue<boolean>;
    formTarget?: string | HyperValue<string>;
    name?: string | HyperValue<string>;
    type?: string | HyperValue<string>;
    value?: string | string[] | number | HyperValue<string | string[] | number>;
}

export interface CanvasHTMLAttributes extends HTMLAttributes {
    height?: number | string | HyperValue<number | string>;
    width?: number | string | HyperValue<number | string>;
}

export interface FormHTMLAttributes extends HTMLAttributes {
    acceptCharset?: string | HyperValue<string>;
    action?: string | HyperValue<string>;
    autoComplete?: string | HyperValue<string>;
    encType?: string | HyperValue<string>;
    method?: string | HyperValue<string>;
    name?: string | HyperValue<string>;
    noValidate?: boolean | HyperValue<boolean>;
    target?: string | HyperValue<string>;
}

export interface ImgHTMLAttributes extends HTMLAttributes {
    alt?: string | HyperValue<string>;
    height?: number | string | HyperValue<number | string>;
    sizes?: string | HyperValue<string>;
    src?: string | HyperValue<string>;
    srcSet?: string | HyperValue<string>;
    useMap?: string | HyperValue<string>;
    width?: number | string | HyperValue<number | string>;
}

export interface InputHTMLAttributes extends HTMLAttributes {
    accept?: string | HyperValue<string>;
    alt?: string | HyperValue<string>;
    autoComplete?: string | HyperValue<string>;
    autoFocus?: boolean | HyperValue<boolean>;
    capture?: boolean | HyperValue<boolean>; // https://www.w3.org/TR/html-media-capture/#the-capture-attribute
    checked?: boolean | HyperValue<boolean>;
    crossOrigin?: string | HyperValue<string>;
    disabled?: boolean | HyperValue<boolean>;
    form?: string | HyperValue<string>;
    formAction?: string | HyperValue<string>;
    formEncType?: string | HyperValue<string>;
    formMethod?: string | HyperValue<string>;
    formNoValidate?: boolean | HyperValue<boolean>;
    formTarget?: string | HyperValue<string>;
    height?: number | string | HyperValue<number | string>;
    list?: string | HyperValue<string>;
    max?: number | string | HyperValue<number | string>;
    maxLength?: number | HyperValue<number>;
    min?: number | string | HyperValue<number | string>;
    minLength?: number | HyperValue<number>;
    multiple?: boolean | HyperValue<boolean>;
    name?: string | HyperValue<string>;
    pattern?: string | HyperValue<string>;
    placeholder?: string | HyperValue<string>;
    readOnly?: boolean | HyperValue<boolean>;
    required?: boolean | HyperValue<boolean>;
    size?: number | HyperValue<number>;
    src?: string | HyperValue<string>;
    step?: number | string | HyperValue<number | string>;
    type?: string | HyperValue<string>;
    value?: string | string[] | number | HyperValue<string | string[] | number>;
    width?: number | string | HyperValue<number | string>;

    onChange?: EventHandler;
}

export interface MediaHTMLAttributes extends HTMLAttributes {
    autoPlay?: boolean | HyperValue<boolean>;
    controls?: boolean | HyperValue<boolean>;
    crossOrigin?: string | HyperValue<string>;
    loop?: boolean | HyperValue<boolean>;
    mediaGroup?: string | HyperValue<string>;
    muted?: boolean | HyperValue<boolean>;
    playsinline?: boolean | HyperValue<boolean>;
    preload?: string | HyperValue<string>;
    src?: string | HyperValue<string>;
}

export interface TextareaHTMLAttributes extends HTMLAttributes {
    autoComplete?: string | HyperValue<string>;
    autoFocus?: boolean | HyperValue<boolean>;
    cols?: number | HyperValue<number>;
    dirName?: string | HyperValue<string>;
    disabled?: boolean | HyperValue<boolean>;
    form?: string | HyperValue<string>;
    maxLength?: number | HyperValue<number>;
    minLength?: number | HyperValue<number>;
    name?: string | HyperValue<string>;
    placeholder?: string | HyperValue<string>;
    readOnly?: boolean | HyperValue<boolean>;
    required?: boolean | HyperValue<boolean>;
    rows?: number | HyperValue<number>;
    value?: string | string[] | number | HyperValue<string | string[] | number>;
    wrap?: string | HyperValue<string>;

    onChange?: EventHandler;
}

export interface TableHTMLAttributes extends HTMLAttributes {
    cellPadding?: number | string | HyperValue<number | string>;
    cellSpacing?: number | string | HyperValue<number | string>;
    summary?: string | HyperValue<string>;
}

export interface SelectHTMLAttributes extends HTMLAttributes {
    autoFocus?: boolean | HyperValue<boolean>;
    disabled?: boolean | HyperValue<boolean>;
    form?: string | HyperValue<string>;
    multiple?: boolean | HyperValue<boolean>;
    name?: string | HyperValue<string>;
    required?: boolean | HyperValue<boolean>;
    size?: number | HyperValue<number>;
    value?: string | string[] | number | HyperValue<string | string[] | number>;
    onChange?: EventHandler;
}

export interface OptionHTMLAttributes extends HTMLAttributes {
    disabled?: boolean | HyperValue<boolean>;
    label?: string | HyperValue<string>;
    selected?: boolean | HyperValue<boolean>;
    value?: string | string[] | number | HyperValue<string | string[] | number>;
}

export interface ScriptHTMLAttributes extends HTMLAttributes {
    async?: boolean | HyperValue<boolean>;
    charSet?: string | HyperValue<string>;
    crossOrigin?: string | HyperValue<string>;
    defer?: boolean | HyperValue<boolean>;
    integrity?: string | HyperValue<string>;
    nonce?: string | HyperValue<string>;
    src?: string | HyperValue<string>;
    type?: string | HyperValue<string>;
}

export interface StyleHTMLAttributes extends HTMLAttributes {
    media?: string | HyperValue<string>;
    nonce?: string | HyperValue<string>;
    scoped?: boolean | HyperValue<boolean>;
    type?: string | HyperValue<string>;
}

export type RestTags = 'abbr' | 'address' | 'area' | 'article' | 'aside' | 'audio'
    | 'b' | 'base' | 'bdi' | 'bdo' | 'big' | 'blockquote' | 'body' | 'br' | 'button'
    | 'canvas' | 'caption' | 'cite' | 'code' | 'col' | 'colgroup'
    | 'data' | 'datalist' | 'dd' | 'del' | 'details' | 'dfn' | 'dialog' | 'div' | 'dl' | 'dt'
    | 'em' | 'embed'
    | 'fieldset' | 'figcaption' | 'figure' | 'footer' | 'form'
    | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'head' | 'header' | 'hgroup' | 'hr' | 'html'
    | 'i' | 'iframe' | 'img' | 'input' | 'ins'
    | 'kbd' | 'keygen'
    | 'label' | 'legend' | 'li' | 'link'
    | 'main' | 'map' | 'mark' | 'menu' | 'menuitem' | 'meta' | 'meter'
    | 'nav' | 'noscript'
    | 'object' | 'ol' | 'optgroup' | 'option' | 'output'
    | 'p' | 'param' | 'picture' | 'pre' | 'progress'
    | 'q'
    | 'rp' | 'rt' | 'ruby'
    | 's' | 'samp' | 'script' | 'section' | 'select' | 'small' | 'source' | 'span' | 'strong' | 'style' | 'sub' | 'summary' | 'sup'
    | 'table' | 'tbody' | 'td' | 'textarea' | 'tfoot' | 'th' | 'thead' | 'time' | 'title' | 'tr' | 'track'
    | 'u' | 'ul'
    | 'var' | 'video'
    | 'wbr';

export type Rest = {
    [key in RestTags]: HTMLAttributes;
}

export interface Tags extends Rest {
    a: AnchorHTMLAttributes;
    button: ButtonHTMLAttributes;
    canvas: CanvasHTMLAttributes;
    form: FormHTMLAttributes;
    img: ImgHTMLAttributes;
    input: InputHTMLAttributes;
    media: MediaHTMLAttributes;
    textarea: TextareaHTMLAttributes;
    table: TableHTMLAttributes;
    select: SelectHTMLAttributes;
    option: OptionHTMLAttributes;
    script: ScriptHTMLAttributes;
    style: StyleHTMLAttributes;
}

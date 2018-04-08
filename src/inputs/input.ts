import {HyperValue} from 'hyper-value';
import {cast} from 'hyper-value/hs/cast';
import {Component, registerGlobalElem, HyperElm} from 'hv-jsx';
import {EventHandler} from '../eventTypes';

import {HTMLAttributes} from '../domTypes';

export const textTypes = {
    color: 1,
    date: 1,
    'datetime-local': 1,
    email: 1,
    file: 1,
    month: 1,
    password: 1,
    search: 1,
    tel: 1,
    text: 1,
    time: 1,
    url: 1,
    week: 1
};

export const numberTypes = {
    number: 1,
    range: 1
};

export const booleanTypes = {
    checkbox: 1,
    radio: 1
};

export interface TextInputProps {
    type: keyof typeof textTypes;
    value?: HyperValue<string> | string;
}

export interface NumberInputProps {
    type: keyof typeof numberTypes;
    value?: HyperValue<number> | number;
}

export interface BooleanInputProps {
    type: keyof typeof booleanTypes;
    checked?: HyperValue<boolean> | boolean;
}

export interface CommonInputProps extends InputHTMLAttributes {
    onInput?: EventHandler<Event>;
    onChange?: EventHandler<Event>;
}

export type InputProps = (TextInputProps | NumberInputProps | BooleanInputProps) & CommonInputProps;

export class Input extends Component<InputProps> {
    value: HyperValue<string | number>;
    checked: HyperValue<boolean>;

    init() {
        this.value = cast((this.props as any).value || '');
        this.checked = cast((this.props as any).checked || false);
    }

    handleInput = (eventName: 'onInput' | 'onChange') => (e: Event) => {
        const elem = e.target as HTMLInputElement;

        if (this.props.type in textTypes) {
            this.value.$ = elem.value;
        } else if (this.props.type in numberTypes) {
            this.value.$ = Number(elem.value);
        } else if (this.props.type in booleanTypes) {
            this.checked.$ = elem.checked;
        }

        const outHandler = this.props[eventName];
        if (outHandler) {
            outHandler(e);
        }
    }

    render() {
        const attrs = {
            ...this.props,
            onInput: this.handleInput('onInput'),
            onChange: this.handleInput('onChange'),
            value: this.value,
            checked: this.checked
        };

        return new HyperElm('input', attrs, []);
    }
}

export interface InputHTMLAttributes extends HTMLAttributes {
    accept?: string | HyperValue<string>;
    alt?: string | HyperValue<string>;
    autoComplete?: string | HyperValue<string>;
    autoFocus?: boolean | HyperValue<boolean>;
    capture?: boolean | HyperValue<boolean>; // https://www.w3.org/TR/html-media-capture/#the-capture-attribute
    // checked?: boolean | HyperValue<boolean>;
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
    // type?: string | HyperValue<string>;
    // value?: string | string[] | number | HyperValue<string | string[] | number>;
    width?: number | string | HyperValue<number | string>;
}

registerGlobalElem('input', Input);

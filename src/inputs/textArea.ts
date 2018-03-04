import {HyperValue} from 'hyper-value';
import {Component, registerGlobalElem, HyperElm} from 'hv-jsx';
import {EventHandler} from '../eventTypes';
import {HTMLAttributes} from '../domTypes';

export interface TextAreaProps extends TextareaHTMLAttributes {
    onInput?: EventHandler<Event>;
    value?: HyperValue<string> | string;
}

export class TextArea extends Component<TextAreaProps> {
    value: HyperValue<string>;

    init() {
        this.value = this.hs.cast((this.props as any).value || '');
    }

    handleInput = (e: Event) => {
        const elem = e.target as HTMLTextAreaElement;

        this.value.$ = elem.value;

        this.props.onInput && this.props.onInput(e);
    }

    render() {
        const attrs = {
            ...this.props,
            onInput: this.handleInput,
            value: this.value
        };

        return new HyperElm('textarea', attrs, []);
    }
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
}


registerGlobalElem('textarea', TextArea);

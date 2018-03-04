import {HyperValue} from 'hyper-value';
import {Component, registerGlobalElem, HyperElm} from 'hv-jsx';
import {EventHandler} from '../eventTypes';
import {HTMLAttributes} from '../domTypes';

export interface SelectProps extends SelectHTMLAttributes {
    onInput?: EventHandler<Event>;
    value?: HyperValue<string> | string;
    selectedIndex?: HyperValue<number> | number;
    selectedOptions?: HyperValue<Array<HTMLOptionElement>>;
}

export class Select extends Component<SelectProps> {
    value: HyperValue<string>;
    selectedIndex: HyperValue<number>;
    selectedOptions: HyperValue<Array<HTMLOptionElement>>;

    init() {
        this.value = this.hs.cast(this.props.value || '');
        this.selectedIndex = this.hs.cast(this.props.selectedIndex || -1);
        this.selectedOptions = this.hs.cast(this.props.selectedOptions || []);
    }

    handleInput = (e: Event) => {
        const elem = e.target as HTMLSelectElement;

        this.value.$ = elem.value;
        this.selectedIndex.$ = elem.selectedIndex;
        this.selectedOptions.$ = [].slice.call(elem.selectedOptions);

        this.props.onInput && this.props.onInput(e);
    }

    render() {
        const attrs = {
            ...this.props,
            onInput: this.handleInput,
            value: this.value
        };

        delete attrs.selectedOptions;

        return new HyperElm('select', attrs, this.children);
    }
}

export interface SelectHTMLAttributes extends HTMLAttributes {
    autoFocus?: boolean | HyperValue<boolean>;
    disabled?: boolean | HyperValue<boolean>;
    form?: string | HyperValue<string>;
    multiple?: boolean | HyperValue<boolean>;
    name?: string | HyperValue<string>;
    required?: boolean | HyperValue<boolean>;
    size?: number | HyperValue<number>;
}

registerGlobalElem('select', Select);

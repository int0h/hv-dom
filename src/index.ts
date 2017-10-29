import {Target} from 'hv-jsx';
import {Meta, DomNode, Data} from './domHelpers';
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

import {registerGlobalProp} from 'hv-jsx';
import {EventHandler, Events} from './eventTypes';

registerGlobalProp<EventHandler<any>>(/^on\w+/, ({owner, name, value}) => {
    const elem = owner.targetNode as HTMLElement;
    elem.addEventListener(name.slice(2).toLowerCase(), value);
});

declare global {
    namespace JSX {
        interface GlobalProps extends Events {}
    }
}

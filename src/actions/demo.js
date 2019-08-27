import { REQUEST_DEMO, RECEIVE_DEMO } from './type';

const requestDemo = () => ({ type: REQUEST_DEMO });
const receiveDemo = (text) => ({ type: RECEIVE_DEMO, text });


export { requestDemo, receiveDemo };

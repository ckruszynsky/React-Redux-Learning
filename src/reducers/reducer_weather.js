import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
      case FETCH_WEATHER :
        console.log(`reducer_weather recieved action: ${action.type} with data ${action.payload.data}`);
        //state.concat([action.payload.data])
        return [action.payload.data,...state];
  }
  return state;
}

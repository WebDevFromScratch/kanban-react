import * as laneTypes from '../actions/lanes';

const lanes = (state = [], action) => {
  switch(action.type) {
    case laneTypes.CREATE_LANE:
      return [
        ...state,
        {
          id: action.id,
          name: action.name
        }
      ];
    default:
      return state;
  }
}

export default lanes;

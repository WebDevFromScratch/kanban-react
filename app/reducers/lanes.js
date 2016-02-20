import * as types from '../actions/lanes';

const lane = (state, action) => {
  switch (action.type) {
    case types.CREATE_LANE:
      return {
        id: action.id,
        name: action.name,
        notes: []
      };
    case types.UPDATE_LANE:
      if(state.id === action.id) {
        return Object.assign({}, state, action);
      }

      return state;
    default:
      return state;
  }
}

const lanes = (state = [], action) => {
  switch(action.type) {
    case types.UPDATE_LANE:
      return state.map(l => lane(l, action));
    case types.CREATE_LANE:
      return [
        ...state,
        lane(undefined, action)
      ];
    case types.DELETE_LANE:
      return state.filter(lane => lane.id !== action.id);
    case types.ATTACH_TO_LANE:
      const laneId = action.laneId;
      const noteId = action.noteId;

      return state.map((lane) => {
        const index = lane.notes.indexOf(noteId);

        if(index >= 0) {
          return Object.assign({}, lane, {
            notes: lane.notes.length > 1 ? lane.notes.slice(0, index).concat(
              lane.notes.slice(index + 1)
            ): []
          });
        }
        if(lane.id === laneId) {
          return Object.assign({}, lane, {
            notes: [...lane.notes, noteId]
          });
        }

        return lane;
      });
    case types.DETACH_FROM_LANE:
      return state.map((lane) => {
        if(lane.id === action.laneId) {
          return Object.assign({}, lane, {
            notes: lane.notes.filter((id) => id !== action.noteId)
          });
        }

        return lane;
      });
    default:
      return state;
  }
}

export default lanes;

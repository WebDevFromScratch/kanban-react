import uuid from 'node-uuid';

export const CREATE_LANE = 'CREATE_LANE';
export function createLane() {
  return {
    type: CREATE_LANE,
    id: uuid.v4(),
    name: 'New lane'
  };
}

export const UPDATE_LANE = 'UPDATE_LANE';
export function updateLane(lane) {
  return {
    type: UPDATE_LANE,
    ...lane
  };
}

export const DELETE_LANE = 'DELETE_LANE';
export function deleteLane(laneId) {
  return {
    type: DELETE_LANE,
    id: laneId
  };
}

export const ATTACH_TO_LANE = 'ATTACH_TO_LANE';
export function attachToLane(laneId, noteId) {
  return {
    type: ATTACH_TO_LANE,
    laneId,
    noteId
  };
}

export const DETACH_FROM_LANE = 'DETACH_FROM_LANE';
export function detachFromLane(laneId, noteId) {
  return {
    type: DETACH_FROM_LANE,
    laneId,
    noteId
  };
}

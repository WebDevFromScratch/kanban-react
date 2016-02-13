import uuid from 'node-uuid';

export const CREATE_LANE = 'CREATE_LANE';
export function createLane() {
  return {
    type: CREATE_LANE,
    id: uuid.v4(),
    name: 'New lane'
  }
}

import ActionTypes from '~/store/modules/userSkills/types';

export function setUserSkills(data) {
  return {
    type: ActionTypes.SET,
    payload: { data },
  };
}

export function addUserSkills(data) {
  return {
    type: ActionTypes.ADD,
    payload: { data },
  };
}

export function removeUserSkills(id) {
  return {
    type: ActionTypes.REMOVE,
    payload: { id },
  };
}

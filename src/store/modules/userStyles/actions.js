import ActionTypes from '~/store/modules/userStyles/types';

export function setUserStyles(data) {
  return {
    type: ActionTypes.SET,
    payload: { data },
  };
}

export function addUserStyle(data) {
  return {
    type: ActionTypes.ADD,
    payload: { data },
  };
}

export function removeUserStyle(id) {
  return {
    type: ActionTypes.REMOVE,
    payload: { id },
  };
}

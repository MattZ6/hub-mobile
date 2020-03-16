import produce from 'immer';

import ActionTypes from '~/store/modules/userSkills/types';
import AuthActionTypes from '~/store/modules/auth/types';

const INITIAL_STATE = {
  userSkills: null,
};

function reordenateSkills(skills, skillsToAdd = []) {
  const orderedSkills = [...skills, ...skillsToAdd].sort((a, b) => {
    return a.skill_level < b.skill_level;
  });

  return orderedSkills;
}

function updateSkill(skills, skill) {
  return reordenateSkills(skills.map(x => (x.id === skill.id ? skill : x)));
}

export default function userSkills(state = INITIAL_STATE, { type, payload }) {
  return produce(state, draft => {
    switch (type) {
      case ActionTypes.SET: {
        draft.userSkills = reordenateSkills(payload.data);
        break;
      }

      case ActionTypes.ADD: {
        draft.userSkills = reordenateSkills(draft.userSkills, payload.data);
        break;
      }

      case ActionTypes.UPDATE: {
        draft.userSkills = updateSkill(draft.userSkills, payload.data);
        break;
      }

      case ActionTypes.REMOVE: {
        draft.userSkills = draft.userSkills.filter(x => x.id !== payload.id);
        break;
      }

      /**
       * Sign out
       */

      case AuthActionTypes.SIGN_OUT: {
        draft.userSkills = null;
        break;
      }

      default:
    }
  });
}

import produce from 'immer';

import ActionTypes from '~/store/modules/filters/types';
import AuthActionTypes from '~/store/modules/auth/types';

const INITIAL_STATE = {
  regions: [],
  skills: [],
  skillLevels: [
    { value: 1, name: 'Iniciante' },
    { value: 2, name: 'Intermediário' },
    { value: 3, name: 'Avançado' },
  ],
  styles: [],
};

export default function filters(state = INITIAL_STATE, { type, payload }) {
  return produce(state, draft => {
    switch (type) {
      /**
       * Region filter
       */

      case ActionTypes.SET_REGIONS: {
        draft.regions = payload.data;
        break;
      }

      case ActionTypes.REMOVE_REGIONS_SELECTION: {
        draft.regions = draft.regions.map(x => ({ ...x, selected: false }));
        break;
      }

      case ActionTypes.SELECT_REGION: {
        draft.regions = draft.regions.map(x =>
          x.id === payload.id ? { ...x, selected: !x.selected } : x
        );
        break;
      }

      /**
       * Skill filter
       */

      case ActionTypes.SET_SKILLS: {
        draft.skills = payload.data;
        break;
      }

      case ActionTypes.REMOVE_SKILLS_SELECTION: {
        draft.skills = draft.skills.map(x => ({ ...x, selected: false }));
        break;
      }

      case ActionTypes.SELECT_SKILL: {
        draft.skills = draft.skills.map(x =>
          x.id === payload.id ? { ...x, selected: !x.selected } : x
        );
        break;
      }

      /**
       * Skill level filter
       */

      case ActionTypes.SELECT_LEVEL: {
        draft.skillLevels = draft.skillLevels.map(x =>
          x.value === payload.value ? { ...x, selected: !x.selected } : x
        );
        break;
      }

      case ActionTypes.REMOVE_SKILL_LEVELS_SELECTION: {
        draft.skillLevels = draft.skillLevels.map(x => ({
          ...x,
          selected: false,
        }));
        break;
      }

      /**
       * Music style filter
       */

      case ActionTypes.SET_STYLES: {
        draft.styles = payload.data;
        break;
      }

      case ActionTypes.REMOVE_STYLES_SELECTION: {
        draft.styles = draft.styles.map(x => ({ ...x, selected: false }));
        break;
      }

      case ActionTypes.SELECT_STYLE: {
        draft.styles = draft.styles.map(x =>
          x.id === payload.id ? { ...x, selected: !x.selected } : x
        );
        break;
      }

      /**
       * Sign out
       */

      case AuthActionTypes.SIGN_OUT: {
        draft.regions = [];
        draft.skills = [];
        draft.styles = [];
        break;
      }

      default:
    }
  });
}

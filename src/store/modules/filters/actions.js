import ActionTypes from '~/store/modules/filters/types';

/**
 * Regions
 */

export function setRegions(data) {
  return {
    type: ActionTypes.SET_REGIONS,
    payload: { data },
  };
}

export function removeRegions() {
  return {
    type: ActionTypes.REMOVE_REGIONS,
  };
}

export function selectRegion(id) {
  return {
    type: ActionTypes.SELECT_REGION,
    payload: { id },
  };
}

/**
 * Skills
 */

export function setSkills(data) {
  return {
    type: ActionTypes.SET_SKILLS,
    payload: { data },
  };
}

export function removeSkills() {
  return {
    type: ActionTypes.REMOVE_SKILLS,
  };
}

export function selectSkill(id) {
  return {
    type: ActionTypes.SELECT_SKILL,
    payload: { id },
  };
}

/**
 * Skill level
 */

export function selectSkillLevel(value) {
  return {
    type: ActionTypes.SELECT_LEVEL,
    payload: { value },
  };
}

/**
 * Music styles
 */

export function setMusicStyles(data) {
  return {
    type: ActionTypes.SET_STYLES,
    payload: { data },
  };
}

export function removeMusicStyles() {
  return {
    type: ActionTypes.REMOVE_STYLES,
  };
}

export function selectMusicStyle(id) {
  return {
    type: ActionTypes.SELECT_STYLE,
    payload: { id },
  };
}

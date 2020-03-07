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

export function removeRegionsSelection() {
  return {
    type: ActionTypes.REMOVE_REGIONS_SELECTION,
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

export function removeSkillsSelection() {
  return {
    type: ActionTypes.REMOVE_SKILLS_SELECTION,
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

export function removeSkillLevelsSelection() {
  return {
    type: ActionTypes.REMOVE_SKILL_LEVELS_SELECTION,
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

export function removeStylesSelection() {
  return {
    type: ActionTypes.REMOVE_STYLES_SELECTION,
  };
}

export function selectMusicStyle(id) {
  return {
    type: ActionTypes.SELECT_STYLE,
    payload: { id },
  };
}

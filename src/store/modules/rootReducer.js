import { combineReducers } from 'redux';

import auth from '~/store/modules/auth/reducer';
import user from '~/store/modules/user/reducer';
import region from '~/store/modules/region/reducer';
import filters from '~/store/modules/filters/reducer';
import userStyles from '~/store/modules/userStyles/reducer';

export default combineReducers({
  auth,
  user,
  region,
  filters,
  userStyles,
});

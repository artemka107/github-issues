import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const issues = handleActions({
  [actions.addIssue](state, { payload: { issue } }) {
    return state.concat(issue);
  },
  [actions.closeIssue](state, { payload: { id } }) {
    return state.map(issue => (issue.id === id ? { ...issue, state: 'closed' } : issue));
  },
}, {});

const uiIssues = handleActions({
  [actions.changeActiveState](state, { payload: { activeState } }) {
    return { activeState };
  },
}, {});

export default combineReducers({
  issues,
  uiIssues,
});

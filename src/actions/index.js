import { createAction } from 'redux-actions';
import { uniqueId } from 'lodash';

const changeActiveState = createAction('CHANGE_ACTIVE_STATE');
const closeIssue = createAction('CLOSE_ISSUE');
const addIssue = createAction('ADD_ISSUE', () => ({
  issue: {
    id: uniqueId(),
    state: 'open',
    title: 'Some text',
  },
}));
const setFilterIssuesPattern = createAction('SET_FILTER_ISSUES_PATTERN');

export {
  changeActiveState, closeIssue, addIssue, setFilterIssuesPattern,
};

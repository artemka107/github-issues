import { connect } from 'react-redux';
import { partition } from 'lodash';
import Component from '../components/Issues';
import * as actions from '../actions';

const mapStateToProps = ({ issues, uiIssues: { activeState }, filterIssuesPattern }) => {
  const [openedIssues, closedIssues] = partition(issues, ({ state }) => state === 'open');
  const props = {
    openedIssues,
    closedIssues,
    activeState,
    amountIssues: issues.length,
    amountOfOpenedIssues: openedIssues.length,
    amountOfClosedIssues: closedIssues.length,
    filterIssuesPattern,
  };
  return props;
};

export default connect(
  mapStateToProps,
  actions,
)(Component);

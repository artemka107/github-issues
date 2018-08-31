import { connect } from 'react-redux';
import { partition } from 'lodash';
import Component from '../components/Issues';
import * as actions from '../actions';

const mapStateToProps = ({ issues, uiIssues: { activeState } }) => {
  const [openedIssues, closedIssues] = partition(issues, ({ state }) => state === 'open');
  const props = {
    openedIssues,
    closedIssues,
    activeState,
    amountIssues: issues.length,
    amountOfOpenedIssues: openedIssues.length,
    amountOfClosedIssues: closedIssues.length,
  };
  return props;
};

export default connect(
  mapStateToProps,
  actions,
)(Component);

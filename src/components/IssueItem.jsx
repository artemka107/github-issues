import React from 'react';
import OpenedIssue from './OpenedIssue';
import ClosedIssue from './ClosedIssue';

const IssueItem = ({ issue, closeIssue }) => {
  const issuesTypes = {
    open: OpenedIssue,
    closed: ClosedIssue,
  };

  const CurrentIssue = issuesTypes[issue.state];

  return <CurrentIssue closeIssue={closeIssue} issue={issue} />;
};
export default IssueItem;

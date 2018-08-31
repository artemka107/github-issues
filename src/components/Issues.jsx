import React from 'react';
import NavTabs from './NavTabs';
import PageTitle from './PageTitle';
import IssuesStates from './IssuesStates';
import IssueItem from './IssueItem';
import SubNav from './SubNav';

const Issues = (props) => {
  const {
    openedIssues,
    closedIssues,
    activeState,
    amountIssues,
    addIssue,
    closeIssue,
  } = props;

  const renderIssues = issues => (
    <ul className="issues">
      {issues.map(issue => (
        <IssueItem
          key={issue.id}
          issue={issue}
          closeIssue={closeIssue}
        />
      )) }
    </ul>);


  return (
    <div>
      <div className="pagehead">
        <div className="container repohead-container">
          <PageTitle />
        </div>
        <div className="container">
          <NavTabs amountIssues={amountIssues} />
        </div>
      </div>
      <div className="container">
        <div className="issues-listing">
          <div className="issues-listing__subnav">
            <SubNav addIssue={addIssue} />
          </div>
          <div className="issues-listing__header">
            <IssuesStates props={props} />
          </div>
          <div className="issues-listing__body">
            {renderIssues(activeState === 'open' ? openedIssues : closedIssues)}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Issues;

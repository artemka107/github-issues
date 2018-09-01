import React from 'react';
import NavTabs from './NavTabs';
import PageTitle from './PageTitle';
import IssuesStates from './IssuesStates';
import IssueItem from './IssueItem';
import FilterForm from './FilterForm';

const Issues = (props) => {
  const {
    openedIssues,
    closedIssues,
    activeState,
    amountIssues,
    addIssue,
    closeIssue,
    setFilterIssuesPattern,
    filterIssuesPattern,
  } = props;

  const renderIssues = (currentState) => {
    const currentIssues = currentState === 'open' ? openedIssues : closedIssues;
    const isMatchesSearchPattern = searchPattern => ({ title }) => {
      const pattern = new RegExp(searchPattern, 'i');
      return title.match(pattern);
    };
    return (
      <ul className="issues">
        {currentIssues
          .filter(isMatchesSearchPattern(filterIssuesPattern))
          .map(issue => (
            <IssueItem
              key={issue.id}
              issue={issue}
              closeIssue={closeIssue}
            />
          )) }
      </ul>
    );
  };


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
            <FilterForm setFilterIssuesPattern={setFilterIssuesPattern} />
            <div className="subnav">
              <button onClick={addIssue} className="btn btn-primary" type="button">
                New issue
              </button>
            </div>
          </div>
          <div className="issues-listing__header">
            <IssuesStates props={props} />
          </div>
          <div className="issues-listing__body">
            {renderIssues(activeState)}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Issues;

import React from 'react';
import cn from 'classnames';

const IssuesStates = ({
  props: {
    amountOfOpenedIssues, amountOfClosedIssues, activeState, changeActiveState,
  },
}) => {
  const states = {
    open: 'open',
    closed: 'closed',
  };

  const commonClasses = {
    'btn-link': true,
  };

  const openedBtnClasses = {
    ...commonClasses,
    'btn-link--selected': activeState === states.open,
  };

  const closedBtnClasses = {
    ...commonClasses,
    'btn-link--selected': activeState === states.closed,
  };

  const showCurrentIssues = state => (e) => {
    e.preventDefault();
    changeActiveState({ activeState: state });
  };

  return (
    <div className="issues-listing__states">
      <button onClick={showCurrentIssues(states.open)} className={cn(openedBtnClasses)} type="button">
        <i className="fas fa-exclamation-circle" />
        {amountOfOpenedIssues}
      Open
      </button>
      <button onClick={showCurrentIssues(states.closed)} className={cn(closedBtnClasses)} type="button">
        <i className="fas fa-check" />
        {amountOfClosedIssues}
      Closed
      </button>
    </div>
  );
};

export default IssuesStates;

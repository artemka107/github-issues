import React from 'react';

const OpenedIssue = ({ issue, closeIssue }) => {
  const handleClick = () => {
    closeIssue({ id: issue.id });
  };

  return (
    <li className="issues__item">
      <div className="issues__status issues__status--open">
        <i className="fas fa-exclamation-circle" />
      </div>
      <div className="issues__title">
        <a href="/" className="issues__link">
          {issue.title}
        </a>
      </div>
      <button onClick={handleClick} className="btn issue__close" type="button">
        Close issue
      </button>
    </li>
  );
};
export default OpenedIssue;

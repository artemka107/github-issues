import React from 'react';

const ClosedIssue = ({ issue }) => (
  <li className="issues__item">
    <div className="issues__status issues__status--closed">
      <i className="fas fa-exclamation-circle" />
    </div>
    <div className="issues__title">
      <a href="/" className="issues__link">
        {issue.title}
      </a>
    </div>
  </li>
);
export default ClosedIssue;

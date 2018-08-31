import React from 'react';

const NavTabs = ({ amountIssues }) => (
  <nav className="reponav">
    <button type="button" className="reponav-item selected">
      <i className="fas fa-exclamation-circle" />
      <span>Issues</span>
      <span className="counter">{amountIssues}</span>
    </button>
  </nav>
);

export default NavTabs;

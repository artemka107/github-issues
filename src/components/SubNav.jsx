import React from 'react';

const SubNav = ({ addIssue }) => (
  <div className="subnav">
    <form className="subnav__search">
      <input className="subnav__search-input" type="text" placeholder="Search" />
    </form>
    <button onClick={addIssue} className="btn btn-primary" type="button">
      New issue
    </button>
  </div>
);

export default SubNav;

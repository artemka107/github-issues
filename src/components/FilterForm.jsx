import React from 'react';
import { reduxForm, Field } from 'redux-form';

const FilterForm = ({ handleSubmit, setFilterIssuesPattern }) => {
  const handleChange = ({ search }) => {
    setFilterIssuesPattern({ pattern: search });
  };
  return (
    <form onChange={() => setTimeout(handleSubmit(handleChange))} className="subnav__search">
      <Field
        component="input"
        name="search"
        className="subnav__search-input"
        type="text"
        placeholder="Search"
      />
    </form>
  );
};

export default reduxForm({
  form: 'filterForm',
})(FilterForm);

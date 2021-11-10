// import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeFilter } from '../../redux/actions';
import './Filter.css';

const Filter = ({ filter, handleChange }) => {
  // handleChange = event => {
  //   this.setState({ filter: event.target.value });
  //   this.props.onInputFilter(event.target.value);
  // };

  return (
    <div>
      <p className="FindTitle">Find contacts by name</p>

      <input
        className="InputFilter"
        value={filter}
        onChange={handleChange}
        type="text"
        name="filter"
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  handleChange: event => dispatch(changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

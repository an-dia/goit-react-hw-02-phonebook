import React, { Component } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    const { name, number } = this.state;
    e.preventDefault();

    this.props.onSubmit(name, number);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.label} htmlFor={this.nameInputId}>
          {' '}
          Name{' '}
        </label>
        <input
          className={s.input}
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          id={this.nameInputId}
        />
        <label className={s.label} htmlFor={this.numberInputId}>
          {' '}
          Number{' '}
        </label>
        <input
          className={s.input}
          type="tel"
          name="number"
          value={this.state.number}
          onChange={this.handleChange}
          id={this.numberInputId}
        />

        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;

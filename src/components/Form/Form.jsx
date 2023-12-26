import { Component } from 'react';
import css from './Form.module.css';

export class FormAddContacts extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.handleAddContact(
      {
        name: this.state.name,
        number: this.state.number,
      },
      this.clean
    );
  };
  clean = () => this.setState({ name: '', number: '' });
  render() {
    return (
      <form
        className={css.addForm}
        onSubmit={event => this.handleSubmit(event)}
      >
        <div className={css.inputForm}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            className={css.input}
            onChange={event => this.handleChange(event)}
            value={this.state.name}
            required
          />
        </div>
        <div className={css.inputForm}>
          <label htmlFor="number">Number:</label>
          <input
            type="tel"
            name="number"
            id="number"
            className={css.input}
            value={this.state.number}
            onChange={event => this.handleChange(event)}
            required
          />
        </div>
        <button className={css.addBtn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

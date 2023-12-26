import css from './Filter.module.css';
export const Filter = ({ state, handleChange }) => {
  return (
    <div className={css.filterList}>
      <label htmlFor="name">Find contact by name</label>
      <input
        type="text"
        name="filter"
        className={css.filterInput}
        onChange={event => handleChange(event)}
        value={state.filter}
        required
      />
    </div>
  );
};

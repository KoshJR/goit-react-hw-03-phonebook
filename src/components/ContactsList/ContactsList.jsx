import css from './Contacts.module.css';
export const ContactsList = ({ contacts, handleDeleteContact }) => {
  return (
    <ul className={css.contactsList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.contactItem}>
          <div className={css.contact}>
            {name}: {number}
          </div>
          <button
            id={id}
            onClick={event => handleDeleteContact(event)}
            type="button"
            className={css.deleteBtn}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

import PropTypes from 'prop-types';
import s from './ContactsList.module.css';
// import shortid from 'shortid';
// let listId = shortid.generate();

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={s.listItem} key={id}>
            <p className={s.text}>
              {name} : {number}
            </p>
            <button className={s.button} type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactsList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

export default ContactsList;

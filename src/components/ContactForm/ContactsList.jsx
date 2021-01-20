import PropTypes from 'prop-types';
import s from './ContactsList.module.css';
// import shortid from 'shortid';
// let listId = shortid.generate();

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => (
        <>
          <li className={s.listItem} key={id}>
            {name} : {number}
            <button className={s.button} type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </button>
          </li>
        </>
      ))}
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

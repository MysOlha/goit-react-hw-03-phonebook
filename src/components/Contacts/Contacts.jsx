import css from './Contacts.module.css';
import { IoIosContact } from 'react-icons/io';

const Contacts = ({ contacts, onRemove }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={name} className={css.contactListItem}>
          <IoIosContact
            size="20px"
            color="rgb(85, 75, 75)"
            style={{ marginRight: '5px' }}
          />
          {name}: {number}{' '}
          <button
            type="button"
            onClick={() => onRemove(id)}
            className={css.btnContactList}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;

import css from './Contacts.module.css'

const Contacts = ({contacts, onRemove}) => {
return (
    <ul className={css.contactList}>
        {contacts.map(({id, name, number})=>(
            <li key={name} className={css.contactListItem}>
                {name}: {number} <button type="button" onClick={() => onRemove(id)} className={css.btnContactList}>Delete</button>
            </li>
        ))}
    </ul>
)

}

export default Contacts


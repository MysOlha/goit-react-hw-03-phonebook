import css from './Filter.module.css'
const Filter = ({filterContacts, filter}) => {
    return (
<input 
type="text" 
value={filter}
onChange={filterContacts}
className={css.inputContact}
/>)
}

export default Filter


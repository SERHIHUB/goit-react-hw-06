import { useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

function ContactList() {
  const selectNameFilter = useSelector(changeFilter);

  const searchContact = selectNameFilter.payload.filters.filters.name;
  const arreyContacts = selectNameFilter.payload.contacts.items;

  const filterContacts = arreyContacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchContact.toLowerCase())
  );

  return (
    <div className={css.contactList}>
      <ul className={css.contactList}>
        {filterContacts.map((item) => {
          return (
            <li key={item.id}>
              <Contact id={item.id} name={item.name} number={item.number} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ContactList;

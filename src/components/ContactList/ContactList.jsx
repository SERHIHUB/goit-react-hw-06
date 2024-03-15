import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

function ContactList({ contacts, onDelete }) {
  return (
    <div className={css.contactList}>
      <ul className={css.contactList}>
        {contacts.map((item) => {
          return (
            <li key={item.id}>
              <Contact
                id={item.id}
                name={item.name}
                number={item.number}
                onDelete={onDelete}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ContactList;

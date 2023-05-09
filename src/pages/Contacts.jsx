import AppCss from '../components/App.module.css';
import { ContactForm } from '../components/Form/Form';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/Contacts/Contacts';

export default function Main() {
  return (
    //Щось гітхаб не прийняв зміни при перейменуванні файлу
    <>
      <div className={AppCss.component}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
}

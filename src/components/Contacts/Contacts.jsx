import { useSelector, useDispatch } from 'react-redux';
import { ContactsItem } from '../Contacts/Contacts_item';
import { Loader } from '../Loader/Loader';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/contactsOperation';
import ContactCss from './Contacts.module.css';
import { getContacts, getFilter, getError, getIsLoading } from '../../redux/contacts/contactsSelector';

export const ContactList = () => {
  const dispatch = useDispatch();

  // Отримуємо частини стану
  const { items } = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const options = items.filter(contacts => contacts.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : error !== null ? (
        error
      ) : options.length !== 0 ? (
        <ul className={ContactCss.contact}>
          {options.map(({ id, name, number }) => (
            <ContactsItem name={name} id={id} key={id} number={number} />
          ))}
        </ul>
      ) : filter === '' ? (
        'Контакти пусті. Будь ласка додайте контакти!!!'
      ) : (
        'Збігів не знайдено'
      )}
    </div>
  );
};

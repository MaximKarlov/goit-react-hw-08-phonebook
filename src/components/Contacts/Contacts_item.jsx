import React from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsOperation';
import ContactCss from '../Contacts/Contacts.module.css';

export const ContactsItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  // const edit = e => {
  //   e.preventDefault();
  //   console.dir(e.target.parentElement.id);
  //   console.dir(e.target.parentElement);
  // };
  return (
    <li id={id} key={nanoid} className={ContactCss.contact_item}>
      <p>*</p>
      {name}: <b>{number}</b>
      {/* <button type="text" className={ContactCss.btn} onClick={edit}>
        Edit
      </button> */}
      <button type="text" className={ContactCss.btn} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </li>
  );
};

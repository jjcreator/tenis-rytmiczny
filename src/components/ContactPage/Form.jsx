import React, { useReducer } from 'react';
import styles from '../../modules/contactStyle.module.css';

const initialFormInput = {
  firstName: '',
  lastName: '',
  title: '',
  email: '',
  message: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIRST_NAME': return { ...state, firstName: action.value };
    case 'SET_LAST_NAME': return { ...state, lastName: action.value };
    case 'SET_TITLE': return { ...state, title: action.value };
    case 'SET_EMAIL': return { ...state, email: action.value };
    case 'SET_MESSAGE': return { ...state, message: action.value };
    case 'RESET': return { ...initialFormInput };
    default: return undefined;
  }
};

function Form() {
  const [messageData, dispatch] = useReducer(reducer, initialFormInput);

  const handleFormInputChange = (e) => {
    switch (e.target.name) {
      case 'firstName':
        dispatch({ type: 'SET_FIRST_NAME', value: e.target.value });
        break;
      case 'lastName':
        dispatch({ type: 'SET_LAST_NAME', value: e.target.value });
        break;
      case 'title':
        dispatch({ type: 'SET_TITLE', value: e.target.value });
        break;
      case 'email':
        dispatch({ type: 'SET_EMAIL', value: e.target.value });
        break;
      case 'message':
        dispatch({ type: 'SET_MESSAGE', value: e.target.value });
        break;
      default: break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your name is ${messageData.firstName} ${messageData.lastName}. The title of your message is ${messageData.title}. Your email is ${messageData.email}. Your message to us is as follows: ${messageData.message}`);
    dispatch({ type: 'RESET' });
  };

  return (
    <div className={styles.flexWrapper}>
      <h2 className={styles.contactHeader}>Contact form</h2>
      <form id={styles.form} onSubmit={handleSubmit}>
        <div id={styles.nameGroup}>
          <input className={styles.name} placeholder="Your first name" type="text" name="firstName" value={messageData.firstName} onChange={handleFormInputChange} required pattern="\p{L}+\s\p{L}+\" />
          <input className={styles.name} placeholder="Your last name" type="text" required pattern="\p{L}+\s\p{L}+\" name="lastName" value={messageData.lastName} onChange={handleFormInputChange} />
        </div>
        <input placeholder="Your email" type="email" name="email" value={messageData.email} onChange={handleFormInputChange} required pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$" />
        <input type="text" required placeholder="Subject" name="title" value={messageData.title} onChange={handleFormInputChange} />
        <textarea placeholder="Type in your message here" name="message" value={messageData.message} onChange={handleFormInputChange} />
        <button className="actionButton" type="submit">Send</button>
      </form>
    </div>
  );
}

export default Form;

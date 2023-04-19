import { nanoid } from 'nanoid';
import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { AddContactBtn, ContactFormInput, ContactFormLabel, FormContact } from './Form.styled';

export function Form ({onClickSubmit}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [id, setId] = useState('');
  
  const handleChangeName = (e) => {
    setName(e.currentTarget.value);
    setId(nanoid());
    };
  
    const handleChangeNumber = (e) => {
    setNumber(e.currentTarget.value);
  };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onClickSubmit({name, number,id});
      reset();
  };
  
  const reset = () => {
    setName('');
    setNumber('');

  }

        return (
          <FormContact onSubmit={handleSubmit}>
              <ContactFormLabel>
                Name
                <ContactFormInput
                  type="text"
                  value={name}
                  onChange={handleChangeName}
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
          />
        </ContactFormLabel>
        <ContactFormLabel>
          Number
          <ContactFormInput
            type="tel"
            value={number}
            onChange={handleChangeNumber}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </ContactFormLabel>
        <AddContactBtn type="submit">Add contact</AddContactBtn>
      </FormContact>);
    }

Form.propTypes = {
  onClickSubmit: PropTypes.func.isRequired,
}

// import { nanoid } from 'nanoid';
// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { AddContactBtn, ContactFormInput, ContactFormLabel, FormContact } from './Form.styled';

// export class Form extends Component{
//     state = {
//       name: '',
//       number: ''
//     }
  
//       handleChange = (e) => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]:value, id:nanoid() })
//     };
    
//     handleSubmit = (e) => {
//       e.preventDefault();
      
//       if (this.props.contacts.find(contact => contact.name.toLowerCase() === this.state.name.toLowerCase())) {
//         return alert(`${this.state.name} is already in contacts.`)
//       }

//       this.props.onClickSubmit(this.state);
//       this.reset();
//   };
  
//   reset = () => {
//     this.setState({ name: '', number:''})

//   }
//     render() {
//         return (
//           <FormContact onSubmit={this.handleSubmit}>
//               <ContactFormLabel>
//                 Name
//                 <ContactFormInput
//                   type="text"
//                   value={this.state.name}
//                   onChange={this.handleChange}
//                   name="name"
//                   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                   required
//           />
//         </ContactFormLabel>
//         <ContactFormLabel>
//           Number
//           <ContactFormInput
//             type="tel"
//             value={this.state.number}
//             onChange={this.handleChange}
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//         </ContactFormLabel>
//         <AddContactBtn type="submit">Add contact</AddContactBtn>
//       </FormContact>);
//     }
// }

// Form.propTypes = {
//   onClickSubmit: PropTypes.func.isRequired,
// }
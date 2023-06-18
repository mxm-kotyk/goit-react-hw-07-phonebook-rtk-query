import PropTypes from 'prop-types';
import {
  ContactItem,
  ContactText,
  ContactName,
  ContactNumber,
  CallButton,
  ContactIcon,
  DeleteButton,
} from './Contact.styled';
import sprite from '../../../img/sprite.svg';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

const callIcon = `${sprite}#icon-phone`;
const deleteIcon = `${sprite}#icon-delete`;

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const normalizedNumberLink = `tel:${number.replace(/[^\d+]/g, '')}`;

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <ContactItem>
      <ContactText>
        <ContactName>{name}</ContactName>
        <ContactNumber>{number}</ContactNumber>
      </ContactText>
      <CallButton href={normalizedNumberLink} title="Call Contact">
        <ContactIcon width="24" height="24">
          <use href={callIcon}></use>
        </ContactIcon>
      </CallButton>
      <DeleteButton type="button" onClick={handleDelete} title="Delete Contact">
        <ContactIcon width="24" height="24">
          <use href={deleteIcon}></use>
        </ContactIcon>
      </DeleteButton>
    </ContactItem>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

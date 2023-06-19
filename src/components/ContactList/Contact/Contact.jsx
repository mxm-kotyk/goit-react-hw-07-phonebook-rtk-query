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
import { useDeleteContactMutation } from 'redux/contactsApi';
import { Ring } from '@uiball/loaders';
import { errorToast, successDeleteToast } from 'helpers/toasts';

const callIcon = `${sprite}#icon-phone`;
const deleteIcon = `${sprite}#icon-delete`;

export const Contact = ({ id, name, number }) => {
  const normalizedNumberLink = `tel:${number.replace(/[^\d+]/g, '')}`;
  const [deleteContact, { error, isLoading }] = useDeleteContactMutation();

  const handleDelete = async id => {
    await deleteContact(id);

    if (error) {
      errorToast(error);
    }

    if (!error) {
      successDeleteToast(name);
    }
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
      <DeleteButton
        type="button"
        onClick={() => handleDelete(id)}
        title="Delete Contact"
      >
        <ContactIcon width="24" height="24">
          {isLoading ? (
            <Ring size={24} lineWeight={5} speed={2} color="white" />
          ) : (
            <use href={deleteIcon}></use>
          )}
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

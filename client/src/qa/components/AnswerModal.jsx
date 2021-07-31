import React from 'react';
import PropTypes from 'prop-types';
import Form from './common/Form';
import Modal from './common/Modal';

const formFields = {
  textareas: [
    { name: 'answer', label: 'Your Answer*', maxLength: '1000' },
  ],
  inputs: [
    {
      name: 'nickname',
      label: 'What is your nickname*',
      placeholder: 'Example: jack543!',
      maxLength: '60',
      afterInput: 'For privacy reasons, do not use your full name or email address',
    },
    {
      name: 'email',
      label: 'Your email*',
      placeholder: 'Example: jack@email.com',
      maxLength: '60',
      afterInput: 'For authentication reasons, you will not be emailed',
    },
  ],
};

const fakeApi = () => {
  // TODO
};

const AnswerModal = ({
  productName, question, isVisible, setIsVisible,
}) => (
  <Modal
    isVisible={isVisible}
    setIsVisible={setIsVisible}
  >
    <h3>Add an Answer</h3>
    <h4>
      {`${productName}: ${question}`}
    </h4>
    <Form
      formFields={formFields}
      buttonLabel="Submit answer"
      doSubmit={fakeApi}
    />
  </Modal>
);

AnswerModal.propTypes = {
  productName: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  setIsVisible: PropTypes.func.isRequired,
};

export default AnswerModal;

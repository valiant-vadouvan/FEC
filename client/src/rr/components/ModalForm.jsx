import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
text-align: center;
`;

const SubmitButton = styled.button`
margin-left: 12.5%;
margin-top: 15px;
width: 75%;
`;

class ModalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (

      <StyledForm>
        Write Your Review
        <form>
          Review Summary
          <br />
          <input />
          <br />
          Write your review
          <br />
          <input name="reviewBody"/>
          <br />
          Username
          <br />
          <input />
          <br />
          Email
          <br />
          <input />
          <br />
          <SubmitButton>Submit</SubmitButton>
          <br />
          <div onClick={this.props.close}>Close</div>
        </form>
        <br />
      </StyledForm>
    );
  }
}
export default ModalForm;
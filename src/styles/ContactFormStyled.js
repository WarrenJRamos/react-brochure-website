import styled from "styled-components";

const FormContainer = styled.form`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 90%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 30px;

  h2 {
    font-size: 40px;
    color: white;
  }

  .form-control {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    label {
      text-align: left;
      color: white;
      font-size: 20px;
      margin-bottom: 5px;
    }

    input {
      width: 80%;
      height: 40px;
    }

    textarea {
      width: 80%;
      height: 100px;
      font-size: 20px;
    }
  }

  button[type="submit"] {
    margin: 0 auto;
    color: white;
    background: rgba(18, 140, 127, 0.8);
    cursor: pointer;
    border: 2px solid white;
    border-radius: 5px;
    padding: 10px;
    font-size: 30px;
    max-width: 150px;
  }
`;

export { FormContainer };

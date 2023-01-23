import styled from "styled-components";

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;

    border: 2px solid #d1dce3;
    border-radius: 4px;

    width: 610px;
    height: 390px;

    .formTittle {
      font-family: "SourceSansPro";
      font-size: 24px;
      font-weight: bold;
      line-height: 28px;

      color: #656565;
    }
  }
  .containerForm {
    padding: 8%;
    width: 40%;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "SourceSansPro";
    font-size: 14px;
    line-height: 16px;

    color: #656565;

    input {
      background: #ffffff;
      border: 1px solid #dde6e9;
      border-radius: 4px;
      width: 85%;
      height: 30px;
      margin: 5px;
    }

    input:focus {
      outline: solid #3d75bb;
    }

    .p {
      font-family: "SourceSansPro";
      font-size: 11px;
      line-height: 13px;
      color: #cecece;
    }

    button {
      width: 150px;
      height: 30px;
      border: none;
      border-radius: 4px;
      background-color: #3d75bb;
      color: #f8f9fa;
      font-family: "SourceSansPro";
      font-size: 16px;
      margin: 20px 0px 20px 0px;
      cursor: pointer;
    }
  }

  .containerResult {
    background-color: rgba(209, 220, 227, 0.18);
    width: 43%;
    height: 390px;
    margin: 0;

    font-style: italic;
    font-size: 16px;
    color: #3d75bb;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 18px;
      border-bottom: solid #3d75bb 2px;
    }
  }
`;

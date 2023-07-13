import styled from '@emotion/styled';


export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
max-width: 300px;
margin: 0 auto;
padding: 20px;
border: 1px solid #ccc;
border-radius: 5px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
padding: 8px;
border: 1px solid #ccc;
border-radius: 4px;
`;

export const Button = styled.button`
padding: 8px 16px;
background-color: lightslategrey;
color: #fff;
border: none;
border-radius: 4px;
cursor: pointer;
`;
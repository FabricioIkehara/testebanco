import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const ImageSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0px;
  margin-top: 0px;
  opacity: 1;
  box-sizing: border-box;
  background-color: transparent;
`;

export const Logo = styled.img`
  width: 200px;
  height: 43.13px;
`;

export const LoginImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  flex: 1;
  margin-top: 0px;
`;

export const LoginSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  background-color: #ffffff;
  margin-left: 100px;
`;


export const Title1 = styled.h1`
  margin-bottom: 0px;
  font-size: 48px;
  font-weight: 700;
  line-height: 57.6px;
  color: #484848;

  font-family: Lato;
  font-size: 48px;
  font-weight: 700;
  line-height: 57.6px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

`;

export const Title2 = styled.h2`
  margin-top: 0;
  margin-bottom: 50px;
  color: #484848;
  font-size: 24px;
  font-weight: 300;
  font-family: Lato;
  line-height: 28.8px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.6px;
  color: #484848;
  font-family: Lato;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: 100;
`;

export const InputField = styled.input`
  max-width: 360px; 
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-weight: 100;
`;

export const Options = styled.div`
  width: 360px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 0.9em;
`;

export const ForgotPassword = styled.a`
  color: #007bff;
  text-decoration: none;
`;

export const LoginButton = styled.button`
  width: 360px; 
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #1BC681;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: Lato;
  font-size: 18px;
  font-weight: 600;
  line-height: 21.6px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;


  &:hover {
    background-color: #17A36B;
  }
`;

export const SignupSection = styled.div`
  width: calc(100% - 80px); 
  max-width: 360px; 
  margin: 15px 0;
  text-align: center;
`;

export const SignupTitle = styled.h3`
  margin: 0 15px; 
  font-weight: 300;
  color: #1E1E1E;
  font-size: 24px;
  line-height: 28.8px;
  font-family: Lato;
  font-weight: 600;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  width: 640px;

`;

export const SignupLink = styled.a`
  color: #1BC681;
  text-decoration: none;
  font-size: 24px;
  line-height: 28.8px;
  font-weight: 600;
  font-family: 'Lato';
`;

export const Emoji = styled.span`
  color: #1BC681;
  padding: 0 5px;
  font-family: Lato;
  font-size: 48px;
  font-weight: 700;
  line-height: 57.6px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

`;

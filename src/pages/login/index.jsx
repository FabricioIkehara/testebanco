import React from 'react';
import { 
  LoginContainer, ImageSection, LoginSection, LoginImage, Title1, 
  Title2, LoginForm, FormGroup, Label, InputField, Options, ForgotPassword, 
  LoginButton, SignupSection, SignupTitle, SignupLink, Emoji 
} from './styles';
import loginImage from '../../assets/login.png';


const Login = () => {
  return (
    <LoginContainer>
      <ImageSection>
        <LoginImage src={loginImage} alt="Login" />
      </ImageSection>
      <LoginSection>
        <Title1>
          Bem vindo <Emoji>:)</Emoji>
        </Title1>
        <Title2>Entre na sua conta</Title2>
        <LoginForm>
          <FormGroup>
            <Label htmlFor="username">Usuário</Label>
            <InputField type="text" id="username" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Senha</Label>
            <InputField type="password" id="password" />
          </FormGroup>
          <Options>
            <Label>
              <input type="checkbox" />
              Lembrar senha
            </Label>
            <ForgotPassword href="#">Esqueceu a senha?</ForgotPassword>
          </Options>
          <LoginButton type="submit">ENTRAR</LoginButton>
        </LoginForm>
        <SignupSection>
          <SignupTitle>
            Não tem conta? <SignupLink href="#">Faça uma agora</SignupLink>
          </SignupTitle>
        </SignupSection>
      </LoginSection>
    </LoginContainer>
  );
};

export default Login;

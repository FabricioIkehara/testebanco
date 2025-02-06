import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LoginContainer, ImageSection, LoginSection, LoginImage, Title1, 
  Title2, LoginForm, FormGroup, Label, InputField, Options, ForgotPassword, 
  LoginButton, SignupSection, SignupTitle, SignupLink, Emoji 
} from './styles';
import loginImage from '../../assets/login.png';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Validação dos campos vazios
    if (username.trim() === '' || password.trim() === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Verificação de credenciais
    if (username === 'admin' && password === 'admin') {
      navigate('/dashboard');
    } else {
      alert('Usuário ou senha incorretos!');
    }
  };

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
        <LoginForm onSubmit={handleLogin}>
          <FormGroup>
            <Label htmlFor="username">Usuário</Label>
            <InputField 
              type="text" 
              id="username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Senha</Label>
            <InputField 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
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

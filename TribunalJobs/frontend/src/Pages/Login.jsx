import React from 'react';
import InputField from '../components/Login/InputField';
import Button from '../components/Login/Button';

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-300">
      <div className="container flex bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="left-section flex-1 p-8">
          <img src="/images/Logo.png" alt="Logo" className="logo mb-6" />
          <h1 className="text-xl text-gray-800 mb-4">Bem-vindo de volta!</h1>
          <p className="text-gray-600 mb-6">
            Ainda não tem uma conta? <br /> <a href="/cadastro" className="text-blue-600">Cadastre sua empresa aqui.</a>
          </p>
          <form action="/login" method="post">
            <InputField
              type="email"
              name="email"
              placeholder="Insira seu E-Mail"
              required
              icon={
                <path d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              }
            />
            <InputField
              type="password"
              name="senha"
              placeholder="Insira sua senha"
              required
              icon={
                <path d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              }
            />
            <a href="/EsqueciSenha" className="forgot-password text-blue-600 hover:underline">Esqueceu sua senha?</a>
            <Button type="submit">Login</Button>
          </form>
        </div>
        <div className="right-section flex-1 flex justify-center items-center">
          <img src="/images/Imagem box.png" alt="Lady Justice" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Login;

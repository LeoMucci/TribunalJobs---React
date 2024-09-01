import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndexPage from './Pages/Index'; // Landing Page como a página inicial
import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';
import CadastroADM from './Pages/CadastroADM';
import EsqueciSenha from './Pages/EsqueciSenha';
import EsqueciSenhaConcluido from './Pages/EsqueciSenhaConcluido';
import EsqueciSenhaNovaSenha from './Pages/EsqueciSenhaNovaSenha';
import EsqueciSenhaVerificacao from './Pages/EsqueciSenhaVerificacao';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/index" element={<IndexPage />} /> {/* Landing Page como rota inicial */}
        <Route path="/" element={<IndexPage />} /> {/* Landing Page como rota inicial */}
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cadastroadm" element={<CadastroADM />} />
        <Route path="/esquecisenha" element={<EsqueciSenha />} />
        <Route path="/esquecisenhaconcluido" element={<EsqueciSenhaConcluido />} />
        <Route path="/esquecisenhanovasenha" element={<EsqueciSenhaNovaSenha />} />
        <Route path="/esquecisenhaverificacao" element={<EsqueciSenhaVerificacao />} />
      </Routes>
    </Router>
  );
};

export default App;

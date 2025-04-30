import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import './register.css'; // Importando os estilos
import CapysLogo from "../../assets/CapysLogo.png";
import Input from "../../components/input/input";

// Componente
export default function Register() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [bio, setBio] = useState("");
  const [contato, setContato] = useState("");
  const [modulo, setModulo] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    alert("Cadastro fictício realizado!");
    navigate("/");
  };


  return (
    <div className="page-wrapper">
      <div className="logo-container">
        <img src={CapysLogo} alt="" />
        <Link to="/" className="back-button">Voltar</Link>
      </div>
      <div className="form-container">
        <div className="text-container">
          <h2 className="form-title">Crie sua conta</h2>
          <span className="form-text">Rapido e grátis, vamos nessa</span>
        </div>
        <form onSubmit={handleRegister} className="form">

          <Input label="Nome"
            type="text"
            placeholder="Digite aqui seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <Input label="Email"
            type="text"
            placeholder="Digite aqui seu email"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <Input label="Senha"
            type="text"
            placeholder="Digite aqui sua senha"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <Input label="Confirmar Senha"
            type="text"
            placeholder="Digite novamente sua senha"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <Input label="Bio"
            type="text"
            placeholder="Fale sobre você"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <Input label="Contato"
            type="text"
            placeholder="Opção de Contato"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <label className="label">Selecionar Cargo</label>
          <select
            value={modulo}
            onChange={(e) => setModulo(e.target.value)}
            className="select"
          >
            <option value="">Selecione o Cargo</option>
            <option value="backend">Desenvolvedor Backend</option>
            <option value="frontend">Desenvolvedor Frontend</option>
          </select>

          <button type="submit" className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

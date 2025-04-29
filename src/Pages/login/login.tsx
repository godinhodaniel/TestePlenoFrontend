import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button";
import "./login.css";
import "../../global/root.css";
import "../../components/button/button.css";
import CapysLogo from "../../assets/CapysLogo.png";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importe os ícones de olho

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const navigate = useNavigate();

  const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha); // Alterna entre mostrar e ocultar a senha
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "teste@capys.com.br" && senha === "123456") {
      navigate("/home");
    } else {
      alert("Credenciais inválidas");
    }
  };

  return (
    <div className="login-container">
      <img src={CapysLogo} alt="Logo da Capys" className="logo" />

      <div className="login-card">
        <h2 className="login-title">Login</h2>

        <form onSubmit={handleSubmit} className="login-form">
          <label className="email">Email</label>
          <input
            type="email"
            placeholder="teste@capys.com.br"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="senha">Senha</label>
          <div className="input-container">
            <input
              type={mostrarSenha ? 'text' : 'password'}
              placeholder="••••••••"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={toggleMostrarSenha}
              className="toggle-password-btn"
            >
              {mostrarSenha ? <FaEyeSlash /> : <FaEye />} {/* Ícones de olho */}
            </button>
          </div>

          <Button className="btn-entrar" type="submit">Entrar</Button>
        </form>

        <p className="no-account">Ainda não possui uma conta?</p>
        <Button
          className="secondary"
          onClick={() => navigate("/register")}
          type="button"
        >
          Cadastre-se
        </Button>
      </div>
    </div>
  );
}

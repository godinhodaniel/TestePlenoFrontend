import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import styles from "./Register.module.css"; // Importando os estilos como CSS Modules
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
    <div className={styles.pageWrapper}>
      <div className={styles.logoContainer}>
        <img src={CapysLogo} alt="" />
        <Link to="/" className={styles.backButton}>Voltar</Link>
      </div>
      <div className={styles.formContainer}>
        <div className={styles.textContainer}>
          <h2 className={styles.formTitle}>Crie sua conta</h2>
          <span className={styles.formText}>Rápido e grátis, vamos nessa</span>
        </div>
        <form onSubmit={handleRegister} className={styles.form}>

          <Input label="Nome"
            type="text"
            placeholder="Digite aqui seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <Input label="Email"
            type="text"
            placeholder="Digite aqui seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input label="Senha"
            type="text"
            placeholder="Digite aqui sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <Input label="Confirmar Senha"
            type="text"
            placeholder="Digite novamente sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <Input label="Bio"
            type="text"
            placeholder="Fale sobre você"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />

          <Input label="Contato"
            type="text"
            placeholder="Opção de Contato"
            value={contato}
            onChange={(e) => setContato(e.target.value)}
          />

          <label className={styles.label}>Selecionar Cargo</label>
          <select
            value={modulo}
            onChange={(e) => setModulo(e.target.value)}
            className={styles.select}
          >
            <option value="">Selecione o Cargo</option>
            <option value="backend">Desenvolvedor Backend</option>
            <option value="frontend">Desenvolvedor Frontend</option>
          </select>

          <button type="submit" className={styles.button}>Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

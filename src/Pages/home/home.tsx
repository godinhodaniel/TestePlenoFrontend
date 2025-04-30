import styles from './Home.module.css';
import CapysLogo from "../../assets/CapysLogo.png";
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };
  return (
    <div className={styles.page}>
      {/* Header fixo no topo */}
      <header className={styles.header}>
        <img src={CapysLogo} alt="Capys logo" className={styles.logo} />
        <button className={styles.logoutButton} onClick={handleLogout}>Sair</button>
      </header>

      {/* Container abaixo da header */}
      <section className={styles.userInfo}>
        <div className={styles.userCard}>
          <span className={styles.leftText}><strong>Olá, Teste Capys</strong></span>
          <span className={styles.rightText}>Desenvolvedor Front-End</span>
        </div>
      </section>

      {/* Mensagem de desenvolvimento */}
      <main className={styles.developmentMessage}>
        <h2>Que pena! Estamos em desenvolvimento :(</h2>
        <p>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </p>
      </main>
    </div>
  );
}

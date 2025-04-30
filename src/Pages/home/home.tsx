import './home.css';
import CapysLogo from "../../assets/CapysLogo.png";

export default function Home() {
  return (
    <div className="page">
      {/* Header fixo no topo */}
      <header className="header">
        <img src={CapysLogo} alt="Capys logo" className="logo" />

        <button className="logoutButton">Sair</button>
      </header>

      <section className="userInfo">
        <div className="userCard">
          <span className="leftText"><strong>Olá, Teste Capys</strong></span>
          <span className="rightText">Desenvolvedor Front-End</span>
        </div>
      </section>

      {/* Bloco com mensagem de desenvolvimento */}
      <main className="developmentMessage">
        <h2>Que pena! Estamos em desenvolvimento :(</h2>
        <p>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </p>
      </main>
    </div>
  );
}

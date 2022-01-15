import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="text-container">
        <h1 className="title">Desafio Github API</h1>
        <h3 className="subtitle">Bootcamp Spring React - DevSuperior</h3>
      </div>
      <Link to="/gitsearch">
        <button className="btn btn-primary btn-lg start-button">Começar</button>
      </Link>
    </div>
  );
};

export default Home;

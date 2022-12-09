import './styles.css';
import ImageHeader from '../../assets/images/car-header.png';

const Home = () => {
  return (
    <>
      <div className="header-card-container">
        <img src={ImageHeader} alt="Carro do Car inicial" />
        <h1>O Carro perfeito para você</h1>
        <p>
          Conheça nossos carros e dê mais um passo na realização do seu sonho.
        </p>
      </div>
      <div className="card-show-catalog">
        <div className='card-show-catalog-button'>
          <button className="btn btn-primary">VER CATÁLOGO</button>
        </div>
        <div className='card-show-catalog-p'>
          <p>Comece agora a navegar</p>
        </div>
      </div>
    </>
  );
};

export default Home;

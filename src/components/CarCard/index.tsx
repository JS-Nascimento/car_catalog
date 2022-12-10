import './styles.css';
import ImageCard from '../../assets/images/car-card.png';

const CarCard = () => {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={ImageCard} alt="" />
      </div>
      <div className="card-content">
        <h6>Audi Supra TT</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
      </div>
      
        <button className="btn btn-primary btn-style">COMPRAR</button>
      
    </div>
  );
};

export default CarCard;

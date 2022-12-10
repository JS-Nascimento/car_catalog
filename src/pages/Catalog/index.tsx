import CarCard from '../../components/CarCard';
import CardSearch from '../../components/CardSearch';
import './styles.css'

const Catalog = () => {


    return(

        <div className="container my-4">
          <CardSearch/>
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <CarCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <CarCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <CarCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <CarCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <CarCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <CarCard />
          </div>
        </div>
      </div>

    );

}

export default Catalog;
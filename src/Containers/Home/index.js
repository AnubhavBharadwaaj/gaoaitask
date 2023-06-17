import './index.css';
import Card from '../../Components/Card';
import { CheckoutAction } from '../../Components/CheckoutAction';

function Home() {
  return (
    <div className="container">
      <div className="row">
        <CheckoutAction link={"/checkout"}/>
      </div>
      <div className="row">
        <Card
          title="Chocolate cake"
          images="cake1.jpg"
          old_price="9,999"
          newPrice="9999"
          dollar="$"
          id="1"
          alt="batman"
          exp_date="10-08-2022"
        />
        <Card
          title="Vanilla cake"
          images="cake2.jpg"
          newPrice="500"
          old_price="1000"
          dollar="$"
          id="2"
          alt="blackpanter"
          exp_date="10-08-2022"
        />
        <Card
          title="Strawberry cake"
          images="cake3.jpg"
          old_price="7999"
          newPrice="7000"
          id="3"
          dollar="$"
          alt="arthur"
          exp_date="10-08-2022"
        />
        <Card
          title="Mint cake"
          images="cake4.jpg"
          old_price="999"
          newPrice="500"
          id="4"
          dollar="$"
          alt="kashima"
          exp_date="10-08-2022"
        />
      </div>
    </div>
  );
}
export default Home;

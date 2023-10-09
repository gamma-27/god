
import './App.css';
import CustomTab from './pages/Tabs'; 
import Header from './pages/Header'; 
import Middle from './pages/middle'; 
import Table from './pages/table'
import RideUber from './pages/RideUber'
import Scan from './pages/scan';
import Footer from './pages/footer';

function Component() {
  return (
    <>
  <div>
  <Header/>
  </div>
   
    <div>
<CustomTab />
</div>

<div>
  <Middle />
</div>

<div>
  <Table/>
</div>

<div>
  <RideUber/>
</div>

<div>
  <Scan/>
</div>

<div>
  <Footer/>
</div>
   

  
  
  </>
  
    



  );
}

export default Component;



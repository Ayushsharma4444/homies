import logo from './logo.svg';
import './App.css';
import Dropdown from './component/Dropdown';
import About from './component/About';
import ClientFeedback from './component/ClientFeedback';
import Blogs from './component/Blogs';
import Header from './component/Header'
import Ourservices from './component/Ourservices';
import Footer from './component/Footer';
import Request from './component/Request';
import TechnologyInfo from './component/TechnologyInfo';
import Booking from './component/Booking';
import Navbar from './component/Navbar';
import Newheader from './component/Newheader';
function App() {
  return (
    <div className="App">
    <Navbar/>
    {/* <Newheader/> */}
    <Header />
    <Dropdown/>
      <About/>
      <Booking/>
      <Ourservices/>
      <TechnologyInfo/>
      <ClientFeedback/>
      <Blogs/>
      <Request/>
      <Footer/>
    </div>
  );
}

export default App;

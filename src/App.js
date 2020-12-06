import './App.css';
import AppNavbar from "./components/app-navbar/app-navbar.component"
import AppCarousel from "./components/app-carousel/app-carousel.component"
import TitleMessage from "./components/title-message/title-message.component"
const  App = () => {
  return (
    <div className="App">
     <AppNavbar/>
     <AppCarousel/>
     <TitleMessage/>
    </div>
  );
}
export default App;

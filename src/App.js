import './css/custom.css';  

import HeaderComponent from './components/HeaderComponent';
import MenuComponent from './components/MenuComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div className='container'>

        {/* <h1>Welcome to ReactJS</h1> */}

        <HeaderComponent className="headerCompo" />
        <MenuComponent />
        <FooterComponent />

    </div>
  );
}

export default App;

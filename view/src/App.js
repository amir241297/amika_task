import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Routing from './components/Routing';
import PrivateRoutes from './components/PrivateRoutes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routing />
    </div>
  );
}

export default App;

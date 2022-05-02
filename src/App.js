import './App.css';
import ItemDetailContainer from './Components/Landing/ItemDetailContainer';
import NameStore from './Components/NameStore';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NameStore/>
        <NavBar/>      
      </header>
      <nav>
        <ItemDetailContainer />      
      </nav>     
    </div>
  );
}
export default App;
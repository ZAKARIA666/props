import logo from './logo.svg';
import './App.css';
import Home from './Home';

function App() {
  const handleName =() => {
    alert("hello");
};


  const lastname="zin elabindin"
  return (
    <div className="App">
    <Home  lastname={lastname} handleName={handleName}/>
   
    </div>
  );
}

export default App;

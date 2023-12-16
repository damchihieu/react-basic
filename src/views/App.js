import logo from './logo.svg';
import './App.scss';
import Mycomponent from './examble/Mycomponent';
/**
 * 
 * co 2 loai component func va class su dung jsx
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world With Reactjs(Tu Hoc Sang Tao)
        </p>
   
        <Mycomponent/>
      </header>
    </div>
  );
}

export default App;

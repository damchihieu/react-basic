import logo from './logo.svg';
import './App.scss';
//import Mycomponent from './examble/Mycomponent';
import ListTodo from './Todo/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
          Singple TODO Apps With Reactjs(Hieu &amp; Tu Hoc Sang Tao)
        </p>
        {/* <Mycomponent/> */}
        <ListTodo/>
      </header>
      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
     />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.scss';
import Mycomponent from './examble/Mycomponent';
import ListTodo from './Todo/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import Home from './examble/Home';


import {
  BrowserRouter ,
  Switch,
  Route
} from "react-router-dom";

/**
 * 
 * co 2 loai component func va class su dung jsx
 */
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
        <Nav/>
          <img src={logo} className="App-logo" alt="logo" />
            <Switch>
              <Route path="/" exact={true} >
                 <Home/>
              </Route>
              <Route path="/todo">
                 <ListTodo/> 
              </Route>
              <Route path="/about">
                 <Mycomponent/> 
              </Route>
            </Switch>
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
    </BrowserRouter>
  );
}

export default App;

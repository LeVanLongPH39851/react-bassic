import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./example/mycomponent";
import ListToDo from "./todos/listtodo";
import Nav from "./nav/nav";
import Home from "./example/home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ListUser from "./users/listuser";
import DetailUser from "./users/detailuser";
/**
 * 2 ccomponets class componets / function componets (function, arrow)
 * JSX
 */
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
          {/* <MyComponent /> */}
          {/* <MyComponent></MyComponent> */}
          {/* <ListToDo /> */}
          {/* <Home /> */}
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListToDo />
            </Route>
            <Route path="/about">
              <MyComponent />
            </Route>
            <Route path="/user" exact>
              <ListUser />
            </Route>
            <Route path="/user/:id">
              <DetailUser />
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
        />
      </div>
    </BrowserRouter>
  );
}

export default App;

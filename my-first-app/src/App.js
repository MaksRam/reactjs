
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import TribesInPipedrive from "./components/Tribes/Tribes.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetEmployees from './components/Employees/getEmployees.jsx'
import Example from "./components/Employees/NewEmployee";
import { Provider } from "react-redux";
import store from "./store";




const App = (props) => {
  return (
    <BrowserRouter>
      <Navbar />
      <Provider store={store}>
       
          {/* { users: { loading, success, error, list }. { tribes: { ....} } } */}  
      <Routes>
        <Route path="/" element={<TribesInPipedrive />} />
        <Route
          path="/employees"
          element={<GetEmployees />}
        />
      </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default App;

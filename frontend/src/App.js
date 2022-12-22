import "./App.css";
import { Routes, Route } from "react-router-dom";
import Signin from "./Components/Signin";
import SignUp from "./Components/SignUp";
import PrivateRoute from "./Components/PrivateRoute";
import UpdateForm from "./Components/User/UpdateForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/login" element={<SignUp />} />
        <Route path="/app/Profile" element={<PrivateRoute />} />
        <Route path="/update/:id" element={<UpdateForm />} />
      </Routes>
    </div>
  );
}

export default App;

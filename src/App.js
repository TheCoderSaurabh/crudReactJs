// import logo from './logo.svg';
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Nav from "./pages/Nav";
import ChildComp1 from "./pages/ChildComp1";
import ChildComp2 from "./pages/ChildComp2";
import User from "./components/User";
import Edit from "./components/Edit";
import Create from "./components/Create";
import Delete from "./components/Delete";


const App = () => {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/child1" element={<ChildComp1 />} />
          <Route path="/child2" element={<ChildComp2 />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<User />} />
        <Route path="/edituser/:id" element={<Edit/>} />
        <Route path="/createuser" element={<Create/>} />
        <Route path="/deleteuser" element={<Delete/>} />



      </Routes>
    </>
  );
};
export default App;

import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
        <h1>Home</h1><br></br>
        <Link to="/createuser">Create</Link>
                
        <Outlet></Outlet>
        </div>
    );
};

export default Home;
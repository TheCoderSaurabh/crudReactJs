import {Link} from 'react-router-dom'
const Nav = () => {
    return (
        <div>
        <h1>Nav is working</h1>
        <Link to="/">Home</Link><br></br>
        <Link to="/about">About</Link><br></br>
        <Link to="/user">User List</Link>

        </div>

    );
};

export default Nav;
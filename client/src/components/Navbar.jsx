import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link className="m-[10px]" to="/">
        Home
      </Link>
      <Link className="m-[10px]" to="/register">
        Register
      </Link>
      <Link className="m-[10px]" to="/login">
        Login
      </Link>
      <Link className="m-[10px]" to="/connectFB">
        ConnectFB
      </Link>
      <Link className="m-[10px]" to="/disconnectFB">
        DisConnectFB
      </Link>
    </div>
  );
};

export default Navbar;

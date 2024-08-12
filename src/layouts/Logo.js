import LogoDark  from "../assets/images/logos/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img
      style={{height: 50}}
        src={LogoDark}
        alt={'alt'}
        className={`logo`} // Add a default class name and optional additional class name
      />    </Link>
  );
};

export default Logo;

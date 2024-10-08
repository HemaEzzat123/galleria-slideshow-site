import logo from "../assets/shared/logo.svg";
import { Link, useParams } from "react-router-dom";

function Header() {
  const { id } = useParams(); // Get the ID from the URL
  const slideShow = () => {
    if (
      window.location.pathname === "/home" ||
      window.location.pathname === "/"
    ) {
      return <>START SLIDESHOW</>;
    }
    if (window.location.pathname === `/inner-page/${id}`) {
      return <>STOP SLIDESHOW</>;
    }
  };
  return (
    <>
      <div className="flex justify-between items-center	mt-8 w-[88vw] m-auto  ">
        <Link to={`/home`}>
          <img src={logo} alt="logo" />
        </Link>
        <p className="tracking-wider">{slideShow()}</p>
      </div>
      <br />
      <hr className="w-[88vw] m-auto" />
    </>
  );
}
export default Header;

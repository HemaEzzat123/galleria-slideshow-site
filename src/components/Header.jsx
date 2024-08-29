import logo from "../../../starter-code/assets/shared/logo.svg";

function Header() {
  return (
    <>
      <div className="flex justify-between items-center	mt-8 w-[88vw] m-auto  ">
        <img src={logo} alt="logo" />
        <p className="tracking-wider">START SLIDESHOW</p>
      </div>
      <br />
      <hr className="w-[88vw] m-auto" />
    </>
  );
}
export default Header;

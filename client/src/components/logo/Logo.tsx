import logo from "@/assets/images/logo.png";
// or
// import logo from "../assets/images/logo.png";

export default function Logo() {
  return (
    <img
      src={logo}
      alt="Logo"
      className="h-10 w-auto"
    />
  );
}
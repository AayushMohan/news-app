import { categories } from "../constants";
import NavLink from "./NavLink";

const NavLinks = () => {
  return (
    <nav>
      {categories.map((category) => (
        <NavLink isActive={true} key={category} category={category} />
      ))}
    </nav>
  );
};

export default NavLinks;

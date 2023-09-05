import { navbarItems } from "@/config/navbar";
import { Navbar } from "./navbar";

export const Header: React.FC = async () => {	

  return (
    <div className="fixed w-full z-50">
      <Navbar items={navbarItems}/>
    </div>
  );
};
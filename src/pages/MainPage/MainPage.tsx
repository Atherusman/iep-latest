import Sidebar from "../../components/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import Search from "../../components/Searchbar";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const MainPage = () => {
  const path = useLocation().pathname;
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {});

  return (
    <div className="grid grid-flow-row-dense grid-cols-12 h-screen bg-gray-50 relative">
      <div
        className={`h-screen z-10 p-2 absolute bg-gray-50 left-0 top-0 transition ${
          !isOpen && "-translate-x-full"
        } sm:col-span-2 sm:static sm:translate-x-0`}
      >
        <Sidebar setIsOpen={setIsOpen} />
      </div>
      <div className={`col-span-12 w-full h-100 sm:col-span-10`}>
        <div className="flex flex-col p-2">
          <nav className="h-16 flex justify-between w-full items-center -mt-1 sticky top-0 ">
            <GiHamburgerMenu
              className="sm:hidden"
              onClick={() => setIsOpen(true)}
            />

            <span className="-mt-2.2 ml-1 text-sm">
              {path.slice(11).toUpperCase()}
            </span>
            <div>
              <Search placeholder="type here" />
            </div>
          </nav>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainPage;

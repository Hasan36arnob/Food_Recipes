import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";
export default function Navbar() {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);
  console.log(searchParam);

  return (
    <nav className="bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 text-black shadow-lg py-4 container mx-auto flex-col lg:flex-row flex justify-between items-center px-6 lg:px-12 gap-5 lg:gap-0 rounded-lg">
      <NavLink
        to={"/"}
        className={"text-black hover:text-gray duration-300"}
      ></NavLink>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
          placeholder="Enter food items "
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-97 shadow-lg shadow-red-100 focus:shadow-red-200"
        ></input>
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className={"text-black hover:text-gray duration-300"}
          >
            Home{" "}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/Favourites"}
            className={"text-black hover:text-gray duration-300"}
          ></NavLink>
        </li>
      </ul>
    </nav>
  );
}

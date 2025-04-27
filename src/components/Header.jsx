// import React from "react";
// import { Link } from "react-router-dom"; // ✅ Import Link for navigation

// function Header() {
//   return (
//     <>
//       <div className="flex justify-between items-center sticky top-0 z-50 bg-white shadow-[0px_1px_7px_#0A0F2C] h-[90px]">
//         <h1 className="font-italiana text-[#D72638] text-3xl pl-[100px] py-[30px] tracking-[1px]">
//           Arvind H S
//         </h1>
//         <div>
//           <ul className="font-hanuman flex text-[#0A0F2C] text-sm py-[40px] pr-[100px] gap-[30px] tracking-wider">
//             <li className="font-bold hover:text-[#D72638]">
//               <Link to="/">Home</Link> {/* Link to Home */}
//             </li>
//             <li className="font-light hover:font-bold hover:underline hover:text-[#D72638]">
//               <Link to="/projects">Projects</Link> {/* Link to Projects page */}
//             </li>
//             <li className="font-light hover:font-bold hover:underline hover:text-[#D72638]">
//               <Link to="/about">About Me</Link> {/* Link to About Me page */}
//             </li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Header;
import React from "react";
import { NavLink } from "react-router-dom"; // ⭐ use NavLink instead of Link

function Header() {
  return (
    <>
      <div className="flex justify-between items-center sticky top-0 z-50 bg-white shadow-[0px_1px_7px_#0A0F2C] h-[90px]">
        <h1 className="font-italiana text-[#D72638] text-3xl pl-[100px] py-[30px] tracking-[1px]">
          Arvind H S
        </h1>
        <div>
          <ul className="font-hanuman flex text-[#0A0F2C] text-sm py-[40px] pr-[100px] gap-[30px] tracking-wider">
            {/* Home Link */}
            <li>
              <NavLink
                to="/"
                className={
                  ({ isActive }) =>
                    isActive
                      ? "font-bold text-[#D72638]" // 🔥 active style
                      : "font-light hover:font-bold hover:underline hover:text-[#D72638]" // normal hover style
                }
              >
                Home
              </NavLink>
            </li>

            {/* Projects Link */}
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-[#D72638]"
                    : "font-light hover:font-bold hover:underline hover:text-[#D72638]"
                }
              >
                Projects
              </NavLink>
            </li>

            {/* About Link */}
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-[#D72638]"
                    : "font-light hover:font-bold hover:underline hover:text-[#D72638]"
                }
              >
                About Me
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;

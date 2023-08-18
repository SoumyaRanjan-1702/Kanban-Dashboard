// import React, { useState } from "react";
// import "./Dropdown.css";
// import {
//   AdjustmentsHorizontalIcon,
//   ChevronDownIcon,
// } from "@heroicons/react/24/outline";

// const DropDown = ({setGroupingOption, setSortingOption}) => {
//   const [open, setOpen] = useState(false);

//   const toggleDropDown = () => {
//     setOpen(!open);
//   };

//   const list = [
//     { label: "Grouping", value: ["status", "user", "priority"] },
//     { label: "Ordering", value: ["priority", "title"] },
//   ];

//   return (
//     <div className={"dropdownContainer"}>
//       <button onClick={toggleDropDown} className={"dropdownButton"}>
//         <AdjustmentsHorizontalIcon width={15} height={15} />
//         Display
//         <ChevronDownIcon width={15} height={15} />
//       </button>
//       {/* Dropdown menu */}
//       <div className={`dropdownMenu ${open ? "showMenu" : "hideMenu"}`}>
//         <ul className={"menuList"}>
//           {list.map((item) => (
//             <li key={item.label} className={"menuItem"}>
//               {item.label}
//               <select className={"selectBox"}>
//                 {item.value.map((option) => (
//                   <option key={option} value={option}>
//                     {option}
//                   </option>
//                 ))}
//               </select>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default DropDown;

import React, { useState } from "react";
import "./Dropdown.css";
import {
  AdjustmentsHorizontalIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

const DropDown = ({ setGroupingOption, setSortingOption }) => {
  const [open, setOpen] = useState(false);

  const toggleDropDown = () => {
    setOpen(!open);
  };

  const handleGroupingChange = (event, label) => {
    if (label === "Grouping") {
      setGroupingOption(event.target.value);
    } else {
      setSortingOption(event.target.value);
    }
  };

  const list = [
    { label: "Grouping", value: ["status", "user", "priority"] },
    { label: "Ordering", value: ["priority", "title"] },
  ];

  return (
    <div className={"dropdownContainer"}>
      <button onClick={toggleDropDown} className={"dropdownButton"}>
        <AdjustmentsHorizontalIcon width={15} height={15} />
        Display
        <ChevronDownIcon width={15} height={15} />
      </button>
      {/* Dropdown menu */}
      <div className={`dropdownMenu ${open ? "showMenu" : "hideMenu"}`}>
        <ul className={"menuList"}>
          {list.map((item) => (
            <li
              key={item.label}
              className={"menuItem"}
              onChange={(event) => handleGroupingChange(event, item.label)}
            >
              {item.label}
              <select className={"selectBox"}>
                {item.value.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropDown;

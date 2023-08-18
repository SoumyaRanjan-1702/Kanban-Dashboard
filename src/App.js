// import React from "react";
// import { useState } from "react";
// import "./App.css";
// import Board from "./Components/Boards/Board";
// import DropDown from "./Components/Dropdown";

// function App() {
//   return (
//     <div className="App">
//       <div className="app_navbar">
//         <DropDown />
//       </div>

//       <div className="app_outer">
//         <div className="app_boards">
//           <Board />
//           <Board />
//           <Board />
//           <Board />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Board from "./Components/Boards/Board";
import DropDown from "./Components/Dropdown";

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupingOption, setGroupingOption] = useState("status");
  const [sortingOption, setSortingOption] = useState("priority");

  useEffect(() => {
    // Fetch data from the API and set state
    axios
      .get("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => {
        setTickets(response.data.tickets);
        setUsers(response.data.users);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="App">
      <div className="app_navbar">
        <DropDown
          setGroupingOption={setGroupingOption}
          setSortingOption={setSortingOption}
        />
      </div>

      <div className="app_outer">
        <div className="app_boards">
          {/* Pass fetched data to the Board component */}
          <Board
            groupingOption={groupingOption}
            sortingOption={sortingOption}
            tickets={tickets}
            users={users}
          />
          {/* Repeat for other Board components */}
        </div>
      </div>
    </div>
  );
}

export default App;

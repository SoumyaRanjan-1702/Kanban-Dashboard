// import React from "react";
// import { MoreHorizontal } from "react-feather";
// import { Plus } from "react-feather";
// import "./Board.css";
// import Card from "../Card/Card";

// const Board = () => {
//   return (
//     <div className="board">
//       <div className="board_top">
//         <p className="board_top_title">
//           To do <span className={"tasknumber"}>2</span>
//         </p>
//         <MoreHorizontal />
//         <Plus />
//       </div>

//       <div className="board_cards">
//         <Card
//           id="CAM-11"
//           title="Update User Profile Page UI"
//           label="Feature Request"
//           user={null} // or provide an empty string: ""
//           status="Todo"
//           icon={null} // or provide an empty string: ""
//         />
//       </div>
//     </div>
//   );
// };

// export default Board;

import React from "react";
import { MoreHorizontal } from "react-feather";
import { Plus } from "react-feather";
import "./Board.css";
import Card from "../Card/Card";

const Board = ({ groupingOption, sortingOption, tickets, users }) => {
  const groupedTickets = groupTickets(tickets, users, groupingOption);
  console.log("grouped", groupedTickets);

  const sortedTickets = sortTickets(groupedTickets, sortingOption);
  console.log("sorted", sortedTickets);

  return (
    <div className="board">
      <div className="board_top">
        <p className="board_top_title">
          To do <span className={"tasknumber"}>{sortedTickets.length}</span>
        </p>
        <MoreHorizontal />
        <Plus />
      </div>

      <div className="board_cards">
        {sortedTickets.map((ticket) => (
          <Card
            key={ticket.id}
            id={ticket.id}
            title={ticket.title}
            label={ticket.tag[0]}
            user={users.find((user) => user.id === ticket.userId)}
            status={ticket.status}
            icon={null}
          />
        ))}
      </div>
    </div>
  );
};

const groupTickets = (tickets, users, groupingOption) => {
  if (groupingOption === "status") {
    const groupedByStatus = {};
    tickets.forEach((ticket) => {
      const status = ticket.status;
      if (!groupedByStatus[status]) {
        groupedByStatus[status] = [];
      }
      groupedByStatus[status].push(ticket);
    });
    return groupedByStatus;
  } else if (groupingOption === "user") {
    const groupedByUser = {};
    tickets.forEach((ticket) => {
      const user = users.find((user) => user.id === ticket.userId);
      if (user) {
        const userName = user.name;
        if (!groupedByUser[userName]) {
          groupedByUser[userName] = [];
        }
        groupedByUser[userName].push(ticket);
      }
    });
    return groupedByUser;
  } else if (groupingOption === "priority") {
    const groupedByPriority = {
      4: [],
      3: [],
      2: [],
      1: [],
      0: [],
    };
    tickets.forEach((ticket) => {
      const priority = ticket.priority;
      groupedByPriority[priority].push(ticket);
    });
    return groupedByPriority;
  } else {
    return {};
  }
};

const sortTickets = (groupedTickets, sortingOption) => {
  const sortedTickets = [];
  if (sortingOption === "priority") {
    for (let priority in groupedTickets) {
      sortedTickets.push(...groupedTickets[priority]);
    }
    sortedTickets.sort((a, b) => b.priority - a.priority);
  } else if (sortingOption === "title") {
    for (let group in groupedTickets) {
      groupedTickets[group].sort((a, b) => a.title.localeCompare(b.title));
      sortedTickets.push(...groupedTickets[group]);
    }
  }
  return sortedTickets;
};

export default Board;

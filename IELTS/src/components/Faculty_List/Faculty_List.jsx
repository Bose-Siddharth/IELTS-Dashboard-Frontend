import React from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import "./Faculty_List.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Faculty_List({isOpen}) {
  const tasks = [
    {
      id: 1,
      name: "Mr. Khan",
      projectManager: "Listening",
      dueDate: "May 25, 2023",
      status: "Completed",
      progress: 100,
    },
    {
      id: 2,
      name: "Mrs. Sharma",
      projectManager: "Listening",
      dueDate: "Jun 20, 2023",
      status: "Delayed",
      progress: 35,
    },
    {
      id: 3,
      name: "Mr. Kumar",
      projectManager: "Speaking",
      dueDate: "July 13, 2023",
      status: "Not Uploaded",
      progress: 68,
    },
    {
      id: 4,
      name: "Mr. Singh",
      projectManager: "Writing",
      dueDate: "Dec 20, 2023",
      status: "Completed",
      progress: 100,
    },
    {
      id: 5,
      name: "Mrs. Khanna",
      projectManager: "Reading",
      dueDate: "Mar 15, 2024",
      status: "On going",
      progress: 50,
    },
  ];
  function getColorForStatus(status) {
    switch (status) {
      case "Completed":
        return "#1a932e4f";
      case "Delayed":
        return "#e2b03333";
      case "Not Uploaded":
        return "#ee201c33";
      case "On going":
        return "#2b5de627";
      default:
        return "";
    }
  }

  function getTextColorForStatus(status) {
    switch (status) {
      case "Completed":
        return "#1A932E";
      case "Delayed":
        return "#DFA510";
      case "Not Uploaded":
        return "#EE201C";
      case "On going":
        return "#E65F2B";
      default:
        return "";
    }
  }


  return (
    <>
    
    <div>
    <div className="container">
        <div className="w-[45%] ">
          <h1 className="font-semibold text-xl">Faculty Summary</h1>
        </div>
        <div className="w-[50%] flex gap-10">
          <div className="module flex">
            <p>Module</p>
            <ChevronDownIcon
              className="-mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
          <div className="module_manager flex">
            <p>Module Manager</p>
            <ChevronDownIcon
              className="-mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
          <div className="status flex">
            <p>Status</p>
            <ChevronDownIcon
              className="-mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      <div className="list-container">
        <hr className="hr-line"/>
        <div className="w-[20%] ">
          <div className="nameWidth">Name</div>
          <div className="nameListElement">
          {tasks.map((task) => (
            <div className="mb-[5.5%] font-normal	" key={task.id}>
              {task.name}
            </div>
          ))}
          </div>
          
        </div>
        <div className="w-[10%]">
          <div className="mb-[18%] font-semibold listPmsHead">Project Manager</div>
          <div className="listPms">
          {tasks.map((task) => (
            <div className="mb-[12%] font-normal	" key={task.id}>
              {task.projectManager}
            </div>
          ))}
          </div>
        </div>
        <div className="w-[10%]">
          <div className="mb-[18%] font-semibold DateHead">Due date</div>
          <div className="listDates">
          {tasks.map((task) => (
            <div className="dueDatesList" key={task.id}>
              {task.dueDate}
            </div>
          ))}
          </div>
        </div>
        <div className="w-[10%] statusWidth">
          <div className="mb-[18%] font-semibold statusHead">Status</div>
          <div className="statusList">
          {tasks.map((task) => (
            <div
              className="mb-[12%] rounded-full font-normal	Status"
              key={task.id}
              style={{
                background: getColorForStatus(task.status),
                color: getTextColorForStatus(task.status),
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center"
              

              }}
            >
              {task.status}
            </div>
          ))}
          </div>
        </div>
        <div className="w-[10%] progressBody">
          <div className="mb-[18%] font-semibold progressHead">Progress</div>
          <div className="progressList">
          {tasks.map((task) => (
            <CircularProgressbar
              key={task.id}
              value={task.progress}
              text={`${task.progress}%`}
              strokeWidth={10}
              className="progress-bar-circular"
              styles={{
                path: {
                  stroke: task.progress >= 100 ? "#2ECC71" : "#FFA500",
                },
              }}
            />
          ))}
          </div>
        </div>
      </div>
    </div>
    
      
    </>
  );
}

export default Faculty_List;

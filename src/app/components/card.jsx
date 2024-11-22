// // components/Card.js
// "use client"; // Add this directive at the top
// import styles from "../styles/cardstyle.css";
// import style from "../styles/boardstyle.css";
// import decriptionicon from "../media/Vector.svg";
// import { useState } from "react";
// import Image from "next/image";

// export default function Card(props) {
//   const [editTask, setEditTask] = useState(false);
//   const [formData, setFormData] = useState({
//     id: props.id, // Use the id passed from props
//     taskName: props.title,
//     taskStatus: props.status,
//     taskPriority: props.priority,
//     dueDate: props.date,
//     description: props.description,
//   });

//   const img = "../public/media/user1.svg";
//   let prioritycolor = { backgroundColor: "white" };
//   let statuscolor = { backgroundColor: "white" };
//   if (props.priority === "High") {
//     prioritycolor = { backgroundColor: "#FF3D00" };
//   } else if (props.priority === "Medium") {
//     prioritycolor = { backgroundColor: "#E01100" };
//   } else {
//     prioritycolor = { backgroundColor: "#AA0D00" };
//   }
//   if (props.status === "Done") {
//     statuscolor = { backgroundColor: "#69FF66" };
//   } else if (props.status === "In Progress") {
//     statuscolor = { backgroundColor: "#A56EFF" };
//   } else if (props.status === "Stuck") {
//     statuscolor = { backgroundColor: "#FF005C" };
//   } else {
//     statuscolor = { backgroundColor: "#8E8E8E" };
//   }

//   const handleClick = () => {
//     setEditTask((prevState) => !prevState);
//   };

//   const handleChange = (event) => {
//     event.preventDefault();
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };
//   const deleteTask = () => {
//     props.deleteTask({
//       id: props.id,
//       title: props.title,
//       status: props.status,
//       priority: props.priority,
//       date: props.date,
//       description: formData.description

//     });
//     setEditTask((prevState) => !prevState);
//   };
//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Update the task by calling the function passed from the parent
//     props.updateTask({
//       id: formData.id, // Ensure the ID remains unchanged
//       taskName: formData.taskName,
//       taskStatus: formData.taskStatus,
//       taskPriority: formData.taskPriority,
//       dueDate: formData.dueDate,
//       description: formData.description
//     });

//     setEditTask((prevState) => !prevState);
//   };
//   const cancel = () => {
//     setEditTask((prevState) => !prevState);
//   };
//   return (
//     <>
//       <div className="card" onClick={handleClick}>
//         <div className="cardupper">
//           <p>{props.title}</p>
//           <div style={statuscolor} className="status">
//             <p>{props.status}</p>
//           </div>
//         </div>
//         <div className="cardmid">
//           <div style={prioritycolor} className="priority">
//             {props.priority}
//           </div>
//           <div className="date">{props.date}</div>
//         </div>

//         <div className="cardlower">
//           <button>
//             {" "}
//             <Image src={decriptionicon} />
//             Description
//           </button>
//           <Image src={props.src} alt="User Image" width={30} height={30} />
//         </div>
//       </div>

//       {editTask && (
//         <div className="popup">
//           <div className={"formContainer"}>
//             <div className="formTopBar">
//               <Image
//                 className="image"
//                 src="/workly.svg"
//                 alt="User Image"
//                 width={100}
//                 height={50}
//               />
//               <button className="deleteButton" type="delete" onClick={cancel}>
//                 <Image
//                   src="/cross-icon.svg"
//                   width={50}
//                   height={50}
//                   alt="cross"
//                   class="crossIcon"
//                 />
//               </button>
//             </div>{" "}
//             <form onSubmit={handleSubmit} className={"form"}>
//               <div className={"formGroup"}>
//                 <label htmlFor="taskName">Task Name</label>
//                 <input
//                   type="text"
//                   id="taskName"
//                   name="taskName"
//                   value={formData.taskName}
//                   onChange={handleChange}
//                   placeholder="Enter task name"
//                   required
//                 />
//               </div>

//               <div className={"formGroup"}>
//                 <label htmlFor="taskStatus">Task Status</label>
//                 <select
//                   id="taskStatus"
//                   name="taskStatus"
//                   value={formData.taskStatus}
//                   onChange={handleChange}
//                 >
//                   <option value="Done">Done</option>
//                   <option value="In Progress">In Progress</option>
//                   <option value="Not Started">Not Started</option>
//                   <option value="Stuck">Stuck</option>
//                 </select>
//               </div>

//               <div className={"formGroup"}>
//                 <label htmlFor="taskPriority">Task Priority</label>
//                 <select
//                   id="taskPriority"
//                   name="taskPriority"
//                   value={formData.taskPriority}
//                   onChange={handleChange}
//                 >
//                   <option value="Low">Low</option>
//                   <option value="Medium">Medium</option>
//                   <option value="High">High</option>
//                 </select>
//               </div>

//               <div className={"formGroup"}>
//                 <label htmlFor="dueDate">Due Date</label>
//                 <input
//                   type="date"
//                   id="dueDate"
//                   name="dueDate"
//                   value={formData.dueDate}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className={"formGroup"}>
//                 <label htmlFor="description">Description</label>
//                 {/* <input
//                   type="text"
//                   id="description"
//                   name="description"
//                   value={formData.description}
//                   onChange={handleChange}
//                   required
//                 /> */}
//                 <textarea
//                   type="text"
//                   id="description"
//                   name="description"
//                   value={formData.description}
//                   onChange={handleChange}
//                   require
//                   placeholder="Enter your description here..."
//                 ></textarea>

//               </div>
//               <div className="buttons">
//                 <button type="submit" className={"submitButton"}>
//                   Edit Task
//                 </button>
//                 <button type="delete" onClick={deleteTask} className={"delete"}>
//                   Delete
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// components/Card.js
"use client"; // Add this directive at the top
import styles from "../styles/cardstyle.css";
import style from "../styles/boardstyle.css";
import decriptionicon from "../media/Vector.svg";
import Vector2 from "../media/Vector2.svg";
import Vector3 from "../media/Vector3.svg";


import { useState } from "react";
import Image from "next/image";
import { Draggable } from "react-beautiful-dnd";

export default function Card(props) {
  const [removeTask, setRemoveTask] = useState(false);
  const [desc,setDesc] = useState(false);
  const [editTask, setEditTask] = useState(false);
  const [formData, setFormData] = useState({
    id: props.id, // Use the id passed from props
    taskName: props.title,
    taskStatus: props.status,
    taskPriority: props.priority,
    dueDate: props.date,
    description: props.description,
  });

  const img = "../public/media/user1.svg";
  let prioritycolor = { backgroundColor: "white" };
  let statuscolor = { backgroundColor: "white" };
  if (props.priority === "High") {
    prioritycolor = { backgroundColor: "#FF8418" };
  } else if (props.priority === "Medium") {
    prioritycolor = { backgroundColor: "#FFB618" };
  } else {
    prioritycolor = { backgroundColor: "#FFAD65" };
  }
  if (props.status === "Done") {
    statuscolor = { backgroundColor: "#69FF66" };
  } else if (props.status === "In Progress") {
    statuscolor = { backgroundColor: "#A56EFF" };
  } else if (props.status === "Stuck") {
    statuscolor = { backgroundColor: "#FF005C" };
  } else {
    statuscolor = { backgroundColor: "#8E8E8E" };
  }

  const handleClick = () => {
    setEditTask((prevState) => !prevState);
  };
  const handleDescription = () => {
    setDesc((prevState) => !prevState);
  };
  

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const deleteTask = () => {
    props.deleteTask({
      id: props.id,
      title: props.title,
      status: props.status,
      priority: props.priority,
      date: props.date,
      description: formData.description,
    });
    setEditTask((prevState) => !prevState);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    // Get the current date in 'YYYY-MM-DD' format
    const currentDate = new Date().toISOString().split("T")[0];

    // Determine if the task is "stuck"
    const taskStatus =
      new Date(formData.dueDate) < new Date(currentDate)
        ? "Stuck"
        : formData.taskStatus;

    // Update the task by calling the function passed from the parent
    props.updateTask({
      id: formData.id, // Ensure the ID remains unchanged
      taskName: formData.taskName,
      taskStatus: taskStatus,
      taskPriority: formData.taskPriority,
      dueDate: formData.dueDate,
      description: formData.description,
    });

    setEditTask((prevState) => !prevState);
  };
  const removeTaskdata = (event) => {
    event.stopPropagation(); // Prevent the click event from bubbling up
    setRemoveTask((prevState) => !prevState);
  };
  const closedesc = (event) => {
    event.stopPropagation(); // Prevent the click event from bubbling up
    setDesc((prevState) => !prevState);
  };
  

  return (
    <>
      <Draggable
        key={props.id}
        draggableId={String(props.draggableId)}
        index={props.index}
      >
        {(provided) => (
          <div
            className="card"
            {...provided.draggableProps}
            ref={provided.innerRef}
            {...provided.dragHandleProps}
          >
            <div className="cardupper">
              <p>{props.title}</p>
              <div style={statuscolor} className="status">
                <p>{props.status}</p>
              </div>
            </div>
            <div className="cardmid">
              <div style={prioritycolor} className="priority">
                {props.priority}
              </div>
              <div className="date">{props.date}</div>
            </div>

            <div className="cardlower">
              <div className="editdelete">
                <button id="A" onClick={removeTaskdata}>
                  {" "}
                  <Image src={decriptionicon} alt="" />
                </button>
                <button id="B" onClick={handleClick}>
                  <Image src={Vector2} alt="" />
                </button>
                <button id="B" onClick={handleDescription}>
                  <Image src={Vector3} alt="" />
                </button>
              </div>

              <Image src={props.src} alt="User Image" width={30} height={30} />
            </div>
            {provided.placeholder}
          </div>
        )}
      </Draggable>
      {removeTask && (
        <div className="removepopup">
          <div className={"removeformContainer"}>
            <div className="formTopBar">
              <Image
                className="image"
                src="/workly.svg"
                alt="User Image"
                width={100}
                height={50}
              />
              <button
                className="deleteButton"
                type="submit"
                onClick={removeTaskdata}
                // onClick={cancel}
              >
                <Image
                  src="/cross-icon.svg"
                  width={50}
                  height={50}
                  alt="cross"
                  class="crossIcon"
                />
              </button>
            </div>{" "}
            <div className="Labistro">
              <h3>Delete this Task ?</h3>
              Are you sure want to delete this Task
            </div>
            <div className="buttons">
              <button onClick={removeTaskdata} className={"submitButton"}>
                Cancel
              </button>
              <button onClick={deleteTask} className={"delete"}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      {desc && (
        <div className="removepopup">
          <div className={"removeformContainer"}>
            <div className="formTopBar">
              <Image
                className="image"
                src="/workly.svg"
                alt="User Image"
                width={100}
                height={50}
              />
              <button
                className="deleteButton"
                type="submit"
                onClick={closedesc}
                // onClick={cancel}
              >
                <Image
                  src="/cross-icon.svg"
                  width={50}
                  height={50}
                  alt="cross"
                  class="crossIcon"
                />
              </button>
            </div>{" "}
            <div className="LabistroDesc">
              {formData.description}
            </div>
          </div>
        </div>
      )}
      {editTask && (
        <div className="popup">
          <div className={"formContainer"}>
            <div className="formTopBar">
              <Image
                className="image"
                src="/workly.svg"
                alt="User Image"
                width={100}
                height={50}
              />
              <button
                className="deleteButton"
                type="submit"
                onClick={handleSubmit}
                // onClick={cancel}
              >
                <Image
                  src="/cross-icon.svg"
                  width={50}
                  height={50}
                  alt="cross"
                  class="crossIcon"
                />
              </button>
            </div>{" "}
            <form onSubmit={handleSubmit} className={"form"}>
              <div className={"formGroup"}>
                <label htmlFor="taskName">Task Name</label>
                <input
                  type="text"
                  id="taskName"
                  name="taskName"
                  value={formData.taskName}
                  onChange={handleChange}
                  placeholder="Enter task name"
                  required
                />
              </div>

              <div className={"formGroup"}>
                <label htmlFor="taskStatus">Task Status</label>
                <select
                  id="taskStatus"
                  name="taskStatus"
                  value={formData.taskStatus}
                  onChange={handleChange}
                >
                  <option value="Done">Done</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Not Started">Not Started</option>
                  <option value="Stuck">Stuck</option>
                </select>
              </div>

              <div className={"formGroup"}>
                <label htmlFor="taskPriority">Task Priority</label>
                <select
                  id="taskPriority"
                  name="taskPriority"
                  value={formData.taskPriority}
                  onChange={handleChange}
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>

              <div className={"formGroup"}>
                <label htmlFor="dueDate">Due Date</label>
                <input
                  type="date"
                  id="dueDate"
                  name="dueDate"
                  value={formData.dueDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={"formGroup"}>
                <label htmlFor="description">Description</label>
                {/* <input
                  type="text"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                /> */}
                <textarea
                  type="text"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  require
                  placeholder="Enter your description here..."
                ></textarea>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

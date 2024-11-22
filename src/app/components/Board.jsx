// // components/Card.js
// "use client"; // Add this directive at the top
// import { useState } from "react";
// import styles from "../styles/boardstyle.css";
// import Column from "./column.jsx";
// import task from "../media/cardsdata";
// import Card from "./card.jsx";
// import Image from "next/image";
// import { DragDropContext } from "react-beautiful-dnd";
// export default function Board(props) {
//   const [tasks, setTasks] = useState(task);
//   const [newTaskForm, setNewTaskForm] = useState(false);
//   const [formData, setFormData] = useState({
//     id: "", // Add this line to ensure unique ID
//     taskName: "",
//     taskStatus: "Not Started",
//     taskPriority: "Low",
//     dueDate: "",
//   });
//   const HandleClick = () => {
//     setNewTaskForm((prevNewTaskForm) => !prevNewTaskForm);
//   };
//   const handleChange = (event) => {
//     event.preventDefault();
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const newTask = {
//       id: Date.now(), // Add this line to ensure unique ID
//       title: formData.taskName,
//       status: formData.taskStatus,
//       priority: formData.taskPriority,
//       date: formData.dueDate,
//       description: formData.description,

//       // Jugaarh hai LUL
//       src: "/user3.svg",
//     };
//     setTasks((prevtasks) => [...prevtasks, newTask]);
//     setNewTaskForm((prevNewTaskForm) => !prevNewTaskForm);
//   };
//   const updateTask = (updatedTask) => {
//     setTasks((prevTasks) =>
//       prevTasks.map((task) =>
//         task.id === updatedTask.id
//           ? {
//               ...task, // Spread existing task data
//               title: updatedTask.taskName, // Update only the necessary fields
//               status: updatedTask.taskStatus,
//               priority: updatedTask.taskPriority,
//               date: updatedTask.dueDate,
//               description: updatedTask.description // Correctly use updatedTask.description
//             }
//           : task
//       )
//     );
//   };

//   const deleteTask = (taskDeleting) => {
//     setTasks((prevTasks) =>
//       prevTasks.filter((task) => task.id !== taskDeleting.id)
//     );
//   };

//   const getFilteredTasks = (status) => {
//     const filteredTasks = tasks.filter((task) => task.status === status);

//     return filteredTasks.map((onetask) => (
//       <Card
//         key={onetask.id} // Use the id as the key
//         {...onetask}
//         updateTask={updateTask}
//         deleteTask={deleteTask}
//       />
//     ));
//   };
//   const cancel = () => {
//     setNewTaskForm((prevNewTaskForm) => !prevNewTaskForm);
//   };

//   return (
//     <DragDropContext>
//     <div className="borderOuter">

//       <div className="board">
//         <div className="boardCredentials">
//           <h1 className="boardName">{props.title}</h1>
//           <p className="boardDesc">{props.description}</p>
//           <button onClick={HandleClick} id="newTaskButton">
//             New task
//           </button>
//         </div>

//         <div className="boardColumns">
//           <div>
//             <Column columnName="Done" taskElements={getFilteredTasks("Done")} />
//           </div>
//           <div>
//             <Column
//               columnName="In Progress"
//               taskElements={getFilteredTasks("In Progress")}
//             />
//           </div>
//           <div>
//             <Column
//               columnName="Not Started"
//               taskElements={getFilteredTasks("Not Started")}
//             />
//           </div>
//           <div>
//             <Column
//               columnName="Stuck"
//               taskElements={getFilteredTasks("Stuck")}
//             />
//           </div>
//         </div>
//       </div>

//       {newTaskForm && (
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
//               <button type="delete" className="deleteButton" onClick={cancel}>
//                 <Image
//                   src="/cross-icon.svg"
//                   width={30}
//                   height={30}
//                   alt="cross"
//                   class="crossIcon"
//                 />
//               </button>
//             </div>
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
//                   placeholder="Enter your description here...">
//                 </textarea>

//               </div>
//               <div className="buttons">
//                 <button type="submit" className={"submitButton"}>
//                   Create Task
//                 </button>
//                 <button type="delete" onClick={cancel} className={"delete"}>
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//     </DragDropContext>
//   );
// }

// components/Card.js
"use client"; // Add this directive at the top
import { useState } from "react";
import styles from "../styles/boardstyle.css";
import Column from "./column.jsx";
import task from "../media/cardsdata";
import Card from "./card.jsx";
import Image from "next/image";
import { DragDropContext } from "react-beautiful-dnd";
import { Color } from "three";
export default function Board(props) {
  const [tasks, setTasks] = useState(task);
  const [newTaskForm, setNewTaskForm] = useState(false);
  const [formData, setFormData] = useState({
    id: "", // Add this line to ensure unique ID
    taskName: "",
    taskStatus: "Not Started",
    taskPriority: "Low",
    dueDate: "",
  });
  const HandleClick = () => {
    setNewTaskForm((prevNewTaskForm) => !prevNewTaskForm);
  };
  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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

    const newTask = {
      id: Date.now().toString(), // Ensure unique and string ID
      title: formData.taskName,
      status: taskStatus,
      priority: formData.taskPriority,
      date: formData.dueDate,
      description: formData.description,
      src: "/user3.svg",
    };

    setTasks((prevtasks) => [...prevtasks, newTask]);
    setNewTaskForm((prevNewTaskForm) => !prevNewTaskForm);
  };
  const updateTask = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === updatedTask.id
          ? {
              ...task, // Spread existing task data
              title: updatedTask.taskName, // Update only the necessary fields
              status: updatedTask.taskStatus,
              priority: updatedTask.taskPriority,
              date: updatedTask.dueDate,
              description: updatedTask.description, // Correctly use updatedTask.description
            }
          : task
      )
    );
  };

  const deleteTask = (taskDeleting) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== taskDeleting.id)
    );
  };

  const getFilteredTasks = (status) => {
    return tasks
      .filter((task) => task.status === status)
      .map((onetask, index) => (
        <Card
          key={onetask.id}
          id={onetask.id}
          draggableId={onetask.id}
          {...onetask}
          index={index}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      ));
  };

  const cancel = () => {
    setNewTaskForm((prevNewTaskForm) => !prevNewTaskForm);
  };
  // const handleDragEnd = (result) => {
  //   const { destination, source } = result;

  //   // Check if the destination is valid
  //   if (!destination) return;

  //   // Check if the item was dropped in the same position
  //   if (
  //     destination.index === source.index &&
  //     destination.droppableId === source.droppableId
  //   )
  //     return;

  //   const newTasks = Array.from(tasks);
  //   const [movedTask] = newTasks.splice(source.index, 1); // Remove the dragged task
  //   newTasks.splice(destination.index, 0, movedTask); // Add it back at the new position

  //   setTasks(newTasks); // Update the tasks state
  // };
  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    // If there's no valid destination (e.g., dropped outside of a column), do nothing
    if (!destination) return;

    // If the item is dropped in the same place, do nothing
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    // Find the task being moved
    const task = tasks.find((t) => t.id === draggableId);

    // Update the task's status based on the destination column
    // let updatedTask = { ...task, status: destination.droppableId };

    const currentDate = new Date().toISOString().split("T")[0];
    const taskStatus =
      new Date(task.date) < new Date(currentDate)
        ? "Stuck"
        : destination.droppableId;

    let updatedTask = { ...task, status: taskStatus };

    // Remove the task from the source column
    const newTasks = Array.from(tasks.filter((t) => t.id !== draggableId));

    // Insert the task into the destination column at the new position
    newTasks.splice(destination.index, 0, updatedTask);

    // Update the tasks state with the new task order and status
    setTasks(newTasks);
  };

  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="borderOuter">
          <div className="board">
            <div className="boardCredentials">
              <h1 className="boardName">{props.title}</h1>
              <p className="boardDesc">{props.description}</p>
              <button onClick={HandleClick} id="newTaskButton">
                New task
              </button>
            </div>

            <div className="boardColumns">
              <div>
                <Column
                  columnName="Done"
                  taskElements={getFilteredTasks("Done")}
                  id="1"
                  droppableId="Done"
                />
              </div>
              <div>
                <Column
                  columnName="In Progress"
                  taskElements={getFilteredTasks("In Progress")}
                  id="2"
                  droppableId="In Progress"
                />
              </div>
              <div>
                <Column
                  columnName="Not Started"
                  taskElements={getFilteredTasks("Not Started")}
                  id="3"
                  droppableId="Not Started"
                />
              </div>
              <div>
                <Column
                  columnName="Stuck"
                  taskElements={getFilteredTasks("Stuck")}
                  id="4"
                  droppableId="Stuck"
                />
              </div>
            </div>
          </div>

          {newTaskForm && (
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
                    type="delete"
                    className="deleteButton"
                    onClick={cancel}
                  >
                    <Image
                      src="/cross-icon.svg"
                      width={30}
                      height={30}
                      alt="cross"
                      class="crossIcon"
                    />
                  </button>
                </div>
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
                  <div className="buttons">
                    <button type="submit" className={"submitButton"}>
                      Create Task
                    </button>
                    <button type="delete" onClick={cancel} className={"delete"}>
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </DragDropContext>
    </>
  );
}

// components/Card.js
import styles from "../styles/columnstyles.css";
import decriptionicon from "../media/Vector.svg";
import task from "../media/cardsdata";
import Card from "./card.jsx";
import { Droppable } from "react-beautiful-dnd";
import Image from "next/image";

export default function Column(props) {
  let columnColor = { backgroundcolor: "white" };
  if (props.columnName === "Done") {
    columnColor = { backgroundColor: "#69FF66" };
  } else if (props.columnName === "In Progress") {
    columnColor = { backgroundColor: "#A56EFF" };
  } else if (props.columnName === "Stuck") {
    columnColor = { backgroundColor: "#FF005C" };
  } else if (props.columnName === "Not Started") {
    columnColor = { backgroundColor: "#8E8E8E" };
  }
  return (
    <>
      <div style={columnColor} className="columnTitle">
        <p>{props.columnName}</p>
      </div>
      <Droppable droppableId={String(props.droppableId)}>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="taskSpace"
          >
            {props.taskElements}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </>
  );
}

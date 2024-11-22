// components/Card.js
import styles from "../styles/columnstyles.css";
import decriptionicon from "../media/Vector.svg";
import task from "../media/cardsdata";
import Card from "./card.jsx";
import { Droppable } from "react-beautiful-dnd";
import Image from "next/image";
import myboard from "../media/myboard.svg";

export default function sidebarcard(props) {

  return (
    <>
        <button id="sidebarbtn" onClick={props.onClick}>
            {" "}
            <Image src={myboard} alt="" />
            {props.name}
        </button>
    </>
  );
}

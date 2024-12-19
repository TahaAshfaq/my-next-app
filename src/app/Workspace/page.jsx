"use client"; // Add this directive at the top
import styles from "../styles/dashboardstyle.css";
import Board from "../components/Board.jsx";
import { useState } from "react";
import Image from "next/image";
import pana from "../media/pana.svg";
import direction from "../media/direction.svg";

import Sidebarcard from "../components/Sidebarcard.jsx";

export default function Dashboard() {
  const boardsarr = [];
  const sidebarcardarr = [];

  const [Boards, setBoards] = useState(boardsarr);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [sidebarcard, setsidebarcard] = useState(sidebarcardarr);

  const [formData, setFormData] = useState({
    BoardName: "", // Add this line to ensure unique ID
    BoardDescription: "",
  });
  const [newBoardForm, setNewBoardForm] = useState(false);
  const HandleClick = () => {
    setNewBoardForm((prevBoardForm) => !prevBoardForm);
  };

  const cancel = () => {
    setNewBoardForm((prevBoardForm) => !prevBoardForm);
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
    if (Boards.some((board) => board.BoardName === formData.BoardName)) {
      alert("Board Name already exists");
    } else {
      const newBoard = {
        BoardName: formData.BoardName,
        BoardDescription: formData.BoardDescription,
      };
      setBoards((prevBoards) => [...prevBoards, newBoard]);

      const newsidebarcard = {
        BoardName: formData.BoardName,
      };
      setsidebarcard((prevsidebarcard) => [...prevsidebarcard, newsidebarcard]);
      setNewBoardForm((prevBoardForm) => !prevBoardForm);
    }
  };

  const handleSidebarClick = (boardName) => {
    const board = Boards.find((b) => b.BoardName === boardName);
    console.log(board.BoardName);
    setSelectedBoard(board);
  };

  const showsidebarcards = sidebarcard.map((card) => (
    <Sidebarcard
      key={card.BoardName}
      name={card.BoardName}
      onClick={() => handleSidebarClick(card.BoardName)}
    />
  ));

  let SelectedBoard =
    sidebarcard.length > 0
      ? sidebarcard[sidebarcard.length - 1].BoardName
      : null;

  const showboard = () => {
    if (!selectedBoard) {
      return <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex", // optional, for centering child elements
        justifyContent: "center", // optional, for centering child elements
        alignItems: "center", // optional, for centering child elements
      }}
    >
        <div>
          <Image src={direction} />
          <p
            style={{
              fontFamily: "inherit",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Please{" "}
            <span
              style={{
                color:"#FF5925"
              }}
            >
              Select
            </span>{" "}
            a board from the sidebar
          </p>
        </div>
    </div>;
    }

    return (
      <Board
        key={selectedBoard.BoardName}
        description={selectedBoard.BoardDescription}
        title={selectedBoard.BoardName}
      />
    );
  };

  // const Sidebarcard = ({ BoardName }) => <div>{BoardName}</div>;

  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="sidebarinner">
        <Image
                className="image"
                src="/workly.svg"
                alt="User Image"
                width={100}
                height={50}
              />
          <div className="search-container">
            <input
              type="text"
              placeholder="Search..."
              className="search-field"
            />
          </div>
          <div id="sidebarcards">
            {sidebarcard.length > 0 ? (
              showsidebarcards
            ) : (
              <p>No boards available</p>
            )}
          </div>
        </div>

        <div className="add-button-container">
          <button className="add-button">
            <span className="plus-icon" onClick={HandleClick}>
              +
            </span>
          </button>
        </div>
      </div>
      <div 
        style={{
          height: "100%",
          width: "100%",
          display: "flex", // optional, for centering child elements
          justifyContent: "center", // optional, for centering child elements
          alignItems: "center", // optional, for centering child elements
        }}
      >
        {SelectedBoard ? (
          showboard()
        ) : (
          <div>
            <Image src={pana} />
            <p
              style={{
                fontFamily: "inherit",
                fontSize: "32px",
                fontWeight: "bold",
              }}
            >
              No{" "}
              <span
                style={{
                  color:"#FF5925"
                }}
              >
                boards
              </span>{" "}
              to show
            </p>
          </div>
        )}
      </div>

      {newBoardForm && (
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
              <button className="deleteButton" type="submit" onClick={cancel}>
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
                <label htmlFor="taskName">Board Name</label>
                <input
                  type="text"
                  id="taskName"
                  name="BoardName"
                  value={formData.BoardName}
                  onChange={handleChange}
                  placeholder="Enter task name"
                  required
                />
              </div>
              <div className={"formGroup"}>
                <label htmlFor="taskName">Board Description</label>
                <input
                  type="text"
                  id="taskName"
                  name="BoardDescription"
                  value={formData.BoardDescription}
                  onChange={handleChange}
                  placeholder="Enter task name"
                  required
                />
              </div>
              <div className="buttons">
                <button onClick={cancel} className={"submitButton"}>
                  Cancel
                </button>
                <button onClick={handleSubmit} className={"delete"}>
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

import React from 'react';
import styles from "../styles/customboard.css";
import Framee from "../media/Frame 193 1.svg";
import Frameee from "../media/Frame 195 1.svg";
import Image from "next/image";

function CustomBoard() {
  return (
    <div className="customboardspre">
    <section className="custom-board">
      <div className="custom-board-section">
      <Image className='img' src={Framee} alt="" />
      <div className="custom-board-content">
          <h2 className="custom-board-title">Your own custom Board for the workflow you require</h2>
          <p className="custom-board-description">
            Simply signup in the application and start building your board by selecting the suitable columns the proper management of your workflow means a lot to us
          </p>
        </div>
      </div>
      <div className="custom-board-section2">
        <div className="custom-board-content">
          <h2 className="custom-board-title">Select the Layout that bests suits your workflow the</h2>
          <p className="custom-board-description">
            Whether you Like tables or cards for simplicity or a full fledge Kanban Board we got you covered with our Layout feature you can select the layout you prefer
          </p>
        </div>
        <Image className='img' src={Frameee} alt="" />
      </div>
    </section>
    </div>
  );
}

export default CustomBoard;


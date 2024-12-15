import React from 'react';
import styles from "../styles/workspace.css";
import workspacepic from "../media/Frame 200 1.svg";

import Image from "next/image";
function Workspace() {
  return (
    <div className="workspacepre">
    <section className="workspace">
      <h2 className="workspace-title">
        Manage Workspaces Like a <span className="workspace-highlight">Pro</span>
      </h2>
      <p className="workspace-description">
        With our Latest Battery and simple user interface and user experience management of work flow has become easier and efficient
      </p>
      <div className="workspace-image">
        <Image src={workspacepic} alt="" />
      </div>
    </section>
    </div>
  );
}

export default Workspace;


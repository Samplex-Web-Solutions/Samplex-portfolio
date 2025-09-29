import { esentialTools } from "../constants";
// import { useState } from "react";

const Tools = () => {
  return (
    <div className="essentialTools mt-3">
      <div className="toolsIntro">
        <span className="stackTitle  font-bold font-mono w-[100%] flex flex-row-reverse items-center gap-3 justify-end mb-2">My Tech Stack <div className="arrow"></div></span>
        <span className="stackTD">
          I work with a modern and efficient tech stack to build fast,
          responsive, and user-friendly web applications.
        </span>
      </div>
      <div className="toolsList">
        {esentialTools.map((tool) => (
          <span key={tool.id} className="toolsStyle group">
            <div className="img-wrapper ">
              <img src={tool.imgPath} alt={tool.name} className="toolImg" />
            </div>
            <div className="essentialtoolsName flex flex-col">
              <span className="toolName">{tool.name}</span>
            </div>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Tools;

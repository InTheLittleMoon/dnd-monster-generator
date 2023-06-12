import React from "react";
import "./User-Choice-Container.css";

export default function UserChoiceContainer() {
  return (
    <div className="User-Choice-Container">
      <form>
        <input placeholder="CR"></input>
        <label>Armor Rating:</label>
        <label>Durability:</label>
        <label>Accuracy:</label>
        <label>Lethality:</label>
        <label>DC Difficulty:</label>
        <label>Save Bonus:</label>
      </form>
    </div>
  );
}

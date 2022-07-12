import React from "react";

export default function MealBadge(props) {
  return (
    <div className="meal--badge bold">
      {props.name}
    </div>
  )
}
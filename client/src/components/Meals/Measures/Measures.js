import React from "react";

export default function Measures(props) {

  console.log(props)

  const summaryPoints = props.extendedIngredients.map((measures) => {
    return (
      <ul>
          <li>
          {measures.original}
          </li>
        </ul>
    )
  })
  return (
    <div className="recipe--measures">
      <h1>Summary:</h1>
        {summaryPoints}
      <h2>Credit:</h2>
       <a className="link--ref" href={props.sourceUrl}>{props.sourceName}</a>
    </div>
  )
}
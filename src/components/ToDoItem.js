import React from "react"

function ToDoItem(props) {
  const completedStyleChange = {
    textDecoration: "line-through"
  }
  return (
    <div className="to-do-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <p style={props.item.completed ? completedStyleChange : null}>
        {props.item.text}
      </p>
      <button onClick={() => props.deleteToDo(props.item.id)}>Delete</button>
    </div>
  )
}
export default ToDoItem

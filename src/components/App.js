import React from "react"
import ToDoItem from "./ToDoItem"
import toDosData from "../data/toDosData"
import AddToDoForm from "./AddToDoForm"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      toDos: toDosData
    }
    this.handleChange = this.handleChange.bind(this)
    this.deleteToDo = this.deleteToDo.bind(this)
    this.addToDoForm = this.addToDoForm.bind(this)
  }

  deleteToDo(id) {
    this.setState(prevState => {
      const deletedToDos = prevState.toDos.filter(toDo => {
        return toDo.id !== id
      })
      this.setState({
        toDos: deletedToDos
      })
    })
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedToDos = prevState.toDos.map(toDo => {
        if (toDo.id === id) {
          toDo.completed = !toDo.completed
        }
        return toDo
      })
      return {
        toDos: updatedToDos
      }
    })
  }

  addToDoForm = toDo => {
    toDo.id = Math.random()
    let toDos = [...this.state.toDos, toDo]
    this.setState({
      toDos
    })
  }

  render() {
    const toDoItems = this.state.toDos.map(item => (
      <ToDoItem
        key={item.id}
        item={item}
        handleChange={this.handleChange}
        deleteToDo={this.deleteToDo}
      />
    ))
    return (
      <div className="to-do-wrapper">
        {toDoItems}
        <AddToDoForm addToDoForm={this.addToDoForm} />
      </div>
    )
  }
}

export default App

import React from "react"

class AddToDoForm extends React.Component {
  state = {
    text: ""
  }

  addToDo = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addToDoForm(this.state)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label className="add-to-do-label">Add a new to do item</label>
          <input
            className="add-to-do-input"
            type="text"
            onChange={this.addToDo}
          />
        </form>
      </div>
    )
  }
}

export default AddToDoForm

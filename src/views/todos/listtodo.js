import React from "react";
import "./listtodo.scss";
import AddToDo from "./addtodo";
import { toast } from "react-toastify";
import Color from "../hoc/color";

class ListToDo extends React.Component {
  state = {
    listTodos: [
      { id: "todo1", title: "Doing homework" },
      { id: "todo2", title: "Making videos" },
      { id: "todo3", title: "Fixing bugs" },
    ],
    editTodo: {},
  };

  addNewTodo = (todo) => {
    // let currentListTodo = this.state.listTodos;
    // currentListTodo.push(todo);
    this.setState({
      // listTodos: currentListTodo,
      listTodos: [...this.state.listTodos, todo],
    });
    toast.success("Wow so easy!");
  };

  handleEditTodo = (todo) => {
    let { editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    //save
    if (!isEmptyObj && editTodo.id === todo.id) {
      let listTodosCopy = [...this.state.listTodos];
      let objectIndex = listTodosCopy.findIndex((item) => item.id === todo.id);
      listTodosCopy[objectIndex].title = editTodo.title;
      this.setState({ listTodos: listTodosCopy, editTodo: {} });
      toast.success("Update todo succeed!");
      return;
    }
    //edit
    this.setState({
      editTodo: todo,
    });
  };

  handleOnchangeEditTodo = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({ editTodo: editTodoCopy });
  };

  handleDeleteTodo = (todo) => {
    // console.log(">>> check to do: ", todo);
    let currentTodo = this.state.listTodos;
    currentTodo = currentTodo.filter((item) => item.id !== todo.id);
    this.setState({
      listTodos: currentTodo,
    });
    toast.success("Delete succeed");
  };

  render() {
    let { listTodos, editTodo } = this.state;
    // let listTodos = this.state.listTodos;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    return (
      <div className="list-todo-container">
        <p>
          Simple ToDo Apps with React.js
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
        <AddToDo addNewTodo={this.addNewTodo} />
        <div className="list-todo-content">
          {listTodos &&
            listTodos.length > 0 &&
            listTodos.map((item, index) => {
              return (
                <>
                  <div className="todo-child" key={item.id}>
                    {isEmptyObj ? (
                      <span>
                        {index + 1} - {item.title}
                      </span>
                    ) : (
                      <>
                        {editTodo.id === item.id ? (
                          <span>
                            {index + 1} -{" "}
                            <input
                              value={editTodo.title}
                              onChange={(event) =>
                                this.handleOnchangeEditTodo(event)
                              }
                            />
                          </span>
                        ) : (
                          <span>
                            {index + 1} - {item.title}
                          </span>
                        )}
                      </>
                    )}
                    <button
                      onClick={() => this.handleEditTodo(item)}
                      className="edit"
                    >
                      {!isEmptyObj && editTodo.id === item.id ? "Save" : "Edit"}
                    </button>
                    <button
                      className="delete"
                      onClick={() => this.handleDeleteTodo(item)}
                    >
                      Delete
                    </button>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Color(ListToDo);

import './index.css'

const TodoItem = props => {
  const {eachTodoList, deleteTodo} = props
  const {id, title} = eachTodoList

  const onDeleteTodoItem = () => {
    deleteTodo(id)
  }
  return (
    <li className="list-container">
      <p className="title">{title}</p>
      <button type="button" className="button" onClick={onDeleteTodoItem}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem

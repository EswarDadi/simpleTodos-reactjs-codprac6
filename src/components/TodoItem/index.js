const TodoItem = props => {
  const {eachTodoList} = props
  const {id, title} = eachTodoList
  return (
    <div>
      <li>
        <p>{title}</p>
      </li>
    </div>
  )
}

export default TodoItem

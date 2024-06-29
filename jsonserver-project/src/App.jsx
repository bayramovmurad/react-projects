import { useDispatch, useSelector } from "react-redux";
import { useAddTodoMutation, useDeleteTodoMutation, useGetTodosQuery, useUpdateTodoMutation } from "./redux/api/apiSlice"
import { setCheckboxState, setCreateTodo, setEditTodo } from "./redux/state/todoSlice";

const App = () => {
  const dispatch = useDispatch();
  const { createTodo, editTodo } = useSelector(state => state.data);
  const { data: todos, isLoading } = useGetTodosQuery();
  const [addTodo] = useAddTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (createTodo === "") {
      alert("Todo can't be empty");
      return;
    }
    if (editTodo) {
      updateTodo({ id: editTodo.id, title: createTodo, completed: editTodo.completed });
      dispatch(setEditTodo(null));
    } else {
      addTodo({ userId: 1, title: createTodo, completed: false });
    }
    dispatch(setCreateTodo(""));
  };

  const editTodoClick = (todo) => {
    dispatch(setEditTodo(todo));
    dispatch(setCreateTodo(todo.title));
  };

  const handleCheckboxChange = (todo) => {
    updateTodo({ ...todo, completed: !todo.completed });
  };

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="ml-8 mt-8">
      <form onSubmit={handleSubmit} className="flex gap-x-8 mb-8 items-center">
        <input value={createTodo} onChange={e => dispatch(setCreateTodo(e.target.value))} className="border border-black" type="text" />
        <input type="submit" value={editTodo ? "Update Todo" : "Add Todo"} className="py-[1px] rounded-lg px-2 border border-black bg-white text-black hover:bg-black hover:text-white hover:border-white" />
      </form>
      {todos?.map((item) => (
        <div className="flex gap-x-4 mb-2" key={item.id}>
          <input type="checkbox" checked={item.completed} onChange={() =>handleCheckboxChange(item)}/>
          <h2 className="text-2xl font-semibold">{item.title}</h2>
          <div className="flex gap-x-4">
            <button className="py-[1px] rounded-lg px-2 border border-black bg-white text-black hover:bg-black hover:text-white hover:border-white" onClick={() => deleteTodo({ id: item.id })}>delete</button>
            <button className="py-[1px] rounded-lg px-2 border border-black bg-white text-black hover:bg-black hover:text-white hover:border-white" onClick={() => editTodoClick(item)}>edit</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;

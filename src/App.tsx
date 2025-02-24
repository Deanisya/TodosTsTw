import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TodoSummary from './components/TodoSummary';
import useTodos from './hooks/useTodos';

function App() {
	const { todos, addTodo, setTodoCompleted, deleteAllCompleted, deleteTodo } = useTodos();

	return (
		<main className='py-10 h-screen space-y-5 bg-gray-900 overflow-auto'>
			<h1 className='text-3xl font-bold underline text-center text-white'>Todo List 2.0</h1>
			<div className='max-w-lg mx-auto bg-slate-100 rounded-mb p-5'>
				<AddTodoForm onSubmit={addTodo} />
				<TodoList todos={todos} onCompletedChange={setTodoCompleted} onDelete={deleteTodo} />
			</div>
			<TodoSummary todos={todos} deleteAllCompleted={deleteAllCompleted} />
		</main>
	);
}

export default App;

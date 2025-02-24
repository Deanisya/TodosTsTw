import { useState } from 'react';

interface AddTodoFormProps {
	onSubmit: (title: string) => void;
}

export default function AddTodoForm({ onSubmit }: AddTodoFormProps) {
	const [input, setInput] = useState('');

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (!input.trim()) return;

		onSubmit(input);
		setInput('');
	}

	return (
		<form className='flex' onSubmit={handleSubmit}>
			<input className='grow rounded-s-md border border-gray-400 p-2 mb-3' placeholder='What need to done?' value={input} onChange={e => setInput(e.target.value)} />
			<button type='submit' className='w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-800 mb-3'>
				Add
			</button>
		</form>
	);
}

import { arrow } from '../assets';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const AddTask = () => {
	const [titleData, setTitleData] = useState('');
	const [detailsData, setDetailsData] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [highestId, setHighestId] = useState(0);
	const navigate = useNavigate();

	//This is to set the id of the Object to be incremental
	useEffect(() => {
		const fetchTasks = async () => {
			try {
				const response = await fetch('http://localhost:3000/todo');
				if (!response.ok) {
					throw new Error(`Error fetching tasks: ${response.status}`);
				}
				const data = await response.json();
				const ids = data.map((task) => task.id);
				const maxId = Math.max(...ids);
				setHighestId(maxId);
			} catch (err) {
				setError(err.message);
			}
		};
		fetchTasks();
	}, []);

	//function to handle the submit request
	const handleAddNewTask = async (e) => {
		e.preventDefault();

		if (titleData === '' || detailsData === '') {
			alert('Please fill all the fields');
			return;
		}
		const newId = highestId + 1;

		//POST request to create a new instance
		const postOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				userId: 1,
				id: newId.toString(),
				title: titleData,
				details: detailsData,
			}),
		};

		//fetching the API for the POST request
		setLoading(true);
		try {
			const response = await fetch('http://localhost:3000/todo', postOptions);
			if (!response.ok) {
				throw new Error(`Error: ${response.status}`);
			}
			await response.json();
			// alert('...new Todo added');
			setTitleData('');
			setDetailsData('');
			document.getElementById('validate').innerHTML = 'Submitted successfully';
		} catch (err) {
			setError(err.message);
			alert('Failed to add task');
		} finally {
			setLoading(false);
			navigate('/');
		}
	};

	return (
		<div className="overflow-hidden">
			<div className="bg-[#9395D3]">
				<div className="flex mx-4 py-5 space-x-5 items-center">
					<Link to="/">
						<img src={arrow} alt={arrow} className="w-6 h-6" />
					</Link>
					<div className="font-semibold text-2xl text-white">Add Task</div>
				</div>
			</div>
			<form
				className="flex flex-col mx-6 space-y-8 my-12"
				onSubmit={handleAddNewTask}
			>
				<input
					type="text"
					placeholder="Title"
					className="h-10 px-4 border-b-2 focus:outline-none"
					value={titleData}
					onChange={(e) => setTitleData(e.target.value)}
				/>
				<input
					type="text"
					placeholder="Detail"
					className="h-10 px-4 border-b-2 focus:outline-none"
					value={detailsData}
					onChange={(e) => setDetailsData(e.target.value)}
				/>
				<button
					type="submit"
					className="font-semibold text-xl text-white text-center bg-[#9395D3] py-3.5 rounded-2xl"
					disabled={loading}
				>
					{loading ? 'Adding...' : 'ADD'}
				</button>
				<div
					id="validate"
					className="text-green-500 text-base font-normal"
				></div>
			</form>
			{error && <div className="text-red-500 text-center">{error}</div>}
		</div>
	);
};

export default AddTask;

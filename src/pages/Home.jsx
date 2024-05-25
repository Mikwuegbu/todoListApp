import { calendar, checkmark, list, pen, recycleBin, tick } from '../assets';
import { Link } from 'react-router-dom';
import useFetch from '../components/useFetch';

const Home = () => {
	const { data, loading } = useFetch('http://localhost:3000/todo');

	//Function to handle Delete of Tasks and reload the page
	const handlerDeleteTask = (task) => {
		fetch(`http://localhost:3000/todo/${task}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		}).then((res) => {
			if (!res.ok) {
				throw new Error(`Error deleting ${res.status}`);
			}
			return console.log(
				res.json().then((data) => data.title + 'has been deleted')
			);
		});
		window.location.reload();
	};

	return (
		<div className="">
			<div className="bg-[#dadcec]">
				<div className="bg-[#9395D3]">
					<div className="flex justify-between mx-4 py-5">
						<div className="font-semibold text-2xl text-white">TODO APP</div>
						<img src={calendar} alt={calendar} className="w-10 h-10" />
					</div>
				</div>
				<div className="flex flex-col relative">
					<div className="flex-grow">
						{loading ? (
							<p className="py-8 px-6">Loading data...</p>
						) : (
							data.map((todo, index) => (
								<div
									key={todo.id || index}
									className=" bg-white mx-4 my-4 border border-opacity-35 rounded-2xl hover:shadow-md"
								>
									<div className="flex justify-between px-4 py-5">
										<div className="space-y-2">
											<h1 className="font-semibold text-sm text-[#9395D3]">
												{todo.title}
											</h1>
											<p className="text-base">{todo.details}</p>
										</div>
									</div>
									<div className="flex space-x-6 justify-end py-4 px-4">
										<Link to={`/edittask`}>
											<img src={pen} alt={pen} className="w-5 h-5" />
										</Link>
										<button onClick={() => handlerDeleteTask(todo.id)}>
											<img
												src={recycleBin}
												alt={recycleBin}
												className="w-5 h-5"
											/>
										</button>
										<button>
											<img
												src={checkmark}
												alt={checkmark}
												className="w-5 h-5"
											/>
										</button>
									</div>
								</div>
							))
						)}
					</div>
					<div className="bottom-14 fixed right-5 py-10">
						<Link
							to="/addtask"
							className="text-white bg-[#9395D3] font-semibold text-3xl px-6 py-4 rounded-full"
						>
							+
						</Link>
					</div>
					<div className="bg-white fixed -bottom-2 flex justify-around w-full py-4">
						<div className="flex flex-col items-center">
							<img src={list} alt={list} className="w-4 h-4" />
							<p className="text-xs pt-1.5">All</p>
						</div>
						<div className="flex flex-col items-center">
							<img src={tick} alt={tick} className="w-4 h-4" />
							<p className="text-xs pt-1.5">Completed</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;

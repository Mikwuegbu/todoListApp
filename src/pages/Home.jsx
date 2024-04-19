import { calendar, checkmark, list, pen, recycleBin, tick } from '../assets';
import { Link } from 'react-router-dom';

const Home = () => (
	<div className="">
		<div className="bg-[#dadcec]">
			<div className="bg-[#9395D3]">
				<div className="flex justify-between mx-4 py-5">
					<div className="font-semibold text-2xl text-white">TODO APP</div>
					<img src={calendar} alt={calendar} className="w-10 h-10" />
				</div>
			</div>
			<div className="flex flex-col h-screen relative">
				<div className="flex-grow">
					<div className=" bg-white mx-4 my-4 border border-opacity-35 rounded-2xl hover:shadow-md">
						<div className="flex justify-between px-4 py-5">
							<div className="space-y-2">
								<h1 className="font-semibold text-sm text-[#9395D3]">
									TODO TITLE
								</h1>
								<p className="text-base">TO do list</p>
							</div>
							<div className="flex space-x-6 items-center">
								<Link to="/edittask">
									<img src={pen} alt={pen} className="w-5 h-5" />
								</Link>
								<button>
									<img src={recycleBin} alt={recycleBin} className="w-5 h-5" />
								</button>
								<button>
									<img src={checkmark} alt={recycleBin} className="w-5 h-5" />
								</button>
							</div>
						</div>
					</div>
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

export default Home;

import { calendar, checkmark, pen, recycleBin } from '../assets';
import { Link } from 'react-router-dom';

const Home = () => (
	<div className="overflow-hidden relative">
		<div className="bg-[#9395D3]">
			<div className="flex justify-between mx-4 py-5">
				<div className="font-semibold text-2xl text-white">TODO APP</div>
				<img src={calendar} alt={calendar} className="w-10 h-10" />
			</div>
		</div>
		<div>
			<div className=" mx-4 my-4 border border-opacity-35 rounded-2xl hover:shadow-md">
				<div className="flex justify-between px-4 py-5">
					<div className="space-y-2">
						<h1 className="font-semibold text-sm text-[#9395D3]">TODO TITLE</h1>
						<p className="text-base">TO do list</p>
					</div>
					<div className="flex space-x-6 items-center">
						<button>
							<img src={pen} alt={pen} className="w-5 h-5" />
						</button>
						<button>
							<img src={recycleBin} alt={recycleBin} className="w-5 h-5" />
						</button>
						<button>
							<img src={checkmark} alt={recycleBin} className="w-5 h-5" />
						</button>
					</div>
				</div>
			</div>
			<div className="">
				<Link
					to="/addtask"
					className="text-white bg-[#9395D3] font-semibold text-3xl px-6 py-4 rounded-full"
				>
					+
				</Link>
			</div>
		</div>
		<div>
			<div className="flex">
				<img src="" alt="" srcset="" />
				<img src="" alt="" srcset="" />
				<p>Hello</p>
			</div>
		</div>
	</div>
);

export default Home;

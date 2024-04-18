import { arrow } from '../assets';
import { Link } from 'react-router-dom';

const EditTask = () => (
	<div className="overflow-hidden">
		<div className="bg-[#9395D3]">
			<div className="flex mx-4 py-5 space-x-5 items-center">
				<Link to="/">
					<img src={arrow} alt={arrow} className="w-6 h-6" />
				</Link>
				<div className="font-semibold text-2xl text-white">Edit Task</div>
			</div>
		</div>
		<form className="flex flex-col mx-6 space-y-8 my-12">
			<input
				type="text"
				placeholder="Title"
				className="h-10 px-4 border-b-2 focus:outline-none"
			/>
			<input
				type="text"
				placeholder="Detail"
				className="h-10 px-4 border-b-2 focus:outline-none"
			/>
			<div className="flex space-x-8 self-center">
				<button className="font-semibold text-xl text-white text-center bg-[#9395D3] px-10 py-3.5 rounded-2xl">
					Update
				</button>
				<Link
					to="/"
					className="font-semibold text-xl text-white text-center bg-[#9395D3] px-10 py-3.5 rounded-2xl"
				>
					Cancel
				</Link>
			</div>
		</form>
	</div>
);

export default EditTask;

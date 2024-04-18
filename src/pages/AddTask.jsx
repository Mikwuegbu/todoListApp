import { arrow } from '../assets';
import { Form, Link } from 'react-router-dom';

const AddTask = () => (
	<div className="overflow-hidden">
		<div className="bg-[#9395D3]">
			<div className="flex mx-4 py-5 space-x-5 items-center">
				<Link to="/">
					<img src={arrow} alt={arrow} className="w-6 h-6" />
				</Link>
				<div className="font-semibold text-2xl text-white">ADD TASK</div>
			</div>
		</div>
	</div>
);

export default AddTask;

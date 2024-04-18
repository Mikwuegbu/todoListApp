import { arrow } from '../assets';
import { Link } from 'react-router-dom';

const CompletedTasks = () => (
	<div className="bg-[#9395D3]">
		<div className="flex mx-4 py-5 space-x-5 items-center">
			<Link to="/">
				<img src={arrow} alt={arrow} className="w-6 h-6" />
			</Link>
			<div className="font-semibold text-2xl text-white">Completed Task</div>
		</div>
	</div>
);

export default CompletedTasks;

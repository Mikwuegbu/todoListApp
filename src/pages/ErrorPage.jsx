import { Link } from 'react-router-dom';
import { arrow } from '../assets';

const ErrorPage = () => (
	<div className="overflow-hidden">
		<div className="bg-[#9395D3]">
			<div className="flex mx-4 py-5 space-x-5 items-center">
				<Link to="/">
					<img src={arrow} alt={arrow} className="w-6 h-6" />
				</Link>
				<div className="font-semibold text-2xl text-white">Page Not Found</div>
			</div>
		</div>
		<div className="flex flex-col">
			<h1 className="my-8 font-semibold text-3xl text-center">
				404!! <br /> Page cannot be found
			</h1>
			<button className="">
				<Link to="/" className="underline ">
					Go back
				</Link>
			</button>
		</div>
	</div>
);

export default ErrorPage;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddTask from './pages/AddTask';
import EditTask from './pages/EditTask';
import CompletedTask from './pages/CompletedTasks';
function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="addtask" element={<AddTask />} />
					<Route path="edittask" element={<EditTask />} />
					<Route path="completedtask" element={<CompletedTask />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;

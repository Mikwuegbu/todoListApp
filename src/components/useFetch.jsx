import { useEffect, useState } from 'react';

const useFetch = (url, options) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		//Promise version for fetching data from the server
		let isMounted = true;
		const FetchData = () => {
			setLoading(true);
			fetch(url, options)
				.then((res) => {
					if (!res.ok) {
						throw new Error(`Fetching ${url} failed: ${res.status}`);
					}
					return res.json();
				})
				.then((data) => {
					if (isMounted) {
						setData(data);
						setLoading(false);
					}
				})
				.catch((err) => {
					if (isMounted) {
						setError(err.message);
						setLoading(false);
					}
				});
		};

		//Async/ Await version of fetching from an API endpoints
		// const FetchData = async () => {
		// 	setLoading(true);
		// 	try {
		// 		const res = await fetch(url, options);
		// 		if (!res.ok) {
		// 			throw new error(`Fetching ${url} failed: ${res.status}`);
		// 		}
		// 		const data = await res.json();
		// 		if (isMounted) {
		// 			setData(data);
		// 			setLoading(false);
		// 		}
		// 	} catch (error) {
		// 		if (isMounted) {
		// 			setError(error.message);
		// 			setLoading(false);
		// 		}
		// 	}
		// };

		FetchData();
		return () => {
			isMounted = false;
		};
	}, [url, options, error]);

	return { data, loading, error };
};

export default useFetch;

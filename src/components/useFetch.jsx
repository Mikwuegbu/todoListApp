import { useEffect, useState } from 'react';

const useFetch = (url, options) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		let isMounted = true;

		const fetchData = () => {
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

		fetchData();
		return () => {
			isMounted = false;
		};
	}, [url, options]);

	return { data, loading, error };
};

export default useFetch;

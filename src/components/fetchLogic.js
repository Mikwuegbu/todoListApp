// FetchLogic.js to seperate fetching logic

const fetchLogic = (url, options) => {
	return fetch(url, options).then((response) => {
		if (!response.ok) {
			throw new Error(`Error: ${response.status}`);
		}
		return response.json();
	});
};

export default fetchLogic;

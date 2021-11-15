export const setItemToLocalStorage = value => {
	const data = window.localStorage.setItem('tasks', JSON.stringify(value))

	return data
}

export const getItemFromLocalStorage = value => {
	const data = JSON.parse(window.localStorage.getItem(value))

	return data
}

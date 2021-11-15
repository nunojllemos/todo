const indexToWeekDay = index => {
	let day

	switch (index) {
		case 0:
			day = 'Sunday'
			break
		case 1:
			day = 'Monday'
			break
		case 2:
			day = 'Thursday'
			break
		case 3:
			day = 'Wednesday'
			break
		case 4:
			day = 'Tuesday'
			break
		case 5:
			day = 'Friday'
			break
		case 6:
			day = 'Saturday'
			break
		default:
			break
	}

	return day
}

export const getWeekDay = () => {
	const date = new Date()
	const today = indexToWeekDay(date.getDay())

	return today
}

const indexToMonth = index => {
	let month

	switch (index) {
		case 0:
			month = 'January'
			break
		case 1:
			month = 'February'
			break
		case 2:
			month = 'March'
			break
		case 3:
			month = 'April'
			break
		case 4:
			month = 'May'
			break
		case 5:
			month = 'June'
			break
		case 6:
			month = 'July'
			break
		case 7:
			month = 'August'
			break
		case 8:
			month = 'September'
			break
		case 9:
			month = 'October'
			break
		case 10:
			month = 'November'
			break
		case 11:
			month = 'December'
			break

		default:
			break
	}

	return month
}

export const getMonth = () => {
	const date = new Date()
	const month = indexToMonth(date.getMonth())

	return month
}

export const getDay = () => {
	const date = new Date()
	const today = date.getDate()

	return today
}

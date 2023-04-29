const getVacations = (vacations) => {
	const parsed = JSON.parse(vacations)

	const formatted = []

	parsed.forEach((vacation) => {
		const userInfo = formatted.find(
			(item) => item.userName === vacation.user.name
		)
		const { user, ...vacationInfo } = vacation
		if (userInfo?.userName) {
			userInfo?.vacations.push(vacationInfo)
		} else {
			formatted.push({
				userName: vacation.user.name,
				userId: vacation.user._id,
				vacations: [vacationInfo],
			})
		}
	})

   return formatted
}

export default getVacations

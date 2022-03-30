export const parseDiffTime = (time) => {
	const now = new Date();
	const days = parseInt(
		Math.round(Math.abs(now - time) / (1000 * 60 * 60 * 24))
	);
	if (days >= 1) {
		return time.toLocaleString("default", { day: "numeric", month: "short" });
	} else {
		const hours = parseInt(Math.abs(now - time) / (1000 * 60 * 60)) % 24;
		if (hours < 24 && hours >= 1) {
			return `${hours}h`;
		} else {
			const minutes = parseInt(
				(Math.abs(now.getTime() - time.getTime()) / (1000 * 60)) % 60
			);
			if (minutes > 1 && minutes < 60) {
				return `${minutes}m`;
			} else {
				return "A few seconds ago";
			}
		}
	}
};

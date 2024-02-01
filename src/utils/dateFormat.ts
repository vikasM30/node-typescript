export const formatDate = (date: string, format: string = 'yyyymmdd') => {
	var d = new Date(date),
		month = '' + (d.getMonth() + 1),
		day = '' + d.getDate(),
		year = d.getFullYear();

	if (month.length < 2) month = '0' + month;
	if (day.length < 2) day = '0' + day;

	switch (format) {
		case 'yyyy-mm-dd':
			return [year, month, day].join('-');
		case 'yyyy/mm/dd':
			return [year, month, day].join('/');//return [year, month, day].join('-');

		default:
			return [year, month, day].join('');
	}
};

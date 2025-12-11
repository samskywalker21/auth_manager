import type { DivisionData } from '../types';

const flattenDivisionOptions = (divisions: DivisionData[]) => {
	const activeDivisions = divisions.filter((row) => row.status === 'A');

	const divisionOptions = activeDivisions.map((row) => {
		return {
			value: `${row.id}`,
			label: `${row.division_name}`,
		};
	});

	divisionOptions.sort((a, b) => Number(a.value) - Number(b.value));

	return divisionOptions;
};

export default flattenDivisionOptions;

import type { SectionOptions } from '../types';

const flattenSectionOptions = (sections: SectionOptions[]) => {
	const flattenedSections = sections.map((data) => ({
		value: String(data.id),
		label: data.section_name,
		division: data.division_id,
	}));

	const msdSections = flattenedSections.filter((data) => data.division === 1);
	const lhsdSections = flattenedSections.filter((data) => data.division === 2);
	const rledSections = flattenedSections.filter((data) => data.division === 3);
	const ordSections = flattenedSections.filter((data) => data.division === 4);
	const pcdohoSections = flattenedSections.filter(
		(data) => data.division === 5,
	);

	return [
		{ group: 'Office of the Regional Director', items: ordSections },
		{ group: 'Local Health Support Division', items: lhsdSections },
		{ group: 'Management Support Division', items: msdSections },
		{
			group: 'Regulations, Licensing, and Enforcement Division',
			items: rledSections,
		},
		{ group: 'Provincial/City DOH Offices', items: pcdohoSections },
	];
};

export default flattenSectionOptions;

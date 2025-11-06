import type { SectionType } from '../types/types';

const flattenSection = (list: SectionType[]) => {
  const msd = list?.filter((row: SectionType) => row.divisionId === 1);
  const lhsd = list?.filter((row: SectionType) => row.divisionId === 2);
  const rled = list?.filter((row: SectionType) => row.divisionId === 3);
  const ord = list?.filter((row: SectionType) => row.divisionId === 4);
  const pcdoho = list?.filter((row: SectionType) => row.divisionId === 5);

  const nmsd = msd?.map((row: SectionType) => ({
    value: String(row.id),
    label: `${row.sectionName} (${row.sectionCode})`,
  }));

  const nlhsd = lhsd?.map((row: SectionType) => ({
    value: String(row.id),
    label: `${row.sectionName} (${row.sectionCode})`,
  }));

  const nrled = rled?.map((row: SectionType) => ({
    value: String(row.id),
    label: `${row.sectionName} (${row.sectionCode})`,
  }));

  const nord = ord?.map((row: SectionType) => ({
    value: String(row.id),
    label: `${row.sectionName} (${row.sectionCode})`,
  }));

  const npcdoho = pcdoho?.map((row: SectionType) => ({
    value: String(row.id),
    label: `${row.sectionName} (${row.sectionCode})`,
  }));

  const sectionOptions = [
    {
      group: 'Office of the Regional Director',
      items: nord,
    },
    {
      group: 'Local Health Support Division',
      items: nlhsd,
    },
    {
      group: 'P/CDOHO',
      items: npcdoho,
    },
    {
      group: 'Regulation, Licensing, and Enforcement Division',
      items: nrled,
    },
    {
      group: 'Management Support Division',
      items: nmsd,
    },
  ];

  return sectionOptions;
};

export default flattenSection;

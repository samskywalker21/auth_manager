import type { SectionOptionsType } from '../types/types';

const flattenSection = (list: SectionOptionsType[]) => {
  const msd = list?.filter((row: SectionOptionsType) => row.division_id === 1);
  const lhsd = list?.filter((row: SectionOptionsType) => row.division_id === 2);
  const rled = list?.filter((row: SectionOptionsType) => row.division_id === 3);
  const ord = list?.filter((row: SectionOptionsType) => row.division_id === 4);
  const pcdoho = list?.filter((row: SectionOptionsType) => row.division_id === 5);

  const nmsd = msd?.map((row: SectionOptionsType) => ({
    value: String(row.section_id),
    label: `${row.section_name} (${row.section_code})`,
  }));

  const nlhsd = lhsd?.map((row: SectionOptionsType) => ({
    value: String(row.section_id),
    label: `${row.section_name} (${row.section_code})`,
  }));

  const nrled = rled?.map((row: SectionOptionsType) => ({
    value: String(row.section_id),
    label: `${row.section_name} (${row.section_code})`,
  }));

  const nord = ord?.map((row: SectionOptionsType) => ({
    value: String(row.section_id),
    label: `${row.section_name} (${row.section_code})`,
  }));

  const npcdoho = pcdoho?.map((row: SectionOptionsType) => ({
    value: String(row.section_id),
    label: `${row.section_name} (${row.section_code})`,
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

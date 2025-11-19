import type { SectionOption } from '../types';

const flattenSectionList = (sections: SectionOption[]) => {
  const msdFiltered = sections.filter((row) => row.division_id === 1);
  const lhsdFiltered = sections.filter((row) => row.division_id === 2);
  const rledFiltered = sections.filter((row) => row.division_id === 3);
  const ordFiltered = sections.filter((row) => row.division_id === 4);
  const pcdohoFiltered = sections.filter((row) => row.division_id === 5);

  const msdMap = msdFiltered.map((row) => ({
    value: row.section_id,
    label: `${row.section_name} (${row.section_code})`,
  }));

  const lhsdMap = lhsdFiltered.map((row) => ({
    value: row.section_id,
    label: `${row.section_name} (${row.section_code})`,
  }));

  const rledMap = rledFiltered.map((row) => ({
    value: row.section_id,
    label: `${row.section_name} (${row.section_code})`,
  }));

  const ordMap = ordFiltered.map((row) => ({
    value: row.section_id,
    label: `${row.section_name} (${row.section_code})`,
  }));

  const pcdohoMap = pcdohoFiltered.map((row) => ({
    value: row.section_id,
    label: `${row.section_name} (${row.section_code})`,
  }));

  return {
    msd: msdMap,
    lhsd: lhsdMap,
    rled: rledMap,
    ord: ordMap,
    pcdoho: pcdohoMap,
  };
};

export default flattenSectionList;

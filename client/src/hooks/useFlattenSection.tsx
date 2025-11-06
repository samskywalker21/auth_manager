import type { SectionType } from '../types/types';
import { useMemo } from 'react';
import flattenSection from '../utils/flattenSection';

const useFlattenSection = (list: SectionType[]) => {
  return useMemo(() => flattenSection(list), [list]);
};

export default useFlattenSection;

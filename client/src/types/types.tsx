export type SectionType = {
  id: number;
  sectionName: string;
  sectionCode: string;
  status: string;
  divisionId: number;
  createdAt: string;
  updatedAt: string;
  division: {
    id: number;
    divisionName: string;
    divisionCode: string;
    status: string;
    createdAt: string;
    updatedAt: string;
  };
};

export type RegisterProfileType = {
  first_name: string;
  middle_name: string;
  last_name: string;
  position: string;
  username: string;
  password: string;
  section_id: number;
};

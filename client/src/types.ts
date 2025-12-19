export type SectionOptions = {
	id: number;
	section_name: string;
	section_code: string;
	division_id: number;
	division_name: string;
	division_code: string;
};

export type SectionData = {
	id: number;
	section_name: string;
	section_code: string;
	status: string;
	division_id: number;
	division_name: string;
	division_code: string;
};

export type SectionEdit = {
	section_name: string;
	section_code: string;
	status: string;
	division_id: number;
};

export type SectionInsert = {
	section_name: string;
	section_code: string;
	division_id: number;
	status: string;
};

export type RegistrationData = {
	first_name: string;
	middle_name: string;
	last_name: string;
	position: string;
	section_id: number;
	username: string;
	password: string;
	status?: string;
	is_admin?: boolean;
};

export type ProfileEdit = {
	id: number;
	first_name: string;
	middle_name: string;
	last_name: string;
	position: string;
	section_id: number;
	username: string;
	is_admin: boolean;
	created_at: string;
	updated_at: string;
	status: string;
};

export type ProfileData = {
	id: number;
	first_name: string;
	middle_name: string;
	last_name: string;
	position: string;
	section_name: string;
	section_code: string;
	division_name: string;
	division_code: string;
	username: string;
	is_admin: boolean;
	status: string;
};

export type DivisionData = {
	id: number;
	division_name: string;
	division_code: string;
	status: string;
};

export type DivisionInsert = {
	division_name: string;
	division_code: string;
	status?: string;
};

export type DivisionEdit = {
	division_name: string;
	division_code: string;
	status: string;
};

export type SectionOptions = {
	section_id: number;
	section_name: string;
	section_code: string;
	division_id: number;
	division_name: string;
	division_code: string;
};

export type RegistrationData = {
	first_name: string;
	middle_name: string;
	last_name: string;
	position: string;
	section_id: number;
	username: string;
	password: string;
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

export type DivisionEdit = {
	id: number;
	division_name: string;
	division_code: string;
	status: string;
};

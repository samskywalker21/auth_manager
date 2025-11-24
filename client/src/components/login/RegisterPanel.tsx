import { Button, Title } from '@mantine/core';
import RegisterForm from './RegisterForm';
import { Undo2 } from 'lucide-react';

const RegisterPanel = ({ changePanel }: { changePanel: () => void }) => {
	return (
		<>
			<Title>Register</Title>
			<RegisterForm />
			<Button
				variant='transparent'
				mt={'1.5rem'}
				onClick={changePanel}
			>
				<Undo2
					size={'1rem'}
					style={{ marginRight: '0.5rem' }}
				/>
				RETURN
			</Button>
		</>
	);
};

export default RegisterPanel;

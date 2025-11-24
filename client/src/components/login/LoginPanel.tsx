import { Title, Text, Button } from '@mantine/core';
import LoginForm from './LoginForm';

const LoginPanel = ({ changePanel }: { changePanel: () => void }) => {
	return (
		<>
			<Title
				order={2}
				style={{ textAlign: 'center' }}
			>
				DEPARTMENT OF HEALTH
			</Title>
			<Text
				size='xs'
				fw={500}
				style={{ textAlign: 'center' }}
			>
				CENTER FOR HEALTH DEVELOPMENT - NORTHERN MINDANAO
			</Text>
			<Title
				order={2}
				mt={'5vh'}
				style={{ textAlign: 'center' }}
			>
				AUTHENTICATION SERVICE
			</Title>
			<LoginForm />
			<Text
				mt={'5vh'}
				style={{ textAlign: 'center' }}
			>
				No account?{' '}
				<Button
					p={0}
					variant='transparent'
					onClick={changePanel}
				>
					REGISTER
				</Button>
			</Text>
		</>
	);
};

export default LoginPanel;

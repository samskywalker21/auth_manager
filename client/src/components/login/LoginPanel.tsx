import DohHeader from '../common/DohHeader';
import LoginForm from './LoginForm';

const LoginPanel = ({ toggleFn }: { toggleFn: () => void }) => {
  return (
    <div className='pt-25'>
      <DohHeader />
      <LoginForm />
      <p className='mt-10 text-center'>
        No account?{' '}
        <span
          className='text-accent cursor-pointer font-semibold'
          onClick={toggleFn}
        >
          Register
        </span>
      </p>
    </div>
  );
};

export default LoginPanel;

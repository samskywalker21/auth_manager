import { useState } from 'react';
import background from '../assets/torii-gate.webp';
import LoginPanel from '../components/login/LoginPanel';
import RegisterForm from '../components/login/RegisterForm';

const LoginPage = () => {
  const [togglePanel, setTogglePanel] = useState(true);

  const toggleFn = () => {
    setTogglePanel((prev) => !prev);
  };

  return (
    <div className='flex'>
      <div className='bg-base-100 h-dvh w-dvw px-5 md:w-[500px] md:min-w-[500px]'>
        {togglePanel === true ? (
          <>
            <LoginPanel toggleFn={toggleFn} />
          </>
        ) : (
          <RegisterForm toggleFn={toggleFn} />
        )}
      </div>
      <div className='hidden h-dvh w-full md:block'>
        <img
          src={background}
          className='h-full w-full object-cover'
        />
      </div>
    </div>
  );
};

export default LoginPage;

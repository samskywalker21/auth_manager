import { useState } from 'react';
import background from '../assets/torii-gate.webp';
import DohHeader from '../components/common/DohHeader';
import LoginForm from '../components/login/LoginForm';
import RegisterForm from '../components/login/RegisterForm';

const LoginPage = () => {
  return (
    <div className='flex'>
      <div className='bg-base-100 h-dvh w-dvw px-5 pt-25 md:w-[500px] md:min-w-[500px]'>
        <DohHeader />
        <LoginForm />
        <p className='mt-10 text-center'>
          No account?{' '}
          <span
            className='text-accent cursor-pointer font-semibold'
            onClick={() => {}}
          >
            Register
          </span>
        </p>
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

import { CircleUserRound, Lock } from 'lucide-react';
import { useForm } from 'react-hook-form';

type Login = {
  username: string;
  password: string;
};

const LoginForm = () => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmitHandler = (values: Login) => {
    console.log(values);

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div className={`mt-30 flex flex-col gap-4 px-5`}>
        {/* <div
          role='alert'
          className={`alert alert-error ${errors.password || errors.username ? 'visible' : 'invisible'}`}
        >
          Invalid Credentials
        </div> */}

        <label className='input w-full focus-within:outline-none'>
          <CircleUserRound height={'1rem'} />
          <input
            type='text'
            placeholder='Username'
            required
            minLength={3}
            {...register('username')}
          />
        </label>
        <label className='input w-full focus-within:outline-none'>
          <Lock height={'1rem'} />
          <input
            type='password'
            placeholder='Password'
            required
            minLength={8}
            {...register('password')}
          />
        </label>
        <button
          type='submit'
          className='btn btn-primary'
        >
          LOG IN
        </button>
      </div>
    </form>
  );
};

export default LoginForm;

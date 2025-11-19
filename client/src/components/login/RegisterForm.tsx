import { Undo2, UserRoundPlus } from 'lucide-react';
import { useForm } from 'react-hook-form';
import useGetSectionOptions from '../../hooks/queries/useGetSectionOptions';
import flattenSectionList from '../../utils/flattenSectionList';

const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/;
const usernameRegex = /^(?![._-])(?!.*[._-]{2})[A-Za-z0-9._-]+(?<![._-])$/;
const passRegex = /^[A-Za-z0-9!@#$%^&*()_\-+=\[\]{}:;"'<>,.?/|~`\\]+$/;

const RegisterForm = ({ toggleFn }: { toggleFn: () => void }) => {
  const sections = useGetSectionOptions();
  const options = flattenSectionList(sections?.data ?? []);

  const form = useForm({
    defaultValues: {
      first_name: '',
      middle_name: '',
      last_name: '',
      position: '',
      section: 0,
      username: '',
      password: '',
    },
  });

  return (
    <form onSubmit={form.handleSubmit((values) => console.log(values))}>
      <div className='mt-10 flex flex-col gap-4 px-5'>
        <p className='text-center text-2xl font-bold'>REGISTRATION FORM</p>
        <fieldset className='fieldset'>
          <legend className='fieldset-legend'>First Name</legend>
          <input
            type='text'
            className='input w-full focus:outline-0'
            required
            minLength={3}
            pattern={String(nameRegex)}
            {...form.register('first_name')}
          />

          <legend className='fieldset-legend'>Middle Name</legend>
          <input
            type='text'
            pattern={String(nameRegex)}
            className='input w-full focus:outline-0'
            {...form.register('middle_name')}
          />

          <legend className='fieldset-legend'>Last Name</legend>
          <input
            type='text'
            required
            minLength={3}
            pattern={String(nameRegex)}
            className='input w-full focus:outline-0'
            {...form.register('last_name')}
          />

          <legend className='fieldset-legend'>Position</legend>
          <input
            type='text'
            required
            minLength={3}
            pattern={String(usernameRegex)}
            className='input w-full focus:outline-0'
            {...form.register('position')}
          />

          <legend className='fieldset-legend'>Section</legend>
          <select
            className='select w-full focus-within:outline-0'
            required
            {...form.register('section')}
            defaultValue={form.getValues('section')}
          >
            <option
              disabled
              value={0}
            >
              Select a Section
            </option>
            {sections.isSuccess && (
              <>
                <optgroup
                  className='font-semibold'
                  label='Office of the Regional Director'
                >
                  {options.ord.map((row) => (
                    <option
                      value={row.value}
                      key={row.value}
                    >
                      {row.label}
                    </option>
                  ))}
                </optgroup>
                <optgroup
                  className='font-semibold'
                  label='Local Health Support Division'
                >
                  {options.lhsd.map((row) => (
                    <option
                      value={row.value}
                      key={row.value}
                    >
                      {row.label}
                    </option>
                  ))}
                </optgroup>
                <optgroup
                  className='font-semibold'
                  label='Management Support Divison'
                >
                  {options.msd.map((row) => (
                    <option
                      value={row.value}
                      key={row.value}
                    >
                      {row.label}
                    </option>
                  ))}
                </optgroup>
                <optgroup
                  className='font-semibold'
                  label='Regulations, Licensing, and Enforcement Division'
                >
                  {options.rled.map((row) => (
                    <option
                      value={row.value}
                      key={row.value}
                    >
                      {row.label}
                    </option>
                  ))}
                </optgroup>
                <optgroup
                  className='font-semibold'
                  label='Provincial and City DOH Offices'
                >
                  {options.pcdoho.map((row) => (
                    <option
                      value={row.value}
                      key={row.value}
                    >
                      {row.label}
                    </option>
                  ))}
                </optgroup>
              </>
            )}
          </select>

          <legend className='fieldset-legend'>Username</legend>
          <input
            type='text'
            required
            minLength={3}
            pattern={String(usernameRegex)}
            className='input w-full focus:outline-0'
            {...form.register('username')}
          />

          <legend className='fieldset-legend'>Password</legend>
          <input
            type='password'
            required
            minLength={8}
            pattern={String(passRegex)}
            className='input w-full focus:outline-0'
            {...form.register('password')}
          />

          <button
            className='btn btn-primary mt-5'
            type='submit'
          >
            <UserRoundPlus size={'1rem'} />
            REGISTER
          </button>

          <p className='mt-3 flex justify-start align-middle'>
            <Undo2
              size={'1rem'}
              className='text-accent mr-2'
            />{' '}
            <span
              className='text-accent cursor-pointer font-bold'
              onClick={toggleFn}
            >
              Return
            </span>
          </p>
        </fieldset>
      </div>
    </form>
  );
};

export default RegisterForm;

import background from '../assets/torii-gate.webp';

const LoginPage = () => {
  return (
    <div
      className='h-dvh w-dvw border border-white bg-cover bg-center'
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className='card bg-base-100 mx-auto mt-[25vh] min-h-[300px] w-[35vw] min-w-[500px] drop-shadow-2xl'></div>
    </div>
  );
};

export default LoginPage;

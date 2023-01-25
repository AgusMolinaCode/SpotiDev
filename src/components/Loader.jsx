import {loader} from '../assets'


const Loader = ({title}) => (
  <div className='w-full flex justify-center items-center flex-c'>
    <img src={loader} alt='cargando' className='w-32 h-32 object-contain' />
    <h1 className='font-bold text-2xl text-white mt-2'>{title || 'Cargando...'}</h1>
  </div>
);

export default Loader;

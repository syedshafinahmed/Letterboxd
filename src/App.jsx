import './App.css'
import Lettrboxd from './assets/letterboxd.png'

function App() {
  

  return (
    <>
      <div className='montserrat text-white'>
        <div className='flex items-center gap-x-2'>
          <img src={Lettrboxd} alt="letterboxd-logo" />
          <p className='text-4xl font-bold'>Letterboxd</p>
        </div>
      </div>
    </>
  )
}

export default App

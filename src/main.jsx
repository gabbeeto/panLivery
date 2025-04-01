import {createRoot} from 'react-dom/client'
import './index.css'
import {MainElement} from './MainElement';
import logo from './asset/logo.png'

// styles
const center = 'text-center flex justify-center items-center';
const theme = 'dark:bg-yellow-950 bg-orange-150 dark:border-white border-black dark:text-white text-black'
createRoot(document.getElementById('root')).render(<>
	<header className={`${theme} border-b-2 p-3   ${center}`}>
		<h1 className=' text-6xl font-extrabold'>PanLivery</h1>
		<img src={logo} alt="logo para PanLivery" className='w-18 h-18' />
	</header>

	<main className={`${theme} gap-3 flex-col ${center}`}>
		<MainElement />
	</main>
</>
)


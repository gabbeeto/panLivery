import {createRoot} from 'react-dom/client'
import './index.css'
import {MainElement} from './MainElement';

// styles
const center = 'text-center flex justify-center items-center';
const theme = 'dark:bg-black bg-white dark:border-white border-black dark:text-white text-black'
createRoot(document.getElementById('root')).render(<>
	<header className={`${theme} ${center}`}>
		<h1 className=' text-6xl'>PanLivery</h1>
	</header>
	<main className={`${theme} ${center}`}>
		<MainElement />
	</main>
</>
)

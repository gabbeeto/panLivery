import {createRoot} from 'react-dom/client'
import './index.css'

const center = 'text-center flex justify-center items-center';
createRoot(document.getElementById('root')).render(<>
	<header className={`dark:bg-black bg-white dark:border-white border-black ${center}`}>
		<h1 className='dark:text-white text-black text-6xl'>PanLivery</h1>
	</header>
	<main className={`dark:bg-black bg-white dark:border-white border-black ${center}`}>

	</main>
</>
)

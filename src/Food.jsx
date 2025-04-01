
export default function Food({source, name}) {
	return (<>
		<figure className="">
			<model-viewer src={source} className="font-light dark:text-red-300 text-red-950 " alt={`imagen para ${name}`} shadow-intensity="2" touch-action="pan-y" ar camera-controls ></model-viewer>
			<figcaption className="font-extrabold text-2xl">{name}</figcaption>
		</figure>
	</>)

}

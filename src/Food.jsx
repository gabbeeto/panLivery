
export default function Food({source, name}) {
	return (<>
		<figure>
			<model-viewer src={source} className="font-light dark:text-red-300 text-red-950 " alt={`imagen para ${name}`}></model-viewer>
			<figcaption className="font-normal">{name}</figcaption>
		</figure>
	</>)

}

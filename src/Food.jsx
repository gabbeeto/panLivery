export default function Food({source, name}) {
	return (<>
		<figure>
			<img src={source} className="font-light dark:text-red-300 text-red-950" alt={`imagen para ${name}`}/>
	 <figcaption className="font-normal">{name}</figcaption>
		</figure>
	</>)

}

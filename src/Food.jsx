export default function Food({source, name}) {
	return (<>
		<figure>
			<img src={source} alt={`imagen para ${name}`}/>
	 <figcaption>{name}</figcaption>
		</figure>
	</>)

}

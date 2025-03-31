
export default function Food({imgSrc,modelSrc, name}) {
	return (<>
		<figure>
		<ModelViewer src={modelSrc}/>
			<img src={imgSrc} className="font-light dark:text-red-300 text-red-950" alt={`imagen para ${name}`}/>
	 <figcaption className="font-normal">{name}</figcaption>
		</figure>
	</>)

}

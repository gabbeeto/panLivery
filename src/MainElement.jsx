import {useEffect, useState} from "react";
import Food from "./Food";
import breadWithSalami from './asset/breadWithSalami.glb'
import breadWithHam from './asset/breadWithHam.glb'
import bread from './asset/bread.glb'

const imagesForFoods = {
	"Pan con salame": breadWithSalami,
	"Pan con jamon": breadWithHam,
	"Pan": bread,
}


export function MainElement() {
	const [foods, changeFoods] = useState(() => [<><h2>Cargando...</h2></>])
	const url = "https://script.google.com/macros/s/AKfycbzIGv6gydK7oGQROIoXhiUbf63Q_-rWteY-bF_m_4RbHBiPTxbzbciYS_hbh9YzowIn/exec"
	useEffect(() => {
		fetch(url).then(response => response.json())
			.then(json => {
				let Foods = []
				for (let index in json['data']) {

					let food = json['data'][index]
					let foodName = food['name']
					let foodAmount = food['amount']
					if (index > 0 && foodAmount > 0) {
						console.log(food)
						Foods.push((<li key={index - 1}>
							<Food name={foodName} source={imagesForFoods[foodName]} />
							<p className="font-light">{foodAmount}</p>
						</li>))
						changeFoods(Foods)
					}
				}
			})
	}, []);

	return (<>
		<section>
			<h2 className="text-4xl font-bold">comida disponible</h2>
			<ul>
				{foods}
			</ul>
		</section>
	</>)
}

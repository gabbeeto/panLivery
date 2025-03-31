import {useEffect, useState} from "react";
import Food from "./Food";


export function MainElement() {
	const [foods, changeFoods] = useState(() => [<><h2>Cargando...</h2></>])
	const url = "https://script.google.com/macros/s/AKfycbzIGv6gydK7oGQROIoXhiUbf63Q_-rWteY-bF_m_4RbHBiPTxbzbciYS_hbh9YzowIn/exec"
	useEffect(() => {
		fetch(url).then(response => response.json())
			.then(json => {
				let Foods = []
				for (let index in json['data']) {
					let food = json['data'][index]
					if (index > 0) {
						console.log(food)
						Foods.push((<li>
							<Food name={food['name']} />
							<p>{food['amount']}</p>
						</li>))
						changeFoods(Foods)
					}

				}
			})
	}, []);

	return (<>
		<section>
			<h2 className="text-4xl">comida disponible</h2>
			<ul>
				{foods}
			</ul>
		</section>
	</>)

}

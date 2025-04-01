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
	const url = "https://script.google.com/macros/s/AKfycbxS4WBLgbxPxniLrl5dxqdbxtpPdZhgPLyCd0IrkOV0cCsHSIqLBUa57LgVFa-N6gNm/exec"
	useEffect(() => {
		fetch(url).then(response => response.json())
			.then(json => {
				let Foods = []
				for (let index in json['data']) {

					let food = json['data'][index]
					let foodName = food['name']
					let foodAmount = food['amount']
					let price = food['pricePerUnit']
					let thereisFoodAvailable = foodAmount > 0
					console.log(food)
					if (thereisFoodAvailable) {
						Foods.push((<li className="border-black dark:border-white border-2 pt-6 rounded-4xl gap-2" key={index - 1}>

							<p className="dark:text-blue-200 text-blue-900 text-2xl bg-amber-200 dark:bg-amber-900 font-extrabold">{foodAmount}</p>
							<Food name={foodName} source={imagesForFoods[foodName]} />
							<p className="text-green-800 dark:text-green-200 font-bold">{price}$ por unidad</p>
							<p className="text-green-800 dark:text-green-200 font-bold">{ Math.round((price * 6) / 100) * 100 }$ la media docena </p>
							<p className="text-green-800 dark:text-green-200 font-bold">{(Math.round((price * 12) / 100) * 100) -100}$ la docena </p>
						</li>))
						changeFoods(Foods)
					}
				}
			})

		let output = document.querySelector('output')

		let now = new Date()
		let dayOfWeek = now.getDate()
		let hour = now.getHours()
		let minutes = now.getMinutes()


		let hoursLeft = 15 - hour;
		let minutesLeft = 60 - minutes;
		if (dayOfWeek == 5) {
			output.innerHTML = `<span class="dark:text-red-200 text-red-700">Faltan 2 dias para abrir</span>`;
		}
		else if (dayOfWeek == 6) {
			output.innerHTML = `<span class="dark:text-red-200 text-red-700">Faltan 1 dia para abrir</span>`;
		}
		else if (hour < 14) {
			output.innerHTML = `<span class="dark:text-red-200 text-red-700">Faltan ${hoursLeft} horas y ${minutesLeft} minutos para abrir</span>`;
		}
		if (hour == 14) {
			output.innerHTML = `<span class="dark:text-red-200 text-red-700">Faltan una hora y ${minutesLeft} minutos para abrir</span>`;
		}

		if (hour == 15) {
			output.innerHTML = `<span class="dark:text-red-200 text-red-700">Faltan ${minutesLeft} minutos para abrir</span>`;
		}

		if (hour > 15) {
			output.innerHTML = `<span class="dark:text-green-200 text-green-700">Abierto</span>`;
		}


		// console.log(minutes)
		if (dayOfWeek > 4) {
			// console.log(hour)
		}

	}, []);

	return (<>
		<section className="border-black dark:border-white border-2 rounded-3xl pb-5 pt-5 mt-1 mx-2">
			<h2 className="text-4xl font-bold">Está abierto de lunes a viernes de 16:00 hasta 20:00</h2>
			<div className="bg-amber-200 flex flex-col rounded-3xl mx-5 dark:bg-amber-900">
				<p className="text-4xl font-bold">Estado:</p>
				<output></output>
			</div>
		</section>
		<section className="border-black dark:border-white border-2 gap-2 flex flex-col rounded-3xl pb-5 pt-5 mt-1 mx-2 p-2">
			<h2 className="text-4xl dark:text-blue-200 text-blue-900 font-extrabold">comida disponible</h2>
			<ul className="flex flex-wrap gap-2 lg:flex-row flex-col">
				{foods}
			</ul>
		</section>
	</>)
}

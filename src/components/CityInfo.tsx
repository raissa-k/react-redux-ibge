import React, { useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'
import { MapPinIcon } from '@heroicons/react/20/solid';
import { useAppSelector } from '../redux/types/reduxTypes';
import { InfoTypes } from '../types';

export default function CityInfo() {
	const { status } = useAppSelector((state) => state.info);
	const { info } = useAppSelector((state) => state.info);
	const [categories, setCategories] = useState<InfoTypes>({} as InfoTypes)

	useEffect(() => {
		if (status === "fulfilled"){
			setCategories({
				Município: {
					id: info.id,
					nome: `Município: ${info.nome}`,
					info1: `Região imediata: ${info.municipio['regiao-imediata'].nome}`,
					info2: `UF: ${info.municipio['regiao-imediata']['regiao-intermediaria'].UF.nome} (${info.municipio['regiao-imediata']['regiao-intermediaria'].UF.sigla})`
				},
				"Micro e Mesorregiões": {
					id: info.municipio.microrregiao.id,
					nome: `Região: ${info.municipio['regiao-imediata']['regiao-intermediaria'].UF.regiao.nome}`,
					info1: `Microrregião: ${info.municipio.microrregiao.nome}`,
					info2: `Mesorregião: ${info.municipio.microrregiao.mesorregiao.nome}`,
				}
			})
		} else setCategories({} as InfoTypes)
	}, [status, info])

	return (
		<div className="w-full mx-auto max-w-md px-2 py-6 sm:px-0">
		{ info && status === "fulfilled" ?
			<Tab.Group>
				<Tab.List className="flex space-x-1 rounded-xl bg-secondary p-2">
					{Object.keys(categories).map((category) => (
						<Tab
							key={category}
							className={({ selected }) =>
								`w-full rounded-lg py-2.5 px-2 text-sm font-medium leading-5 text-primary ring-offset-2 ring-neutral focus:outline-none focus:ring-2 ${selected
									? 'bg-white shadow'
									: 'text-primary hover:bg-primary hover:text-primary-content'
								}`
							}
						>
							{category}
						</Tab>
					))}
				</Tab.List>
				<Tab.Panels className="mt-2">
					{Object.values(categories).map((item) => (
						<Tab.Panel
							key={item.id}
							className="rounded-xl bg-white p-3 ring-white ring-opacity-60 ring-offset-2 ring-offset-primary focus:outline-none focus:ring-2">
							<div className="relative rounded-md p-3 prose">
								<h3>
								<MapPinIcon className="inline mt-0 mr-2 h-8 w-8 text-error"
									aria-hidden="true"/>
									{item.nome}
								</h3>
								<ul className="list-none pl-0">
									<li>
										<strong>{item.info1.split(':')[0]+":"}</strong>
										{item.info1.split(':')[1]}
									</li>
									<li>
										<strong>{item.info2.split(':')[0]+":"}</strong>
										{item.info2.split(':')[1]}
									</li>
								</ul>
							</div>
						</Tab.Panel>
					))}
				</Tab.Panels>
			</Tab.Group>
	: null }
	</div>
	)
}

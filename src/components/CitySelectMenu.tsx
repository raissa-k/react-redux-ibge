import React, { useEffect } from 'react';
import { Fragment, useState } from 'react'
import { Combobox, Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { useAppDispatch, useAppSelector } from '../redux/types/reduxTypes';
import { CityTypes } from '../types';
import { fetchCities } from '../redux/slice';


const CitySelectMenu = () => {
	const dispatch = useAppDispatch();
	const { status } = useAppSelector((state) => state.cidades);
	const { cidades } = useAppSelector((state) => state.cidades);
	const [selectedCity, setSelectedCity] = useState<CityTypes>()
	const [query, setQuery] = useState('')

	const filteredCities =
		query === ''
			? cidades
			: cidades.filter((cidade) =>
				cidade.nome
					.toLowerCase()
					.replace(/\s+/g, '')
					.includes(query.toLowerCase().replace(/\s+/g, ''))
			)

	useEffect(() => {
		if (status !== "fullfilled") return

		setSelectedCity(cidades[0])
	}, [cidades, status])

	return (
		<div className="w-auto sm:w-72 max-w-xs mx-auto">
			{status === "fulfilled" && cidades ?
				<Combobox value={selectedCity || cidades[0]} onChange={setSelectedCity}>
					<Combobox.Label>
						<span className="label-text text-secondary-content">Escolha uma cidade.</span>
					</Combobox.Label>
					<div className="relative mt-1">
						<div className="relative w-full cursor-default rounded-lg bg-white  shadow-md focus:outline-none focus-visible:border-accent-content focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-primary select-primary">
							<Combobox.Input
								className="w-full border-none py-4 pl-3 pr-10 text-left rounded-lg leading-5 text-neutral focus:ring-0 placeholder-secondary-content placeholder-opacity-40"
								displayValue={() => selectedCity ? selectedCity.nome : cidades[0].nome}
								onChange={(event) => setQuery(event.target.value)}
							/>
							<Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
								<ChevronUpDownIcon
									className="h-5 w-5 text-neutral"
									aria-hidden="true"
								/>
							</Combobox.Button>
						</div>
						<Transition
							as={Fragment}
							leave="transition ease-in duration-100"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
								{filteredCities.length === 0 && query !== '' ? (
									<div className="relative cursor-default select-none py-2 px-4 text-neutral">
										Nada encontrado.
									</div>
								) : (cidades.map((cidade) => (
									<Combobox.Option
										key={cidade.id}
										className={({ active }) =>
											`relative cursor-default select-none py-4 pl-10 pr-4 ${active ? 'bg-secondary text-secondary-content' : 'text-neutral'
											}`
										}
										value={cidade}>
										{({ selected, active }) => (
											<>
												<span
													className={`block truncate ${selected ? 'font-medium' : 'font-normal'
														}`}
												>
													{cidade.nome}
												</span>
												{selected ? (
													<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary">
														<CheckIcon className="h-5 w-5" aria-hidden="true" />
													</span>
												) : null}
											</>
										)}
									</Combobox.Option>
								))
								)}
							</Combobox.Options>
						</Transition>
					</div>
				</Combobox>
				:
				<Listbox disabled>
					<Listbox.Label>
						<span className="label-text text-secondary-content">Escolha um estado para ver as cidades.</span>
					</Listbox.Label>
					<div className="relative mt-1">
						<Listbox.Button className="relative w-full cursor-default rounded-lg select-disabled py-4 pl-3 pr-10 text-left shadow-md select-primary">
							<span className="text-neutral/50 truncate">Escolha uma cidade</span>
							<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
								<ChevronUpDownIcon
									className="h-5 w-5 text-neutral/50"
									aria-hidden="true"
								/>
							</span>
						</Listbox.Button>
					</div>
				</Listbox>
			}
		</div>
	);
};

export default CitySelectMenu;
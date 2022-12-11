import React, { useEffect } from 'react';
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { estadosFetch } from '../redux/slices/estadoSlice';
import { cidadesFetch } from '../redux/slices/citySlice';
import { useAppDispatch, useAppSelector } from '../redux/types/reduxTypes';
import { EstadoTypes } from '../types';


const EstadoSelectMenu = () => {
	const dispatch = useAppDispatch();
	const { estados } = useAppSelector((state) => state.estados);
	const [selected, setSelected] = useState<EstadoTypes>()

	useEffect(() => {
		dispatch(estadosFetch);
	}, [dispatch]);

	function handleSelected(item: EstadoTypes){
		const selectedState = item.sigla
		setSelected(item)
		dispatch(cidadesFetch(selectedState))
	}

	return (
		<div className="w-auto sm:w-72 max-w-xs mx-auto">
			<Listbox value={selected} onChange={(item: EstadoTypes) => handleSelected(item)}>
				<Listbox.Label>
						<span className="label-text text-secondary-content">Escolha um estado.</span>
				</Listbox.Label>
				<div className="relative mt-1">
					<Listbox.Button className="relative w-full cursor-default rounded-lg py-4 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-accent-content focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-primary bg-white">
						<span className={`truncate ${selected ? 'text-neutral' : 'text-neutral/80'}`}>{selected?.nome ?? "Escolha um estado."}</span>
						<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
							<ChevronUpDownIcon
								className="h-5 w-5 text-neutral"
								aria-hidden="true"
							/>
						</span>
					</Listbox.Button>
					<Transition
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
							{estados.map((estado, estadoIdx) => (
								<Listbox.Option
									key={estadoIdx}
									className={({ active }) =>
										`relative cursor-default select-none py-4 pl-10 pr-4 ${active ? 'bg-secondary text-secondary-content' : 'text-neutral'
										}`
									}
									value={estado}>
									{({ selected }) => (
										<>
											<span
												className={`block truncate ${selected ? 'font-medium' : 'font-normal'
													}`}
											>
												{estado.nome}
											</span>
											{selected ? (
												<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary">
													<CheckIcon className="h-5 w-5" aria-hidden="true" />
												</span>
											) : null}
										</>
									)}
								</Listbox.Option>
							))}
						</Listbox.Options>
					</Transition>
				</div>
			</Listbox>
		</div>
	);
};

export default EstadoSelectMenu;
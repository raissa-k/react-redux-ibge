/////// Localidades

export interface EstadoTypes {
	id: number;
	sigla: string;
	nome: string;
}

export interface CityTypes {
	id: string;
	nome: string;
}

export interface CityInfoTypes {
	id: number,
	nome: string,
	microrregiao: {
		id: number,
		nome: string
		mesorregiao: {
			id: number,
			nome: string
			UF: {
				id: number
				nome: string
				sigla: string
				regiao: {
					id: number
					nome: string
					sigla: string
				}
			}
		}
	}
	'regiao-imediata': {
		id: number,
		nome: string,
		'regiao-intermediaria': {
			id: number,
			nome: string
			UF: {
				id: number
				nome: string
				sigla: string
				regiao: {
					id: number,
					nome: string
					sigla: string
				}
			}
		}
	}
}

/////// ACTIONS
export enum ActionTypes {
	estadoInit = "SET_INIT_ESTADO",
	estadoSelect = "SELECT_ESTADO",
	estadoClear = "CLEAR_ESTADO",
	cityInit = "SET_INIT_CITY",
	citySelect = "SELECT_CITY",
	cityClear = "CLEAR_CITY",
}

export type Action = {
	type: ActionTypes,
	payload?: string,
}
	| { type: ActionTypes.estadoInit, payload: { estado: EstadoTypes[] } }
	| { type: ActionTypes.estadoSelect, payload: { estado: EstadoTypes } }
	| { type: ActionTypes.estadoClear }
	| { type: ActionTypes.cityInit, payload: { city: CityTypes[] } }
	| { type: ActionTypes.citySelect, payload: { city: CityTypes } }
	| { type: ActionTypes.cityClear }


// STATES
export interface initialStateEstadoType {
	value: EstadoTypes,
	status: 'selected' | 'loading' | 'none'
}

export interface initialStateCityType {
	value: CityTypes,
	status: 'selected' | 'loading' | 'none'
}
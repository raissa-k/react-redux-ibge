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
	municipio: {
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
}

/////// CATEGORYTYPES

export interface InfoTypes {
	Município: {
		id: number,
		nome: string,
		info1: string,
		info2: string
	},
	"Micro e Mesorregiões": {
		id: number,
		nome: string,
		info1: string,
		info2: string,
	}
}
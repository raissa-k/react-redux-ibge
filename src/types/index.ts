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
	municipio: {
		nome: string;
		microrregiao: MicroRegionTypes
	}
}

export interface MicroRegionTypes {
	nome: string;
	mesorregiao: {
		nome: string;
		UF: {
			sigla: string;
			nome: string;
			regiao: {
				sigla: string;
				nome: string;
			};
		};
	};
}

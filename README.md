
# Busca por Município

Utiliza a API de Localidades do IBGE para popular opções de estados e, uma vez selecionado o estado, municípios.
Quando o usuário escolhe um município - seja buscando por nome ou clicando na opção - carrega informações da localidade.

## Demo

Hospedada em: https://react-redux-ibge.vercel.app/


<img src="https://i.imgur.com/K711FLW.gif" alt="Animação da aplicação em uso" width="600px" height="auto">


## Tech Stack

`React`, `Redux`, `TailwindCSS`, `HeadlessUI`

`TailwindCSS` foi escolhido pela facilidade e agilidade na produção de proof of concepts sem necessidade de customização, embora DaisyUI tenha sido escolhido como plugin para criação de um tema com cores escolhidas para facilitar a leitura com contrastes apropriados. 
Ainda no quesito de acessibilidade, a utilização de `HeadlessUI` garantiu agilidade na criação de componentes interativos e acessíveis via mouse, teclado, e leitor de telas.

## Referência

#### API

```md
  https://servicodados.ibge.gov.br/api/docs/localidades
```

#### Instruções

| Passo |  Descrição                       |
| :-------- | :-------------------------------- |
| 1      | Criar um select para selecionar um estado. Utilizar a api: https://servicodados.ibge.gov.br/api/v1/localidades/etasdos; |
| 2 | Criar um select para selecionar um município. Utilizar a api: https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios. Só deve mostrar os municípios do estado que foi selecionado, ou seja, o select de municípios é dependente do select de estados;
| 3 | Ao selecionar um município mostrar as informações de microrregião, mesorregião, UF e região do município. Utilizar a api: https://servicodados.ibge.gov.br/api/v1/localidades/municipios/{municipio}/distritos. Para mostrar essas informações na página, use sua criatividade.

#### Obrigatório

Usar os três conceitos centrais do Redux: 
- store 
- reducers
- actions

## Próximos passos

- Refazer o projeto utilizando o hook nativo `useReducer` para comparação.


## Licença

[WTFPL](https://choosealicense.com/licenses/wtfpl/)


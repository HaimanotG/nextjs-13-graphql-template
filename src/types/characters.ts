export interface CharactersResponse {
  characters: Characters
}

export interface Characters {
  results: Result[]
}

export interface Result {
  id: string
  name: string
  image: string
  gender: string
}
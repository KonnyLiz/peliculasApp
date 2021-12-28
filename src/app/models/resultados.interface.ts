import { PeliculasLista } from "./peliculas.interface";

export interface Resultados {
  page: number;
  results: PeliculasLista[];
  total_pages: number;
  total_results: number;
}
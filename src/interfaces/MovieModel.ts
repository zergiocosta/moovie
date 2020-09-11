import { GenreModel } from './GenreModel';
import { ProductionCompanyModel } from './ProductionCompanyModel';
import { ProductionCountryModel } from './ProductionCountryModel';
import { LanguageModel } from './LanguageModel';

export interface MovieModel {
  genre_ids: number[]
  adult: boolean
  backdrop_path: string
  belongs_to_collection: any
  budget: number
  genres: GenreModel[],
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: ProductionCompanyModel[]
  production_countries: ProductionCountryModel[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: LanguageModel[]
  status: string
  tagline: string
  title: string
  video: boolean | string
  vote_average: number
  vote_count: number
}
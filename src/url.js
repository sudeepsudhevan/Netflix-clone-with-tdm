import {api_key} from './constants/constants'

export const originals=`discover/tv?api_key=${api_key}&with_networks=213`
export const trending=`trending/all/week?api_key=${api_key}&language=en-US`
export const topRated=`movie/top_rated?api_key=${api_key}&language=en-US`
export const actionMovies=`discover/movie?api_key=${api_key}&with_genres=28`
export const comedyMovies=`discover/movie?api_key=${api_key}&with_genres=35`
export const horrorMovies=`discover/movie?api_key=${api_key}&with_genres=27`
export const romanceMovies=`discover/movie?api_key=${api_key}&with_genres=10749`
export const documentaries=`discover/movie?api_key=${api_key}&with_genres=99`

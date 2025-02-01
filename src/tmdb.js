// src/tmdb.js
import axios from 'axios';

const API_KEY = '6f684921c8b90f941d9db6981979d539';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (endpoint) => {
  const response = await axios.get(`${BASE_URL}${endpoint}`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    }
  });
  return response.data;
};

export const endpoints = {
  trending: '/trending/all/week',
  netflixOriginals: '/discover/tv?with_networks=213',
  topRated: '/movie/top_rated',
  actionMovies: '/discover/movie?with_genres=28',
  comedyMovies: '/discover/movie?with_genres=35',
  horrorMovies: '/discover/movie?with_genres=27',
  romanceMovies: '/discover/movie?with_genres=10749',
  documentaries: '/discover/movie?with_genres=99'
};

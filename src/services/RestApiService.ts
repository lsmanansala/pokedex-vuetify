import axios from "axios";

export default class RestApiService {
  url: string;

  constructor() {
    this.url = import.meta.env.VITE_POKEMON_API;
  }

  getList = async (params: { limit: number; offset: number }) => {
    const response = await axios.get(
      this.url + `pokemon?limit=${params.limit}&offset=${params.offset}`
    );
    return response.data.results;
  };

  getPokemon = async (opts: { name: string; url: string }) => {
    const response = await axios.get(opts.url);
    const { data } = response;
    const { id = 0, name = "", height = 0, weight = 0, sprites = "" } = data;
    const { other = {} } = sprites;
    const { "official-artwork": officalArtwork = {} } = other;
    const { front_default: sprite = "" } = officalArtwork;

    const result = {
      id,
      name,
      height,
      weight,
      sprite,
    };
    return result;
  };
}

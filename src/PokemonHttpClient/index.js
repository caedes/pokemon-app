/**
 * @example
 * PokemonHttpClient.fetch('/gen', {...})
 */
export class PokemonHttpClient {
  static baseUrl = "https://api-pokemon-fr.vercel.app/api/v1";

  static fetch(route, options) {
    return fetch(`${PokemonHttpClient.baseUrl}${route}`, options).then(
      (response) => response.json()
    );
  }
}

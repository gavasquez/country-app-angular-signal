import type { Country } from '../interfaces/country.interface';
import type { RESTCountry } from '../interfaces/rest-conutries.interfaces';


export class CountryMapper {

  static mapRestCountryToCountry(restCountry: RESTCountry): Country {
    return {
      cca2: restCountry.cca2,
      flag: restCountry.flag,
      flagSvg: restCountry.flags.svg,
      name: restCountry.translations['spa'].common ?? 'No Spanish Name',
      capital: restCountry.capital.join(','),
      population: restCountry.population,
    }
  }

  static mapRestCountryArrayToCountryArray(restCountries: RESTCountry[]): Country[] {
    return restCountries.map(country => this.mapRestCountryToCountry(country));
  }

}

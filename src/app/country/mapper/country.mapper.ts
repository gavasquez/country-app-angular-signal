import { Country } from '../interfaces/country.interface';
import { RESTCountry } from '../interfaces/rest-conutries.interfaces';


export class CountryMapper {

  static restCountryMapper( restCountry: RESTCountry ): Country {
    return {
      cca2: restCountry.cca2,
      flag: restCountry.flags.png,
      flagSvg: restCountry.flags.svg,
      name: restCountry.name.common,
      capital: restCountry.capital[0],
      population: restCountry.population,
    }
  }

  static restsCountrysMapper( restCountry: RESTCountry[] ): Country[] {
    return restCountry.map( country => this.restCountryMapper(country) );
  }

}

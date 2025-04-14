import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CountryService } from '../../services/country.service';
import { RESTCountry } from '../../interfaces/rest-conutries.interfaces';
import { CountryMapper } from '../../mapper/country.mapper';

@Component({
  selector: 'app-by-country',
  standalone: true,
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-country-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCountryPageComponent {
  onSearch( query: string ) {
  }
}

import {
  resource,
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ByCapitalPageComponent {
  countryService = inject(CountryService);

  countryResource = resource

  /* isLoading = signal<boolean>(false);
  isError = signal<string | null>(null);
  contries = signal<Country[]>([]);

  onSearch(query: string) {
    if (this.isLoading()) return;

    this.isLoading.set(true);
    this.isError.set(null);

    this.countryService.searchByCapital(query).subscribe({
      next: (countries) => {
        this.isLoading.set(false);
        this.contries.set(countries);
      },
      error: (err) => {
        console.log({ err });
        this.isLoading.set(false);
        this.contries.set([]);
        this.isError.set(err);
      },
    });
  } */
}

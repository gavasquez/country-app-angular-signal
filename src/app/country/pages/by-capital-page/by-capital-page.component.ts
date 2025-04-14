import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { CountryService } from '../../services/country.service';
import { firstValueFrom, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ByCapitalPageComponent {

  countryService = inject(CountryService);
  query = signal('');

  countryResource = rxResource({
    request: () => ({ query: this.query() }),
    loader: ({ request }) => {
      if(!request.query) return of([]);
      return this.countryService.searchByCapital(request.query)
    }
  });


  /* countryResource = resource({
    request: () => ({ query: this.query() }),
    loader: async({ request }) => {
      if( !request.query )return [];
      return await firstValueFrom( // Trasnforma el Observable a una Promise
        this.countryService.searchByCapital(request.query)
      );
    }
  })
 */
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

import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RESTCountry } from '../../interfaces/rest-conutries.interfaces';
import { Country } from '../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'country-list',
  standalone: true,
  imports: [ DecimalPipe, RouterLink ],
  templateUrl: './country-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryListComponent {

  countries = input.required<Country[]>();

  isLoading = input<boolean>(false);
  isEmpty = input<boolean>(false);
  errorMessage = input<string | unknown | null>();

}

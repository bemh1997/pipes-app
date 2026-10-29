import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import {
  I18nPluralPipe,
  I18nSelectPipe,
  SlicePipe,
  JsonPipe,
  UpperCasePipe,
  KeyValuePipe,
  TitleCasePipe,
  AsyncPipe,
} from '@angular/common';
import { interval, tap } from 'rxjs';

const client1 = {
  name: 'Humberto',
  gender: 'male',
  age: 29,
  address: 'Coacahas',
};

const client2 = {
  name: 'Mayte',
  gender: 'female',
  age: 29,
  address: 'Tecamac',
};
@Component({
  selector: 'app-uncommon-page.component',
  imports: [
    CardComponent,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    UpperCasePipe,
    KeyValuePipe,
    TitleCasePipe,
    AsyncPipe,
  ],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {
  // i18n Select
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }

    this.client.set(client1);
  }

  // i18n Plural
  clienstsMap = signal({
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    other: 'tenemos # clientes esperando',
  });

  clients = signal([
    'Maria',
    'Pedro',
    'Fernando',
    'Melissa',
    'Natalia',
    'Andrea',
    'Juan',
    'Carlos',
  ]);

  deleteClient() {
    this.clients.update((prev) => prev.slice(1));
  }

  // KeyValue Pipe
  profile = {
    name: 'Humberto',
    age: 29,
    address: 'coacalco',
  };

  //Async Pipe
  promiseValue: Promise<string> = new Promise(
    (resolve, reject) => {
      setTimeout(() => {
        resolve('Tenemos data en la promesa.');
        console.log('Promesa finalizada');
      }, 3500);
    },
  );

  myObservableTimer = interval(2000).pipe(
    tap((value) => console.log('tap:', value)),
  );
}

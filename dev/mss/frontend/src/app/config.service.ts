import {Injectable} from '@angular/core';

@Injectable()
export class ConfigService {

  getPactUrl(): string {
    return 'http://pact.int.skysail.io/pact/v1?media=json';
  };

  getConfirmUrl(): string {
    return 'http://wyt.skysail.io/pact/v1/confirmations/';
  };

  getTurnUrl(): string {
    return 'http://pact.int.skysail.io/pact/v1/turn?media=json';
  };
}

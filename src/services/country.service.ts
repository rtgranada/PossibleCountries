import { BaseService } from './base.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CountryService extends BaseService {


    constructor() {
        super();
    }

    async getCountries(): Promise<any> {
      try {
          var res = await this.country.request({
              method: 'GET',
              url: `all`,
          });

          return res.data;
      } catch (e) {
          this.emitError(e);
          return false;
      }
  }

  async getCountriesByRegion(filter): Promise<any> {
    try {
        var res = await this.country.request({
            method: 'GET',
            url: `region/${filter}`,
        });

        return res.data;
    } catch (e) {
        this.emitError(e);
        return false;
    }
}


  async getCountry(name: string): Promise<any> {
      try {
          var res = await this.country.request({
              method: 'GET',
              url: `name/${name}`,
              params: {
                fullText: 'true'
              }
          });

          return res.data;
      } catch (e) {
          this.emitError(e);
          return false;
      }
  }

  async getBorderCountry(alpha3Code: string): Promise<any> {
    try {
        var res = await this.country.request({
            method: 'GET',
            url: `alpha/${alpha3Code}`,
        });

        return res.data;
    } catch (e) {
        this.emitError(e);
        return false;
    }
}

async getBorderCountryAlpha(code = null): Promise<any> {
  try {
      var res = await this.country.request({
          method: 'GET',
          url: `alpha`,
          params: {
            codes: code
          }
      });

      return res.data;
  } catch (e) {
      this.emitError(e);
      return false;
  }
}
}

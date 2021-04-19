import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from 'src/services/country.service';
import { Location } from '@angular/common';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class Country implements OnInit {
  themeService: any;
  public objCountry = [];
  public borders;
  public borderNames = [];
  public countrieBorders = [];
  regions;
  sub;
  faArrowLeft = faArrowLeft;
  search;
  folderObjs;
  activatedRoute: any;

  constructor(private router: Router, private countryService: CountryService, private route: ActivatedRoute, private location: Location) {

  }

  async ngOnInit() {
    await this.init();
  }

  back(): void {
    this.location.back();
    let countrie = this.route.snapshot.params;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['country', encodeURI(countrie.name)]);
  }

  async init() {
    let countrie = this.route.snapshot.params;
    this.objCountry = await this.countryService.getCountry(countrie.name);
    if(this.objCountry){
      if(this.objCountry[0].borders.length != 0){
        this.getBorderNames(this.objCountry);
      }
    }

  }

  async getBorderNames(param){
    let countrie = Array.isArray(param) ? param[0] : param;
    let filters= [];
    countrie.borders.forEach(border => {
      filters.push(border)
    });
     this.countrieBorders = await this.countryService.getBorderCountryAlpha(filters.join(';'));
  }

  async goPage(name) {
   this.router.navigateByUrl('country', {skipLocationChange: true}).then(()=>
   this.router.navigate(['country', encodeURI(name)]));
  }
}

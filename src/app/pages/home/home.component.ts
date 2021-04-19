import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryService } from 'src/services/country.service';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class Home implements OnInit {
  themeService: any;
  public countries;
  public country;
  regions;
  search;
  folderObjs;
  faArrow = faChevronDown;
  filter = "Filter by Region";

  constructor(private router: Router, private countryService: CountryService) { }

  async ngOnInit() {
    await this.init();
  }

  async init() {
    this.search='';
    this.regions =[
      {name: 'Africa'},
      {name: 'Americas'},
      {name: 'Asia'},
      {name: 'Europe'},
      {name: 'Oceania'},
    ];
    this.countries = await this.countryService.getCountries();
  }

  async goPage(name) {
    this.router.navigate(['country', encodeURI(name)]);
  }

  async addFilter(region){
    this.filter = region;
    if(region == 'all') {
      this.filter = 'Filter by Region';
      this.countries = await this.countryService.getCountries();
    } else {
      this.countries = await this.countryService.getCountriesByRegion(region.toString());
    }
  }
}

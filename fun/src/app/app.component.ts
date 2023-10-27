import { NONE_TYPE } from '@angular/compiler';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AppComponent } from './app.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { faGhost } from '@fortawesome/free-solid-svg-icons';
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
// })
// @NgModule({
//   imports: [BrowserModule, FontAwesomeModule],
//   declarations: [AppComponent],
//   bootstrap: [AppComponent],
// })
export class AppModule {}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // ghostIcon = faGhost;
  title = 'fun';
  @ViewChild('userNameInput', { static: false }) userNameInput:
    | ElementRef
    | undefined;

  public welcomeText: string = '';
  public answer: string = '';
  public halloweenName: string = '';
  public halloweenName2: string = '';
  public halloweenNames: string[] = [
    'Mókás',
    'Tréfás',
    'Csillámporos',
    'Kísérteties',
    'Rémes',
    'Bozontos',
    'Csillogó',
    'Hátborzongató',
    'Őrült',
    'Fantomos',
    'Varázslatos',
    'Kacagtató',
    'Vakmerő',
    'Tréfás',
    'Szellemes',
    'Kócos',
    'Fagyos',
    'Villámgyors',
    'Füstös',
    'Fantasztikus',
    'Gonosz',
    'Látványos',
    'Rémisztő',
    'Bátor',
    'Szivárványos',
    'Sötét',
    'Varázslatos',
    'Rozsdás',
    'Kacskaringós',
    'Ördögi',
    'Szikrázó',
    'Zűrös',
    'Kukacos',
    'Karmos',
    'Ragadozó',
    'Pimasz',
    'Hűsítő',
    'Mámoros',
    'Pajzán',
    'Kísértetképző',
  ];
  public halloweenNames2: string[] = [
    'Zabhegyező',
    'Cicus',
    'Lufi',
    'Malacka',
    'Zsiráf',
    'Borsó',
    'Kutya',
    'Rebarbara',
    'Cimbora',
    'Málna',
    'Zolika',
    'Gyöngy',
    'Pocak',
    'Zokni',
    'Csoki',
    'Rücsi',
    'Gombóc',
    'Füles',
    'Mazsola',
    'Kapitány',
    'Körte',
    'Cirmos',
    'Macska',
    'Makk',
    'Zsinórka',
    'Málnás',
    'Zöldike',
    'Zubaba',
    'Guriga',
    'Pom-pom',
    'Rücsköcske',
    'Fickó',
    'Kakukk',
    'Csavargó',
    'Makkarc',
    'Csibész',
  ];
  public country: string = '';
  public countries: string[] = [
    'Nigériából',
    'Tanzániából',
    'Mauritániából',
    'Burundiból',
    'Szváziföldről',
    'Szomáliából',
    'Kongóból',
    'Szudánból',
    'Ruandából',
    'Dzsibutiból',
    'Kamerunból',
    'Szenegálból',
    'Hollandiából',
    'Guineából',
    'Seychelle-szigetekről',
    'Litvániából',
    'Szváziföldről',
    'Comore-szigetekről',
    'Gabonból',
    'Gambiából',
    'Közép-afrikai Köztársaságból',
    'Szenegálból',
    'Peruból',
  ];

  setWelcomeText(): void {
    if (this.userNameInput) {
      this.welcomeText = `Kedves ${this.userNameInput.nativeElement.value}, a te halloweeni neved:`;
    }
  }

  getHalloweenName(): void {
    const randomIndex: number = Math.floor(
      Math.random() * this.halloweenNames.length
    );
    this.halloweenName = this.halloweenNames[randomIndex];
  }

  getHalloweenName2(): void {
    const randomIndex: number = Math.floor(
      Math.random() * this.halloweenNames2.length
    );
    this.halloweenName2 = this.halloweenNames2[randomIndex];
  }

  getCountry(): void {
    const randomIndex: number = Math.floor(
      Math.random() * this.countries.length
    );
    this.country = this.countries[randomIndex];
  }

  clear(): void {
    this.welcomeText = '';
    this.halloweenName = '';
    this.halloweenName2 = '';
    this.country = '';
  }

  getAllFunctions(): void {
    this.setWelcomeText();
    this.getHalloweenName();
    this.getHalloweenName2();
    this.getCountry();
  }
}

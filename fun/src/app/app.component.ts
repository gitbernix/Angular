import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'fun';
  // public currentUser: string = '';
  // public isUserSet: boolean = false;
  public userName: string = '';
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
  public halloweenNames2: string[] = ['Csiga'];
  public country: string = '';
  public countries: string[] = ['Nigériából', 'Tanzániából'];

  // setUsername(value: string): void {
  //   if (value) {
  //     this.isUserSet = true;
  //     this.currentUser = value;
  //   } else {
  //     this.isUserSet = false;
  //     this.currentUser = 'Ejnye, miért nem adtad meg a neved?';
  //   }
  // }

  getWelcomeAnswer(): string {
    return `Kedves {{currentUser}}, a te halloweeni neved:`;
  }

  getHalloweenName(): void {
    let randomIndex: number = Math.floor(
      Math.random() * this.halloweenNames.length
    );
    while (this.halloweenNames.indexOf(this.halloweenName) === randomIndex) {
      randomIndex = Math.floor(Math.random() * this.halloweenNames.length);
    }
    this.halloweenName = this.halloweenNames[randomIndex];
  }

  getHalloweenName2(): void {
    let randomIndex: number = Math.floor(
      Math.random() * this.halloweenNames2.length
    );
    while (this.halloweenNames2.indexOf(this.halloweenName2) === randomIndex) {
      randomIndex = Math.floor(Math.random() * this.halloweenNames2.length);
    }
    this.halloweenName2 = this.halloweenNames2[randomIndex];
  }

  getCountry(): void {
    let randomIndex: number = Math.floor(Math.random() * this.countries.length);
    while (this.countries.indexOf(this.country) === randomIndex) {
      randomIndex = Math.floor(Math.random() * this.countries.length);
    }
    this.country = this.countries[randomIndex];
  }

  getAllFunctions(): void {
    this.getWelcomeAnswer();
    this.getHalloweenName();
    this.getHalloweenName2();
    this.getCountry();
  }
}

import {Injectable} from '@angular/core';

export class StaffDescription {
  name: string;
  description: string;
  src: string;

  constructor(name: string, description: string, src: string) {
    this.name = name;
    this.description = description;
    this.src = src;
  }
}

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() {
  }

  getStaff() {
    return [
      new StaffDescription("Olivier", "Président / Compétitions", "assets/trombinoscope/olivier.jpg"),
      new StaffDescription("Frédérique", "Trésorière / Loisirs", "assets/trombinoscope/frederic.jpg"),
      new StaffDescription("Estelle", "Trésorière / Compétitions", "assets/trombinoscope/estelle.jpg"),
      new StaffDescription("Silvio", "Secrétaire / Compétitions", "assets/trombinoscope/silvio.jpg"),
      new StaffDescription("Yann", "Communication / Compétitions", "assets/trombinoscope/yann.jpg"),
      new StaffDescription("Mégane", "Communication / Loisirs", "assets/trombinoscope/megane.png"),
      new StaffDescription("Jérémie", "Entraineur jeune", "assets/trombinoscope/jeremie.png"),
      new StaffDescription("Stéphane", "Compétitions", "assets/trombinoscope/stephane.png"),
      new StaffDescription("Matthieu", "Compétitions", "assets/trombinoscope/matthieu.jpg")
    ];
  }

  getPictures() {
    return [
      "assets/photos/1.jpg",
      "assets/photos/2.jpg"
    ]
  }

}

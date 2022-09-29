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
      new StaffDescription("Silvio", "Secrétaire / Compétitions", "assets/trombinoscope/silvio.png"),
      new StaffDescription("Yann", "Communication / Compétitions", "assets/trombinoscope/yann.jpg"),
      new StaffDescription("Mégane", "Communication / Loisirs", "assets/trombinoscope/sloanne.png"),
      new StaffDescription("Jérémie", "Entraineur jeune", "assets/trombinoscope/yann.png"),
      new StaffDescription("Stéphane", "Compétitions", "assets/trombinoscope/frederic.jpg"),
      new StaffDescription("Matthieu", "Compétitions", "assets/trombinoscope/matthieu.png")
    ];
  }

  getPictures() {
    return [
      // "https://photobcvb.s3.eu-west-3.amazonaws.com/image1.jpeg",
      "https://photobcvb.s3.eu-west-3.amazonaws.com/image2.jpeg",
      "https://photobcvb.s3.eu-west-3.amazonaws.com/image3.jpeg",
      // "https://photobcvb.s3.eu-west-3.amazonaws.com/image4.jpeg",
      "https://photobcvb.s3.eu-west-3.amazonaws.com/image5.jpeg"

    ]
  }

}

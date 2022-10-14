import {Injectable} from '@angular/core';


export class MatchDescription {
  matchDate: String;
  homeTeam: String;
  score: String;
  visitorTeam: String;
  victory: Boolean;

  constructor(matchDate: String, homeTeam: String, score: String, visitorTeam: String, victory: Boolean) {
    this.matchDate = matchDate;
    this.homeTeam = homeTeam;
    this.score = score;
    this.visitorTeam = visitorTeam;
    this.victory = victory;
  }

}

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor() {
  }

  getMatchCalendar(team: string): MatchDescription[] {
    switch (team) {
      case "M_4_1" :
        return JSON.parse('[{"matchDate":"mercredi 19-10-2022","homeTeam":"Bouffemont A","score":"","visitorTeam":"Bois-Colombes A","victory":false},{"matchDate":"mercredi 16-11-2022","homeTeam":"Bois-Colombes A","score":"","visitorTeam":"Le Thillay B","victory":false},{"matchDate":"mardi 29-11-2022","homeTeam":"Mery B","score":"","visitorTeam":"Bois-Colombes A","victory":false},{"matchDate":"mercredi 14-12-2022","homeTeam":"Bois-Colombes A","score":"","visitorTeam":"Mery C","victory":false},{"matchDate":"mercredi 11-01-2023","homeTeam":"Bouffemont A","score":"","visitorTeam":"Bois-Colombes A","victory":false},{"matchDate":"mercredi 25-01-2023","homeTeam":"Bois-Colombes A","score":"","visitorTeam":"Le Thillay A","victory":false},{"matchDate":"lundi 06-02-2023","homeTeam":"Luzarches A","score":"","visitorTeam":"Bois-Colombes A","victory":false},{"matchDate":"mercredi 08-03-2023","homeTeam":"Bois-Colombes A","score":"","visitorTeam":"Bouffemont A","victory":false},{"matchDate":"lundi 20-03-2023","homeTeam":"Le Thillay B","score":"","visitorTeam":"Bois-Colombes A","victory":false},{"matchDate":"mercredi 05-04-2023","homeTeam":"Bois-Colombes A","score":"","visitorTeam":"Mery B","victory":false},{"matchDate":"lundi 17-04-2023","homeTeam":"Mery C","score":"","visitorTeam":"Bois-Colombes A","victory":false},{"matchDate":"mercredi 24-05-2023","homeTeam":"Bois-Colombes A","score":"","visitorTeam":"Plessis-Bouchard A","victory":false},{"matchDate":"mercredi 07-06-2023","homeTeam":"Le Thillay A","score":"","visitorTeam":"Bois-Colombes A","victory":false},{"matchDate":"mercredi 21-06-2023","homeTeam":"Bois-Colombes A","score":"","visitorTeam":"Luzarches A","victory":false}]')
      case "M_4_2" :
        return JSON.parse('[{"matchDate":"mercredi 19-10-2022","homeTeam":"Le Thillay D","score":"","visitorTeam":"Bois-Colombes B","victory":false},{"matchDate":"lundi 14-11-2022","homeTeam":"Mery D","score":"","visitorTeam":"Bois-Colombes B","victory":false},{"matchDate":"lundi 28-11-2022","homeTeam":"Bois-Colombes B","score":"","visitorTeam":"Bezons A","victory":false},{"matchDate":"lundi 12-12-2022","homeTeam":"Bois-Colombes B","score":"","visitorTeam":"Marly C","victory":false},{"matchDate":"jeudi 12-01-2023","homeTeam":"Chambly B","score":"","visitorTeam":"Bois-Colombes B","victory":false},{"matchDate":"mercredi 25-01-2023","homeTeam":"Bouffemont B","score":"","visitorTeam":"Bois-Colombes B","victory":false},{"matchDate":"lundi 06-02-2023","homeTeam":"Bois-Colombes B","score":"","visitorTeam":"Montigny B","victory":false},{"matchDate":"lundi 06-03-2023","homeTeam":"Bois-Colombes B","score":"","visitorTeam":"Le Thillay D","victory":false},{"matchDate":"lundi 20-03-2023","homeTeam":"Bois-Colombes B","score":"","visitorTeam":"Mery D","victory":false},{"matchDate":"lundi 03-04-2023","homeTeam":"Bezons A","score":"","visitorTeam":"Bois-Colombes B","victory":false},{"matchDate":"jeudi 20-04-2023","homeTeam":"Marly C","score":"","visitorTeam":"Bois-Colombes B","victory":false},{"matchDate":"lundi 22-05-2023","homeTeam":"Bois-Colombes B","score":"","visitorTeam":"Chambly B","victory":false},{"matchDate":"lundi 05-06-2023","homeTeam":"Bois-Colombes B","score":"","visitorTeam":"Bouffemont B","victory":false},{"matchDate":"lundi 19-06-2023","homeTeam":"Montigny B","score":"","visitorTeam":"Bois-Colombes B","victory":false}]')
      case "M_6_1"  :
        return JSON.parse('[{"matchDate":"mercredi 09-11-2022","homeTeam":"Bois-Colombes 1","score":"","visitorTeam":"Bouffemont 1","victory":false},{"matchDate":"mercredi 23-11-2022","homeTeam":"Bois-Colombes 2","score":"","visitorTeam":"Bois-Colombes 1","victory":false},{"matchDate":"lundi 05-12-2022","homeTeam":"Chaumont 1","score":"","visitorTeam":"Bois-Colombes 1","victory":false},{"matchDate":"mercredi 04-01-2023","homeTeam":"Bois-Colombes 1","score":"","visitorTeam":"Marly 1","victory":false},{"matchDate":"mercredi 18-01-2023","homeTeam":"Bois-Colombes 1","score":"","visitorTeam":"Osny Pontoise 1","victory":false},{"matchDate":"mercredi 01-02-2023","homeTeam":"Le Thillay 1","score":"","visitorTeam":"Bois-Colombes 1","victory":false},{"matchDate":"lundi 13-02-2023","homeTeam":"Mery 1","score":"","visitorTeam":"Bois-Colombes 1","victory":false},{"matchDate":"mercredi 15-03-2023","homeTeam":"Bouffemont 1","score":"","visitorTeam":"Bois-Colombes 1","victory":false},{"matchDate":"mercredi 29-03-2023","homeTeam":"Bois-Colombes 1","score":"","visitorTeam":"Bois-Colombes 2","victory":false},{"matchDate":"mercredi 12-04-2023","homeTeam":"Bois-Colombes 1","score":"","visitorTeam":"Chaumont 1","victory":false},{"matchDate":"jeudi 11-05-2023","homeTeam":"Marly 1","score":"","visitorTeam":"Bois-Colombes 1","victory":false},{"matchDate":"mercredi 31-05-2023","homeTeam":"Osny Pontoise 1","score":"","visitorTeam":"Bois-Colombes 1","victory":false},{"matchDate":"mercredi 28-06-2023","homeTeam":"Bois-Colombes 1","score":"","visitorTeam":"Mery 1","victory":false},{"matchDate":"mercredi 14-06-2023","homeTeam":"Bois-Colombes 1","score":"","visitorTeam":"Le Thillay 1","victory":false}]')
      case "M_6_2"  :
        return JSON.parse('[{"matchDate":"lundi 07-11-2022","homeTeam":"Mery 1","score":"","visitorTeam":"Bois-Colombes 2","victory":false},{"matchDate":"mercredi 23-11-2022","homeTeam":"Bois-Colombes 2","score":"","visitorTeam":"Bois-Colombes 1","victory":false},{"matchDate":"mercredi 07-12-2022","homeTeam":"Bois-Colombes 2","score":"","visitorTeam":"Osny Pontoise 1","victory":false},{"matchDate":"mercredi 04-01-2023","homeTeam":"Le Thillay 1","score":"","visitorTeam":"Bois-Colombes 2","victory":false},{"matchDate":"mercredi 18-01-2023","homeTeam":"Bois-Colombes 2","score":"","visitorTeam":"Chaumont 1","victory":false},{"matchDate":"jeudi 02-02-2023","homeTeam":"Marly 1","score":"","visitorTeam":"Bois-Colombes 2","victory":false},{"matchDate":"mercredi 15-02-2023","homeTeam":"Bois-Colombes 2","score":"","visitorTeam":"Bouffemont 1","victory":false},{"matchDate":"mercredi 15-03-2023","homeTeam":"Bois-Colombes 2","score":"","visitorTeam":"Mery 1","victory":false},{"matchDate":"mercredi 29-03-2023","homeTeam":"Bois-Colombes 1","score":"","visitorTeam":"Bois-Colombes 2","victory":false},{"matchDate":"mercredi 12-04-2023","homeTeam":"Osny Pontoise 1","score":"","visitorTeam":"Bois-Colombes 2","victory":false},{"matchDate":"mercredi 10-05-2023","homeTeam":"Bois-Colombes 2","score":"","visitorTeam":"Le Thillay 1","victory":false},{"matchDate":"lundi 29-05-2023","homeTeam":"Chaumont 1","score":"","visitorTeam":"Bois-Colombes 2","victory":false},{"matchDate":"mercredi 14-06-2023","homeTeam":"Bois-Colombes 2","score":"","visitorTeam":"Marly 1","victory":false},{"matchDate":"mercredi 28-06-2023","homeTeam":"Bouffemont 1","score":"","visitorTeam":"Bois-Colombes 2","victory":false}]')
      default :
        return []
    }
  }
}

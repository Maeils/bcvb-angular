import {Component, OnInit} from '@angular/core';
import {MatchDescription, MatchService} from "../../services/match.service";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  match4x4A: MatchDescription[]
  match4x4B: MatchDescription[]
  match6x6A: MatchDescription[]
  match6x6B: MatchDescription[]
  matchFilleA: MatchDescription[]
  matchFilleB: MatchDescription[]
  matchJeuneA: MatchDescription[]
  matchJeuneB: MatchDescription[]

  constructor(matchService: MatchService) {
    this.match4x4A = matchService.getMatchCalendar("M_4_1");
    this.match4x4B = matchService.getMatchCalendar("M_4_2");
    this.match6x6A = matchService.getMatchCalendar("M_6_1");
    this.match6x6B = matchService.getMatchCalendar("M_6_2");
    this.matchFilleA = matchService.getMatchCalendar("M_4_1");
    this.matchFilleB = matchService.getMatchCalendar("M_4_1");
    this.matchJeuneA = matchService.getMatchCalendar("M_4_1");
    this.matchJeuneB = matchService.getMatchCalendar("M_4_1");
  }

  ngOnInit(): void {
  }
}

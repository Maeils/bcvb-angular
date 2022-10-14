import {Component, Input, OnInit} from '@angular/core';
import {MatchDescription} from "../../services/match.service";

@Component({
  selector: 'app-match-table',
  templateUrl: './match-table.component.html',
  styleUrls: ['./match-table.component.scss']
})
export class MatchTableComponent implements OnInit {

  @Input() matchDescriptions!: MatchDescription[];
  displayedColumns: string[] = ['MatchDate', 'HomeTeam', 'Score', 'VisitorTeam'];

  constructor() {
  }

  ngOnInit(): void {
  }

  getClass(matchDescription: MatchDescription) {
    return matchDescription.score == "" ? "" : matchDescription.victory ? "victory" : "defeat";
  }

}

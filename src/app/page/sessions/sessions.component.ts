import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})


export class SessionsComponent implements OnInit {
  TRAINING_INFOS: any[] = [
    {type: "Compétition Masculine", day: 'Lundi', hour: "20h15 - 22h15", location: 'Gymnase Albert Camus'},
    {type: "Compétition Féminine", day: 'Lundi', hour: "20h15 - 22h15", location: 'Gymnase Albert Camus'},
    {type: "Entrainement Jeunes", day: 'Mercredi', hour: "18h - 20h", location: 'Gymnase Albert Camus'},
    {type: "Entrainement Loisirs", day: 'Mercredi', hour: "20h15 - 22h15", location: 'Gymnase Albert Camus'},
    {type: "Compétition Masculine", day: 'Mercredi', hour: "20h30 - 22h30", location: 'Gymnase Smirlian'},
    {type: "Compétition Féminine", day: 'Mercredi', hour: "20h30 - 22h30", location: 'Gymnase Smirlian'},
    {type: "Loisirs libre", day: 'Dimanche', hour: "18h - 20h", location: 'Gymnase Smirlian'},
  ];
  displayedColumns: string[] = ['Sessions', 'Jour', 'Horaire', 'Gymnase'];
  dataSource = this.TRAINING_INFOS;
  ngOnInit(): void {
  }
}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Hero} from "../../models/hero";

@Component({
  selector: 'app-heroes-table',
  templateUrl: './heroes-table.component.html',
  styleUrls: ['./heroes-table.component.scss']
})
export class HeroesTableComponent implements OnInit {
  @Input() heroesList: Hero[] = []
  @Input() displayedColumns: Array<string> = ["name", "age", "height", "heroPoints", "superPowers", "superVillain","Actions"];
  @Output() deleteEvent = new EventEmitter<Hero>();
  @Output() updateEvent = new EventEmitter<Hero>();
  constructor() { }

  handleDelete = (row: Hero) => {
    this.deleteEvent.emit(row);
  }

  handleUpdate = (row: Hero) => {
    this.updateEvent.emit(row);
  }

  ngOnInit(): void {
  }


}

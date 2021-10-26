import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  @Input() title: string = '';
  @Input() year: string = '';
  @Input() url: string = '';
}

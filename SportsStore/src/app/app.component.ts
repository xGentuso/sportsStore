import { Component } from '@angular/core';
import { StoreModule } from './store/store.module';

@Component({
  selector: 'app',
  standalone: true,
  imports: [StoreModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SportsStore';
}

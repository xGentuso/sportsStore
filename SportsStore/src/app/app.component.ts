import { Component } from '@angular/core';
import { StoreModule } from './store/store.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app',
  standalone: true,
  imports: [StoreModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SportsStore';
}

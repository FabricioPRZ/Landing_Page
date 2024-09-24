import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BannerComponent } from "../banner/banner.component";
import { ProductosComponent } from '../product/product.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, BannerComponent, ProductosComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

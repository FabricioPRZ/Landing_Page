import { Component } from '@angular/core';
import { Product } from '../../models/product';
@Component({
  selector: 'app-productos',
  standalone: true,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductosComponent {
  products: Product[] = [
    {
      image: 'assets/chaqueta_cars.webp',
      title: 'Chaqueta Rayo McQueen',
      price: 32.00,
      description: 'Tu peque arrasará en las carreras escolares con esta deportiva chaqueta universitaria de Disney Pixar Cars.',
    },
    {
      image: 'assets/playera_cars.webp',
      title: 'Camiseta Infantil Rayo McQueen',
      price: 8.80,
      description: 'Los más pequeños derrocharán estilo con esta camiseta de Rayo McQueen.',
    },
    {
      image: 'assets/botella.webp',
      title: 'Botella Acero Inoxidable',
      price: 18.00,
      description: 'Los corredores más jóvenes podrán repostar en cualquier momento con esta botella de agua de acero inoxidable de Disney Pixar Cars.',
    },
  ];
}

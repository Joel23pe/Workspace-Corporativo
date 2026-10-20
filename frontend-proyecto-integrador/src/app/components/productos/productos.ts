import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './productos.html',
  styleUrl: './productos.scss'
})
export class ProductosComponent {
  filtro: string = '';
  productos: string[] = [
    'Laptop Dell Inspiron',
    'Teclado Mecánico RGB',
    'Mouse Inalámbrico Logitech',
    'Monitor 27" Full HD',
    'Auriculares Bluetooth Sony',
    'Disco Duro Externo 1TB',
    'Memoria RAM 16GB DDR4'
  ];

  get productosFiltrados(): string[] {
    return this.productos.filter(p =>
      p.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }
}
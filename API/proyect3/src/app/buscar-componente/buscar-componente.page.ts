import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar-componente',
  templateUrl: './buscar-componente.page.html',
  styleUrls: ['./buscar-componente.page.scss'],
  standalone: false,
})
export class BuscarComponentePage {
  searchData = {
    route: '',
    component: '',
  };

  errorMessage: string = '';

  constructor(private router: Router) {}

  // Función para buscar rutas
  searchRoute() {
    if (this.searchData.route) {
      const routeToNavigate = this.searchData.route.trim();

      try {
        // Intenta navegar a la ruta proporcionada
        this.router.navigateByUrl(routeToNavigate).catch(() => {
          this.errorMessage = 'La ruta no es válida. Inténtalo de nuevo.';
        });
      } catch {
        this.errorMessage = 'Ocurrió un error al intentar navegar a la ruta.';
      }
    } else {
      this.errorMessage = 'Por favor, ingresa una URL válida.';
    }
  }

  // Función para buscar componentes
  searchComponent() {
    if (this.searchData.component) {
      const componentName = this.searchData.component.trim().toLowerCase();

      // Simulación: redirige a una ruta basada en el nombre del componente
      switch (componentName) {
        case 'login':
          this.router.navigateByUrl('/login');
          break;
        case 'contacto':
          this.router.navigateByUrl('/contacto');
          break;
        case 'home':
          this.router.navigateByUrl('/home');
          break;
        default:
          this.errorMessage = `El componente "${componentName}" no existe.`;
      }
    } else {
      this.errorMessage = 'Por favor, ingresa un nombre de componente válido.';
    }
  }
}


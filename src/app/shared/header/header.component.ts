import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export interface MenuItem {
  label: string;
  icon: string;
  link: string;
  showOnMobile: boolean;
  showOnTablet: boolean;
  showOnDesktop: boolean;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})


export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }
  menuItems: MenuItem[] = [
    {
      label: 'Negocios',
      icon: 'business',
      link: 'negocios',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Empleados',
      icon: 'people_outline',
      link: 'empleados',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true
    },
    {
      label: 'Pedidos',
      icon: 'restaurant_menu',
      link: 'pedidos',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: false
    },
    {
      label: 'Cajas',
      icon: 'attach_money',
      link: 'cajas',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: false
    },
    {
      label: 'Mesas',
      icon: 'table_chart',
      link: 'mesas',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: false
    },
    {
      label: 'Inventarios',
      icon: 'notes',
      link: 'inventarios',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: false
    },
    {
      label: 'Proveedores',
      icon: 'group_work',
      link: 'proveedores',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: false
    },
    {
      label: '',
      icon: 'supervised_user_circle',
      link: 'login',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
  ];
  ngOnInit(): void {
  }

  goHome(){
    this.router.navigateByUrl('');

  }
//
}

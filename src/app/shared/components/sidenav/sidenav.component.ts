import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  menuList = [
    {
      icon: 'pi-list',
      label: 'Ver Extrato',
      routerNavigate: '',
      selected: false,
    },
    {
      icon: 'pi-envelope',
      label: 'Contribuição Mensal',
      routerNavigate: '',
      selected: true,
    },
    {
      icon: 'pi-dollar',
      label: 'Contribuição Extra',
      routerNavigate: '',
      selected: false,
    },
    {
      icon: 'pi-file',
      label: 'Documentos',
      routerNavigate: '',
      selected: false,
    },
    {
      icon: 'pi-id-card',
      label: 'Regime de Tributação',
      routerNavigate: '',
      selected: false,
    },
    {
      icon: 'pi-user-edit',
      label: 'Solicitar Benefício',
      routerNavigate: '',
      selected: false,
    },
    {
      icon: 'pi-file-edit',
      label: 'Extrato Regressivo',
      action: '',
      selected: false,
    },
    {
      icon: 'pi-info',
      label: 'Informações',
      action: '',
      selected: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onSelectMenu(index: number): void {
    this.menuList.forEach((menu, i) => {
      menu.selected = i === index;
    });

    /* TODO: Espaço reservado para tratar ação do menu selecionado */
    console.log('Menu selecionado: ', this.menuList[index].label);
  }
}

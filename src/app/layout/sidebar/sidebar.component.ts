import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMenuItem } from './menu-item';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuList: Array<IMenuItem> = [];

  constructor(
    private router: Router,
  ) {

  }

  ngOnInit(): void {
    this.menuList = [
      {
        id: 1,
        icon: "bi bi-speedometer2",
        label: "Dashboard",
        link: "/dashboard",
        isActive: false,
      },
      {
        id: 2,
        icon: "bi bi-people",
        label: "Employees",
        link: "/employees",
        isActive: false,
      },
      {
        id: 3,
        icon: "bi bi-file-earmark",
        label: "Reports",
        link: "/reports",
        isActive: false,
      },
      {
        id: 4,
        icon: "bi bi-telephone",
        label: "Contact Us",
        link: "/contact-us",
        isActive: false,
      },
    ];

    this.getActivePath();
  }

  getActivePath() {
    this.menuList.forEach((menu, index) => {
      let url = this.router.url;
      if (menu.link == url) {
        this.menuList[index].isActive = true;
      } else {
        this.menuList[index].isActive = false;
      }
    });
  }

  onMenuItemClick(menu: IMenuItem, i: number) {
    this.menuList.forEach((menu, index) => {
      this.menuList[index].isActive = false;
    });

    this.menuList[i].isActive = true;

    this.router.navigate([menu?.link])
  }
}

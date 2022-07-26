export interface IMenuItem {
  id?: number;
  label?: string;
  icon?: string;
  link?: string;
  subItems?: Array<any>;
  badge?: any;
  isActive?: boolean,
  isExpend?: boolean,
  isAdmin?: boolean,
  queryParams?: any
}
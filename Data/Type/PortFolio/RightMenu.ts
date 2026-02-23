export interface RightMenuItems {
  label?: string;
  alt?: string;
  href?: string;
}

export interface RightMenuProps {
  label?: string;
  alt?: string;
  href?: string;
  menuItems?: RightMenuItems[];
}

export interface HeaderProps {
    className?: string;
  }
  
  export interface MenuItem {
    key: string;
    label: string;
    href?: string;
    children?: MenuItem[];
  }
  
  export interface HeaderState {
    selectedKey: string;
    mobileMenuVisible: boolean;
  }
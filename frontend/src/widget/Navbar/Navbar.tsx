import AppLink from '@/shared/AppLink/AppLink';
import cls from './Navbar.module.css';
import { memo } from 'react';

const Navbar = () => {
  return (
    <ul className={cls.Navbar}>
      <li className={cls.NavbarItem}>
        <AppLink to="/weapons">Оружия</AppLink>
      </li>
      <li className={cls.NavbarItem}>
        <AppLink to="/clothing">Одежда</AppLink>
      </li>
      <li className={cls.NavbarItem}>
        <AppLink to="/goods">Все остальное</AppLink>
      </li>
    </ul>
  );
};

export default memo(Navbar);

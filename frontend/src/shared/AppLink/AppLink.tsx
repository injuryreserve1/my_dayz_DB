import type { FC } from 'react';
import { NavLink, type LinkProps } from 'react-router';
import cls from './AppLink.module.css';

interface Props extends LinkProps {
  className?: string;
}

const AppLink: FC<Props> = (props) => {
  const { children, to } = props;
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? `${cls.NavLink} ${cls.Active}` : `${cls.NavLink}`
      }
      to={to}
    >
      {children}
    </NavLink>
  );
};

export default AppLink;

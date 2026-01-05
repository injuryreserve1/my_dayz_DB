import type { FC } from 'react';
import cls from './Footer.module.css';

interface Props {}

const Footer: FC<Props> = () => {
  return (
    <footer className={cls.Footer}>
      <div className={`${cls.Wrapper} ${cls.Invert}`}>
        <span data-text="Dayz DB"></span>
      </div>
    </footer>
  );
};

export default Footer;

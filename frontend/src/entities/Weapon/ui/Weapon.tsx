import Meter from '@/shared/Meter/Meter';
import cls from './Weapon.module.css';
import type { FC, RefCallback } from 'react';
import type { WeaponType } from '../model/Weapon';

interface Props {
  weapon: WeaponType;
}

const Weapon: FC<Props> = ({ weapon }) => {
  return (
    <div
      key={weapon?.item_id}
      className={cls.WeaponCard}
    >
      <div className={cls.WeaponName}>
        <span>{weapon.item_name}</span>
      </div>

      <img
        className={cls.WeaponImg}
        src={`/dayzimages/${weapon?.item_name}.png`}
        alt={weapon?.item_name ?? 'Weapon image'}
      />

      <dl className={cls.WeaponSpecs}>
        <div className={cls.WeaponSpecsWrapper}>
          <dt>health damage:</dt>
          <dd>
            <Meter value={weapon?.health_damage} />
          </dd>

          <dt>blood damage:</dt>
          <dd>
            <Meter value={weapon?.blood_damage} />
          </dd>

          <dt>shock damage:</dt>
          <dd>
            <Meter value={weapon?.shock_damage} />
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default Weapon;

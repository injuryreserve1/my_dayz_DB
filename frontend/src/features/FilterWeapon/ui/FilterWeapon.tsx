import RangeInput from '@/shared/RangeInput/RangeInput';
import Button from '@/shared/Button/Button';
import cls from './FilterWeapon.module.css';
import { type FilterWeapons } from '@/entities/Weapon/';

interface filter {
  min: number;
  max: number;
}

interface Props {
  filters: Record<string, filter>;
  onHandle: (key: keyof FilterWeapons) => (newData: filter) => void;
  onReset: () => void;
}

const FilterWeapon = ({ filters, onHandle, onReset }: Props) => {

  return (
    <div className={cls.FilterWeapon}>
      <div className={cls.Wrapper}>
        <RangeInput
          label="health damage"
          min={0}
          max={200}
          value={filters.health_damage}
          onChange={onHandle('health_damage')}
          color="purple"
        />
        <RangeInput
          label="blood damage"
          min={0}
          max={200}
          value={filters.blood_damage}
          onChange={onHandle('blood_damage')}
          color="red"
        />
        <RangeInput
          label="shock damage"
          min={0}
          max={200}
          value={filters.shock_damage}
          onChange={onHandle('shock_damage')}
          color="blue"
        />
        <RangeInput
          label="mass"
          min={0}
          max={7}
          value={filters.mass}
          onChange={onHandle('mass')}
        />
        <RangeInput
          label="rate of fire"
          min={0}
          max={1000}
          value={filters.fire_rate}
          onChange={onHandle('fire_rate')}
        />
        <RangeInput
          label="durability"
          min={0}
          max={300}
          value={filters.durability}
          onChange={onHandle('durability')}
        />
        <RangeInput
          label="recoil"
          min={0}
          max={100}
          value={filters.recoil_control}
          onChange={onHandle('recoil_control')}
        />
        <Button onClick={onReset}>reset</Button>
      </div>
    </div>
  );
};

export default FilterWeapon;

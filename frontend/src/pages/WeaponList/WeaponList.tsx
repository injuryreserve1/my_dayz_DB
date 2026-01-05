import { useQuery } from '@apollo/client/react';
import Weapon, {
  GET_WEAPON_QUERY,
  type GetWeaponData,
} from '@/entities/Weapon/';
import cls from './WeaponList.module.css';
import FilterWeapon from '@/features/FilterWeapon';
import { useSearchParams } from 'react-router';
import { useEffect, useState } from 'react';

interface filter {
  min: number;
  max: number;
}

const defaultFilterValues = {
  health_damage: { min: 0, max: 200 },
  blood_damage: { min: 0, max: 200 },
  shock_damage: { min: 0, max: 200 },
  mass: { min: 0, max: 7 },
  fire_rate: { min: 0, max: 1000 },
  durability: { min: 0, max: 300 },
  recoil_control: { min: 0, max: 100 },
};

export default function WeaponList() {
  const [filters, setFilters] = useState(defaultFilterValues);
  const [filterParams, setFilterParams] = useSearchParams();

  const { data, error } = useQuery<GetWeaponData>(GET_WEAPON_QUERY, {
    variables: { limit: 57, filter: filters },
  });

  useEffect(() => {
    setFilters(prev => {
      let updated: any = {...prev};

      for(const param of filterParams) {
        const key = param[0];
        const value = param[1];

        const delimiter = key.indexOf("_");
        if(delimiter === -1) continue;
        
        const extremum = key.substring(0, delimiter);
        const fieldName = key.substring(delimiter + 1);
        
        updated[fieldName] = {
          ...updated[fieldName],
          [extremum]: Number(value)
        }
      }
      return updated;
    });
  }, [filterParams]);

  const handleRangeChange =
    (key: keyof typeof filters) => (newData: filter) => {
      setFilterParams((searchParams) => {
        searchParams.set(`min_${key}`, String(newData.min))
        searchParams.set(`max_${key}`, String(newData.max))
        return searchParams
      });
    };

  const handleResetClick = () => {
    setFilterParams({})
    setFilters(defaultFilterValues)
  };

  if (error) {
    return <p>error</p>;
  }

  return (
    <div className={cls.WeaponList}>
      <div className={cls.WeaponWrapper}>
        {data?.getWeapons?.items.map((weapon) => (
          <Weapon weapon={weapon} key={weapon.item_id} />
        ))}
      </div>
      <div className={cls.FilterWeapon}>
        <FilterWeapon
          filters={filters}
          onReset={handleResetClick}
          onHandle={handleRangeChange}
        />
      </div>
    </div>
  );
}

/*
{
      health_damage: {
        min: Number(filterParams.get('min_health_damage')) || 0,
        max: Number(filterParams.get('max_health_damage')) || 200,
      },
      blood_damage: {
        min: Number(filterParams.get('min_blood_damage')) || 0,
        max: Number(filterParams.get('max_blood_damage')) || 200,
      },
      shock_damage: {
        min: Number(filterParams.get('min_shock_damage')) || 0,
        max: Number(filterParams.get('max_shock_damage')) || 200,
      },
      mass: {
        min: Number(filterParams.get('min_mass')) || 0,
        max: Number(filterParams.get('max_mass')) || 7,
      },
      fire_rate: {
        min: Number(filterParams.get('min_fire_rate')) || 0,
        max: Number(filterParams.get('max_fire_rate')) || 1000,
      },
      durability: {
        min: Number(filterParams.get('min_durability')) || 0,
        max: Number(filterParams.get('max_durability')) || 300,
      },
      recoil_control: {
        min: Number(filterParams.get('min_recoil_control')) || 0,
        max: Number(filterParams.get('max_recoil_control')) || 100,
      },
    }
blood_damage: 83.1
caliber: "5.56x45"
description: "\"A selective fire bullpup weapon. The compact design and the short barrel make the weapon suitable for CQB. It’s fed by a dedicated magazine. Uses 5.56x45mm rounds.\""
durability: 300
fire_modes: "Burst-fire, Full-automatic, Semi-automatic"
health_damage: 91.4
item_id: 0
item_name: "AUR A1"
item_size: "18"
mass: 3.6
rate_of_fire: 722.5
recoil_control: 67
shock_damage: 91.4
*/

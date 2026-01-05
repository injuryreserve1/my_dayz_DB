export interface WeaponType {
  item_id: number;
  item_name: string;
  item_size: number;
  mass: number;
  durability: number;
  caliber: string;
  fire_modes: string;
  health_damage: number;
  shock_damage: number;
  blood_damage: number;
  recoil_control: number;
  rate_of_fire: number;
  description: string;
}

export interface WeaponPage {
  items: WeaponType[];
  total: number;
}

export interface GetWeaponData {
  getWeapons: WeaponPage;
}

interface minmaxValues {
  min: number;
  max: number;
}

export interface FilterWeapons {
  // [key: string]: string | undefined;

  health_damage: minmaxValues;

  blood_damage: minmaxValues;

  shock_damage: minmaxValues;

  fire_rate: minmaxValues;

  recoil_control: minmaxValues;

  mass: minmaxValues;

  durability: minmaxValues;

}

export interface IModels {
  Weapon: any;
  sequelize: any;
}

interface minMaxValues {
  min: Number;
  max: Number;
}

export interface IFilterWeapon {
  name: String;
  caliber: String;

  health_damage: minMaxValues;
  blood_damage: minMaxValues;
  shock_damage: minMaxValues;
  mass: minMaxValues;
  fire_rate: minMaxValues;
  durability: minMaxValues;
  recoil_control: minMaxValues;
}

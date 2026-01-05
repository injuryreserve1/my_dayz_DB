import { Op } from "sequelize";
import type { IFilterWeapon, IModels } from "../../types/interfaces";

export default {
  Query: {
    getWeapons: (
      _: any,
      args: { limit?: number; offset?: number; filter?: IFilterWeapon },
      { models }: { models: IModels },
    ) => {
      const where: any = {};
      console.log("args filters", args.filter);
      if (args.filter) {
        const {
          health_damage,
          blood_damage,
          shock_damage,
          mass,
          fire_rate,
          durability,
          recoil_control,
        } = args.filter;

        const filterFields = [
          { attr: health_damage, state: "health_damage" },
          { attr: blood_damage, state: "blood_damage" },
          { attr: shock_damage, state: "shock_damage" },
          { attr: mass, state: "mass" },
          { attr: fire_rate, state: "rate_of_fire" },
          { attr: durability, state: "durability" },
          { attr: recoil_control, state: "recoil_control" },
        ];

        filterFields.forEach(({ attr, state }) => {
          if (attr && attr.min !== undefined && attr.max !== undefined) {
            where[state] = {
              [Op.gte]: attr.min,
              [Op.lte]: attr.max,
            };
          }
        });
      }

      const items = models.Weapon.findAll({
        where,
        limit: args.limit,
        offset: args.offset,
        order: [["item_id", "ASC"]],
      });
      const total = models.Weapon.count({ where });

      return { items, total };
    },
  },
};

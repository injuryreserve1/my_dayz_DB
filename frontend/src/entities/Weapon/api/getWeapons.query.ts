import { gql, type TypedDocumentNode } from '@apollo/client';
import type { FilterWeapons } from '../model/Weapon';

export const GET_WEAPON_QUERY = gql`
  query GetWeapons($limit: Int, $offset: Int, $filter: FilterWeapons) {
    getWeapons(limit: $limit, offset: $offset, filter: $filter) {
      total
      items {
        item_id
        item_name
        item_size
        mass
        durability
        caliber
        fire_modes
        health_damage
        shock_damage
        blood_damage
        recoil_control
        rate_of_fire
        description
      }
    }
  }
` as TypedDocumentNode<{filter: FilterWeapons}>;

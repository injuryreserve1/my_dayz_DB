
import { gql, type TypedDocumentNode } from '@apollo/client';


interface FilterWeapons {
    min_health_damage: number;
    max_health_damage: number;
}

export const GET_FILTERED_WEAPON = gql`
  query GetWeapons($filter: FilterWeapons) {
    getWeapons(filter: $filter) {
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

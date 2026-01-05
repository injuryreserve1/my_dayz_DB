import gql from "graphql-tag";

export default gql`
    type Weapon {
        item_id: Int!
        item_name: String!
        item_size: String!
        mass: Float!
        durability: Int!
        caliber: String!
        fire_modes: String!
        health_damage: Float!
        shock_damage: Float!
        blood_damage: Float!
        recoil_control: Float!
        rate_of_fire: Float!
        description: String!
    }

    input minmaxIntValues {
        min: Int
        max: Int
    }

    input minmaxFloatValues {
        min: Float
        max: Float
    }

    input FilterWeapons {

        name: String
        caliber: String

        health_damage: minmaxFloatValues
        blood_damage: minmaxFloatValues
        shock_damage: minmaxFloatValues
        mass: minmaxFloatValues
        fire_rate: minmaxFloatValues

        durability: minmaxIntValues
        recoil_control: minmaxIntValues

    }

    type WeaponPage {
        items: [Weapon!]!
        total: Int
    }

    type Query {
        getWeapons(limit: Int = 10, offset: Int = 0, filter: FilterWeapons = {}): WeaponPage!
    }
`;

import { DataTypes } from 'sequelize';

export default (sequelize: any) => {
    const Weapon = sequelize.define('Weapon', {
        item_id: {type: DataTypes.INTEGER, primaryKey: true},
        item_name: {type: DataTypes.STRING},
        item_size: {type: DataTypes.STRING},
        mass: {type: DataTypes.FLOAT},
        durability: {type: DataTypes.INTEGER},
        caliber: {type: DataTypes.STRING},
        fire_modes: {type: DataTypes.STRING},
        health_damage: {type: DataTypes.FLOAT},
        shock_damage: {type: DataTypes.FLOAT},
        blood_damage: {type: DataTypes.FLOAT},
        recoil_control: {type: DataTypes.FLOAT},
        rate_of_fire: {type: DataTypes.FLOAT},
        description: {type: DataTypes.TEXT},
    }, {
        tableName: 'weapons',
        timestamps: false,
    })

    

    return Weapon
}


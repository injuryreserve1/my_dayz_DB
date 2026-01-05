import { Sequelize } from "sequelize";
import WeaponFactory from './Weapon'; 
import { $db} from '../../config'
const { dialect, port, host, database, username, password } = $db

const uri = `${dialect}://${username}:${password}@${host}:${port}/${database}`
const sequelize = new Sequelize(uri)

const models = {
    Weapon: WeaponFactory(sequelize),
    sequelize
}



export default models;
CREATE TABLE items (
    item_id          INT PRIMARY KEY,
    item_name        TEXT,
    item_size        INT,
    mass             NUMERIC(5,2),
    durability       INT,
    caliber          TEXT,
    fire_modes       TEXT,
    health_damage    NUMERIC(5,1),
    shock_damage     NUMERIC(5,1),
    blood_damage     NUMERIC(5,1),
    recoil_control   NUMERIC(5,1),
    rate_of_fire     NUMERIC(6,1),
    description      TEXT
);

COPY items (
    item_id,
    item_name,
    item_size,
    mass,
    durability,
    caliber,
    fire_modes,
    health_damage,
    shock_damage,
    blood_damage,
    recoil_control,
    rate_of_fire,
    description
)
FROM '/docker-entrypoint-initdb.d/weapons.csv'
DELIMITER ','
CSV HEADER;

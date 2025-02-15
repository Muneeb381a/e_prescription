import { client } from "../db/connection.js";


const getAllMedicines = async() => {
    const query = "SELECT * FROM medicine";
    const  {rows} = await client.query(query);

    return rows;
}

const getMedicineById = async(id) => {
    const query = "SELECT * FROM medicine WHERE id = $1";
    const { rows } = await client.query(query, [id])
    return rows[0];
};

const createMedicine = async(data) => {
    const {
        name,
        manufacturer,
        formula,
        registration_number,
        registered_date,
        description,
        storage_condition,
        side_effects,
        contraindications,
        prescription_required,
        expiry_date,
        batch_number,
        price,
        stock_quantity
    } = data;

    const query = `INSERT INTO medicine(name, manufacturer, formula, registration_number, registered_date, description, storage_condition, side_effects, contraindications, prescription_required, expiry_date, batch_number, price, stock_quantity) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *`;  
    const values = [name, manufacturer, formula, registration_number, registered_date, description, storage_condition, side_effects, contraindications, prescription_required, expiry_date, batch_number, price, stock_quantity];   
    const { rows } = await client.query(query, values);
    return rows[0]
};

export { getAllMedicines, getMedicineById, createMedicine };
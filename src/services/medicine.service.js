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
}

export { getAllMedicines, getMedicineById };
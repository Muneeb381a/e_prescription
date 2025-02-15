import { client } from "../db/connection.js";


const getAllMedicines = async() => {
    const query = "SELECT * FROM medicine";
    const  {rows} = await client.query(query);

    return rows;
}

export { getAllMedicines };
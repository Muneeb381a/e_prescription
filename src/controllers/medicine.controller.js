import { ApiError } from "../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js";
import { getAllMedicines } from "../services/medicine.service.js";

const getMedicines = async (req, res) => {
    try {
        const medicines = await getAllMedicines();
        if(medicines.lenght === 0) {
            throw new ApiError(404, "no medicines found in database")
        }
        res.status(200).json(new ApiResponse(200, "All medicines fetched succesfully", medicines))
    } catch (error) {
        next(new ApiError(500, error.message));
    }
}
export { getMedicines };

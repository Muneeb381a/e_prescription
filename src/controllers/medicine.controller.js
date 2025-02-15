import { ApiError } from "../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js";
import { createMedicine, getAllMedicines, getMedicineById } from "../services/medicine.service.js";

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
};

const getMedicineByID = async(req, res, next) => {

    try {
        const { id } = req.params;

        if (!id || isNaN(id)) {
            return next(new ApiError(400, "Invalid medicine ID"));
        }
       const medicine = await getMedicineById(id);
        if (!medicine) {
            return res.status(404).json(new ApiResponse(404, "Medicine not found", medicine));
        }

        res.status(200).json(new ApiResponse(200, "Medicine fetched successfully", medicine));
        
    } catch (error) {
        next(new ApiError(500, "Internal Server Error"));
    }
};

const createmedicine = async(req, res, next) => {
    try {
        const newMedicine = await createMedicine(req.body);
        res.status(201).json(new ApiResponse(201, "Medicine created successfully", newMedicine));
    } catch (error) {
        next(error);
    }
}
export { getMedicines, getMedicineByID, createmedicine };

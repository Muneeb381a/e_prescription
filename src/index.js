import dotenv from "dotenv";
import {connectDB} from "./db/connection.js";
import app from "./app.js";

dotenv.config({
    path: "./.env",
});

const startServer = async () => {
    try {
        await connectDB();
        const PORT = process.env.PORT || 4500;
        app.listen(process.env.PORT, () => {
            console.log(`⚙️ Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("🔥 Error starting server: ", error);
        process.exit(1);
    }
}

startServer();
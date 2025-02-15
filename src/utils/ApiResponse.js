class ApiResponse {
    constructor(statusCode, data, message = "Success", meta) {
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = this.statusCode < 300;
        this.meta = meta;
    }
}

export {ApiResponse};
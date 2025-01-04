"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentModel = void 0;
const mongoose_1 = require("mongoose");
const StudentSchema = new mongoose_1.Schema({
    name: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
    },
    address: { type: String, required: true },
    bloodGroup: ['A+', 'B+', 'O-', 'O', 'B-'],
    mobileNo: { type: String, required: true },
    father: {
        firstName: { type: String, require: true },
        lastName: { type: String, required: true },
        mobile: { type: String, required: true },
        address: { type: String, required: true }
    }
});
exports.StudentModel = (0, mongoose_1.model)('pupils', StudentSchema);

import mongoose from "mongoose"

export interface IRegistration extends mongoose.Document {
    name: string
    email: string
    github?: string
    building: string
    createdAt: Date
}

const RegistrationSchema = new mongoose.Schema<IRegistration>({
    name: {
        type: String,
        required: [true, "Please provide your name"],
        maxlength: [60, "Name cannot be more than 60 characters"],
    },
    email: {
        type: String,
        required: [true, "Please provide your email"],
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please provide a valid email",
        ],
    },
    github: {
        type: String,
        required: false,
    },
    building: {
        type: String,
        required: [true, "Please tell us what you are building"],
        maxlength: [1000, "Description cannot be more than 1000 characters"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

export default mongoose.models.Registration || mongoose.model<IRegistration>("Registration", RegistrationSchema)

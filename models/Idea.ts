import mongoose from "mongoose"

export interface IIdea extends mongoose.Document {
    title: string
    description: string
    category: string
    authorName: string
    authorEmail?: string
    createdAt: Date
}

const IdeaSchema = new mongoose.Schema<IIdea>({
    title: {
        type: String,
        required: [true, "Please provide a title for your idea"],
        maxlength: [100, "Title cannot be more than 100 characters"],
    },
    description: {
        type: String,
        required: [true, "Please provide a description"],
        maxlength: [2000, "Description cannot be more than 2000 characters"],
    },
    category: {
        type: String,
        required: [true, "Please select a category"],
    },
    authorName: {
        type: String,
        required: [true, "Please provide your name"],
    },
    authorEmail: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

export default mongoose.models.Idea || mongoose.model<IIdea>("Idea", IdeaSchema)

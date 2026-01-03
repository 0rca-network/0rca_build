"use server"

import dbConnect from "@/lib/mongodb"
import Idea from "@/models/Idea"

export async function submitIdea(formData: FormData) {
    const title = formData.get("title")
    const description = formData.get("description")
    const category = formData.get("category")
    const authorName = formData.get("authorName")
    const authorEmail = formData.get("authorEmail")

    try {
        await dbConnect()

        await Idea.create({
            title,
            description,
            category,
            authorName,
            authorEmail,
        })

        return { success: true, message: "Idea submitted successfully!" }
    } catch (error: any) {
        console.error("Idea submission error:", error)
        return { success: false, message: error.message || "Something went wrong." }
    }
}

"use server"

import dbConnect from "@/lib/mongodb"
import Registration from "@/models/Registration"

export async function registerUser(formData: FormData) {
    const name = formData.get("name")
    const email = formData.get("email")
    const github = formData.get("github")
    const building = formData.get("building")

    try {
        await dbConnect()

        const newRegistration = await Registration.create({
            name,
            email,
            github,
            building,
        })

        return { success: true, message: "Registration successful!" }
    } catch (error: any) {
        console.error("Registration error:", error)
        return { success: false, message: error.message || "Something went wrong." }
    }
}

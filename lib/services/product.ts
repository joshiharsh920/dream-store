import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getAllProducts() {
    try {
        return await prisma.product.findMany({
            orderBy: { createdAt: "desc" },
        });
    } catch (error) {
        console.error("Database Error:", error);
        return [];
    }
}

export async function createProduct(formData: FormData) {
    "use server";

    const name = formData.get("name") as string;
    const price = parseFloat(formData.get("price") as string);
    const image = formData.get("image") as string;
    const description = formData.get("description") as string;

    await prisma.product.create({
        data: { name, price, image, description, category: "General" },
    });

    revalidatePath("/products");
}
import { PrismaClient } from "../generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { initialProducts } from "./data";
// 1. Setup the connection (same as your lib/prisma.ts)
const adapter = new PrismaBetterSqlite3({ url: "file:./prisma/dev.db" });
const prisma = new PrismaClient({ adapter });


async function main() {
    console.log("🚀 Starting seed...");

    // 2. Clear existing data (optional, but prevents duplicates)
    await prisma.product.deleteMany();



    for (const p of initialProducts) {
        const product = await prisma.product.create({
            data: p,
        });
        console.log(`✅ Created product: ${product.name}`);
    }

    console.log("✨ Seeding finished successfully!");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    });
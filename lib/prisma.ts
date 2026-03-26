import { PrismaClient } from "../generated/prisma/client"; // Note the /client at the end
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import Database from "better-sqlite3";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

// 1. Correct way to initialize the adapter in Prisma 7
const adapter = new PrismaBetterSqlite3({
    url: "file:./prisma/dev.db"
});

// 2. Initialize the client using the adapter
export const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
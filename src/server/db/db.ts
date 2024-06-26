
import postgres from "postgres"
import { drizzle } from "drizzle-orm/postgres-js"

// const dev = process.env.VERCEL_ENV !== "production"
// loadEnvConfig("./", dev)

const connectionString = process.env.POSTGRES_URL as string


export const client = postgres(connectionString, { prepare: false })
export const db = drizzle(client)

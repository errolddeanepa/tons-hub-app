console.log("--- Starting Environment Variable Test ---");

const dbUrl = process.env.DATABASE_URL || "postgresql://tons_hub_db_user:m8GRDlxjw30LParrOX1qZTYF4RQX2LSP@dpg-d3pks063jp1c738213ng-a/tons_hub_db";
const redisUrl = process.env.REDIS_URL || "redis://default:AUppAAIncDIyOTBmYzY0MWU4YTg0ZmM1YmUxZGQ2MWU1MmI2MDNmOXAyMTkwNDk@comic-bream-19049.upstash.io:6379";

console.log(`DATABASE_URL is: ${dbUrl}`);
console.log(`REDIS_URL is: ${redisUrl}`);

if (dbUrl && redisUrl) {
  console.log("--- Test SUCCESS: Both variables were found. ---");
} else {
  console.error("--- Test FAILED: One or more variables are missing. ---");
}
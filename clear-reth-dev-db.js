#!/usr/bin/env node

const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

function runRethDbDrop() {
  return new Promise((resolve, reject) => {
    exec("reth db drop", (error, stdout, stderr) => {
      // We expect this to error since we want to extract the path
      const output = stderr || stdout;
      resolve(output);
    });
  });
}

function extractRethPath(output) {
  // Look for the pattern: Database does not exist: "path"
  const match = output.match(/Database does not exist: "([^"]+)"/);
  if (match) {
    return match[1];
  }
  return null;
}

function deleteDevDatabase(rethDbPath) {
  // Replace 'mainnet' with 'dev' in the path
  const devDbPath = rethDbPath.replace("/mainnet/db", "/dev");

  console.log(`Attempting to delete dev database at: ${devDbPath}`);

  if (fs.existsSync(devDbPath)) {
    try {
      fs.rmSync(devDbPath, { recursive: true, force: true });
      console.log(`Successfully deleted dev database: ${devDbPath}`);
    } catch (error) {
      console.error(`Failed to delete dev database: ${error.message}`);
      process.exit(1);
    }
  } else {
    console.log(`Dev database does not exist at: ${devDbPath}`);
  }
}

async function main() {
  try {
    console.log("Running reth db drop to get database path...");
    const output = await runRethDbDrop();

    console.log("Reth db drop output:");
    console.log(output);

    const rethDbPath = extractRethPath(output);

    if (!rethDbPath) {
      console.error("Could not extract database path from reth db drop output");
      process.exit(1);
    }

    console.log(`Extracted reth database path: ${rethDbPath}`);

    deleteDevDatabase(rethDbPath);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

main();

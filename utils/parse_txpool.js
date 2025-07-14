#!/usr/bin/env node

let data = "";

process.stdin.on("data", (chunk) => {
  data += chunk;
});

process.stdin.on("end", () => {
  try {
    const json = JSON.parse(data);
    const result = {};

    for (const [key, value] of Object.entries(json)) {
      // Convert hex string to decimal
      result[key] = parseInt(value, 16);
    }

    // Output as JSON
    console.log(JSON.stringify(result, null, 2));

    // Or if you prefer plain text output, comment above and uncomment below:
    // for (const [key, value] of Object.entries(result)) {
    //   console.log(`${key}: ${value}`);
    // }
  } catch (error) {
    console.error("Error parsing JSON:", error.message);
    process.exit(1);
  }
});

// Handle piped input properly
if (process.stdin.isTTY) {
  console.error("This script expects piped input");
  console.error('Usage: echo \'{"pending":"0x1aa0","queued":"0x0"}\' | node parse_txpool.js');
  process.exit(1);
}

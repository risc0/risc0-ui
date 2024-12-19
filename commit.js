import { execSync } from "child_process";
import { readFileSync } from "fs";

const packageJson = JSON.parse(readFileSync("./package.json", "utf8"));
const version = packageJson.version;

// Get the commit message from command line arguments
const commitMessage = process.argv.slice(2).join(" ");

if (!commitMessage) {
  console.error("Please provide a commit message");
  process.exit(1);
}

// Create the versioned commit message
const versionedMessage = `${version} - ${commitMessage}`;

// Execute the git commit command
try {
  execSync(`git commit -m "${versionedMessage}"`, { stdio: "inherit" });
} catch (_error) {
  process.exit(1);
}

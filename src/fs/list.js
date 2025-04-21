import path from "path";
import fs from "fs/promises";

const list = async () => {
  const args = process.argv;
  const __filename = args[1];
  const currentPath = path.dirname(__filename);

  const targetPath = path.join(currentPath, "files/");

  // Check if the file already exists
  const exists = await fs
    .stat(targetPath)
    .then(() => true)
    .catch(() => false);

  if (!exists) {
    throw new Error("FS operation failed");
  }

  const files = await fs.readdir(targetPath, { withFileTypes: true });
  console.log(files
    .filter((file) => file.isFile())
    .map((file) => file.name));
};

await list();

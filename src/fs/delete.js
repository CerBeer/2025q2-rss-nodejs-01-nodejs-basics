import path from "path";
import fs from "fs/promises";

const remove = async () => {
  const args = process.argv;
  const __filename = args[1];
  const currentPath = path.dirname(__filename);

  const targetPath = path.join(currentPath, "files/");
  const targetFileName = "fileToRemove.txt";
  const targetFilePath = path.join(targetPath, targetFileName);

  // Check if the file already exists
  const exists = await fs
    .stat(targetFilePath)
    .then(() => true)
    .catch(() => false);

  if (!exists) {
    throw new Error("FS operation failed");
  }

  await fs.unlink(targetFilePath);
};

await remove();

import path from "path";
import fs from "fs/promises";

const rename = async () => {
  const args = process.argv;
  const __filename = args[1];
  const currentPath = path.dirname(__filename);

  const targetPath = path.join(currentPath, "files/");
  const sourceFileName = "wrongFilename.txt";
  const sourceFilePath = path.join(targetPath, sourceFileName);
  const targetFileName = "properFilename.md";
  const targetFilePath = path.join(targetPath, targetFileName);
  
  // Check if the file already exists
  const existsSource = await fs
    .stat(sourceFilePath)
    .then(() => true)
    .catch(() => false);

    const existsTarget = await fs
    .stat(targetFilePath)
    .then(() => true)
    .catch(() => false);

  if (existsTarget || !existsSource) {
    throw new Error("FS operation failed");
  }

  // Rename the file
  await fs.rename(sourceFilePath, targetFilePath);

};

await rename();
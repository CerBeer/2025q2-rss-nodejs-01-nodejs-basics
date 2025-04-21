import path from "path";
import fs from "fs/promises";

const copy = async () => {
  const args = process.argv;
  const __filename = args[1];
  const currentPath = path.dirname(__filename);

  const sourceFolderName = "files";
  const sourceFolderPath = path.join(currentPath, sourceFolderName);
  const targetFolderName = "files_copy";
  const targetFolderPath = path.join(currentPath, targetFolderName);
  
  // Check if the file already exists
  const existsSource = await fs
    .stat(sourceFolderPath)
    .then(() => true)
    .catch(() => false);

    const existsTarget = await fs
    .stat(targetFolderPath)
    .then(() => true)
    .catch(() => false);

  if (existsTarget || !existsSource) {
    throw new Error("FS operation failed");
  }

  await fs.mkdir(targetFolderPath, { recursive: true });
  await fs.cp(sourceFolderPath, targetFolderPath, {
    recursive: true,
    force: true,
  });
};

await copy();

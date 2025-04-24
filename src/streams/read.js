import { createReadStream } from 'fs';
import { dirname, join } from 'path';

const read = async () => {
  const args = process.argv;
  const __filename = args[1];
  const currentPath = dirname(__filename);
  const filePath = join(currentPath, 'files', 'fileToRead.txt');
  const stream = createReadStream(filePath, { encoding: 'utf-8' });

  stream.on("data", (chunk) => process.stdout.write(chunk.toString()));
  stream.on("end", () => process.stdout.write("\n"));

};

await read();
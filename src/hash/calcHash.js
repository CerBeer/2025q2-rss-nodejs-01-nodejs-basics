import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import path from 'path';

const calculateHash = async () => {
  const args = process.argv;
  const __filename = args[1];
  const currentPath = path.dirname(__filename);
  const targetPath = path.join(currentPath, 'files/');
  const targetFileName = 'fileToCalculateHashFor.txt';
  const targetFilePath = path.join(targetPath, targetFileName);  

  const hash = createHash('sha256');
  const stream = createReadStream(targetFilePath);

  stream.on('data', (chunk) => {
      hash.update(chunk);
  });

  stream.on('end', () => {
      console.log(hash.digest('hex'));
  });
};

await calculateHash();
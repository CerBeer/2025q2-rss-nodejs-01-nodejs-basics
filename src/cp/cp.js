import { fork } from "child_process";
import { Transform } from "stream";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const basePath = dirname(fileURLToPath(import.meta.url));
const filePath = path.join(basePath, "files", "script.js");

const input = process.stdin;
const output = process.stdout;

const spawnChildProcess = async (args) => {
  const child = fork(filePath, args, { silent: true });

  input.pipe(child.stdin);
  child.stdout.pipe(output);

};

spawnChildProcess(["Hello", 12, 43, 55, 23]);
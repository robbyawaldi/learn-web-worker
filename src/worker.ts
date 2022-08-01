import { expose } from "comlink";
import { bigTask } from "./bigTask";

const worker = {
  bigTask
}

export type WorkerType = typeof worker

expose(worker)
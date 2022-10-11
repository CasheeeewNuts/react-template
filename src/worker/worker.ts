import {expose} from "comlink";

export type Worker = {
  threadHeavyTask: typeof threadHeavyTask
}

function threadHeavyTask() {
  return
}

expose({threadHeavyTask})
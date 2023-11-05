/// <reference lib="webworker" />

import { findBigPrime } from "./find-big-prime";

addEventListener('message', ({ data }) => {
  const response = findBigPrime();

  postMessage(response);
});

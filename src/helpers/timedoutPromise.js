export function timedoutPromise(timeMs, payload) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(payload);
    }, timeMs);
  });
}

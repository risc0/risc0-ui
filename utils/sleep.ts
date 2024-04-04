// Helpful function to sleep for a given amount of time
export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

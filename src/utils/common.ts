export const sleep = (delay: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, delay))

export const clone = <T extends object>(obj: T): T => JSON.parse(JSON.stringify(obj))

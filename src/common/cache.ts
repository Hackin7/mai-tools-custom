/**
 * @param durationMs cache duration (milliseconds)
 * @param onCacheExpired function to load latest value when cache is expired
 * @param onCacheMiss function to load latest value on cache miss
 */
export async function cached<T>(
  key: string,
  durationMs: number,
  onCacheExpired: (expiredValue: T) => Promise<T>,
  onCacheMiss: () => Promise<T>,
  now: number = Date.now()
): Promise<T> {
  const item = window.localStorage.getItem(key);
  if (item) {
    const {value, expiration} = JSON.parse(item);
    if (expiration && expiration > now) {
      // valid
      // console.log(`Found cache: ${key}=${value}`);
      return value;
    } else {
      return onCacheExpired(value);
    }
  }

  // not found
  const value = await onCacheMiss();
  addToCache(key, value, durationMs);
  return value;
}

export function addToCache<T>(key: string, value: T, durationMs: number, now: number = Date.now()) {
  window.localStorage.setItem(key, JSON.stringify({value, expiration: now + durationMs}));
}

export function expireCache(key: string) {
  window.localStorage.removeItem(key);
}

/**
 * Next.js Instrumentation — runs once when the server starts.
 *
 * Node.js 25 ships an experimental global `localStorage` that throws
 * "localStorage.getItem is not a function" unless `--localstorage-file`
 * points to a valid path. Some dependencies detect `localStorage` and
 * try to use it during SSR, causing a crash.
 *
 * This patches the global with a no-op implementation on the server.
 */
export function register() {
  if (typeof window === "undefined" && typeof globalThis.localStorage !== "undefined") {
    try {
      // Test if it actually works
      globalThis.localStorage.getItem("__test__");
    } catch {
      // Replace with a no-op stub
      const store = new Map<string, string>();
      (globalThis as Record<string, unknown>).localStorage = {
        getItem: (key: string) => store.get(key) ?? null,
        setItem: (key: string, value: string) => store.set(key, value),
        removeItem: (key: string) => store.delete(key),
        clear: () => store.clear(),
        get length() { return store.size; },
        key: (index: number) => [...store.keys()][index] ?? null,
      };
    }
  }
}

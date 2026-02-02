/**
 * API client for fetching data.
 * Use in Server Components / Server Actions — no useEffect.
 */

const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? "";

export async function fetchApi<T>(path: string): Promise<T> {
  const res = await fetch(`${baseUrl}${path}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json() as Promise<T>;
}

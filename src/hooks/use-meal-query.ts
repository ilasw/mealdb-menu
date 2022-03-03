import {QueryKey, useQuery, UseQueryOptions} from "react-query";

export async function JSONfetch<T = any>(url: string) {
  const res = await fetch(url);
  return await res.json() as T;
}

export const useMealQuery = <T = any>(name: QueryKey, url: string, options?: UseQueryOptions<T>) => {
  return useQuery<T>(name, () => JSONfetch<T>(url), options??{});
}



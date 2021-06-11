import useSWR from "swr";

function fetcher(route) {
  /* our token cookie gets sent with this request */
  return fetch(route)
    .then((r) => r.ok && r.json())
    .then((user) => user || null);
}

export default function useAuth() {
  try {
    const { data: user, error, mutate } = useSWR("/api/user", fetcher);
    const loading = user === undefined;
  
    return {
      user,
      loading,
      error,
    };
  } catch (err) {
    let user, loading = undefined;
    let error = err;
    return {
      user,
      loading,
      error,
    };
  }
}

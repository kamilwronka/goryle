import { useQuery } from "@tanstack/react-query";

type Ban = {
  nick: string;
  status: string;
};

export const useBans = () => {
  const query = useQuery({
    queryKey: ["bans"],
    queryFn: () =>
      fetch("https://bans-fetcher.communicator-dev.workers.dev/bans/692").then(
        (response) => response.json() as Promise<Ban[]>
      ),
  });

  return query;
};

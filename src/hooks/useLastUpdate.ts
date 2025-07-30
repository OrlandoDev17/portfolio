import { useState, useEffect } from "react";

interface LastUpdateProps {
  repoPath: string | undefined;
}

export function useLastUpdate({ repoPath }: LastUpdateProps) {
  const [lastUpdate, setLastUpdate] = useState<string | null>("null");

  useEffect(() => {
    const fetchLastCommit = async () => {
      try {
        const API_URL = `https://api.github.com/repos/${repoPath}/commits`;
        const res = await fetch(API_URL);
        const commits = await res.json();

        const rawDate = commits[0]?.commit?.author?.date;
        const formatedDate = rawDate
          ? new Date(rawDate).toLocaleDateString("es-VE", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          : null;

        setLastUpdate(formatedDate);
      } catch (error) {
        console.error("Error al obtener la fecha del último commit:", error);
      }
    };

    fetchLastCommit();
  }, [repoPath]);

  return lastUpdate;
}

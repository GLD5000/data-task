import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { GlaDataJson } from "./glaTypes";

export default function useGlaJson(): {
  data: GlaDataJson | null;
  isLoading: boolean;
  refetch: () => void;
} {
  const [data, setData] = useState<GlaDataJson | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchJson(setData, setIsLoading);
  }, [setData, setIsLoading]);

  const refetch = (): void => {
    fetchJson(setData, setIsLoading);
  };

  return { data, isLoading, refetch };
}

async function fetchJson(
  setData: Dispatch<SetStateAction<GlaDataJson | null>>,
  setIsLoading: Dispatch<SetStateAction<boolean>>
): Promise<void> {
  try {
    const response = await fetch(`/api/getGlaData/`);
    const jsonData = await response.json();

    setData(jsonData);
  } catch (error) {
    console.error("Error fetching JSON files:", error);
  } finally {
    setIsLoading(false);
  }
}
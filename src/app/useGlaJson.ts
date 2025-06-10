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
    fetchJsonV2(setData, setIsLoading);
  }, [setData, setIsLoading]);

  const refetch = (): void => {
    fetchJsonV2(setData, setIsLoading);
  };

  return { data, isLoading, refetch };
}

export async function fetchJson(
  setData: Dispatch<SetStateAction<GlaDataJson | null>>,
  setIsLoading: Dispatch<SetStateAction<boolean>>
): Promise<void> {
  try {
    const request = {
      method: "GET",
      format: "pdf",
    };
    const response = await fetch(
      `https://data.london.gov.uk/api/dataset/gla-adult-skills-fund/`,
      request
    );
    const jsonData = await response.json();

    setData(jsonData);
  } catch (error) {
    console.error("Error fetching JSON files:", error);
  } finally {
    setIsLoading(false);
  }
}

async function fetchJsonV2(
  setData: Dispatch<SetStateAction<GlaDataJson | null>>,
  setIsLoading: Dispatch<SetStateAction<boolean>>
): Promise<void> {
  try {
    const request = {
      method: "GET",
      format: "pdf",
    };
    const response = await fetch(`glaAsf.json`);
    const jsonData = await response.json();

    setData(jsonData);
  } catch (error) {
    console.error("Error fetching JSON files:", error);
  } finally {
    setIsLoading(false);
  }
}

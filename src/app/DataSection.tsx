"use client";

import useGlaJson from "./useGlaJson";

export default function DataSection() {
  const glaJson = useGlaJson();
  const { data } = glaJson;
  if (!data) return null;

  return <div>{JSON.stringify(data)}</div>;
}

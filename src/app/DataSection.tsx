"use client";

import { TypographyH1, TypographyH2, TypographyLink, TypographyList, TypographyListItem } from "./typography";
import useGlaJson from "./useGlaJson";

export default function DataSection() {
  const glaJson = useGlaJson();
  const { data } = glaJson;
  if (data === null) return null;
  const { title, description, resources } = data;
  const pdfResources = Object.values(resources).filter(
    (resource) => resource.format === "pdf"
  );
  return (
    <div className="grid w-full max-w-[65rem] h-fit mx-auto md:p-4 gap-4 ">
      <div className="flex flex-wrap gap-4 w-fit h-fit my-auto mx-auto">
        <div className="grid w-fit h-auto mx-auto">
          <TypographyH1 className="w-fit mx-auto text-[4rem] lg:text-[5rem] my-0 tracking-wide leading-none lg:leading-none text-center">
            {title}
          </TypographyH1>
          <div
            dangerouslySetInnerHTML={{ __html: description }}
            className="gla-paragraph text-neutral-700"
                  />
                  <TypographyH2>
                      Available PDFs
                  </TypographyH2>
          <TypographyList>
            {pdfResources.map((resource, index) => {
              const { title, url } = resource;
              return (
                <TypographyListItem key={`${index}-${title}`}>
                      <TypographyLink href={`${url}`} target="_blank" className="hover:underline focus:underline">
                          
                  {title}
                </TypographyLink>
                </TypographyListItem>
              );
            })}
          </TypographyList>
          <style>
            {`.gla-paragraph a {
color:oklch(42.4% 0.199 265.638)}
.gla-paragraph p  {
margin:1em 0 1em;}`}
          </style>
        </div>
      </div>
    </div>
  );
}

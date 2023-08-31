/* eslint-disable @next/next/no-img-element */
import React from "react";
import { getClient } from "@/lib/graphql-client";
import { query } from "@/graphql/characters-queries";
import { CharactersResponse } from "@/types/characters";

export const dynamic = "force-dynamic";

export default async function ServerSide() {
  const { data: { characters: { results } } } = await getUsers();

  return (
    <main className="p-5">
      <h1 className="text-center text-xl py-1">Rich and Mortey</h1>
      <div
        className="grid grid-cols-5 gap-5">
        {results.map((character) => (
          <div
            key={character.id}
            className="border text-center"
           
          >
            <img
              className="w-full"
              src={character.image}
              alt={character.name}
            />
            <h3>{character.name}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}

export const getUsers = async () => {
  return await getClient().query<CharactersResponse>({
    query,
  });
}
import { Links } from "parse-link-header";

export interface Character {
  url: string;
  name: string;
  culture: string;
  born: string;
  died: string;
  titles?: string[] | null;
  aliases?: string[] | null;
  gender?: string[] | null;
  father: string;
  mother: string;
  spouse: string;
  allegiances?: string[] | null;
  books?: string[] | null;
  povBooks?: string[] | null;
  tvSeries?: string[] | null;
  playedBy?: string[] | null;
}
export interface DataTableCharacters {
  characters: Character[];
  links: Links;
}

export interface House {
  url: string;
  name: string;
  region: string;
  coatOfArms: string;
  words: string;
  titles?: string[] | null;
  seats?: string[] | null;
  currentLord: string;
  heir: string;
  overlord: string;
  founded: string;
  founder: string;
  diedOut: string;
  ancestralWeapons?: null[] | null;
  cadetBranches?: null[] | null;
  swornMembers?: string[] | null;
}

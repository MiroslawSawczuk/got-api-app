import React from "react";
import { useState, useEffect } from "react";
import { getCharacters } from "../services/api/ice-and-fire";
import CharactersTable from "../components/characters/charactersTable";
import { Character } from "../types/domain";
import { GenderType } from "../types/enums";
import SearchPanel from "../components/characters/searchPanel";
import Pagination from "../components/characters/pagination";
import { Links } from "parse-link-header";

const Characters = (): JSX.Element => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [links, setLinks] = useState<Links>({});
  const [gender, setGender] = useState<GenderType>(0);
  const [culture, setCulture] = useState<string>("");
  const [pageSize, setPageSize] = useState<number>(25);
  const [pageNum, setPageNum] = useState<number>(1);

  //TODO implement Redux to prevent props drilling
  //TODO add spinner when loading

  useEffect(() => {
    getAllData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageSize]);

  const getAllData = async (): Promise<void> => {
    await fetchCharacters(pageSize, gender, culture);
  };

  const fetchCharacters = async (
    pageSize: number,
    gender: GenderType,
    culture: string,
    pageNum: number = 1
  ): Promise<void> => {
    //TODO add spinner when loading
    const dataTableCharacters = await getCharacters(
      pageSize,
      gender,
      culture,
      pageNum
    );
    setCharacters(dataTableCharacters.characters);
    setLinks(dataTableCharacters.links);
  };

  const handleChangeGender = (gender: GenderType): void => setGender(gender);

  const handleChangeCulture = (culture: string): void => setCulture(culture);

  const handleClickSearchCharacters = async (): Promise<void> =>
    await fetchCharacters(pageSize, gender, culture);

  const handleChangePageSize = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ): Promise<void> => {
    const pageSize = parseInt(event.target.value);
    setPageSize(pageSize);

    await fetchCharacters(pageSize, gender, culture);
  };

  const handleChangePageNum = async (pageNum: string): Promise<void> => {
    const pageNumber = parseInt(pageNum);
    setPageNum(pageNumber);
    await fetchCharacters(pageSize, gender, culture, pageNumber);
  };

  return (
    <div className="container-fluid">
      <SearchPanel
        gender={gender}
        handleChangeGender={handleChangeGender}
        culture={culture}
        handleChangeCulture={handleChangeCulture}
        handleClickSearchCharacters={handleClickSearchCharacters}
      />
      <CharactersTable charactersArray={characters} />
      <Pagination
        pageNum={pageNum}
        links={links}
        pageSize={pageSize}
        handleChangePageSize={handleChangePageSize}
        handleChangePageNum={handleChangePageNum}
      />
    </div>
  );
};

export default Characters;

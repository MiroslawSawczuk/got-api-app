import { DataTableCharacters, House } from "../../types/domain";
import { GenderType } from "../../types/enums";
import { LINK } from "../../types/consts";
import parse, { Links } from "parse-link-header";

const root = "https://www.anapioficeandfire.com/api";

//TODO fetch only theese data which are needed. Might be implemented by GraphQL?
//TODO add log to server or file in catch blocks

export const getCharacters = async (
  pageSize: number,
  gender: GenderType,
  culture: string,
  pageNum: number
): Promise<DataTableCharacters> => {
  try {
    let dataTableCharacters = {} as DataTableCharacters;
    let url = `${root}/characters?page=${pageNum}&pageSize=${pageSize}`;

    if (gender !== 0) {
      const genderType =
        gender !== GenderType.Unknown ? GenderType[gender] : "";
      url = `${url}&gender=${genderType}`;
    }
    if (culture) {
      url = `${url}&culture=${culture}`;
    }

    const response: Response = await fetch(url);
    dataTableCharacters.characters = await response.json();

    const linksHeaders = response.headers.get(LINK);
    if (linksHeaders) {
      let links: Links | null = parse(linksHeaders);
      if (links) {
        dataTableCharacters.links = links;
      }
    }

    console.log(dataTableCharacters);
    return dataTableCharacters;
  } catch (ex) {
    console.error(ex);
    throw ex;
  } finally {
  }
};

export const getHouseDetails = async (id: number): Promise<House> => {
  try {
    const url = `${root}/houses/${id}`;

    const response: Response = await fetch(url);
    const houseDetails: House = await response.json();
    return houseDetails;
  } catch (ex) {
    console.error(ex);
    throw ex;
  } finally {
  }
};

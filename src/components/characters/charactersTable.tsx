import { useState, useEffect } from "react";
import { Character } from "../../types/domain";
import { Link } from "react-router-dom";

interface CharactersTableProps {
  charactersArray: Character[];
}

const CharactersTable = (props: CharactersTableProps): JSX.Element => {
  const { charactersArray } = props;
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    setCharacters(charactersArray);
  }, [charactersArray]);

  const colName = (
    name: string,
    aliases: string[] | null | undefined
  ): string => {
    let nameAndAliasesString = "";
    let aliasesArray = [] as string[] | null | undefined;

    if (aliases && aliases.length > 0) {
      aliasesArray = [...aliases];
    }
    if (name) {
      aliasesArray?.unshift(name);
    }
    if (aliasesArray) {
      var filtered = aliasesArray.filter(function (el) {
        return el !== "";
      });

      nameAndAliasesString = filtered.join(", ");
    }

    return nameAndAliasesString;
  };

  const colAlive = (born: string, died: string): string => {
    //TODO Creating colAlive move to the top of component and execude it outside render method.
    //TODO Execude this function right after the props come to component due to performance issue

    let colAlive = "";
    if (born && died) {
      const bornYear = born.match(/\d+/);
      const diedYear = died.match(/\d+/);

      if (bornYear && bornYear.length > 0 && diedYear && diedYear.length > 0) {
        const yearsDiff = parseInt(diedYear[0]) - parseInt(bornYear[0]);
        colAlive = `No, died at ${yearsDiff} years old`;
      }
    } else if (born && !died) {
      colAlive = "Yes";
    } else {
      //TODO implement edge cases
      //TODO display info 'No data'
    }

    return colAlive;
  };

  const colAllegiances = (
    allegiances?: string[] | null | undefined
  ): JSX.Element => {
    const allegiancesCount = allegiances?.length;
    return (
      <>
        {allegiances?.map((a, i) => {
          const id = getIdFromUrl(a);
          const url = `/house-details/${id}`;
          return (
            <span key={`span_${id}`}>
              <Link key={`link_${id}`} to={url}>
                {id}
              </Link>
              {allegiancesCount !== i + 1 ? ", " : null}
            </span>
          );
        })}
      </>
    );
  };

  const getIdFromUrl = (url: string): number => {
    const splitedUrl = url.split("/");
    const id = parseInt(splitedUrl[splitedUrl.length - 1]);
    return id;
  };

  const colBooks = (books?: string[] | null | undefined): number => {
    let countOfBooks = 0;
    if (books) {
      countOfBooks = books.length;
    }

    return countOfBooks;
  };

  const rowItems = characters.map((char) => {
    const id = getIdFromUrl(char.url);
    return (
      <tr key={`row_key_url_${id}`}>
        <td key={`col_key_name_${id}`}>{colName(char.name, char.aliases)}</td>
        <td key={`col_key_alive_${id}`}>{colAlive(char.born, char.died)}</td>
        <td key={`col_key_gender_${id}`}>
          {char.gender ? char.gender : "Unknown"}
        </td>
        <td key={`col_key_culture_${id}`}>
          {char.culture ? char.culture : "Unknown"}
        </td>
        <td key={`col_key_allegiances_${id}`}>
          {colAllegiances(char.allegiances)}
        </td>
        <td key={`col_key_books_${id}`}>{colBooks(char.books)}</td>
      </tr>
    );
  });

  return (
    <table className="table table-sm table-hover">
      <thead>
        <tr>
          <th scope="col">Character</th>
          <th scope="col">Alive</th>
          <th scope="col">Gender</th>
          <th scope="col">Culture</th>
          <th scope="col">Allegiances</th>
          <th scope="col"># of Books</th>
        </tr>
      </thead>
      <tbody>{rowItems}</tbody>
    </table>
  );
};

export default CharactersTable;

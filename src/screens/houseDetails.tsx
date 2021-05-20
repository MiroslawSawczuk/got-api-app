import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getHouseDetails } from "../services/api/ice-and-fire";
import { House } from "../types/domain";
import GoBackBtn from "../components/houseDetails/goBackBtn";
import HouseDetailsTable from "../components/houseDetails/houseDetailsTable";

const HouseDetails = (): JSX.Element => {
  const [houseDetails, setHouseDetails] = useState<House>({} as House);
  const { id }: { id: string | undefined } = useParams();

  useEffect(() => {
    getAllData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const getAllData = async (): Promise<void> => {
    let houseDetailsId: number | undefined;
    if (id) {
      houseDetailsId = parseInt(id);
      if (houseDetailsId > 0) {
        const details = await getHouseDetails(houseDetailsId);
        setHouseDetails(details);
      }
    }
  };

  return (
    <div className="container-fluid">
      <GoBackBtn />
      <HouseDetailsTable houseDetails={houseDetails} />
    </div>
  );
};

export default HouseDetails;

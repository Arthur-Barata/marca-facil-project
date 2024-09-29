import { IStore } from "data";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "shared/components/Header";

import { updateDataSrc } from "shared/common";
import { Reservation } from "shared/components/Reservation";
import { ReservationPageBody } from "./styles";

export const ReservationPage = () => {
  const { currentView } = useSelector((store: IStore) => store.schedule);
  const { enrollment } = useSelector((store: IStore) => store.user);
  const { laboratorySelected } = useSelector(
    (store: IStore) => store.laboratory
  );

  const getUserReservationsByCurrentMonth = useCallback(async () => {
    updateDataSrc(enrollment, laboratorySelected.id);
  }, [currentView]);
  useEffect(() => {
    getUserReservationsByCurrentMonth();
  }, [currentView]);
  return (
    <ReservationPageBody>
      <Header />
      <Reservation />;
    </ReservationPageBody>
  );
};

import { setDataSrc } from "data/schedule/actions";
import {
  getUserAsideReservations,
  getUserReservationsByRange,
} from "services/api";

export const updateDataSrc = async (enrollment: string, labId: string) => {
  try {
    const response = await getUserReservationsByRange({
      enrollment,
      laboratoryId: labId,
    });
    const unavailableReservations = await getUserAsideReservations({
      enrollment,
      laboratoryId: labId,
    });
    const dataSrcFormated = response.data.map((element) => {
      return {
        text: element.subject,
        startDate: element.init_date,
        endDate: element.end_date,
        id: element.id,
      };
    });

    const allReservations = [
      ...dataSrcFormated,
      ...unavailableReservations.data,
    ];
    setDataSrc(allReservations);
  } catch (error) {
    console.error(error);
  }
};

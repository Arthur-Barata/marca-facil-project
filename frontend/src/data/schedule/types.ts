export interface IScheduleState {
  currentView: "day" | "month";
  dataSrc: IUserReservations[];
}

export interface IUserReservations {
  startDate: Date;
  endDate: Date;
  text?: string;
  id?: string;
}

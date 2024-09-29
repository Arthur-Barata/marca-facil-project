export interface IGetUserReservationsRequest {
  enrollment: string;
  laboratoryId: string;
}

export interface IGetUserReservationsResponse {
  init_date: Date;
  end_date: Date;
  subject?: string;
  id?: string;
}

export interface IGetUserUnavailabelReservationsResponse {
  startDate: Date;
  endDate: Date;
  text?: string;
  id?: string;
}

export interface IReservationState {
  createReservations: CreateReservation[];
  id: string;
}

export type CreateReservation = {
  init_date: Date;
  end_date: Date;
  laboratory_id: string;
  user_id: string;
  subject?: string;
};

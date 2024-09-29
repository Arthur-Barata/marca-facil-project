import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { ILaboratory } from "data/laboratory/type";
import {
  ICreateReservationRequest,
  ICreateReservationResponse,
} from "./interfaces/request/create-reservation.interface";
import {
  IGetUserReservationsRequest,
  IGetUserReservationsResponse,
  IGetUserUnavailabelReservationsResponse,
} from "./interfaces/request/get-reservations";

import { IUserLoginRequest } from "./interfaces/request/login-user.interface";
import { IUserLoginResponse } from "./interfaces/response/user-login-response.interface";

export const api = axios.create({
  baseURL: "http://localhost:8080",
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("jwt-token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const logIn = (
  data: IUserLoginRequest
): Promise<AxiosResponse<IUserLoginResponse>> => {
  const { enrollment, password } = data;
  return api.post("/auth/user-signIn", { enrollment, password });
};

export const CreateReservation = async (
  data: ICreateReservationRequest
): Promise<ICreateReservationResponse> => {
  const response = await api.post<ICreateReservationResponse>(
    "reservation/create",
    data
  );
  return response.data;
};

export const getAllLabs = (): Promise<AxiosResponse<ILaboratory[]>> => {
  return api.get("laboratory/get-all");
};

export const getUserReservationsByRange = (
  data: IGetUserReservationsRequest
): Promise<AxiosResponse<IGetUserReservationsResponse[]>> => {
  return api.get(
    `/reservation/find-by-range/${data.enrollment}?laboratoryId=${data.laboratoryId}`
  );
};

export const getUserAsideReservations = (
  data: IGetUserReservationsRequest
): Promise<AxiosResponse<IGetUserUnavailabelReservationsResponse[]>> => {
  return api.get(
    `/reservation/find-all-aside/${data.enrollment}?laboratoryId=${data.laboratoryId}`
  );
};

export const deleteReservation = (
  reservationId: string
): Promise<AxiosResponse<void>> => {
  return api.delete(`/reservation/delete/${reservationId}`);
};

export const createLab = (data): Promise<AxiosResponse<void>> => {
  return api.post(`/laboratory/create`, data);
};

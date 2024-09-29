import { store } from "data";
import { laboratorySlice } from ".";
import { ILaboratory } from "./type";

export const setSelectedLaboratory = (id: string) => {
  store.dispatch(laboratorySlice.actions.setSelectedLaboratory(id));
};

export const setLaboratoryList = (data: ILaboratory[]) => {
  store.dispatch(laboratorySlice.actions.setLaboratoryList(data));
};

export const openCreateLabModal = () => {
  store.dispatch(laboratorySlice.actions.openCreateLabModal());
};
export const hideCreateLabModal = () => {
  store.dispatch(laboratorySlice.actions.hideCreateLabModal());
};

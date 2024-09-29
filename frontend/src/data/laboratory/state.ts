import { ILaboratoryEntity } from "./type";

export const laboratoryInitialState: ILaboratoryEntity = {
  laboratorySelected: {
    id: "",
  },
  createLabModal: {
    open: false,
  },
  laboratorylist: [
    {
      id: "",
      number: "",
      capacity: 0,
      unit: "5",
      imageUrl: "",
      imageData: "",
      description: "",
      name: "",
    },
  ],
};

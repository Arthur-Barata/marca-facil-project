export interface ILaboratoryEntity {
  laboratorySelected: {
    id: string;
  };
  createLabModal: ICreateLabModal;
  laboratorylist: ILaboratory[];
}

export interface ILaboratory {
  id: string;
  number: string;
  capacity: number;
  unit: string;
  imageUrl: string;
  imageData: string;
  description: string;
  name: string;
}

export interface ICreateLabModal {
  open: boolean;
}

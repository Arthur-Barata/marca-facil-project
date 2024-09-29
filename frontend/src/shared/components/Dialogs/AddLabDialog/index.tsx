import FolderIcon from "@mui/icons-material/Folder";
import { Avatar, Box } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { IStore } from "data";

import { hideCreateLabModal } from "data/laboratory/action";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { createLab } from "services/api";
import { InputFormController } from "shared/components/Inputs/InputFormController";

export default function AddLabDialog() {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const {
    control,
    getValues,
    formState: { isValid },
  } = useForm<any>({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const [file, setFile] = useState<string>();
  const [fileBase64, setFileBase64] = useState<ArrayBuffer | string>("");
  const { open } = useSelector(
    (store: IStore) => store.laboratory.createLabModal
  );

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        setFileBase64(fileReader.result!);
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  function handleChange(e) {
    console.log(fileBase64);
    setFile(URL.createObjectURL(e.target.files[0]));
    convertToBase64(e.target.files[0]);
  }

  const createLabCall = useCallback(async () => {
    const formData = getValues();
    formData.number = Number(formData.number);
    formData.unit = Number(formData.unit);
    formData.floor = Number(formData.floor);
    formData.machines = Number(formData.machines);
    formData.capacity = Number(formData.capacity);
    formData["imageData"] = fileBase64;

    await createLab(formData);
  }, [fileBase64]);

  const handleCreate = async () => {
    createLabCall();
    hideCreateLabModal();
  };
  const handleClose = async () => {
    hideCreateLabModal();
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        Adicionar laboratório
      </DialogTitle>
      <DialogContent>
        <Box
          sx={{
            display: "flex",
            padding: "1rem",
            gap: "2rem",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{ width: "7rem", height: "7rem" }}
            alt="Image to upload"
            src={file}
          >
            <FolderIcon />
          </Avatar>

          <Button variant="contained" component="label">
            Upload da imagem
            <input type="file" onChange={handleChange} hidden />
          </Button>
        </Box>

        <InputFormController
          inputType="text"
          formControl={control}
          formControlName="name"
          label="Nome"
          placeholder="Nome"
          defaultValue=""
          fullWidth
        />
        <Box sx={{ display: "flex", gap: "0.5rem" }}>
          <InputFormController
            inputType="number"
            formControl={control}
            formControlName="unit"
            label="Unidade"
            placeholder="Unidade"
            defaultValue=""
            fullWidth
          />
          <InputFormController
            inputType="number"
            formControl={control}
            formControlName="number"
            label="Sala"
            placeholder="Sala"
            defaultValue=""
            fullWidth
          />
          <InputFormController
            inputType="number"
            formControl={control}
            formControlName="floor"
            label="Andar"
            placeholder="Andar"
            defaultValue=""
            fullWidth
          />
        </Box>
        <Box sx={{ display: "flex", gap: "0.5rem" }}>
          <InputFormController
            inputType="number"
            formControl={control}
            formControlName="machines"
            label="Máquinas"
            placeholder="Máquinas"
            defaultValue=""
            fullWidth
          />
          <InputFormController
            inputType="number"
            formControl={control}
            formControlName="capacity"
            label="Capacidade"
            placeholder="Capacidade"
            defaultValue=""
            fullWidth
          />
        </Box>
        <InputFormController
          inputType="text"
          formControl={control}
          formControlName="description"
          label="Descrição"
          placeholder="Descrição"
          defaultValue=""
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Cancelar
        </Button>
        <Button onClick={handleCreate} autoFocus>
          Criar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

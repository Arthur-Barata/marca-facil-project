import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { Box } from "@mui/material";
import { IStore } from "data";
import {
  openCreateLabModal,
  setLaboratoryList,
  setSelectedLaboratory,
} from "data/laboratory/action";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RoutesEnum } from "routes/enum";
import { getAllLabs } from "services/api";
import LabCard from "shared/components/Cards";
import Header from "shared/components/Header";
import { UserRoleEnum } from "shared/enums/user-role.enum";
import { RobotoLarge, RobotoMedium } from "shared/typography/Roboto";
import { CardsContainer, LabPageBody, TitleBox } from "./styles";

export const LaboratoriesPage = () => {
  const { laboratorylist } = useSelector((store: IStore) => store.laboratory);
  const { role } = useSelector((store: IStore) => store.user);

  const navigate = useNavigate();

  const getLabs = useCallback(async () => {
    try {
      const response = await getAllLabs();
      setLaboratoryList(response.data);
    } catch (error) {
      console.error(error);
    }
  }, [laboratorylist]);

  const handleClick = (id: string) => {
    setSelectedLaboratory(id);
    navigate(RoutesEnum.Reservations);
  };

  useEffect(() => {
    getLabs();
  }, []);

  return (
    <LabPageBody>
      <Header></Header>
      <TitleBox>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <RobotoLarge>Laboratórios</RobotoLarge>
          {role === UserRoleEnum.Admin ? (
            <AddCircleRoundedIcon
              onClick={openCreateLabModal}
              sx={{ fontSize: "50px", color: "#1F3F5E", cursor: "pointer" }}
            />
          ) : null}
        </Box>

        <RobotoMedium>Selecione um laboratório para fazer reserva</RobotoMedium>
      </TitleBox>
      <CardsContainer>
        {laboratorylist.map((card) => (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LabCard
              handleClick={() => handleClick(card.id)}
              key={card.id}
              imageData={card.imageData}
              imageUrl={card.imageUrl}
              name={card.name}
              capacity={card.capacity}
              unit={card.unit}
              description={card.description}
            ></LabCard>
          </Box>
        ))}
      </CardsContainer>
    </LabPageBody>
  );
};

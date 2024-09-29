import LogoFametro from "assets/icons/logo-fametro.svg";
import { showSnackbar } from "data/snackbar/actions";
import { setUserData } from "data/user/actions";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { RoutesEnum } from "routes/enum";
import { logIn } from "services/api";
import { FlexButton } from "shared/components/Button/FlexButton";
import { InputFormController } from "shared/components/Inputs/InputFormController";
import { InputFormPassword } from "shared/components/Inputs/InputFormPassword";
import {
  AlignItems,
  Aside,
  Container,
  ImgLoginPage,
  LogoImgStyled,
} from "./styles";
import { LoginType } from "./types";

export const LoginPage = () => {
  const navigate = useNavigate();

  const {
    control,
    getValues,
    formState: { isValid },
  } = useForm<LoginType>({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const handleLogIn = async () => {
    try {
      const { password, user } = getValues();

      const response = await logIn({
        enrollment: user,
        password,
      });
      const { accessToken, ...userData } = response.data;

      setUserData({ ...userData, loggedIn: true });
      showSnackbar("Login realizado com sucesso", "success", true);
      localStorage.setItem("jwt-token", response.data.accessToken);

      navigate(RoutesEnum.Laboratories);
    } catch (error) {
      showSnackbar("Matrícula ou senha inválidos", "error", true);

      console.error(error);
    }
  };

  return (
    <Container>
      <ImgLoginPage />
      <Aside>
        <LogoImgStyled src={LogoFametro} alt="Logo" />
        <AlignItems>
          <InputFormController
            inputType="email"
            formControl={control}
            formControlName="user"
            label="Usuário"
            placeholder="Matrícula"
            defaultValue=""
            fullWidth
          />
          <InputFormPassword
            formControl={control}
            formControlName="password"
            label="Senha"
            defaultValue=""
            fullWidth
          />
        </AlignItems>
        <FlexButton
          width="15rem"
          text="Entrar"
          disabled={!isValid}
          handleClick={() => handleLogIn()}
        />
      </Aside>
    </Container>
  );
};

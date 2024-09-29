import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, Menu, MenuItem, Tooltip } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { IStore } from "data";
import { showSnackbar } from "data/snackbar/actions";
import { setUserData } from "data/user/actions";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RoutesEnum } from "routes/enum";
import { UserRoleEnum } from "shared/enums/user-role.enum";
import { HeaderLarge } from "shared/typography/HeaderLarge";
import {
  RobotoBoldMedium,
  RobotoMedium,
  RobotoSmall,
} from "shared/typography/Roboto";
import {
  HeaderOptionsContainer,
  MenuBoxStyled,
  PerfilBoxStyled,
  ProfileBoxStyled,
  ToolBarStyled,
} from "./styles";

const settings = ["Perfil", "Logout"];
const pages = [
  { name: "Laboratórios", path: "/laboratories" },
  { name: "Meus agendamentos", path: "/reservations" },
];

export default function Header() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const { name, role } = useSelector((store: IStore) => store.user);

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt-token");
    setUserData({
      loggedIn: false,
      name: "",
      role: "",
      enrollment: "",
    });
    showSnackbar("Logout realizado com sucesso", "success", true);
    navigate(RoutesEnum.Login);
  };

  const roleFormated = role === UserRoleEnum.Admin ? "Admin" : "Colaborador";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <ToolBarStyled>
          <MenuBoxStyled>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    onClick={() => navigate(`${page.path}`)}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </MenuBoxStyled>
          <HeaderLarge variant="h6" component="div">
            MarcaFácil
          </HeaderLarge>
          <HeaderOptionsContainer>
            {pages.map((page) => (
              <RobotoMedium
                key={page.name}
                onClick={() => navigate(`${page.path}`)}
              >
                {page.name}
              </RobotoMedium>
            ))}
          </HeaderOptionsContainer>
          <Box>
            <Tooltip title="Configurações">
              <PerfilBoxStyled>
                <IconButton sx={{ p: 0 }}>
                  <Avatar
                    alt="Foto de Perfil"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUZ1Ztq0GhN8dVQS56ar_xQgRDztsmZemNxQ&s"
                  />
                </IconButton>
                <ProfileBoxStyled>
                  <RobotoBoldMedium>{name}</RobotoBoldMedium>
                  <RobotoSmall>{roleFormated}</RobotoSmall>
                </ProfileBoxStyled>
                <Box onClick={handleOpenUserMenu} sx={{ cursor: "pointer" }}>
                  <ExpandMoreIcon></ExpandMoreIcon>
                </Box>
              </PerfilBoxStyled>
            </Tooltip>

            <Menu
              sx={{ mt: "30px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={
                    setting === "Logout" ? handleLogout : handleCloseUserMenu
                  }
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </ToolBarStyled>
      </AppBar>
    </Box>
  );
}

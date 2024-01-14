import {
  Avatar,
  Box,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { SearchBar } from "../../components/SearchBar";
import PersonYouMayKnow from "../../section/PersonYouMayKnow";

export const SidebarChild = () => {
  return (
    <Box
      bgcolor="#313131"
      flex={0.5}
      p={2}
      sx={{ display: { xs: "none", sm: "block" }}}
    >
      <Box sx={{ height: "90%" }}>
        <SearchBar />
        <List>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar />
            </ListItemAvatar>
            <ListItemText>Abebe Kebede</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar />
            </ListItemAvatar>
            <ListItemText>Kebede Kemal</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar />
            </ListItemAvatar>
            <ListItemText>Abebe Kebede</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar />
            </ListItemAvatar>
            <ListItemText>Kebede Kemal</ListItemText>
          </ListItemButton>{" "}
          <ListItemButton>
            <ListItemAvatar>
              <Avatar />
            </ListItemAvatar>
            <ListItemText>Abebe Kebede</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar />
            </ListItemAvatar>
            <ListItemText>Kebede Kemal</ListItemText>
          </ListItemButton>
        </List>
      </Box>
      <Box sx={{ height: "90%" }}>
        <PersonYouMayKnow />
      </Box>
    </Box>
  );
};

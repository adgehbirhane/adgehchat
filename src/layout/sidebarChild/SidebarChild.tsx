import {
  Avatar,
  Box,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { SearchBar } from "../../common/SearchBar";

export const SidebarChild = () => {
  return (
    <Box
      bgcolor="grey"
      flex={0.5}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
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
  );
};

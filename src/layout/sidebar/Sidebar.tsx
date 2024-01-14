import {
  GroupTwoTone,
  HomeTwoTone,
  MenuTwoTone,
  PersonTwoTone,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";

export const Sidebar = () => {
  return (
    <Box flex={0.1} sx={{ backgroundColor: "#343a3a" }}>
      <ListItemButton>
        <ListItemIcon>
          <MenuTwoTone sx={{ color: "darkgrey" }} />
        </ListItemIcon>
      </ListItemButton>
      <Divider />
      <List>
        <ListItemButton>
          <ListItemIcon>
            <HomeTwoTone sx={{ color: "darkgrey" }} />
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <GroupTwoTone sx={{ color: "darkgrey" }} />
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <PersonTwoTone sx={{ color: "darkgrey" }} />
          </ListItemIcon>
        </ListItemButton>
      </List>
    </Box>
  );
};

import {
  GroupTwoTone,
  HomeTwoTone,
  MenuTwoTone,
  PersonTwoTone,
} from "@mui/icons-material";
import { Box, Divider, List, ListItemButton, ListItemIcon } from "@mui/material";

export const Sidebar = () => {
  return (
    <Box flex={0.1}>
        <ListItemButton>
          <ListItemIcon>
            <MenuTwoTone/>
          </ListItemIcon>
        </ListItemButton>
        <Divider/>
      <List>
        <ListItemButton>
          <ListItemIcon>
            <HomeTwoTone />
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <GroupTwoTone />
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <PersonTwoTone />
          </ListItemIcon>
        </ListItemButton>
      </List>
    </Box>
  );
};

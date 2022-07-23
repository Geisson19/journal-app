import { TurnedInNot } from '@mui/icons-material';
import {
  Grid,
  Drawer,
  Box,
  Typography,
  Toolbar,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

interface SidebarProps {
  drawerWidth: number;
}

export const Sidebar = ({ drawerWidth }: SidebarProps) => {
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Geisson Ponce
          </Typography>
        </Toolbar>
        <Divider />

        <List>
          {['January', 'February', 'March', 'April'].map((month) => (
            <ListItem key={month}>
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                  <ListItemText primary={month} />
                  <ListItemText
                    secondary={
                      'Sint do Lorem ex adipisicing non dolore quis pariatur aliquip qui enim laborum'
                    }
                  />
                </Grid>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

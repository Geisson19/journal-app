import { Box, Toolbar } from '@mui/material';
import { Navbar, Sidebar } from '../components';

interface JournalLayoutProps {
  children: React.ReactNode;
}

const drawerWidth = 300;

export const JournalLayout = ({ children }: JournalLayoutProps) => {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        {/* Navbar */}
        <Navbar drawerWidth={drawerWidth} />

        {/* Sidebar */}
        <Sidebar drawerWidth={drawerWidth} />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />

          {children}
        </Box>
      </Box>
    </>
  );
};

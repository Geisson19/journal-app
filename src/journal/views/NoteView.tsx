import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../components';

export const NoteView = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          28 august 2022
        </Typography>
      </Grid>
      <Grid item>
        <Button color="primary" sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1, alignItems: 'center' }} />
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Title"
          sx={{ border: 'none', mb: 1 }}
        ></TextField>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="Write your note here"
          sx={{ border: 'none', mb: 1 }}
          minRows={5}
        ></TextField>
      </Grid>

      {/* Image gallery */}
      <ImageGallery />
    </Grid>
  );
};

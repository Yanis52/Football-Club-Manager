import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";

const EditPlayerModal = ({ open, onClose, player, onSave }) => {
  const [formData, setFormData] = useState({
    nom: player.nom,
    prenom: player.prenom,
    poste: player.poste,
    age: player.age,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Modifier Joueur</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          name="nom"
          label="Nom"
          type="text"
          fullWidth
          variant="outlined"
          value={formData.nom}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="prenom"
          label="Prénom"
          type="text"
          fullWidth
          variant="outlined"
          value={formData.prenom}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="poste"
          label="Poste"
          type="text"
          fullWidth
          variant="outlined"
          value={formData.poste}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="age"
          label="Age"
          type="number"
          fullWidth
          variant="outlined"
          value={formData.age}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Annuler</Button>
        <Button onClick={handleSave} color="primary">
          Sauvegarder
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditPlayerModal;

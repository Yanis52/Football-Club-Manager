import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useState } from "react";
import EditPlayerModal from "../modalForm/modalForm";

const PlayerGrid = ({ players }) => {
  // Styles pour le conteneur de défilement
  const scrollContainerStyle = {
    display: "flex", // Utilise flexbox pour aligner les cartes horizontalement
    flexDirection: "row", // Orientation horizontale
    overflowX: "auto", // Active le défilement horizontal
    padding: 2,
    // Ajoute un peu de padding autour des cartes
    gap: "16px", // Espace entre les cartes
    width: "100%",
    height: "100%",
    margin: 0,
    alignSelf: "center",
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState({});

  const handleEdit = (player) => {
    setSelectedPlayer(player);
    setModalOpen(true);
  };

  const handleSave = (updatedPlayer) => {
    console.log("Saved Data", updatedPlayer);
    // Ici vous mettriez à jour la base de données
  };

  return (
    <Box sx={scrollContainerStyle}>
      {players.map((player, index) => (
        <Card key={index} sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {player.nom} {player.prenom}
            </Typography>
            <Typography color="text.secondary">
              Poste: {player.poste}
            </Typography>
            <Typography variant="body2">Age: {player.age} ans</Typography>
          </CardContent>
          <CardActions>
            <div key={player.id}>
              <Button color="success" onClick={() => handleEdit(player)}>
                Modifier
              </Button>
            </div>
          </CardActions>
        </Card>
      ))}
      <EditPlayerModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        player={selectedPlayer}
        onSave={handleSave}
      />
    </Box>
  );
};

export default PlayerGrid;

import { Box } from "@mui/material";
import GridMarketPlace from "../components/grid/gridMarketPlace";
import PlayerGrid from "../components/playerGrid/playerGrid";

import UpcomingMatches from "../components/matchEvent/matchEvent";
const Homepage = () => {
  const players = [
    { nom: "Ronaldeño", prenom: "Cristo", poste: "Attaquant", age: 34 },
    { nom: "Messiano", prenom: "Lio", poste: "Milieu", age: 32 },
    { nom: "Beckhen", prenom: "David", poste: "Milieu", age: 37 },
    { nom: "Ronaldeño", prenom: "Cristo", poste: "Attaquant", age: 34 },
    { nom: "Messiano", prenom: "Lio", poste: "Milieu", age: 32 },
    { nom: "Beckhen", prenom: "David", poste: "Milieu", age: 37 },

    // Ajoutez plus de joueurs selon votre JSON
  ];
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          width: "100%",
          margin: 0,
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr", // Crée 2 colonnes de taille égale
            gridTemplateRows: "1fr 1fr", // Crée 2 lignes de taille égale
            gap: "30px", // Ajoute un espace entre les éléments de la grille
            padding: "16px", // Padding autour de la grille
            height: "80vh", // Hauteur totale de la fenêtre de visualisation
            boxSizing: "border-box",
            width: "70%",
            marginRight: "10%",
            // Inclut le padding dans la hauteur et la largeur
          }}
        >
          <GridMarketPlace />
          <PlayerGrid players={players} />
          {/* Deux autres composants peuvent aller ici */}
          <UpcomingMatches />
          <div>Composant 4</div>
        </Box>
      </div>
    </>
  );
};

export default Homepage;

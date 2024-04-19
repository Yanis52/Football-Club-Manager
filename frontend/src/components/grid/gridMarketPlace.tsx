import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getJoueurs } from "../../service/appelApi";
const initialPlayers = [
  { id: 0, nom: "Ronaldeño", prenom: "Cristo", poste: "Attaquant", age: 34 },
  { id: 0, nom: "Messiano", prenom: "Lio", poste: "Milieu", age: 32 },
  { id: 0, nom: "Beckhen", prenom: "David", poste: "Milieu", age: 37 },
  // Ajoutez plus de joueurs selon votre JSON
];

const GridMarketPlace = () => {
  const [players, setPlayers] = useState(initialPlayers);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [joueurs, setJoeurs] = useState([]);

  useEffect(() => {
    async function getAllJoueurs() {
      const data = await getJoueurs();
      setJoeurs(data);
      return data;
    }
    getAllJoueurs();
  }, []);

  useEffect(() => {
    setPlayers(joueurs);
  }, [joueurs]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset page to zero when changing rows per page
  };

  const handleDelete = (index) => {
    const newPlayers = [...players];
    newPlayers.splice(index, 1);
    setPlayers(newPlayers);
  };

  const handleAdd = () => {
    const newPlayer = {
      nom: "Nouveau",
      prenom: "Joueur",
      poste: "Nouveau Poste",
      age: 25,
    };
    setPlayers([...players, newPlayer]);
  };

  const AddToTeam = (player) => {
    console.log(players, player);
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nom</TableCell>
            <TableCell>Prénom</TableCell>
            <TableCell>Poste</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {players
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((player, index) => (
              <TableRow key={index}>
                <TableCell>{player.nom}</TableCell>
                <TableCell>{player.prenom}</TableCell>
                <TableCell>{player.poste}</TableCell>
                <TableCell>{player.age}</TableCell>
                <TableCell>
                  <Button onClick={() => AddToTeam(player)} color="success">
                    Ajouter
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={players.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Lignes par page:"
      />
    </TableContainer>
  );
};

export default GridMarketPlace;

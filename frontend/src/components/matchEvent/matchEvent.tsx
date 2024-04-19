import EventIcon from "@mui/icons-material/Event";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

const matches = [
  {
    date: "2024-04-20",
    team1: "FC Barcelona",
    team2: "Real Madrid",
    location: "Camp Nou",
  },
];

const UpcomingMatches = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "20px",
        maxHeight: "600px",
      }}
    >
      {matches.map((match, index) => (
        <Card key={index} sx={{ minWidth: 275, maxHeight: 250 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 4 }}
              color="text.secondary"
              gutterBottom
            >
              Match à venir
            </Typography>
            <Typography variant="h6" component="div">
              {match.team1} vs {match.team2}
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <EventIcon />
                </ListItemIcon>
                <ListItemText primary={match.date} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LocationOnIcon />
                </ListItemIcon>
                <ListItemText primary={match.location} />
              </ListItem>
              <Divider light />
            </List>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default UpcomingMatches;

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import SunnyIcon from "@mui/icons-material/Sunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";

export default function InfoBox({ info }) {
  const HOT_LINK =
    "https://plus.unsplash.com/premium_photo-1733306531071-087c077e1502?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3VubnklMjBza3l8ZW58MHx8MHx8fDA%3D";
  const COLD_LINK =
    "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_LINK =
    "https://images.unsplash.com/photo-1672442665593-d69f0314adb1?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="infobox">
      <h1>
        <b>
          {info.location} - {info.temp}&deg;C
        </b>
      </h1>
      <div className="container">
        <Card
          sx={{
            maxWidth: 720,
            width: "100%",
            background:
              "linear-gradient(180deg, rgba(15, 23, 42, 0.96), rgba(17, 24, 39, 0.92))",
            color: "#e2e8f0",
            border: "1px solid rgba(125, 211, 252, 0.18)",
            boxShadow: "0 24px 60px rgba(2, 8, 23, 0.4)",
            borderRadius: "22px",
            overflow: "hidden",
          }}
        >
          <CardMedia
            sx={{ height: 220, objectFit: "cover" }}
            image={
              info.humidity > 80
                ? RAIN_LINK
                : info.temp < 15
                  ? COLD_LINK
                  : HOT_LINK
            }
            title="Weather visual"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.humidity > 80 ? (
                <BeachAccessIcon />
              ) : info.temp < 15 ? (
                <AcUnitIcon />
              ) : (
                <SunnyIcon />
              )}
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div className="cardsGrid">
        {[
          {
            title: "Temperature",
            value: `${info.temp}\u00B0C`,
            icon: <SunnyIcon className="statIcon" />,
          },
          {
            title: "High / Low",
            value: `${info.temp_max}\u00B0C / ${info.temp_min}\u00B0C`,
            icon: <AcUnitIcon className="statIcon" />,
          },
          {
            title: "Humidity",
            value: `${info.humidity}%`,
            icon: <BeachAccessIcon className="statIcon" />,
          },
          {
            title: "Feels Like",
            value: `${info.feelLike}\u00B0C - ${info.weather}`,
            icon: <SunnyIcon className="statIcon" />,
          },
        ].map((s, idx) => (
          <div className="statCard" key={idx}>
            <div className="statHead">
              {s.icon}
              <div className="statTitle">{s.title}</div>
            </div>
            <div className="statValue">{s.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

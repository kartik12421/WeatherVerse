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
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_LINK
                : info.temp < 15
                ? COLD_LINK
                : HOT_LINK
            }
            title="green iguana"
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
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Humidity: {info.humidity}</p>
              <p>Maximum Temperature: {info.temp_max}&deg;C</p>
              <p>Minimum Temperature: {info.temp_min}&deg;C</p>
              <p>
                The weather is -
                <i>
                  <strong>{info.weather}</strong>
                </i>
                - and it feels like <strong>{info.feelLike}&deg;C</strong>
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

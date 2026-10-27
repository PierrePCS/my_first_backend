
const express = require("express");
const app = express();
const port = 8080;
const host = '0,0,0,0';

const songs = [
"My Way", 
"New York, New York",
"Fly Me to the Moon",
"Strangers in the Night",
"That's Life",
"Come Fly with Me",
"I've Got You Under My Skin",
"The Way You Look Tonight",
"Somethin' Stupid",
"I've Got the World on a String",
"The Best Is Yet to Come",
"Night and Day",
"All the Way",
"My Funny Valentine",
"The Lady Is a Tramp",
"Young at Heart",
"One for My Baby", 
"Witchcraft",
"Mack the Knife", 
"Love and Marriage"
];

app.get("/", (req, res) => res.send(songs[Math.floor(Math.random() * songs.length)]));
app.get("/birth_date", (req, res) => res.send("December 12, 1915"));
app.get("/birth_city", (req, res) => res.send("Hoboken, New Jersey"));
app.get("/wives", (req, res) => res.send("Nancy Barbato, Ava Gardner, Mia Farrow, Barbara Marx"));
app.get("/picture", (req, res) => res.redirect(302, "https://en.wikipedia.org/wiki/Frank_Sinatra#/media/File:Frank_Sinatra2,_Pal_Joey.jpg"));
app.get("/public", (req, res) => res.send("Everybody can see this page"));

app.get("/protected", (req, res) => {
  const auth = (req.headers.authorization || "").split(" ")[1] || "";
  const [user, pass] = Buffer.from(auth, "base64").toString().split(":");

  if (user === "admin" && pass === "admin")
    return res.send("Welcome, authenticated client");

  res.set("WWW-Authenticate", 'Basic realm="Restricted Area"');
  res.status(401).send("Not authorized");
});

app.listen(port, () => {
    console.log("Serveur started en https//", host, ":", port);
});
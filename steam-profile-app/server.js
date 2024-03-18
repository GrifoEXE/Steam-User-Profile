/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get("/profile/:steamId", async (req, res) => {
	const steamId = req.params.steamId;
	const apiKey = "211D237269ED9DCCDE0C0E3C4F185524"; // Replace with your Steam API key

	try {
		const response = await fetch(
			`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${apiKey}&steamids=${steamId}`
		);
		const data = await response.json();

		// Set Access-Control-Allow-Origin header to allow cross-origin requests
		res.setHeader("Access-Control-Allow-Origin", "*");

		res.json(data.response.players[0]);
	} catch (error) {
		console.error("Error fetching profile:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

// app.get("/games/:steamId", async (req, res) => {
// 	const steamId = req.params.steamId;
// 	const apiKey = "211D237269ED9DCCDE0C0E3C4F185524"; // Replace with your Steam API key

// 	try {
// 		const response = await fetch(
// 			`https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${apiKey}&steamid=${steamId}`
// 		);
// 		const data = await response.json();

// 		// Set Access-Control-Allow-Origin header to allow cross-origin requests
// 		res.setHeader("Access-Control-Allow-Origin", "*");

// 		res.json(data.response.game_count[0]);
// 	} catch (error) {
// 		console.error("Error fetching games:", error);
// 		res.status(500).json({ error: "Internal Server Error" });
// 	}
// });

app.get("/recentGames/:steamId", async (req, res) => {
	const steamId = req.params.steamId;
	const apiKey = "211D237269ED9DCCDE0C0E3C4F185524"; // Replace with your Steam API key

	try {
		const response = await fetch(
			`https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/?key=${apiKey}&steamid=${steamId}`
		);
		const data = await response.json();

		// Set Access-Control-Allow-Origin header to allow cross-origin requests
		res.setHeader("Access-Control-Allow-Origin", "*");

		res.json(data.response);
	} catch (error) {
		console.error("Error fetching recent games:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

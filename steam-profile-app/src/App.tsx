/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import './App.css'

const App: React.FC = () => {
  const [profile, setProfile] = useState<any | null>(null);
  // const [games, setGames] = useState<any | null>(null)
  const [recentGames, setRecentGames] = useState<any | null>(null)
  const steamId = '76561198189866855'; // Replace with the Steam ID you want to fetch

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`http://localhost:3001/profile/${steamId}`);
        const data = await response.json();
        setProfile(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    // const fetchGames = async () => {
    //   try {
    //     const response = await fetch(`http://localhost:3001/games/${steamId}`);
    //     const data = await response.json();
    //     setGames(data)
    //     console.log(data)
    //   } catch (error) {
    //     console.error('Error fetching games:', error);
    //   }
    // };

    const fetchRecentGames = async () => {
      try {
        const response = await fetch(`http://localhost:3001/recentGames/${steamId}`);
        const data = await response.json();
        setRecentGames(data)
        console.log(data)
      } catch (error) {
        console.error('Error fetching recent games:', error);
      }
    };

    fetchProfile();
    //fetchGames();
    fetchRecentGames();
  }, [steamId]);

  if (!profile || !recentGames) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{profile.personaname}</h1>
      <div>
        <img src={profile.avatarfull} alt="Avatar" />
        <p>Steam ID: {profile.steamid}</p>
        <p>Profile URL: <a href={profile.profileurl}>{profile.profileurl}</a></p>
      </div>
      <h2>Recently Played:</h2>
      <div>
        <h3>{recentGames.games[0].name}</h3>
        <img src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${recentGames.games[0].appid}/header.jpg`} />
        <p>
          <a>{(recentGames.games[0].playtime_forever / 60).toFixed(1)} Horas </a>

        </p>
      </div>
      <div></div>
      <div>
        <h3>{recentGames.games[1].name}</h3>
        <img src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${recentGames.games[1].appid}/header.jpg`} />
        <p>
          <a>{(recentGames.games[1].playtime_forever / 60).toFixed(1)} Horas </a>

        </p>
      </div>
    </div>
  );
};

export default App;

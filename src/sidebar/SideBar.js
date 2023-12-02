import React from "react";
import "./SideBar.css";
import SideBarOptions from "../sidebar-options/SideBarOptions";
import { Home, LibraryMusic, Search } from "@material-ui/icons";
import { useDataLayerValue } from "../DataLayer";

const SideBar = () => {
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
        alt="Spotify logo"
      />
      <SideBarOptions title="Home" Icon={Home} />
      <SideBarOptions title="Search" Icon={Search} />
      <SideBarOptions title="Your Library" Icon={LibraryMusic} />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SideBarOptions title={playlist.name} />
      ))}
    </div>
  );
};

export default SideBar;

import React from 'react'
import "./Body.css"
import Header from '../header-page/Header'
import { Favorite, MoreHoriz, PlayCircleFilled } from '@material-ui/icons'
import SongRow from '../songrows-page/SongRow'
import { useDataLayerValue } from '../DataLayer'

const Body = ({spotify}) => {
    const[{discover_weekly}, dispatch] = useDataLayerValue()
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={discover_weekly?.images[0]?.url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilled className="body__shuffle" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  )
}

export default Body
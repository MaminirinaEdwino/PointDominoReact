
import { useRef, useState } from 'react'
import './App.css'
import Player_component from './player_components'
import { exportComponentAsJPEG } from 'react-component-export-image'
import { FaDownload, FaSave } from 'react-icons/fa'
import { BiMenu } from 'react-icons/bi'

function App() {
  const [playerNumber, setPlayerNumber] = useState(2)
  const [playerName1, setPlayerName1] = useState("Joueur 1")
  const [playerName2, setPlayerName2] = useState("Joueur 2")
  const [playerName3, setPlayerName3] = useState("Joueur 3")
  const [playerName4, setPlayerName4] = useState("Joueur 4")
  const [playerList, setPlayerList] = useState()
  const [menuDisplay, setMenuDisplay] = useState("none")
  const tableau_point = useRef("teste")
  const handle_menu_bar = (e) => {
    if (menuDisplay == "none") {
      setMenuDisplay("flex")
    } else {
      setMenuDisplay("none")
    }
  }
  const handleExport = (e) => {
    exportComponentAsJPEG(tableau_point, {
      "fileName": playerName1 + playerName2 + playerName3 + playerName4
    })
  }
  return (
    <>
      <header>
        <h1>Domino Point</h1>
        <button id='b1' onClick={handleExport}><FaDownload /></button>
        <button id='b2' onClick={handle_menu_bar}><BiMenu /></button>
      </header>

      <div className="menu" style={{
        "display": menuDisplay
      }}>
        <select name="" id="" onChange={e => setPlayerNumber(e.target.value)}>
          <option value="2">2 Joueurs</option>
          <option value="3">3 Joueurs</option>
          <option value="4">4 Joueurs</option>
        </select>
        <div className="player_name">
          {playerNumber >= 2 && <input type="text" id='p1' onChange={e => setPlayerName1(e.target.value)} placeholder='Joueur 1' />}
          {playerNumber >= 2 && < input type="text" id='p2' onChange={e => setPlayerName2(e.target.value)} placeholder='Joueur 2' />}
          {playerNumber >= 3 && <input type="text" id='p3' onChange={e => setPlayerName3(e.target.value)} placeholder='Joueur 3' />}
          {playerNumber >= 4 && <input type="text" id='p4' onChange={e => setPlayerName4(e.target.value)} placeholder='Joueur 4' />}
        </div>
      </div>
      <div className='Tableau_point' id='tableau_joueur' ref={tableau_point} key={tableau_point} >
        {playerNumber == 2 && <div  id='pointPlayer'><Player_component name={playerName1} /><Player_component name={playerName2} /></div>}
        {playerNumber == 3 && <div id='pointPlayer'><Player_component name={playerName1} /><Player_component name={playerName2} /><Player_component name={playerName2} /></div>}
        {playerNumber == 4 && <div id='pointPlayer'><Player_component name={playerName1} /><Player_component name={playerName2} /><Player_component name={playerName1} /><Player_component name={playerName2} /></div>}
      </div>
    </>
  )
}

export default App

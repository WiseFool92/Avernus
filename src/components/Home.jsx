import React from 'react';
import './App.css';
import skullBridge from './Img/skullBridge.jpg';

function Home() {

  const homeStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: 'rgb(70, 4, 156)',
    color: 'ivory',
    borderBottom: '.2rem solid black',
    width: '100vw',
    height: '100vh',
    padding: '2rem',
  }

  const content = {
    padding: '1rem',
  }

  const skullBridgeStyles = {
    boxShadow: '5px 5px 8px 5px rgba(0, 0, 0, 0.449)',
    borderRadius: '5px',
    marginTop: '2.5rem',
    width: '70vh',
    height: '70vh',
    // padding: '1rem',
    marginRight: '1rem',
  }
  
  return (
    <splash className='homeStyle' style = {homeStyle} >
      <div style={content}>
        <h1>Avernus</h1>
        <p>
          The old world is dying and those who would risk the darkness have found a new one. A doorway, torn open by the great tyrants escape, has been seized in a last gambit for survival and turned towards an unknown world. In the wake of the great daemon’s crusade, and under a dying sun, those who remain must make a choice; perish in the old world, or cower in the new.
        </p>
        <p>
          The Exodus, they call it. Who, but the truly mad, would flee from the death of one world to the Hell of another?
        </p>
        <p>
          The game takes place in the underworld of Avernus, the tyrant’s doorway providing a stable, shallow pathway across the Oltremere. The dimming sun of the old world is slowly driving more colonists to Avernus. The underworld is not a hospitable refuge; the dark caverns do not naturally support mammalian life. Instead the shadowy tunnels hide a bizarre assortment of arthropods and divergent life. 
        </p>
        <p>
          The arcanists of the College of Dunwich have begun the great endeavor of transforming the cavern world. Far above the eastern gallery the great Pendulum swings, an arcane construction projecting the light of a foreign sun. Great myconid forests were engineered from the local flora. New species were shaped from stock of the old world. The eastern gallery, called the Kyr by the colonists, has become vaguely habitable. Farmers harvest fields of hybridized crops, fell barkskin mushrooms for timber, and hunt the bizarre creatures and creations of the tunnels. All in the pale and shifting light of the Pendulum.
        </p>
        <p>
          Not all these transformations have been so successful. Many creations have run wild in untamed caverns, creating chaos in an already chaotic land. Servile shapes have risen up in rebellion, warbeasts have mutated and reproduced. 
        </p>
      </div>
      <img src = {skullBridge} style={skullBridgeStyles} alt='skullBridge'></img>
    </splash>
  )
};

export default Home;
import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import caveTown from './Img/caveTown.jpg';
import IbramM from './Img/IbramM.jpg';

function StoryBoard(){
  const cardStyle = {
    // width: '95vw',
    marginLeft: '1.25vw',
    marginRight: '1.25vw',
    padding: '5rem',
    fontWeight: 'normal'
    // display: 'flex',
    // justifyContent: 'space-around',
    // backgroundColor: 'black',
    // fontSize: '30px',
    // color: 'crimson',
    // width: '100vh',
    // borderBottom: '.2rem solid black',
    // margin: '.1rem',
    // padding: '1rem'
  }

  const focusStyle = {
    marginLeft: '1.25vw',
    marginRight: '1.25vw',
    padding: '5rem',
    fontWeight: 'normal',
    padding: '1rem 0',
    textAlign: 'center',
    fontWeight: '900',
    border: '1px solid rgb(12, 105, 12)',
    display: 'flex',
    padding: '1rem 0',
    margin: '1rem 0',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    color: '#0d3017',
    borderRadius: '5px',
    backgroundColor: 'rgba(255, 255, 255, 0.537)',
    boxShadow: '5px 5px 8px 5px rgba(0, 0, 0, 0.449)',
    height: '50vh',
    width: '50vw'
  }

  const horoStyle = {
    marginLeft: '1.25vw',
    marginRight: '1.25vw',
    padding: '5rem',
    fontWeight: 'normal',
    padding: '1rem 0',
    textAlign: 'center',
    fontWeight: '900',
    border: '1px solid rgb(12, 105, 12)',
    display: 'flex',
    padding: '1rem 0',
    margin: '1rem 0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    color: '#0d3017',
    borderRadius: '5px',
    backgroundColor: 'rgba(255, 255, 255, 0.537)',
    boxShadow: '5px 5px 8px 5px rgba(0, 0, 0, 0.449)',
    height: '50vh',
    width: '50vw'
  }

  return (
    <>
      <div className='storyboard'>
        <h1>The Road to Carcosa</h1>
        <div className='places-card' style = {cardStyle}>
          <h2>Locations of Interest</h2>
            <div className='row' style = {focusStyle}>
              <div className='col-md-6'>
                <h3>Avernus</h3>
                <img src={caveTown} className='storyBoardImg'></img>
                <p>An underground tombworld.</p>
              </div>
            </div>
            <div className='row' style = {focusStyle}>
              <div className='col-md-6'>
                <h3>Western Gallery</h3>
                  <p>
                    A large, unnatural cave with the Pendulum hanging at its apex.
                  </p>
              </div>
            </div>
            <div className='row' style = {focusStyle}>
              <div className='col-md-6'>
                <h3>Pendulum:</h3>
                  <p>
                    Soli invicto. Far overhead burns the false sun, cast into the roof of the western gallery by the arcanists of the College of Dunwich. A fickle thing, without its light all would be cast into darkness.
                  </p>
              </div>
            </div>
            <div className='row' style = {focusStyle}>
              <div className='col-md-6'>
                <h3>Pilgrims Path:</h3>
                  <p>
                    Walked by Un-Kai, the wise word misplaced.
                  </p>
              </div>
            </div>
            <div className='row' style = {focusStyle}>
              <div className='col-md-6'>
                <h3>Chitin Road:</h3>
                  <p>
                    A high road that spiders outward from New Dunwich across the Kyr, even to the edge of the serpents spine.
                  </p>
              </div>
            </div>
            <div className='row' style = {focusStyle}>
              <div className='col-md-6'>
                <h3>Sabian Sea:</h3>
                  <p>
                    Eastern border of the Western gallery. Beyond lies darkness and the unknown.
                  </p>
              </div>
            </div>
            <div className='row' style = {focusStyle}>
              <div className='col-md-6'>
                <h3>Northern Fells:</h3>
                  <p>
                    The Fells lead up to the great basalt edifice of the north wall.
                  </p>
              </div>
            </div>
            <div className='row' style = {focusStyle}>
              <div className='col-md-6'>
                <h3>Reiksweald:</h3>
                  <p>
                    Wild and savage myconid forest.
                  </p>
              </div>
            </div>
            <div className='row' style = {focusStyle}>
              <div className='col-md-6'>
                <h3>Carcosa:</h3>
                  <p>
                    Built on top of an ancient, antidiluvian ruin. Carcosa is a colony town that sits along the southern bank of the Tanith river where it meets the Sabian Sea.
                  </p>
                  <ul>
                    <li>Main square: market, gibbet, guard house</li>
                    <li>Luckless Mule: Inexpensive Inne, poor food and plentiful drink</li>
                    <li>Atrium Carceri: One of the few towers with an accesible entrance, and the tallest. Used as a library and temple to Un-Kai, the first of the Walking Ones.</li>
                    <li>Port: Crude docks provide shelter to the keelboats of the river Tanith and the brigs of the Sabian Sea.</li>
                    <li>Rookery: Hard to believe Carcosa has a slum. Populated primarily by the Dagonites.</li>
                  </ul> 
              </div>
            </div>
        </div>
        
        <div className='peoples' className='places-card' style = {cardStyle}>
          <h2>Peoples:</h2>
          <div className='row' style = {horoStyle}>
            <div className='col-md-4'>
              <h3>Japing Armigers:</h3>
                <p>To spend oneself in a worthy cause.</p>
              </div>
          </div>
          <div className='row' style = {horoStyle}>
            <div className='col-md-4'>
              <h3>Kyr:</h3>
                <p>Citizens of the Kyr Commonwealth.</p>
            </div>
          </div>
          <div className='row' style = {horoStyle}>
            <div className='col-md-4'>
              <h3>Dagonites</h3>
                <p>...</p>
            </div>
          </div>
        </div>

        <div className='bios' className='places-card' style = {cardStyle}>
          <h1>Prominent Character Bios</h1>
          <div className='row' style = {focusStyle}>
            <div className='col-md-6'>
              <h2>Ibram Messer</h2>
              <img src = {IbramM} className='storyBoardImg'></img>
              <p>
                A gaunt but striking figure, Messer is a prototypical example of a Yeoman of the Japing Armigers.
              </p>
            </div>
          </div>
      
              <div className='row' style = {focusStyle}>
                <div className='col-md-6'>
              
                  <h4>Clothes:</h4>
                    <p>
                      <li>Armigers Vestment(chitin still suit)</li>
                      <li>Blouse(wool)</li>
                      <li>Breeches(wool)</li>
                      <li>Hand Wraps(leather)</li>
                      <li>Worn Boots(leather)</li>
                      <li>Amulet(Elder Sign)</li>
                    </p>
                  </div>
                </div>

                <div className='row' style = {focusStyle}>
                  <div className='col-md-6'>
                    <h4>Pack:</h4>
                      <p>
                        <li>Travel rations(~5 days)</li>
                        <li>Camelback Pouch(suit refills)</li>
                        <li>Non-magnifying Glass(implement)</li>
                        <li>Glass Stiletto(100%)</li>
                        <li>Sewing kit(80%)</li>
                        <li>Lockpicks(45%)</li>
                        <li>2x Tin vials(phosphorous)</li>
                        <li>Everlight(89%)</li>
                        <li>Rags</li>
                        <li>1x Tin(cleaning solvent)</li>
                        <li>Lux et Tenebrae(grimoire)</li>
                      </p>
                  </div>
                </div>

                <div className='row' style = {focusStyle}>
                  <div className='col-md-6'>
                    <h4>Yatagan</h4>
                      <p>
                        (Steel Cutlass)
                      </p>
                    <h4>Venwich Model 7</h4>
                      <p>
                        (Breech-loading Carbine)
                      </p>
                    <h4>Cartridge Pouch</h4>
                      <p>
                        (~40 cartridges)
                      </p>
                  </div>
                </div>
              
              <h4>Spells</h4>
                <ul>
                  <li>Ardent Flux:</li>
                    <p>Adept (Skill Level): A relatively simple theurgy, using phosphorous, somatic, and memetic components to create a blinding light.
                    </p>
                  <li>Forlorn Encystment:</li>
                    <p>
                      Poor (Skill Level):A classic but difficult bit of hedge magic that imprisons a subject in the earth. Requires an effective implement(Non-magnifying Glass).
                    </p>
                  <li>True Sight:</li>
                    <p>
                      "You will never be decieved by others, only by your self. You will see through all illusions and disguises, the true form of all things" he laughs, the madness visible in his eyes. "Even those that aren't there..."
                    </p>
                </ul>
              
            
          
        
          <h3>Melbourne</h3>
          <p>
            ...
          </p>
          <h3>Amis</h3>
          <p>
            ...
          </p>
          <h3>Etil & Mox</h3>
          <p>
            You do not know them well, and they certainly don't seem to want to know you. Assigned to watch the Pilgrims Path, the two yeomen were cold and quiet companions on the road.
          </p>
          <h3>Zur the Shaper</h3>
          <p>
            Your contact in Carcosa, Zur is the definition of eccentric. A mendicant and arcanist with the College of Dunwich, he is investigating odd reports from the foggy coastal colony. [He lives under a tent in the Rookery, a Dagonite slum.]
          </p>
        </div>


        <div className='prologue'>
          <h2>Prologue:</h2>
          <p>
            "The most merciful thing in the world, I think, is the inability of the human mind to correlate all it's contents. We live on a placid island of ignorance, in the midst of black seas of the infinity. It was never meant that we voyage far."  - H.P. Lovecraft

            It was a truly bitter wind, as cold and biting as any that Ibram had known. Melbourne once told him the Angouleme called it the Entai Machus, a strange idiom for the nature of fate. Sweeping down from the northern fells, this wind was a plague across the entire eastern gallery. The gusts here crashed into the stream of pilgrims in front of Messer with the relentlessness of the tides. Yet still the mummy wrapped marchers around him trudged, heads bent into wind, towards the dark towers of Carcosa.

            It was not an inviting city, Carcosa. An antediluvian ruin hidden under the myconic timbers of a careless colony sprawl, this was not a destination favored by many. Only the most devout chose its' dark temple. The oily towers stood out oddly in the pale light of the Pendulum's swing, the spire of the Atrium Carceri peircing sharply into the cavern heights. Gazing across the wastes to this ancient tower Ibram wondered, not for the first, at the popularity of such a place along the Pilgrim's Path. He could tell by the gloom that there would be much work there. Carefully covering his mouth with the thin strip of red cloth clasped to his hood, he bent himself back into the wind. His mind wandered as his feet proceeded apace.
            Here, in the lonely desert stretch between the Reiksweald to the east and the Sabian Sea to the west, the Pilgrims Path was nothing more than a set of footprints. Far removed from the luxury of stone that detailed the length and breadth of the Chitin Road, every step Ibram took here sank deep into the sand.

            "And to think he dreamed of paradise", Ibram idly mused remembering the endless hope with which Amis had spoken of the coast. "It's as gloomy as everything else in this forsaken cave."
            A cry rang out ahead and Ibram risked the stinging wind to raise his eyes again. There was movement along the line ahead of him, some clearly panic. It was quickly apparent what had disturbed the stoic procession; far to the east was a small billowing cloud of dust approaching at a remarkable pace among the dunes. Ibram knew instantly that this was danger. The Arrowtongue, an apex predator known by legend. The speed alone was a clue, but at the tip of the cloud he could spot the bright crimson mark of the beasts grotesque head.
            Ahead he saw the careful movement of a dozen guards and two other Armigers as they warily spread out towards the approaching cloud. Sighing, he moved to join them. He touched the useless blade at his side, its presence a comfort, then unslung the battered carbine from his shoulder. The violence would cost them dearly; this was no place to fight such a thing. "And with the city in sight", he thought.

            He had never faced such a creature before, yet felt no fear. There was no use for such things when one is already dead. The death that he had sought had been a slow one to give him time to adjust. It had been a good decision, for at times like these he knew he was prepared.
            It was mere minutes before the Arrowtongue was upon them, and then only seconds before the whole confrontation was done. Within a hundred meters the defenders opened up, the crack of a dozen firearms sounding in rapid succession. Ibram added his own to the stuccato chorus, watching the ball go low into the beasts foreleg in a tiny bloom of red. The blood was suddenly rushing in his ears. He cracked open the breech, ejecting the empty cartridge and jamming in another, the jagged edge of the mill scraching across his leather palm.  With a click the breech was closed and he readied the weapon to his shoulder, took aim, and pulled the trigger. Nothing but a hiss. Ibram began cursing the crude powder that endlessly fouled the barrel, again cracking open the breach and replacing the half burnt cartridge. 
            But, suddenly, all was wind and dust and screams. A terrified wail erupted to left of Ibram, the six legged creature clearly upon crowd. For minutes he wandered hopelessly through the haze, following the tumultuos noises of violence and then disarray, until all turned eerily quiet. 

            And then it was gone, leaving a trail of dust and five dead in its wake. As the clouds slowly settled the carnage became apparent. One had been crushed under the creatures great reptilian legs. The others had all become victims of the its eponymous tongue, their corpses mere husks. The bodies were wrapped with practised ease in burlap cloth by the pilgrims and Ibram helped as the remains were deftly loaded onto a cart. Slowly the procession continued, little to mark the gruesome event but bad memories and another burden.
            "Nothing left", Ibram mumbled, eyeing the willowy dead. 

            It only occurred to him after to wonder where the Arrowtongue had been going. Looking west to the sea, it had seemingly vanished. Dunes as far as the eye could see, until a sliver azure waters met the blackness of the horizon. 
            "How could that be?" he wondered.

            The rest of the journey was uneventful. The dark waters of the Sabian Sea crept closer as they marched toward the port town. Their arrival in Carcosa was clearly foreseen but evidently not with much enthusiasm.

            They approached from the south and Ibram noted the feeble stick palisade, dour minutemen staring out from rickety watchtowers. The gate was little more than raw timber, he judged a few men could smash it down. Oddly poor defenses for such a hostile frontier. 

            Passing through it, the rest of the town looked little better. Crooked and bare buildings were patched right into the sides of massive basalt towers that rose high above sad wooden walls. Most of the pilgrims from the caravan trudged on towards the Atrium Carceri, where he knew their pilgrimage would end. Ibram gave a terse wave to the two Armigers, Etil and Mox, as he broke away from the procession. Here, along what passed for a main avenue, a few savvy peddlers hawking goods did little to hide the hostility of the locals. Nearly every face Ibram turned to was masked under the umbrage of suspicion. A dreary place to work perhaps, but there was certainly work to do...
          </p>
        </div>
        <h2>Which story shall be fulfilled?</h2>
        <h3>Options</h3>
        
        <ul>
          <li>Meet Contact</li>
          <li>Find an Inn</li>
          <li>Visit Stalls</li>
          <li>Question Locals</li>
        </ul>
      </div>
         
    </>
  )
};

export default StoryBoard;
import React, { useState, useEffect } from 'react';
import "./NavBar.css";

  export default function NavBar() {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth);

    const toggleNavSmallScreen = () => {
        setToggleMenu(!toggleMenu);
    }

    useEffect(() => {

        const changeWidth = () => {
            setLargeur(window.innerWidth);

            if(window.innerWidth > 500) {
               setToggleMenu(false);
            }
        }
      
       window.addEventListener('resize', changeWidth);

       return () => {
           window.removeEventListener('resize', changeWidth);
       }
    }, [])

      return (
          <nav>
              {(toggleMenu || largeur > 500) &&(

                  <ul className="list">
                    <li className="items"> WhitePaper | </li>
                    <li className="items"> Equipe | </li>
                    <li className="items"> RoadMap | </li>
                    <li className="items"> Devenir prestataire | </li>
                    <li className="items"> Mon panier </li>
                  </ul>

              )}
              <button className="btn" onClick={toggleNavSmallScreen}>Menu</button>
          </nav>
      )
  }
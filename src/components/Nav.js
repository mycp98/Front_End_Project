import React, {useState, useEffect} from 'react'
const Nav = () => {

    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)


    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
      }

      useEffect(() => {

        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', changeWidth)
    
      }, [])


return (
    <>
    <nav>
        {(toggleMenu || screenWidth > 500)&& (
        <ul className="list">
          <li className="items"><a href="index.html">Home</a></li>
          <li className="items"><a href="index.html">Guides</a></li>
          <li className="items"><a href="index.html">Venues</a></li>
        
        </ul>
        )}

        <button onClick={toggleNav} className="NavBtn">BTN</button>
    </nav>
    </>
)
}

export default Nav;
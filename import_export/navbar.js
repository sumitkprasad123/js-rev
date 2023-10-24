

function Navbar(){
    return(`
       <div class="navbar">
          <div><a href="./index.html">Home</a></div>
          <div class="option">
             <div id="electronic">
                <a href="./electronics.html">Electronic</a>
             </div>
             <div id="jewellery">
                <a href="./jewellery.html">Jewellery</a>
             </div>
             <div id="cloths">
                <a href="./cloths.html">Cloths</a>
             </div>
          </div>
       </div>
    `)
}

export default Navbar   //default export
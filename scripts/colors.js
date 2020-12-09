const togglePalette = () => {
  const palette = `
    <div id='palette'>
      <div onClick='grey()' id='grey' class='color'></div>
      <div onClick='red()' id='red' class='color'></div>
      <div onClick='green()' id='green' class='color'></div>
      <div onClick='yellow()' id='yellow' class='color'></div>
      <div onClick='blue()' id='blue' class='color'></div>
      <div onClick='purple()' id='purple' class='color'></div>
    </div>
  `;

  document.body.innerHTML += palette;  
};
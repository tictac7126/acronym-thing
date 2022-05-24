const tile_container = document.getElementById("tile-container")

const consonants = ["B","C","D","F","G","H","J","K","L","M","N","P","Q","R","S","T","V","W","X","Y","Z"];
const vowels = ["A","E","I","O","U"];

document.addEventListener("keydown", event => {
	if (event.key == "Enter") {
		newTile()
	}
	else if (event.key == "Backspace") {
		tile_container.innerHTML = "";
	}
});

function newTile() {
	var tile = document.createElement("div");
	var text = document.createTextNode(consonants[Math.floor(Math.random() * consonants.length)]);
	tile.appendChild(text);
	tile.style.animation = "appear 0.17s cubic-bezier(.35,.25,.79,1.59) forwards";
	tile_container.appendChild(tile)
}

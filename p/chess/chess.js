function dragElement(elmnt) {
	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	if (document.getElementById(elmnt.id + "header")) {
		document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
	} else {
		elmnt.onmousedown = dragMouseDown;
	}

	function dragMouseDown(e) {
		e = e || window.event;
		e.preventDefault();
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		document.onmousemove = elementDrag;
	}

	function elementDrag(e) {
		e = e || window.event;
		e.preventDefault();
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
		elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	}

	function closeDragElement() {
		let offsetTop = elmnt.offsetTop;
		let offsetLeft = elmnt.offsetLeft;
		let skip = false;

		var gameEnded = false;

		console.log(offsetTop + ' : ' + offsetLeft);

		let pieces = document.getElementsByClassName("move");
		for (var i = 0; i < pieces.length; i++) {
			let p = pieces[i];
			let skip = false;

			if ((elmnt.classList.contains("white") && p.classList
					.contains("white"))
					|| (elmnt.classList.contains("black") && p.classList
							.contains("black"))) {
				skip = true;
			}

			if (elmnt.id == p.id) {
				skip = true;
			}

			if (!skip) {
				if ((offsetLeft + 50 < p.offsetLeft + 100)
						&& (offsetLeft + 50 > p.offsetLeft)
						&& (offsetTop + 50 < p.offsetTop + 100)
						&& (offsetTop + 50 > p.offsetTop)) {

					kill(p);

					if (p.classList.contains("BlackKing")) {
						window.alert("White has won!");
						gameEnded = true;
					} else if (p.classList.contains("WhiteKing")) {
						window.alert("Black has won!")
						gameEnded = true;
					}

					p.onmousedown = null;
				}
			}

		}

		if (gameEnded) {
			clear();
		}

		document.onmouseup = null;
		document.onmousemove = null;
	}
}

function clear() {
	let pieces = document.getElementsByClassName("move");
	for (let j = 0; j < 10; j++) {
		for (let i = 0; i < pieces.length; i++) {
			kill(pieces[i]);
		}
	}
}

function kill(p) {
	if (p.classList.contains("black")) {
		document.getElementById('dead_black').appendChild(p);
	} else {
		document.getElementById('dead_white').appendChild(p);
	}

	p.classList.remove("move");
	p.classList.add("dead");
}

function initMoves() {
	let pieces = document.getElementsByClassName("move");

	for (var i = 0; i < pieces.length; i++) {
		dragElement(pieces[i]);
	}
}

function refresh(sorted) {
	window.location = './Chess?sorted=' + sorted;
}

initMoves();
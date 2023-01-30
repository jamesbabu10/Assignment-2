var center = document.createElement("center");

//function to create the chessboard
var ChessTable = document.createElement("table");
for (var i = 1; i <= 8; i++) {
  var tr = document.createElement("tr");
  for (var j = 1; j <= 8; j++) {
    var td = document.createElement("td");

    td.setAttribute("id", [i, j]);
    if ((i + j) % 2 == 0) {
      // this is for white cells
      td.setAttribute("class", "cell whitecell ");
      tr.appendChild(td);
    } else {
      // this is for black cells
      td.setAttribute("class", "cell blackcell");

      tr.appendChild(td);
    }
  }

  ChessTable.appendChild(tr);
}
center.appendChild(ChessTable);

// Modifying table attribute properties
ChessTable.setAttribute("cellspacing", "0");
ChessTable.setAttribute("width", "270px");
document.body.appendChild(center);

//function to make the cells red
make_red = (pos) => {
  document
    .getElementById(pos)
    .setAttribute(
      "class",
      (document.getElementById(pos).getAttribute("class") || "") + " redcell"
    );
};

// function to remove the red
remove_red = () => {
  document.querySelectorAll("td").forEach((node) => {
    node.setAttribute(
      "class",
      node.getAttribute("class").replace("redcell", "")
    );
  });
};

function findPossibleMoves(p, q) {
  let X = [2, 1, -1, -2, -2, -1, 1, 2];
  let Y = [1, 2, 2, 1, -1, -2, -2, -1];

  let count = 0;

  // Check if each possible move is valid or not
  console.log("set of possible moves are - ");
  for (let i = 0; i < 8; i++) {
    let x = p + X[i];
    let y = q + Y[i];

    if (x >= 1 && y >= 1 && x < 9 && y < 9) {
      console.log(x + "," + y);
      make_red(x + "," + y);
    }
  }
}

ChessTable.addEventListener("click", function (ev) {
  var serviceID = ev.target.id;
  console.log(serviceID);
  remove_red();
  make_red(serviceID);
  findPossibleMoves(
    parseInt(serviceID.split(",")[0]),
    parseInt(serviceID.split(",")[1])
  );
});

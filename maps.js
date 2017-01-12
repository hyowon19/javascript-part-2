function Tile (type) {
    this.type = type;
    this.isWalkable = function() {
        if ((this.type.toLowerCase() === "grass") || (this.type.toLowerCase() === "sand")) {
            return true;
        }
        else {
            return false;
        }
    }
    this.randomTile = function() {
        var tileNum = Math.floor(Math.random() * 3);
        if (tileNum === "1") {
            this.type = "grass";
        }
        else if (tileNum === "2") {
            this.type = "sand";
        }
        else {
            this.type = "water";
        }
    }
}

function Map (width, height) {
    this.width = width;
    this.height = height;
    this.tiles = function() {
        var tMap = [];
        for (var i = 0; i < width ; i++) {
            tMap.push([]);
            for (var j = 0; j < height ; j++) {
                tMap[i].push(1);
            }
        }
        return tMap;
    }
};

var houston = new Map(10,10);
console.log(houston);
console.log(houston.tiles());
// var f = [];
// for(var i = 0; i < 2; i++) {
//   f.push([]);
//   for( var j = 0; j < 2; j++) {
//     f[i].push(1);
//   } 
// }

// for (var i = 0; i < 2; i++) {
//   f[i] = []
//   for (var j = 0; j < 2; j++) {
//     f[i][j]=1;
//   }
// }

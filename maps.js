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
}

function Map (width, height) {
    this.width = width;
    this.height = height;
    this.tiles = function(width, height) {
        tMap = [];
        for (var i = 0; i < width < i++) {
            tmap[i] = [];
            for (var j = 0; j < height < j++) {
                tmap[j] = 
            }
        }
    }
}

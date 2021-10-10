class Graph {
  constructor() {
    this.vertices = [];
    this.adjacents = {};
  }

  addVertex(v) {
    this.vertices.push(v); // adds vertex to list of vertices
    this.adjacents[v] = []; // initialize the adjacent list for given vtx
  }

  // adds an edge between two vertices (v, w)
  addEdge(v, w) {
    this.adjacents[v].push(w); // add w to vertex v's this.adjacents list
    this.adjacents[w].push(v); // add v to the this.adjacents list of vertex w
  }

  toString() {
    let s = '';
    for (let i = 0; i < this.vertices.length; i++) {
      s += this.vertices[i] + ' -> ';
      const neighbors = this.adjacents[this.vertices[i]];
      for (let j = 0; j < neighbors.length; j++) {
        s += neighbors[j] + ' ';
      }
      s += '\n';
    }
    return s;
  }
}

module.exports = Graph;
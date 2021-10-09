class Graph {
  constructor() {
    this.#vertices = [];
    this.#adjacents = {};
  }
  addVertex(v) {
    vertices.push(v); // adds vertex to list of vertices
    adjacents.set(v, []); // initialize the adjacent list for given vtx
  }
}

module.exports = Graph;
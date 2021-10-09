class Graph {
  constructor() {
    this.#vertices = [];
    this.#adjacents = {};
  }

  #addVertex(v) {
    vertices.push(v); // adds vertex to list of vertices
    adjacents.set(v, []); // initialize the adjacent list for given vtx
  }

  #addEdge(v, w) {
    adjacents.get(v).push(w);
    adjacents.get(w).push(v);
  }
}

module.exports = Graph;
class Graph {
  constructor() {
    this.#vertices = [];
    this.#adjacents = {};
  }

  #addVertex(v) {
    vertices.push(v); // adds vertex to list of vertices
    adjacents.set(v, []); // initialize the adjacent list for given vtx
  }

  // adds an edge between two vertices (v, w)
  #addEdge(v, w) {
    adjacents.get(v).push(w); // add w to vertex v's adjacents list
    adjacents.get(w).push(v); // add v to the adjacents list of vertex w
  }
}

module.exports = Graph;
const Node = require('./Node');

class Vertex {

    _adjList;
    _word;
    _visited;
    _predecessor;

    constructor(word) {
        this._adjList = [];
        this._word = word;
        this._visited = false;
        this._predecessor = undefined;
    }

    get adjList() {
        return this._adjList;
    }

    get word() {
        return this._word;
    }

    get visited() {
        return this._visited;
    }

    get predecessor() {
        return this._predecessor;
    }

    set visited(bool) {
        this._visited = bool; 
    }

    set predecessor(word) {
        this._predecessor = word;
    }

    addToAdjList(adj) {
        this._adjList.push(new Node(adj, this._word))
    }

}

module.exports = Vertex;
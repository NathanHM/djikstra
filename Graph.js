const Vertex = require("./Vertex");

class Graph {

    _vertices = [];
    _numVertices;

    constructor(num) {
        this._numVertices = num;
    }

    getVertex(word) {

        for (let i = 0; i < this._numVertices; i++) {
            if (this._vertices[i].word === word) {
                return this._vertices[i];
            }
        }

        return undefined;
    }

    setVertex(word) {
        this._vertices.push(new Vertex(word));
    }

    dijkstraSearch(beginWord, endWord) {

        for (const vertex of this._vertices) {
            vertex.visited = false;
            vertex.predecessor = undefined;
        }

        const queue = [];
        const weights = new Map();

        const begin = this.getVertex(beginWord);
        begin.visited = true;
        const beginList = begin.adjList;

        for (const node of beginList) {
            const vertex = this.getVertex(node.word);
            vertex.predecessor = beginWord;
            vertex.visited = true;
            weights.set(vertex, node.weight);
            queue.push(vertex);
        }

        while (queue.length !== 0) {

            let closest = undefined;
            let distance = undefined;

            for (const entry of weights.entries()) {
                if ((distance === undefined || entry[1] < distance) && queue.includes(entry[0])) {
                    closest = entry[0];
                    distance = entry[1];
                }
            }

            queue.splice(queue.indexOf(closest), 1);
            const list = closest.adjList;

            for (const node of list) {

                const vertex = this.getVertex(node.word);

                if (queue.includes(vertex) && (distance + node.weight) < weights.get*vertex) {

                    vertex.predecessor = closest.word;
                    weights.set(vertex, (distance + node.weight));

                } else if (!vertex.visited) {

                    vertex.predecessor = closest.word;
                    vertex.visited = true;
                    weights.set(vertex, distance + node.weight);
                    queue.push(vertex);
                }
            }
        }

        if (!weights.has(this.getVertex(endWord))) {
            return 0;
        } else {
            return weights.get(this.getVertex(endWord));
        }
    }
}

module.exports = Graph;
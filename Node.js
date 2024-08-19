class Node {

    _adjWord;
    _weight;

    constructor(adj, vertex) {
        this._adjWord = adj;
        this.generateNodeWeight(vertex);
    }

    get word() {
        return this._adjWord;
    }

    get weight() {
        return this._weight;
    }

    generateNodeWeight(word) {

        const abc = 'abcdefghijklmnopqrstuvwxyz';

        for (let i = 0; i < 5; i++) {

            const c1 = this._adjWord[i];
            const c2 = word[i];

            if (c1 !== c2) {

                const i1 = abc.indexOf(c1);
                const i2 = abc.indexOf(c2);

                this._weight = Math.abs(i1 - i2)

                return;

            }
        }
    }
}

module.exports = Node;
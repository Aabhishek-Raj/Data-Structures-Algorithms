const hasPath = (graph: {[key: string]: string[]}, root: string, destin: string): boolean => {

    if(root === destin) return true

    for (let neighbor of graph[root]) {
        if (hasPath(graph, neighbor, destin) === true) {
            return true
        }
    }

    return false
}

const graph: {[key: string]: string[]} = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

console.log(hasPath(graph, 'c', 'b'))
const depthFirstSearch = (graph: {[key: string]: string[]}, root: string): void => {
    const stack: string[] = []
    stack.push(root)

    while(stack.length > 0) {
        const current = stack.pop()
        if( current === undefined) {
            return 
        }

        console.log(current)

        for (let neighbor of graph[current]) {
            stack.push(neighbor)
        }

    }
}

const dFSRecursion = (graph: {[key: string]: string[]}, root: string): void => {
    console.log(root)
    for (let neighbor of graph[root]) {
        dFSRecursion(graph, neighbor)
    }
}

const graph: {[key: string]: string[]} = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],   
    e: [],
    f: []
}

depthFirstSearch(graph, 'a')
// dFSRecursion(graph, 'a')

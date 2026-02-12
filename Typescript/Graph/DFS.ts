const depthFirstSearch = (
  graph: { [key: string]: string[] },
  root: string
): void => {
  const stack: string[] = [root]
  const visited = new Set<string>()

  while (stack.length > 0) {
    const current = stack.pop()!

    if (visited.has(current)) continue
    visited.add(current)

    console.log(current)

    for (const neighbor of graph[current]) {
      stack.push(neighbor)
    }
  }
}


const dfsRecursive = (
  graph: { [key: string]: string[] },
  node: string,
  visited = new Set<string>()
): void => {
  if (visited.has(node)) return

  visited.add(node)
  console.log(node)

  for (const neighbor of graph[node]) {
    dfsRecursive(graph, neighbor, visited)
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

const breadthFirstSeach = (graph, root) => {
    const queue = []
    queue.push(root)

    while(queue.length > O) {
      const currrent = queue.shift()
      console.log(currrent)
      for (let vertex of graph[currrent]) {
        queue.push(vertex)
      }
    }
}

const deapthfirstSearch = (graph, root) => {
    const stack = []
    stack.push(root)

    while(stack.length > 0) {
        const curr = stack.pop()
        console.log(curr)
        for (let vertex of graph[curr]) {
            stack.push(vertex)
        }
    }
} 

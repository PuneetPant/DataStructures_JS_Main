import { PriorityQueue, MinPriorityQueue, MaxPriorityQueue } from '@datastructures-js/priority-queue';
class Edge {
  constructor(src, nbr, wt) {
    this.src = src;
    this.nbr = nbr;
    this.wt = wt
  }
}

const creation = () => {
  let graph = [];
  let vertices = 7;

  // empty initialization
  for (let i = 0; i < vertices; i++) {
    graph[i] = [];
  }


  graph[0].push(new Edge(0, 1, 10))
  graph[0].push(new Edge(0, 3, 40))

  graph[1].push(new Edge(1, 0, 10))
  graph[1].push(new Edge(1, 2, 10))

  graph[2].push(new Edge(2, 1, 10))
  graph[2].push(new Edge(2, 3, 10))
  // graph[2].push(new Edge(2, 5, 2))

  graph[3].push(new Edge(3, 0, 40))
  graph[3].push(new Edge(3, 2, 10))
  graph[3].push(new Edge(3, 4, 2))

  graph[4].push(new Edge(4, 3, 2))
  graph[4].push(new Edge(4, 5, 3))
  graph[4].push(new Edge(4, 6, 8))

  graph[5].push(new Edge(5, 4, 3))
  graph[5].push(new Edge(5, 6, 3))
  // graph[5].push(new Edge(5, 2, 2))

  graph[6].push(new Edge(6, 4, 8))
  graph[6].push(new Edge(6, 5, 3))

  return graph;
}

const hasPath = (graph, src, dest, visited) => {
  if (src == dest) {
    return true
  }
  visited[src] = true;
  for (let i = 0; i < graph[src].length; i++) {
    // console.log(grap[])
    let edge = graph[src][i];
    if (visited[edge.nbr] == false) {
      let doesItHavePath = hasPath(graph, edge.nbr, dest, visited)
      if (doesItHavePath == true) {
        return true;
      }
    }
  }
  return false;
}
// has Path in leetcode
var validPath = function (n, edges, source, destination) {
  // Making a Graph
  class Edge {
    constructor(src, nbr) {
      this.src = src;
      this.nbr = nbr;
    }
  }
  let graph = [];
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }
  for (let i = 0; i < edges.length; i++) {
    let v1 = edges[i][0];
    let v2 = edges[i][1];
    graph[v1].push(new Edge(v1, v2));
    graph[v2].push(new Edge(v2, v1));
  }
  console.log(graph)

  let visited = new Array(n).fill(false);
  const validPathHelper = (graph, src, dest, visited) => {
    if (src == dest) {
      return true
    }
    visited[src] = true;
    for (let i = 0; i < graph[src].length; i++) {
      let edge = graph[src][i];
      if (visited[edge.nbr] == false) {
        let doesItHavePath = validPathHelper(graph, edge.nbr, dest, visited)
        if (doesItHavePath == true) {
          return true;
        }
      }
    }
    return false;
  }
  let ans = validPathHelper(graph, source, destination, visited)
  return ans;
};
// has Path Iterative Solution
var validPath = function (n, edges, start, end) {
  if (start === end) return true;

  const graph = convertEdgesToAjecency(n, edges);
  const visited = new Set();
  const queue = [start]

  while (queue.length) {
    const curr = queue.shift()
    visited.add(curr)

    if (curr === end) return true

    for (node of graph[curr]) {
      if (!visited.has(node)) queue.push(node)
    }
  }
  return false
};

//construct adjacency list
function convertEdgesToAjecency(n, edges) {
  const graph = Array.from({ length: n }, () => [])
  for (let [src, dest] of edges) {
    graph[src].push(dest)
    graph[dest].push(src)
  }
  return graph
};

const printAllPaths = (graph) => {
  let ans = [];

  const printAllPathsHelper = (graph, src, dest, ansFormed, visited) => {
    if (src == dest) {
      ansFormed.push(dest);
      let toBePushed = [...ansFormed];
      ans.push(toBePushed);
      return;
    }

    visited[src] = true;
    ansFormed.push(src)
    for (let i = 0; i < graph[src].length; i++) {
      let edge = graph[src][i];
      if (visited[edge.nbr] == false) {
        printAllPathsHelper(graph, edge.nbr, dest, ansFormed, visited)
        ansFormed.pop()
      }
    }
    visited[src] = false;

  }

  printAllPathsHelper(graph, 0, graph.length - 1, [], new Array(graph.length).fill(false))
  return ans;
}

// Directed Graph print all paths - leetcode
// No visited here because it is a Directed Graph in Leetcodes question.
var allPathsSourceTarget = function (graph) {
  let ans = [];
  const allPathsSourceTargetHelper = (graph, src, dest, ansFormed) => {
    if (src == dest) {
      ansFormed.push(dest);
      let toBePushed = [...ansFormed]
      ans.push(toBePushed)
      return;
    }
    ansFormed.push(src)

    for (let i = 0; i < graph[src].length; i++) {
      allPathsSourceTargetHelper(graph, graph[src][i], dest, ansFormed)
      ansFormed.pop()
    }
  }

  allPathsSourceTargetHelper(graph, 0, graph.length - 1, [])
  console.log(ans)
  return ans;
};

const smallestPath = (graph) => {
  let pathValue = Number.MAX_SAFE_INTEGER;

  const smallestPathHelper = (graph, src, dest, visited, weightSoFar) => {
    if (src == dest) {
      console.log(weightSoFar)
      if (weightSoFar < pathValue) {
        pathValue = weightSoFar;
      }
    }
    visited[src] = true
    for (let i = 0; i < graph[src].length; i++) {
      let edge = graph[src][i];
      if (visited[edge.nbr] == false) {
        smallestPathHelper(graph, edge.nbr, dest, visited, weightSoFar + edge.wt);
      }
    }
    visited[src] = false;
  }

  smallestPathHelper(graph, 0, graph.length - 1, new Array(graph.length).fill(false), 0);
  return pathValue;
}

const longestPath = (graph) => {
  let pathValue = Number.MIN_SAFE_INTEGER;
  const longestPathHelper = (graph, src, dest, visited, weightSoFar) => {
    if (src == dest) {
      console.log(weightSoFar);
      if (weightSoFar > pathValue) {
        pathValue = weightSoFar;
      }
      return;
    }


    visited[src] = true;

    for (let i = 0; i < graph[src].length; i++) {
      let edge = graph[src][i];
      if (visited[edge.nbr] == false) {
        longestPathHelper(graph, edge.nbr, dest, visited, weightSoFar + edge.wt)
      }
    }

    visited[src] = false;

  }
  longestPathHelper(graph, 0, graph.length - 1, new Array(graph.length).fill(false), 0)
  return pathValue
}

const getConnectedComponents = (graph) => {
  let ans = [];
  let arr = [];
  let visited = new Array(graph.length).fill(false);


  const getConnectedComponentsHelper = (graph, src, visited) => {

    visited[src] = true;
    arr = [...arr, src]
    for (let i = 0; i < graph[src].length; i++) {
      let edge = graph[src][i];
      if (visited[edge.nbr] == false) {
        getConnectedComponentsHelper(graph, edge.nbr, visited)
      }
    }
  }

  for (let i = 0; i < graph.length; i++) {
    if (visited[i] == false) {
      arr = [];
      getConnectedComponentsHelper(graph, i, visited)
      ans.push(arr)
    }
  }
  // console.log(ans)
  return ans;
}


const isGraphConnected = (graph) => {
  let visited = new Array(graph.length).fill(false);

  const dfs = (graph, src, visited) => {
    visited[src] = true;

    for (let i = 0; i < graph[src].length; i++) {
      let edge = graph[src][i];
      if (visited[edge.nbr] == false) {
        dfs(graph, edge.nbr, visited);
      }
    }
  }

  dfs(graph, 0, visited);
  return visited.every((el) => {
    return el == true;
  })
}

// Same as is graph connected, it is the
// leetcode version of is graph connected.
var canVisitAllRooms = function (graph) {
  let visited = new Array(graph.length).fill(false);

  const canVisitAllRoomsHelper = (graph, src, visited) => {
    visited[src] = true;

    for (let i = 0; i < graph[src].length; i++) {
      let edge = graph[src][i];
      if (visited[edge] == false) {
        canVisitAllRoomsHelper(graph, edge, visited);
      }
    }
  }
  canVisitAllRoomsHelper(graph, 0, visited)
  return visited.every((el) => {
    return el == true;
  })
};

// This is the leetcode version 
var numIslands = function (arr) {
  const numIslandsHelper = (arr, row, col) => {
    arr[row][col] = 0;
    if (row - 1 >= 0 && arr[row - 1][col] == 1) {
      numIslandsHelper(arr, row - 1, col)
    }
    if (col + 1 <= arr[0].length - 1 && arr[row][col + 1] == 1) {
      numIslandsHelper(arr, row, col + 1)
    }
    if (row + 1 <= arr.length - 1 && arr[row + 1][col] == 1) {
      numIslandsHelper(arr, row + 1, col)
    }
    if (col - 1 >= 0 && arr[row][col - 1] == 1) {
      numIslandsHelper(arr, row, col - 1)
    }
  }
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] == 1) {
        count++;
        numIslandsHelper(arr, i, j)
      }
    }
  }
  return count;
};

const makeGraph = (size, arr) => {
  let graph = [];
  for (let i = 0; i < size; i++) {
    graph[i] = [];
  }
  for (let i = 0; i < arr.length; i++) {
    graph[arr[i][0]].push(arr[i][1])
    graph[arr[i][1]].push(arr[i][0])
  }
  return graph;
}


const perfectFriends = (size, arr) => {
  let graph = makeGraph(size, arr);
  // console.log(graph)
  let visited = new Array(size).fill(false);
  let ans = [];
  let friends = [];
  const perfectFriendsHelper = (graph, src, visited) => {
    visited[src] = true;
    friends = [...friends, src];
    for (let i = 0; i < graph[src].length; i++) {
      let edge = graph[src][i];
      if (visited[edge] == false) {
        perfectFriendsHelper(graph, edge, visited)
      }
    }
  }

  for (let i = 0; i < size; i++) {
    if (visited[i] == false) {
      friends = [];
      perfectFriendsHelper(graph, i, visited)
      ans.push(friends);
    }
  }
  let sum = 0;
  let finalAns = 0;
  for (let i = 0; i < ans.length; i++) {
    sum += ans[i].length;
  }

  for (let i = 0; i < ans.length; i++) {
    let sumOfAllMinusItself = sum - ans[i].length;
    finalAns += sumOfAllMinusItself * ans[i].length;
  }
  return finalAns / 2;
}

const checkHamiltonianPathOrCycle = (graph) => {

  const checkHamiltonianPathOrCycleHelper = (graph, src, visited, pathSoFar) => {
    visited[src] = true;

    let flag = visited.every((el) => {
      return el == true;
    })
    if (flag == true) {
      // Now check for hamiltonain path or cycle
      let checkCycle = false;
      for (let j = 0; j < graph[src].length; j++) {
        let val = graph[src][j];
        if (val.nbr == 0) {
          checkCycle = true;
          break;
        }
      }
      if (checkCycle) {
        console.log('Hamiltonain Cycle', pathSoFar)
      } else {
        console.log('Hamiltonain Path', pathSoFar)
      }
    }

    for (let i = 0; i < graph[src].length; i++) {
      let edge = graph[src][i];
      if (visited[edge.nbr] == false) {
        checkHamiltonianPathOrCycleHelper(graph, edge.nbr, visited, pathSoFar + edge.nbr + " ");
      }
    }

    visited[src] = false;
  }

  checkHamiltonianPathOrCycleHelper(graph, 0, new Array(graph.length).fill(false), "0 ")
}

const KnightsTour = (arr, row, col, move) => {

  if (move == arr.length * arr[0].length) {
    arr[row][col] = move;
    console.log(arr)
    arr[row][col] = 0
    return
  }

  arr[row][col] = move;

  safeMove(arr, row - 2, col + 1) && KnightsTour(arr, row - 2, col + 1, move + 1)
  safeMove(arr, row - 1, col + 2) && KnightsTour(arr, row - 1, col + 2, move + 1)
  safeMove(arr, row + 1, col + 2) && KnightsTour(arr, row + 1, col + 2, move + 1)
  safeMove(arr, row + 2, col + 1) && KnightsTour(arr, row + 2, col + 1, move + 1)
  safeMove(arr, row + 2, col - 1) && KnightsTour(arr, row + 2, col - 1, move + 1)
  safeMove(arr, row + 1, col - 2) && KnightsTour(arr, row + 1, col - 2, move + 1)
  safeMove(arr, row - 1, col - 2) && KnightsTour(arr, row - 1, col - 2, move + 1)
  safeMove(arr, row - 2, col - 1) && KnightsTour(arr, row - 2, col - 1, move + 1)

  arr[row][col] = 0;
}

const safeMove = (arr, row, col) => {
  // Out of range checks for row and col
  // And Already moved in that square check
  if (row < 0 || col < 0 || row >= arr.length || col >= arr[0].length || arr[row][col] != 0) {
    return false
  }
  return true;
}

const breadthFirstTraversal = (graph, src) => {
  let q = [];
  class Pair {
    constructor(val, path) {
      this.val = val;
      this.path = path;
    }
  }
  q.push(new Pair(src, src));
  let visited = new Array(graph.length).fill(false);
  while (q.length > 0) {
    let remove = q.shift();

    if (visited[remove.val] == true) {
      continue
    }
    visited[remove.val] = true;
    console.log(remove.val, remove.path)
    for (let i = 0; i < graph[remove.val].length; i++) {
      let edge = graph[remove.val][i];
      if (visited[edge.nbr] == false) {
        q.push(new Pair(edge.nbr, remove.path + " " + edge.nbr))
      }

    }
  }

}

const isGraphCyclic = (graph, src) => {
  let q = [];
  class Pair {
    constructor(val, path) {
      this.val = val;
      this.path = path;
    }
  }
  q.push(new Pair(src, src));
  let visited = new Array(graph.length).fill(false);
  while (q.length > 0) {
    let remove = q.shift();

    // is occured again here , that means
    // there is an cycle
    if (visited[remove.val] == true) {
      return true;
    }
    visited[remove.val] = true;
    for (let i = 0; i < graph[remove.val].length; i++) {
      let edge = graph[remove.val][i];
      if (visited[edge.nbr] == false) {
        q.push(new Pair(edge.nbr, remove.path + " " + edge.nbr))
      }

    }
  }
  return false;
}

var isBipartite = function (graph) {
  let visited = new Array(graph.length).fill(false)
  for (let i = 0; i < graph.length; i++) {
    if (visited[i] == false) {
      flag = checkBipartite(graph, visited, i)
    }
    if (flag == false) {
      break;
    }
  }
  return flag;
};
const checkBipartite = (graph, visited, src) => {
  let even = new Map();
  let odd = new Map();
  let q = []; // queue

  class Pair {
    constructor(val, level) {
      this.val = val;
      this.level = level;
    }
  }

  q.push(new Pair(src, 0));
  even.set(src);

  while (q.length > 0) {
    let rem = q.shift();
    visited[rem.val] = true;

    for (let i = 0; i < graph[rem.val].length; i++) {
      let edge = graph[rem.val][i];
      if (visited[edge] == false) {
        q.push(new Pair(edge, rem.level + 1));
        if ((rem.level + 1) % 2 == 0) {
          even.set(edge);
        } else {
          odd.set(edge);
        }
      }
    }
  }

  let ans = true;
  for (const [key] of even) {
    if (odd.has(key)) {
      ans = false;
      break;
    }
  }
  for (const [key] of odd) {
    if (even.has(key)) {
      ans = false;
      break;
    }
  }
  return ans;
}

const spreadOfInfection = (graph, src, time) => {
  let q = [];
  class Pair {
    constructor(val, level) {
      this.val = val;
      this.level = level;
    }
  }
  let visited = new Array(graph.length).fill(false);
  q.push(new Pair(src, 1));
  let count = 0;
  while (q.length > 0) {
    let { val, level } = q.shift();
    if (level > time) {
      break;
    }
    if (visited[val] == true) {
      continue
    }

    visited[val] = true;
    count++;
    for (let i = 0; i < graph[val].length; i++) {
      let edge = graph[val][i];
      if (visited[edge.nbr] == false) {
        q.push(new Pair(edge.nbr, level + 1))
      }
    }

  }
  return count
}

const shortestPathInWeights = (graph, src) => {
  // let pq = new MinPriorityQueue({ priority: x => x.weightSoFar });
  const pq = new PriorityQueue((a, b) => {
    if (a.weightSoFar > b.weightSoFar) {
      return 1;
    } else {
      return -1
    }
  });

  class Pair {
    constructor(val, path, weightSoFar) {
      this.val = val;
      this.path = path;
      this.weightSoFar = weightSoFar;
    }
  }
  pq.enqueue(new Pair(src, src, 0));
  let visited = new Array(graph.length).fill(false);
  while (pq.size() > 0) {
    let { val, path, weightSoFar } = pq.dequeue();
    if (visited[val] == true) {
      continue;
    }
    console.log(val, path, weightSoFar)

    visited[val] = true;
    for (let i = 0; i < graph[val].length; i++) {
      let edge = graph[val][i];
      if (visited[edge.nbr] == false) {
        pq.enqueue(new Pair(edge.nbr, path + ' ' + edge.nbr, weightSoFar + edge.wt))
      }
    }
  }

}

const minimumWireToConnectPcs = (graph, startingNode) => {
  class Pair {
    constructor(val, src, wt) {
      this.val = val;
      this.src = src;
      this.wt = wt;
    }
  }
  const pq = new PriorityQueue((a, b) => {
    if (a.wt > b.wt) {
      return 1;
    } else {
      return -1
    }
  })
  pq.enqueue(new Pair(startingNode, -1, 0));
  let visited = new Array(graph.length).fill(false);
  while (pq.size() > 0) {
    let { val, src, wt } = pq.dequeue();
    if (visited[val] == true) {
      continue;
    }
    console.log(val, src, wt)
    visited[val] = true;
    for (let i = 0; i < graph[val].length; i++) {
      let edge = graph[val][i];
      if (visited[edge.nbr] == false) {
        pq.enqueue(new Pair(edge.nbr, val, edge.wt))
      }
    }
  }
}

const createADirectedGraph = () => {
  let graph = []
  for (let i = 0; i < 7; i++) {
    graph[i] = [];
  }

  graph[0].push(new Edge(0, 1, 0))
  graph[0].push(new Edge(0, 3, 0))

  graph[1].push(new Edge(1, 2, 0))

  graph[2].push(new Edge(2, 3, 0))

  graph[4].push(new Edge(4, 3, 0))
  graph[4].push(new Edge(4, 5, 0))
  graph[4].push(new Edge(4, 6, 0))

  graph[5].push(new Edge(5, 6, 0))

  return graph;
}



const orderOfCompilation = (graph) => {
  let visited = new Array(graph.length).fill(false);
  let ans = [];

  const orderOfCompilationHelper = (graph, src, visited) => {

    visited[src] = true;

    for (let i = 0; i < graph[src].length; i++) {
      let edge = graph[src][i];
      if (visited[edge.nbr] == false) {
        orderOfCompilationHelper(graph, edge.nbr, visited);

      }
    }
    ans.push(src)
  }

  for (let i = 0; i < graph.length; i++) {
    if (visited[i] == false) {
      orderOfCompilationHelper(graph, i, visited)
      console.log(ans)
    }
  }
}

const iterativeDepthFirstTraversal = (graph, src) => {
  let st = [];
  st.push(src);
  let visited = new Array(graph.length).fill(false);
  while (st.length > 0) {
    let rem = st.pop();
    if (visited[rem] == true) {
      continue
    }
    console.log(rem)
    visited[rem] = true;
    for (let i = graph[rem].length - 1; i >= 0; i--) {
      let edge = graph[rem][i];
      if (visited[edge.nbr] == false) {
        st.push(edge.nbr)
      }
    }
  }
}



const main = () => {
  let graph = creation()
  // console.log(graph)

  // for(let edge of graph[src]){
  //   console.log(edge)
  // }
  // console.log(hasPath(graph, 0, 6, new Array(graph.length).fill(false)))
  // console.log(printAllPaths(graph))
  // console.log(smallestPath(graph))
  // console.log(longestPath(graph))
  // console.log(getConnectedComponents(graph))
  // console.log(isGraphConnected(graph))
  // console.log(perfectFriends(7, [[0, 1], [2, 3], [4, 5], [5, 6], [4, 6]]))
  // console.log(checkHamiltonianPathOrCycle(graph))
  // let n = 6;
  // let r = 2;
  // let c = 0;
  // let arr = new Array(n).fill(0).map(() => {
  //   return new Array(n).fill(0)
  // })
  // KnightsTour(arr, r, c, 1);
  // breadthFirstTraversal(graph, 2);
  // console.log(isGraphCyclic(graph, 0))
  // console.log(spreadOfInfection(graph, 6, 3))
  // shortestPathInWeights(graph, 0)
  // minimumWireToConnectPcs(graph, 0)

  // in order to run this question , you need to create a 
  // directed graph, hence comment off the creation function
  // and create a specific create graph function for this
  // let graph = createADirectedGraph()
  // // console.log(graph)
  // orderOfCompilation(graph)

  iterativeDepthFirstTraversal(graph, 0);
}

main();
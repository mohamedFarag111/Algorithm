primsMST() {
   // Initialize graph that'll contain the MST
   const MST = new Graph();
   if (this.nodes.length === 0) {
      return MST;
   }


   // Select first node as starting node
   let s = this.nodes[0];


   // Create a Priority Queue and explored set
   let edgeQueue = new PriorityQueue(this.nodes.length * this.nodes.length);
   let explored = new Set();
   explored.add(s);
   MST.addNode(s);


   // Add all edges from this starting node to the PQ taking weights as priority
   this.edges[s].forEach(edge => {
      edgeQueue.enqueue([s, edge.node], edge.weight);
   });
      
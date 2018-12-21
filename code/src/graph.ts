export interface Graph<NodeType> {
  adjacent(nodeA: NodeType, nodeB: NodeType): boolean;
  neighbors(node: NodeType): NodeType[];
}

export interface WeightedGraph<NodeType> extends Graph<NodeType> {
  cost(nodeA: NodeType, nodeB: NodeType): number;
  estimate(nodeA: NodeType, nodeB: NodeType): number;
}

# Singly Linked List

- Singly linked list is a data structure which contains a list of nodes which are connected in series.
- Each node will have it's value and reference/pointer to the next node.
- It shall have properties like `head`, `tail` and `length`.
- Head refers to the first node, tail refers to the last node and length refers to the total nodes in the structure.
- Unlike arrays, this DS does not support indexes i.e., you cannot access a particular node directly (Random access is not allowed).
- To access an item, the list has to traversed until we reach the item.

## Instance Methods

- Push

  - Allows to add new nodes into the list.
  - Returns the list.
  - If there is a single node, `head` and `tail` shall point to the same node.
  - If there is are no nodes, `head` and `tail` shall be `null`.
  - When a new node is added, the `tail` shall point to the latest added node.

- Pop
  - Removes the last node from the list.
  - Returns the last node which was removed.
  - `tail` is reset to the last node after removal.
  - If all the nodes are removed, `head` and `tail` will be set to `null`.
  - On every removal, length is decremented accordingly.

### Resources

- Visualization: https://visualgo.net/en/list

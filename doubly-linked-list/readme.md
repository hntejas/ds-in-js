# Doubly Linked List

- Doubly linked list is a data structure which contains a list of nodes which are connected in series.
- Each node will have it's value and reference/pointer to the next node and previous node.
- It shall have properties like `head`, `tail` and `length`.
- Head refers to the first node, tail refers to the last node and length refers to the total nodes in the structure.
- Unlike arrays, this DS does not support indexes i.e., you cannot access a particular node directly (Random access is not allowed).
- To access an item, the list has to traversed until we reach the item.

## Methods

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

- Shift

  - Removes the first node from the list.
  - Returns the removed node.
  - `head` will point to the next node in the list.
  - `undefined` is returned if there were no nodes in the list.
  - On every shift, length is decremented accordingly.

- Unshift

  - Adds a new node to the beginning of the list.
  - Returns the list.
  - `head` is reset to the newly added node.
  - Length is incremented accordingly.

- Get

  - Retrieves the node at the requested index.
  - Returns the node.
  - Iterates through the nodes until the index is reached.
  - When there are no nodes, `null` is returned.

- Set

  - Replaces the value of a node, with the new value at a given index.
  - Returns `true` if the index is valid, `false` if the index is invalid.

- Insert

  - Adds a new node at a particular index.
  - Returns `true` if index is valid, `false` otherwise.
  - Reassignes the `next` of the previous node to new node.
  - The node at the current index is added as `next` of the newly added node.

- Remove

  - Removes the node from a particular index.
  - Returns the value of the removed node if index is valid, `null` otherwise.
  - Reassignes the value of `next` of previous node with the `next` of the removed node.

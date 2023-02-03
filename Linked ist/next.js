
class Node
{
    constructor(val)
    {
        this.data = val;
        this.next = null;
    }
}
 
function push( new_data)
{
    var new_node = new Node(new_data);
    new_node.next = head;
    head = new_node; 
}
function getCountRec(node)
{
    if (node == null)
        return 0;
 
    return 1 + getCountRec(node.next);
}
 
function getCount()
{
    return getCountRec(head);
}
   
push(1);
push(3);
push(1);
push(2);
push(1);
 
document.write("Count of nodes is " + getCount());
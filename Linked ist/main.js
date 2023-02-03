
class Node
{
    constructor(val)
    {
        this.data = val;
        this.next = null;
    }
}
var head;
function push(new_data)
{
    var new_node = new Node(new_data);
    new_node.next = head;

    head = new_node;
}
function getCount()
{
    var temp = head;
    var count = 0;
    while (temp != null)
    {
        count++;
        temp = temp.next;
    }
    return count;
}
push(1);
push(3);
push(1);
push(2);
push(1);
 
document.write("Count of nodes is " + getCount());
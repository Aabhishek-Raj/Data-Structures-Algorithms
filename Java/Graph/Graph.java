import java.util.*;

public class Graph
 {
    private Map<Integer, List<Integer>> map = new HashMap<>();

    private void addVertex(Integer data) {
        map.put(data, new ArrayList<>());
    }

    public void insert(Integer vertex, Integer edge, boolean isBidirectional) {
        if (!map.containsKey(vertex)) {
            addVertex(vertex);
        }

        if (!map.containsKey(edge))  {
            addVertex(edge);
        }
        map.get(vertex).add(edge);

        if (isBidirectional)  {
            map.get(edge).add(vertex);
        }

        map.get(vertex).add(edge);

        if(isBidirectional)   {
                map.get(edge).add(vertex);
        }
    }
}
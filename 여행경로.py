from collections import defaultdict

def solution(tickets):
    answer = []
    graph = defaultdict(list)
    for start, end in tickets:
        graph[start].append(end)
        
    for start in graph:
        graph[start].sort(reverse=True)
        
    result = []
    
    def dfs(e):
        while graph[e]:
            next_e = graph[e].pop()
            dfs(next_e)
            
        result.append(e)
        
    dfs("ICN")
    return result[::-1]



def solution(tickets):

    graph = {}
    
    for start, end in tickets:

        if start not in graph:
            graph[start] = []

        graph[start].append(end)
        

    for start in graph:
        graph[start].sort(reverse=True)
        
    result = []
    
    def dfs(airport):
        while airport in graph and graph[airport]:
            next_airport = graph[airport].pop()
            dfs(next_airport)
        result.append(airport)

    dfs("ICN")
    return result[::-1]
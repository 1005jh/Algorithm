def solution(n, results):
    wins = [set() for _ in range(n + 1)]   
    loses = [set() for _ in range(n + 1)]  

   
    for win, lose in results:
        wins[win].add(lose)
        loses[lose].add(win)

   
    for i in range(1, n + 1):  
        for loser in wins[i]:
            loses[loser].update(loses[i])
        for winner in loses[i]:
            wins[winner].update(wins[i])

    answer = 0
    
    for i in range(1, n + 1):
        if len(wins[i]) + len(loses[i]) == n - 1:
            answer += 1

    return answer
function solution(n, t, m, timetable) {
    var answer = '';
    const toMinutes = (time) => { 
        const [hour, minute] = time.split(":").map(Number); 
        return hour * 60 + minute; 
    };
    const toTimeString = (minutes) => { 
        const hour = Math.floor(minutes / 60); 
        const minute = minutes % 60; 
        return `${String(hour).padStart(2, "0")}:${String(minute).padStart( 2, "0" )}`; 
    };
    const crewTimes = timetable.map(toMinutes).sort((a, b) => a - b); 
    let crewIndex = 0;
    for (let shuttleIndex = 0; shuttleIndex < n; shuttleIndex++) { 
        const shuttleTime = 9 * 60 + shuttleIndex * t; 
        let boardCount = 0; 
        let lastBoardTime = 0;
        while (crewIndex < crewTimes.length && crewTimes[crewIndex] <= shuttleTime && boardCount < m ) {
            lastBoardTime = crewTimes[crewIndex]; 
            crewIndex++; 
            boardCount++; 
        }
        const isLastShuttle = shuttleIndex === n - 1; 
        if (isLastShuttle) { 
            if (boardCount < m) { 
                answer = shuttleTime; 
            } else { 
                answer = lastBoardTime - 1; 
            } 
        } 
    }
    return toTimeString(answer);
}
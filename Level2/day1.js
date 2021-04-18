// 기능 개발
// 재귀함수로 구현하지 않고 풀어보기..
let res = [];

function solution(progresses, speeds) {
    let statusList = progresses;
    let resList = [];
    let j=0;

    if(progresses.length == 0){
        return 0;
    }
    else{
        while(statusList[0] < 100){
            for(let i=0; i<speeds.length; i++){
                let status = speeds[i];
                statusList[i] += status
            }
            while(100 <= statusList[j] && j < speeds.length){
                resList.push(statusList[j])
                j++
            }
        }
        res.push(resList.length)
        solution(statusList.slice(j), speeds.slice(j))
    }
    return res
}

//구명보트
function solution(people, limit) {
    let answer = 0;
    let i = 0;
    let peopleLen = people.length;
    
    people = people.sort((a,b)=>b-a);
    
    while(i < peopleLen){
        let firstPeople = people[i];
        let secondPeople = people[peopleLen-1]
          
        if(firstPeople + secondPeople <= limit){
            peopleLen--        
        }
     
        answer++;
        i++;
    }
    
    return answer
}
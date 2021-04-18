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
// 체육복
function solution(n, lost, reserve) {
    let student = {};
    let res = 0;
    
//  모든 학생의 체육복 갯수를 1로 초기화
    for(let i=0; i<n; i++){
        student = {...student, [i+1]:1}
    }
    
    for (let i = 0; i < n; i++) {

        if(reserve[i]){  // 여벌의 체육복 가져온 학생은 +1
            student = {...student, [reserve[i]]:student[reserve[i]]+1}
        }
        
        if(lost[i]){     // 체육복을 잃어버린 학생은 -1
            student = {...student, [lost[i]]:student[lost[i]]-1}
        }
    }
        
    for (let i = 1; i <= n; i++) {
        if(student[i] == 0){ // 체육복이 없는 학생중
            if(student[i-1] == 2){  // 앞에 학생이 여벌의 체육복을 보유한 경우
                student = {...student, [i-1]:student[i-1]-1, [i]:student[i]+1}
            }
            else if(student[i+1] == 2){ // 뒤에 학생이 여벌의 체육복을 보유한 경우
                student = {...student, [i]:student[i]+1, [i+1]:student[i+1]-1}
            }
        }
    }
    
    for (let i in student){
        if(student[i]){
            res++
        }
    }
    return res
}


let submissions = [
    {name: "Jane", score: 95, date: 2020-01-24, passed: "true"},
    {name: "Joe", score: 77, date: 2018-05-14, passed: "true"},
    {name: "Jack", score: 59, date: 2019-07-05, passed: "false"},
    {name: "Jill", score: 88, date: 2020-04-22, passed: "true"},
];

//* add submission //*
function addSubmission(array, name, score, date){
        let addSubmission = {name: name, score: score, date: date};
            array.push(addSubmission);
                if(score >= 60) {
                    console.log("true");
            } else { 
                    console.log("false");
            }
    }
    addSubmission (submissions, "Bill", 100, 2020-01-01);
console.log(submissions);


//* delete submission by name //*
function deleteSubmissionByName(array, name) {
    array.forEach((s, index) => {
        if (s.name === name) {
            array.splice(index, 1);
            }
        })
    } 
console.log(submissions);


//* delete submission by index //*
function deleteSubmissionByIndex(array, index){
        array.forEach((s, index) => {
            if (s.index === index){
                array.splice(index,1);
            }
        })
        submissions.splice()
    } 
console.log(submissions);



//* edit submission //*
function editSubmissions(array, index, score){
        array.forEach((item, index) => {
    
        })
        submissions.splice()
    } 
console.log(submissions);



//* find submission by name //*
function findSubmissionByName(array, name){
    let submissionName = array[0];
        for(let c of array) {
            if (c.name === name) {
                name = c;
        }
    }
    return submissionName;
    }
console.log(findSubmissionByName(submissions));

//* find lowest score *//
function findLowestScore(array){
    let lowestScore = array[0];
        for(let c of array) {
            if (c.score < lowestScore.score) {
                lowestScore = c;
        }
    }
    return lowestScore;
    }
    
console.log(findLowestScore(submissions));

//* find average score - having trouble with this one *//
// function findAverageScore(array){
//     let averageScore = array[0];
//     for( i = 0; i < submissions.length; i++) {
//         total += submissions[i];
//     }
//     const avg = total / submissions.length;
// }
// console.log(findAverageScore(submissions));

//* filter passing grades *//
function filterPassing (array){
    let passingScore = array[0];
        for(let c of array) {
            if (c.score === passingScore.score) {
                passingScore = c;
        }
    }
    return passingScore;
    }
    
console.log(filterPassing(submissions));

//* filter 90+ scores *//
function filter90AndAbove (array){
    let ninetyAbove = array[0];
        for(let c of array) {
            if (c.score >= 90) {
                ninetyAbove = c;
        }
    }
    return ninetyAbove;
    }
    
console.log(filter90AndAbove(submissions));

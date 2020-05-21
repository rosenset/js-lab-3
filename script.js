let submissions = [
    { name: "Jane", score: 95, date: 2020 - 01 - 24, passed: true },
    { name: "Joe", score: 77, date: 2018 - 05 - 14, passed: true },
    { name: "Jack", score: 59, date: 2019 - 07 - 05, passed: false },
    { name: "Jill", score: 88, date: 2020 - 04 - 22, passed: true },
  ];
  
  //* add submission //*
  function addSubmission(array, name, score, date) {
    let addSubmission = {
      name: name,
      score: score,
      date: date,
      passed: score >= 60,
    };
    array.push(addSubmission);
  }
  addSubmission(submissions, "Bill", 100, 2020 - 01 - 01);
  console.log(submissions);
  
  //* delete submission by name //*
  function deleteSubmissionByName(array, name) {
    array.forEach((s, index) => {
      if (s.name === name) {
        array.splice(index, 1);
      }
    });
  }
  deleteSubmissionByName(submissions, "Bill");
  
  //* delete submission by index //*
  function deleteSubmissionByIndex(array, index) {
    array.forEach((s, index) => {
      if (s.index === index) {
        array.splice(index, 1);
      }
    });
    submissions.splice();
  }
  console.log(submissions);
  
  //* edit submission //*
  function editSubmissions(sArray, index, score) {
    sArray[index].score = score;
    sArray[index].passed = score >= 60;
  }
  editSubmissions(submissions, 1, 78);
  
  //         array.forEach((item, index) => {
  
  //         })
  //         submissions.splice()
  //     }
  // console.log(submissions);
  
  //* find submission by name //*
  function findSubmissionByName(array, name){
      let submissionName = array.find((sub) => sub.name === name);
      return submissionName;
      }
      console.log((findSubmissionByName(submissions, "Jane")));
  
  // return array.name === 'Jack'}
  // console.log(submissions.find(findSubmissionByName));
  
  //* find lowest score *//
  function findLowestScore(array) {
    let lowestScore = array[0];
    for (let c of array) {
      if (c.score < lowestScore.score) {
        lowestScore = c;
      }
    }
    return lowestScore;
  }
  
  console.log(findLowestScore(submissions));
  
  //* find average score - having trouble with this one *//
  function findAverageScore(array) {
    let sum = 0;
    for (let s of array) {
      sum += s.score; //* does not need to add to the array itself *//
    }
    average = sum / array.length;
    return average;
  }
  console.log(findAverageScore(submissions));
  
  //     let averageScore = array[0];
  //     for( i = 0; i < submissions.length; i++) {
  //         total += submissions[i];
  //     }
  //     const avg = total / submissions.length;
  // }
  // console.log(findAverageScore(submissions));
  
  //* filter passing grades *//
  function filterPassing(array) {
    let passingScore = array[0];
    for (let c of array) {
      if (c.score === passingScore.score) {
        passingScore = c;
      }
    }
    return passingScore;
  }
  
  console.log(filterPassing(submissions));
  
  //* filter 90+ scores *//
  function filter90AndAbove(array) {
    let ninetyAbove = array[0];
    for (let c of array) {
      if (c.score >= 90) {
        ninetyAbove = c;
      }
    }
    return ninetyAbove;
  }
  console.log(filter90AndAbove(submissions));
  
  let people = [
    { name: "jacob", age: 29, level: 100 },
    { name: "james", age: 29, level: 80 },
    { name: "jon", age: 30, level: 70 },
    { name: "marie", age: 26, level: 55 },
    { name: "michelle", age: 58, level: 67 },
    { name: "david", age: 60, level: 35 },
    { name: "alyssa", age: 29, level: 20 },
  ];
  
  function over40(array) {
    let filteredArray = array.filter((f) => f.age >= 40);
    return filteredArray;
  }
  // //     let filteredArray = [];
  // //     for(let f of array){
  // //         if (f.age >= 40){
  // //             filteredArray.push(f);
  // //         }
  // //     }
  // //     return filteredArray;
  // // }
  
  console.log(over40(people));
  
  
  //* filter to get names that satart with a j
  
  function startsWithJ(array){
      let jNames = "j";
      let filteredArray = array.filter(j => j.name.charAt(0) === jNames);
  
      // for (let j of array){
      //     if (j.name.charAt(0) === jNames){
      //         filteredArray.push(j);
      //     }
      // }
      return filteredArray;
  }
  console.log(startsWithJ(people));
  
  
  function between30And90(array){
      let filteredArray = array.filter(num => num.level >= 30 && num.level <= 90);
      return filteredArray;
  }
  console.log(between30And90(people));

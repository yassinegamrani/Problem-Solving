const students = [
  {
    id: 1,
    name: "Amine",
    field: "Development",
    grades: [15, 12, 18]
  },
  {
    id: 2,
    name: "Sara",
    field: "Design",
    grades: [17, 16, 14]
  },
  {
    id: 3,
    name: "Yassine",
    field: "Development",
    grades: [8, 10, 9]
  },
  {
    id: 4,
    name: "Meriem",
    field: "Marketing",
    grades: [14, 19, 16]
  },
  {
    id: 5,
    name: "Omar",
    field: "Development",
    grades: [11, 13, 15]
  }
];
console.log(calculateAverage('Sara'))
function calculateAverage(student){
    let compteur =0
    for(let i = 0;i<students.length;i++){
        if(students[i].name == student){
            for(let j =0;j<students[i].grades.length;j++){
                compteur += students[i].grades[j]
            }
            resultAVG=compteur / students[i].grades.length
            return resultAVG.toFixed(2)
        }
    }

    
}

function getStudentResult(student){
    let AvgResult=calculateAverage(student)
    if(AvgResult>=12){
        return 'Admis'
    }else{
        return 'Non Admis'
    }
}
console.log(getStudentResult("Sara"));
console.log('_______________________________')

function getStudentsByField(students, field){
    for (i=0;i<students.length;i++){
      if(students[i].field==field){
        console.log(students[i])
      }
    }
}
console.log(getStudentsByField(students, "Development"));
console.log('_______________________________')

function getSuccessfulStudents(students){
  let array=[]
  for (i=0;i<students.length;i++){
      let compteur=0
      let total=0
      for (let j =0;j<students[i].grades.length;j++){
        compteur+=students[i].grades[j]
      }
      total=compteur/students[i].grades.length
      console.log(total)
      if (total>=12){
        array.push(students[i])
      }

    }
    return array
}
console.log(getSuccessfulStudents(students))
console.log("_________________________-______");

function getBestStudent(students){
  let heighPoints = getSuccessfulStudents(students)
  for(let i =0 ;i<heighPoints.length;i++){
    for(let j = 0;j<heighPoints[i].grades.length;j++){
      
    }
  }
  
}
console.log(getBestStudent(students))

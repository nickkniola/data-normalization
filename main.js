function studentCourseNormalizer(courseInput) {
  // AA111 Spring 2021
  // AA111 or AA 111 or AA:111 or AA-111
  // Spring 2021 or 2021 Spring or S2021 or spring 21

// 1. Identify Department
  // separate 'courseInput' by first space -> ['AA111', 'Spring 2021']
  let departmentCourse = null;
  let yearSemester = null;
  let yearSemesterArr = null;
  let year = null;
  if (courseInput[5] === ' ') {
    // courseInput.substr(0, courseInput.indexOf(' '))
    departmentCourse = courseInput.substr(0, 5);
    yearSemester = courseInput.substr(6);
  } else if (courseInput[6] === ' ') {
    departmentCourse = courseInput.substr(0, 6);
    yearSemester = courseInput.substr(7);
  } else {
    throw new Error('Invalid Input');
  }
  // take first two characters from first string 'AA111' -> 'AA' and assign to 'department' variable
  const department = departmentCourse.substr(0, 2);

// 2. Identify Course Number
  // take remaining characters from first string after first two, replacing space : - to be an empty string -> '111'
  const courseString = departmentCourse.substr(2).replace(':', '').replace('-', '').replace(' ', '');
  // convert string to number -> 111 and set that to variable 'courseNumber'
  if (!parseInt(courseString)) {
    throw new Error('Invalid Input');
  }
  const courseNumber = parseInt(courseString);

// 3. Identify Year / Semester

  // see if the 'yearSemester' contains a space, if so, divide by that space into a new array -> ['Spring', '2021']
  if (yearSemester.includes(' ')) {
    yearSemesterArr = yearSemester.split(' ');
    console.log(yearSemesterArr);
    // console.log(yearSemesterArr[0].length);
     // see if first or 2nd string is a number when converted to a number
    if (parseInt(yearSemesterArr[0])) {
       // if it is a number, make sure it is 4 characters long, and set that to the variable 'year'
      if (yearSemesterArr[0].length === 4) {
        year = parseInt(yearSemesterArr[0])
      } else if (yearSemesterArr[0].length === 2) {
        // if 2 characters long concatenate '20' to 'xx' and set to variable 'year'
        year = parseInt('20' + yearSemesterArr[0]);
      }
    } else if (parseInt(yearSemesterArr[1])) {
      if (yearSemesterArr[1].length === 4) {
        year = parseInt(yearSemesterArr[1])
      } else if (yearSemesterArr[1].length === 2) {
        year = parseInt('20' + yearSemesterArr[1]);
      }
    }
  }
  console.log(year);
    // if it is not a number, find which season it is (could just be 'f') then set that to the variable 'semester'

// 4. Create object
  // return an object literal with department, number, year, semester

  // { Department: 'AA', Course Number: 111, Year: 2021, Semester: Spring }
  // return anObject;
}

// studentCourseNormalizer('AA111 S2021');
studentCourseNormalizer('AA 111 22 Spring');
studentCourseNormalizer('AA-111 Spring 2021');

function studentCourseNormalizer(courseInput) {
// 1. Identify Department
  // separate 'courseInput' into 2 separate substrings
  let departmentCourse = null;
  let yearSemester = null;
  let yearSemesterArr = null;
  let year = null;
  let semester = null;
  let semesterString = null;
  if (courseInput[5] === ' ') {
    departmentCourse = courseInput.substr(0, 5);
    yearSemester = courseInput.substr(6);
  } else if (courseInput[6] === ' ') {
    departmentCourse = courseInput.substr(0, 6);
    yearSemester = courseInput.substr(7);
  } else {
    throw new Error('Invalid Input');
  }
  const department = departmentCourse.substr(0, 2);

// 2. Identify Course Number
  // take remaining characters from first string, replacing space : - to be an empty string -> '111'
  const courseString = departmentCourse.substr(2).replace(':', '').replace('-', '').replace(' ', '');
  if (!parseInt(courseString)) {
    throw new Error('Invalid Input');
  }
  const courseNumber = parseInt(courseString);

// 3. Identify Year / Semester
  // see if the 'yearSemester' contains a space, if so, divide by that space into a new array -> ['Spring', '2021']
  if (yearSemester.includes(' ')) {
    yearSemesterArr = yearSemester.split(' ');
    if (parseInt(yearSemesterArr[0])) {
      if (yearSemesterArr[0].length === 4) {
        year = parseInt(yearSemesterArr[0])
      } else if (yearSemesterArr[0].length === 2) {
        year = parseInt('20' + yearSemesterArr[0]);
      }
      semesterString = yearSemesterArr[1].toLowerCase();
    } else if (parseInt(yearSemesterArr[1])) {
      if (yearSemesterArr[1].length === 4) {
        year = parseInt(yearSemesterArr[1])
      } else if (yearSemesterArr[1].length === 2) {
        year = parseInt('20' + yearSemesterArr[1]);
      }
      semesterString = yearSemesterArr[0].toLowerCase();
    } else {
      throw new Error('Invalid Input');
    }
  } else {
    if (parseInt(yearSemester[0])) {
      if (parseInt(yearSemester[3])) {
        year = parseInt(yearSemester.substr(0, 4));
        semesterString = yearSemester.substr(4).toLowerCase();
      } else {
        year = parseInt('20' + yearSemester.substr(0, 2));
        semesterString = yearSemester.substr(2).toLowerCase();
      }
    } else {
      if (!parseInt(yearSemester[3]) && yearSemester.length > 4) {
        if (yearSemester[5]) {
          semesterString = yearSemester.substr(0, 6).toLowerCase();
          year = parseInt(yearSemester.substr(6));
        } else {
          semesterString = yearSemester.substr(0, 4).toLowerCase();
          year = parseInt(yearSemester.substr(4));
        }
      } else {
        if (!parseInt(yearSemester[1])) {
          semesterString = yearSemester.substr(0, 2).toLowerCase();
          if (yearSemester.substr(2).length === 2) {
            year = parseInt('20' + yearSemester.substr(2));
          } else {
            year = parseInt(yearSemester.substr(2));
          }
        } else {
          semesterString = yearSemester.substr(0, 1).toLowerCase();
          if (yearSemester.substr(1).length === 2) {
            year = parseInt('20' + yearSemester.substr(1));
          } else {
            year = parseInt(yearSemester.substr(1));
          }
        }
      }
    }
  }
  if (semesterString !== null && semesterString.length >= 4) {
    switch (semesterString) {
      case 'fall':
        semester = 'Fall';
        break;
      case 'winter':
        semester = 'Winter';
        break;
      case 'spring':
        semester = 'Spring';
        break;
      case 'summer':
        semester = 'Summer';
        break;
    }
  } else if (semesterString !== null) {
    switch (semesterString) {
      case 'f':
        semester = 'Fall';
        break;
      case 'w':
        semester = 'Winter';
        break;
      case 's':
        semester = 'Spring';
        break;
      case 'su':
        semester = 'Summer';
        break;
    }
  }
// 4. Create object
  // return an object literal with department, number, year, semester
  return {
    Department: department,
    'Course Number': courseNumber,
    Year: year,
    Semester: semester
  }
}

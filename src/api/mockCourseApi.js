import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const courses = [
    {
        "id": 1,
        "title": "a",
        "author": "author1",
        "publication": "publication year 1",
        "genre": "genre1",
        "links": "link1",
        "linkAddress": "http://www.w3schools.com/html/html_links.asp"
    },

    {
        "id": 2,
        "title": "title2",
        "author": "author2",
        "publication": "publication year 2",
        "genre": "genre2",
        "links": "link2",
        "linkAddress": "http://www.w3schools.com/html/html_links.asp"
    },

    {
        "id": 3,
        "title": "title3",
        "author": "author3",
        "publication": "publication year 3",
        "genre": "genre3",
        "links": "link3",
        "linkAddress": "http://www.w3schools.com/html/html_links.asp"
    },

    {
        "id": 4,
        "title": "title4",
        "author": "author4",
        "publication": "publication year 4",
        "genre": "genre4",
        "links": "link4",
        "linkAddress": "http://www.w3schools.com/html/html_links.asp"
    },

    {
        "id": 5,
        "title": "title5",
        "author": "author5",
        "publication": "publication year 5",
        "genre": "genre5",
        "links": "link5",
        "linkAddress": "http://www.w3schools.com/html/html_links.asp"
    }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
  debugger;
  return replaceAll(course.title, ' ', '-');
};

class CourseApi {
  static getAllCourses() {
    debugger;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], courses));
      }, delay);
    });
  }

  static saveCourse(course) {
    debugger;
    course = Object.assign({}, course); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCourseTitleLength = 1;
        if (course.title.length < minCourseTitleLength) {
          reject(`Title must be at least ${minCourseTitleLength} characters.`);
        }

        if (course.id) {
          const existingCourseIndex = courses.findIndex(a => a.id == course.id);
          courses.splice(existingCourseIndex, 1, course);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          course.id = generateId(course);
          course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
          courses.push(course);
        }

        resolve(course);
      }, delay);
    });
  }

  //.....
  static searchCourse(query) {
    debugger;
    const foundBooks = []; 

    for(var i=0;  i<courses.length; i++) {

            for (var j in Object.keys(courses[i])) {
                 var prop = Object.keys(courses[i])[j];  
                if (courses[i][prop]=== query) {
                    foundBooks.push(courses[i]); 
                }
            }
        }



    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], foundBooks));
      }, delay);
    });

  }

  
}

export default CourseApi;

var bio = {
    "name": "Ali Tuhaishi",
    "role": "Business System Analyst",
    "contacts": {
        "email": "tuhaishi@gmail.com",
        "mobile": "+966536384155",
        "github": "tuhaishi",
        "linkedIn": "tuhaishi",
        "location": "Khobar, Saudi Arabia"
    },
    "biopic": "images/me.png",
    "welcomeMessage": "Hi, this is me Ali Tuhaishi I'm a Business System Analyst at Saudi Aramco. I'm always looking to learn more and more about technology, right now I'm working to develop my skills in front end web development with Udacity Nanodegree program.",
    "skills": ["PHP", "Java", "HTML", "CSS", "JS", "SQL"]
};

var work = {
    "jobs": [
        {
            "employer": "Saudi Aramco",
            "title": "Business System Analyst",
            "location": "Dhahran, Saudi Arabia",
            "dates": "October 2016 - Present",
            "description": "Currently I'm working as Business System Analyst in my department responsible for studying and analysing the existing systems and gather the required information to upgrade these systems"
		},

        {
            "employer": "Mentor Graphics Corporation",
            "title": "Software Development Intern",
            "location": "Wilsonville, OR, USA",
            "dates": "July 2015 - August 2015",
            "description": "I joined Mentor Graphic as a summer intern student from University of Dammam, during my 10 weeks at Mentor Graphics I worked " + "on a C++ project for analysing IC chips structure and compare it against the the logical design for verification purpose"
		}
	]
};
//TODO here
var education = {
    "schools": [
        {
            "name": "University of Dammam",
            "dates": "2011 - 2016",
            "location": "Khobar, Saudi Arabia",
            "degree": "B.Sc. in Computer Science",
            "majors": ["Computer Science"],
            "url": "www.uwindsor.ca"
		}

	],
    onlineCourses: [
        {
            'title': 'Forent End Dev. Nanodegree',
            'school': 'Udacity',
            'dates': 'july 2017',
            'url': 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
   }
  ]
};

var projects = {
    "projects": [
        {
            "title": "Portfilio",
            "dates": "July 2017 - August 2017",
            "description": "Created an online plain potfilio page as part of my Front-End Web Developement " +
                "Nanodegree tasks.",
            "images": ["images/portfilio.png"],
            "url": "https://github.com/Tuhaishi/portfilio"
		}
	]
};

bio.display = function () {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

    var formattedContactInfo = [];
    formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
    formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
    formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
    formattedContactInfo.push(HTMLlinkedIn.replace("%data%", bio.contacts.linkedIn));
    formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMsg);



    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);

        for (var i = 0, len = bio.skills.length; i < len; i++) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);

            $('#skills').append(formattedSkills);
        }
    }

    for (var k in formattedContactInfo) {
        $("#topContacts").append(formattedContactInfo[k]);
        $("#footerContacts").append(formattedContactInfo[k]);
    }
};
bio.display();

work.display = function () {

    if (work.jobs.length > 0) {
        for (var i = 0, len = work.jobs.length; i < len; i++) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;

            $('#workExperience').append(HTMLworkStart);
            $('.work-entry:last').append(formattedEmployerTitle);
            $('.work-entry:last').append(formattedDates);
            $('.work-entry:last').append(formattedLocation);
            $('.work-entry:last').append(formattedDescription);
        }
    }
};

work.display();


projects.display = function () {
    if (projects.projects.length > 0) {
        for (var i = 0, iLen = projects.projects.length; i < iLen; i++) {
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

            $('#projects').append(HTMLprojectStart);
            $('.project-entry:last').append(formattedTitle);
            $('.project-entry:last').append(formattedDates);
            $('.project-entry:last').append(formattedDescription);

            for (var j = 0, jLen = projects.projects[i].images.length; j < jLen; j++) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);

                $('.project-entry:last').append(formattedImage);
            }
        }
    }

};

projects.display();

education.display = function () {
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
        for (var i in education.schools) {

            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);

            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);
        }
        if (education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for (i in education.onlineCourses) {
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                $(".education-entry:last").append(formattedOnlineDates);
                $(".education-entry:last").append(formattedOnlineURL);
            }
        }

    }
};

education.display();





$("#mapDiv").append(googleMap);

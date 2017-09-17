var bio = {
    "name": "Ali Tuhaishi",
    "role": "Business System Analyst",
    "contacts": {
        "email": "tuhaishi@gmail.com",
        "github": "tuhaishi",
        "linkedIn": "tuhaishi",
        "location": "Khobar, Saudi Arabia"
    },
    "picture": "images/me.png",
    "welcomeMessage": "Hi, this is me Ali Tuhaishi I'm a Business System Analyst at Saudi Aramco. I'm always looking to learn more and more about technology, right now I'm working to develop my skills in front end web development with Udacity Nanodegree program.",
    "skills": ["PHP", "Java", "HTML", "CSS", "JS", "SQL"]
};

var work = {
    "jobs": [
        {
            "employer": "Saudi Aramco",
            "title": "Business System Analyst",
            "location": "Dhahran, Saudi Arabia",
            "datesWorked": "October 2016 - Present",
            "description": "Currently I'm working as Business System Analyst in my department responsible for studying and analysing the existing systems and gather the required information to upgrade these systems"
		},

        {
            "employer": "Mentor Graphics Corporation",
            "title": "Software Development Intern",
            "location": "Wilsonville, OR, USA",
            "datesWorked": "July 2015 - August 2015",
            "description": "I joined Mentor Graphic as a summer intern student from University of Dammam, during my 10 weeks at Mentor Graphics I worked " + "on a C++ project for analysing IC chips structure and compare it against the the logical design for verification purpose"
		}
	]
};

var education = {
    "schools": [
        {
            "name": "University of Dammam",
            "datesAttended": "2011 - 2016",
            "location": "Khobar, Saudi Arabia",
            "degree": "B.Sc. in Computer Science",
            "major": "Computer Science",
            "url": "www.uwindsor.ca"
		}

	]
};

var projects = {
    "projects": [
        {
            "title": "Portfilio",
            "datesWorked": "July 2017 - August 2017",
            "description": "Created an online plain potfilio page as part of my Front-End Web Developement " +
                "Nanodegree tasks.",
            "images": ["images/portfilio.png"],
            "url": "https://github.com/Tuhaishi/portfilio"
		}
	]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLlinkedIn.replace("%data%", bio.contacts.linkedIn));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    for (i in bio.skills) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    }
}

for (i in formattedContactInfo) {
    $("#topContacts").append(formattedContactInfo[i]);
    $("#footerContacts").append(formattedContactInfo[i]);
}


function displayWork() {

    if (work.jobs.length > 0) {

        $("#workExperience").append(HTMLworkStart);

        for (i in work.jobs) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

            var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

            $(".work-entry:last").append(formattedEmployerWorkTitle);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedDatesWorked);
            $(".work-entry:last").append(formattedWorkDescription);
        }

    }

}

displayWork();


projects.display = function () {
    if (projects.projects.length > 0) {
        for (i in projects.projects) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);

            for (img in projects.projects[i].images) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
                $(".project-entry:last").append(formattedProjectImage);
            }


        }
    }
}

projects.display();

education.display = function () {
    if (education.schools.length > 0) {
        for (i in education.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);

            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);
        }

    }
}

education.display();





$("#mapDiv").append(googleMap);

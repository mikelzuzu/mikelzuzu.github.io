//lesson1
/*var formattedName = HTMLheaderName.replace("%data%", "Mikel");
$("#header").append(formattedName);
var formattedRole = HTMLheaderRole.replace("%data%", "Master Student");
$("#header").prepend(formattedRole);
*/
/*var bio = {
	"name" : "Mikel",
	"role" : "student",
	"contact_info" : "mikelzuzu@gmail.com",
	"img" : "http://www.topdreamer.com/wp-content/uploads/2013/03/Interesting-Ideas-Fruit-and-Vegetable-Art-25.jpg"
}

var formattedBioName = HTMLheaderName.replace("%data%", bio.name);
var formattedBioRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioContact = HTMLemail.replace("%data%", bio.contact_info);
var formattedBioImg = HTMLbioPic.replace("%data%", bio.img);

$("#header").append(formattedBioName);
$("#header").append(formattedBioRole);
$("#header").append(formattedBioContact);
$("#header").append(formattedBioImg);
*/


var bio = {
	"name" : "Mikel Zuzuarregui",
	"role" : "Research Student",
	"contacts" : {
		"mobile" : "085-821-2480",
		"email" : "mikelzuzu@gmail.com",
		"github" : "mikelzuzu",
		"location" : "Athlone"
	},
	"wellComeMessage" : "Hello everyone, I hope you enjoy my page",
	"skills" : ["Ability to work in teams", "Communication skills", "Serious", "Responsible"],
	//"bioPic" : "http://www.topdreamer.com/wp-content/uploads/2013/03/Interesting-Ideas-Fruit-and-Vegetable-Art-25.jpg"
	"bioPic" : "images/fry.jpg"
}

var education = {
	"schools" : [
	{
		"school" : "EHU/UPV",
		"location" : "San Sebastian",
		"degree" : "Masters",
		"majors" : ["CS"],
		"years" : "5",
		"url" : "http://www.ehu.es",
	},
	{
		"school" : "AIT",
		"location" : "Athlone",
		"degree" : "BAchelors",
		"majors" : ["CS"],
		"years" : "4",
		"url" : "http://www.ait.ie",
	}
	],
	"onliceCourses" : [
	{
		"title" : "nanodegree",
		"school" : "udacity",
		"dates" : 2014,
		"url" : "http://www.udacity.com"
	}
	]
}
var work = {
	"jobs" :  [
	{
		"employer" : "AIT",
		"title" : "Master Student",
		"location" : "Athlone",
		"date" : "01 September 2013 - Future",
		"Description" : "Research around recommender systems"
	},
	{
		"employer" : "Ericsson LMI",
		"title" : "Trainee Engineer",
		"location" : "Athlone",
		"date" : "15 September 2013 - Future",
		"Description" : "Research around recommender systems"
	},
	{
		"employer" : "Zitu",
		"title" : "Solution architecture",
		"location" : "San Sebastian",
		"date" : "01 July 2007  – 26 September 2009",
		"Description" : "Build a system to manage shops, restaurants and so on"
	}]
};
var project = {
	"projects" : [
	{
		"title" : "Recommender system",
		"dates" : "March 2014 - Future",
		"description" : "query suggestion area",
		"images" : [
			"images/hue.png",
			"http://www.poolparty-software.com/wp-content/uploads/2013/03/recommender_systems.jpg"
		]
	},
		{
		"title" : "Antenna tilt",
		"dates" : "December 2013  – March 2014",
		"description" : "Introduce percepton based machine learning",
		"images" : [
			"http://www.proxim.com/scripts/calculators/tiltangle.jpg",
			"http://pathloss40.files.wordpress.com/2009/11/23.jpg"
		]
	}
	]
};

var formattedBioName = HTMLheaderName.replace("%data%", bio.name);
var formattedBioRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedBioMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedBioLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedBioGit = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedBioImg = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.wellComeMessage);

$("#header").prepend(formattedBioRole);
$("#header").prepend(formattedBioName);
$("#header").append(formattedBioImg);
$("#header").append(formattedWelcomeMsg);

$("#topContacts").append(formattedBioMobile);
$("#topContacts").append(formattedBioEmail);
$("#topContacts").append(formattedBioLocation);
$("#topContacts").append(formattedBioGit);

/*if (bio.skills.length > 0){
	var formattedBioSkills = HTMLskills.replace("%data%", bio.skills);
	$("#header").append(HTMLskillsStart);
	$("#skills").append(formattedBioSkills);
}; */

if (bio.skills.length > 0){
	var formattedBioSkills;
	$("#header").append(HTMLskillsStart);
	for (var i=0; i<bio.skills.length; i++) {
		formattedBioSkills = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedBioSkills);
	}
};

function displayWork() {
  var formattedEmployer;
  var formattedJobTitle;
  var formattedJobLocation;
  var formattedJobDate;
  var formattedJobDescription;
  for (var x in work.jobs) {
  	formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[x].employer);
  	formattedJobTitle = HTMLworkTitle.replace("%data%", work.jobs[x].title);
  	formattedJobLocation = HTMLworkLocation.replace("%data%", work.jobs[x].location);
  	formattedJobDate = HTMLworkDates.replace("%data%", work.jobs[x].date);
  	formattedJobDescription = HTMLworkDescription.replace("%data%", work.jobs[x].Description);
  	$("#workExperience").append(HTMLworkStart);
  	$(".work-entry:last").append(formattedEmployer+formattedJobTitle);
  	//$(".work-entry:last").append(formattedJobTitle);
  	$(".work-entry:last").append(formattedJobDate);   
  	$(".work-entry:last").append(formattedJobLocation); 
  	$(".work-entry:last").append(formattedJobDescription); 
  }
}

displayWork();

$(document).click(function(loc) {
  // your code goes here
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x, y);
});


function locationizer(works) {
    var locations = new Array();
    // other way to create empty array
    // var locations = [];
    for (jobs in works.jobs){
        locations.push(works.jobs[jobs].location);
    }
    return locations;
}

// Did locationizer() work? This line will tell you!
console.log(locationizer(work));


function inName() {
	var internationalizedName1 = bio.name.trim().split(" ")[0].charAt(0).toUpperCase() + bio.name.split(" ")[0].slice(1);
	var internationalizedName2 = bio.name.trim().split(" ")[1].toUpperCase();
	return internationalizedName1 + " " + internationalizedName2
}

$('#main').append(internationalizeButton);
//console.log(inName());






projects.display = function () {
	var formattedProjectTitle;
	var formattedProjectDates;
	var formattedProjectDescription;
	var formattedProjectImages;
	for (var x in project.projects) {
		formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.projects[x].title);
		formattedProjectDates = HTMLprojectDates.replace("%data%", project.projects[x].dates);
		formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.projects[x].description);
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDates);  
		$(".project-entry:last").append(formattedProjectDescription); 
		if (project.projects[x].images.length > 0){
			for (var y in project.projects[x].images) {
				formattedProjectImages = HTMLprojectImage.replace("%data%", project.projects[x].images[y]);
				$(".project-entry:last").append(formattedProjectImages);
			}
		}
		  
	}
};
projects.display();

$("#mapDiv").append(googleMap);


//to catch all li elements. Anyway is better to use class or id
listElements = $('li');// your code goes here!
    
console.log(listElements);
'use strict';

var _ = require('lodash');

// Get list of sections
exports.index = function(req, res) {
  res.json([
  {
  	name : 'Cleaning the Shelter',
  	info : 'This is an essential part of maintaining a healthy living environment for the animals while they are in our care. The cleaning/bleaching of the pens, feeding, and watering of the animals is also the most time-consuming duty for volunteers over the course of the year, as it is done each and every day.',
  	hide : true
  },
  {
  	name: "Fundraising",
  	info: "The only source of revenue for the Humane Society is through adoption fees, donations, and fundraising. We have a variety of fundraising events throughout the year that are fun and enjoyable. There's the Walk-a-Thon, our Silent Auction, annual yard sale, and numerous other events throughout the year.",
  	hide : true
  },
  {
  	name: "Animal Transport" ,
  	info: "All of the animals that come to the MCHS are examined by area Veterinarians, vaccinated, spayed, neutered and provided with any other necessary medical care. We are always in need of responsible adults to transport the animals to and from the Vet offices. We have plenty of animal carriers to use, so you don't need to worry about getting that new vehicle dirty!",
  	hide : true
  },
  {
  	name: "Adoption Counseling",
  	info: "During our open animal viewing hours, volunteers are present to assist the prospective adopters with questions and to show them the various animals available.",
  	hide : true
  },
  {
  	name: "Building Maintenance",
  	info: "Just as with any other building structure, our Shelter building needs regular maintenance and upkeep. There's painting, lawn mowing, snow removal, weatherproofing and a variety of other maintenance duties that need to be done.",
  	hide : true
  },
  {
  	name: "Community Outreach",
  	info: "Would you enjoy talking to a 3rd grade class about animals? Would you be able to provide some advice to someone who is having training problems with their dog? We get numerous requests such as these each year, and it is a great way to help educate, entertain and inform the public about animals.",
  	hide : true
  },
  {
  	name: "Socializing and Exercising the Animals",
  	info: "The dogs and cats at the Shelter do get regular exercise, but would always like to have more! Socializing and training the Shelter animals makes them healthier, happier, and best of all, more appealing to potential adopters.",
  	hide : true
  }]);

};
/* About page */
var title1 = document.querySelector('#title-1');
var title2 = document.querySelector('#title-2');
var historyTitle = document.querySelector('#history-title');
var historyDescription = document.querySelector('#history-description');
var jobTitle = document.querySelector('#job-title');
var jobDescription = document.querySelector('#job-description');
title1.style.opacity = "0";
title2.style.opacity = "0";
historyTitle.style.opacity = "0";
historyDescription.style.opacity = "0";
jobTitle.style.opacity = "0";
jobDescription.style.opacity = "0";

var options = {
  rootMargin: '0px',
  threshold: 0.3
}

function callback(entries, observer) {
  entries.forEach(function(entry) {
    switch (entry.target.id) {
      case "title-1":
        if (entry.intersectionRatio > 0) {
          title1.style.opacity = "1";
          title1.className += " animated fadeInDown";
          // Stop observing target
          observer.unobserve(entry.target);
        }
        break;
      case "title-2":
        if (entry.intersectionRatio > 0) {
          title2.style.opacity = "1";
          title2.className += " animated fadeInUp";
          // Stop observing target
          observer.unobserve(entry.target);
        }
        break;
      case "history-title":
        if (entry.intersectionRatio > 0) {
          historyTitle.style.opacity = "1";
          historyTitle.className += " animated slideInLeft";
          // Stop observing target
          observer.unobserve(entry.target);
        }
        break;
      case "history-description":
        if (entry.intersectionRatio > 0) {
          historyDescription.style.opacity = "1";
          historyDescription.className += " animated slideInRight";
          // Stop observing target
          observer.unobserve(entry.target);
        }
        break;
      case "job-title":
        if (entry.intersectionRatio > 0) {
          jobTitle.style.opacity = "1";
          jobTitle.className += " animated slideInLeft";
          // Stop observing target
          observer.unobserve(entry.target);
        }
        break;
      case "job-description":
        if (entry.intersectionRatio > 0) {
          jobDescription.style.opacity = "1";
          jobDescription.className += " animated slideInRight";
          // Stop observing target
          observer.unobserve(entry.target);
        }
        break;
    }
  });
}    
        
// Create an intersection observer
var observer = new IntersectionObserver(callback, options);

// Start observing 
observer.observe(title1);
observer.observe(title2);
observer.observe(historyTitle);
observer.observe(historyDescription);
observer.observe(jobTitle);
observer.observe(jobDescription);
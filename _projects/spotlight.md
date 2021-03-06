---
layout: project
title: Spotlight
subtitle: Social awareness forum, with tagging and notifications for users.
image: https://i.imgur.com/uKXYqeQ.png
heroku: https://intense-shelf-36393.herokuapp.com/
tech: AngularJS, Bulma, Ruby on Rails 5, Angular Messages, Angular UI Router, Satellizer, Angular Sanitizer, Checklist Model
github: https://github.com/maugeya/Project-4-api
github_front: https://github.com/maugeya/Project-4-frontend
---

Social awareness is really important to me. I wanted to create a forum that users could use to share information about what issues are important to them. I grouped up with two others to create Spotlight.

![Index page](http://i.imgur.com/wGakiYQ.png "Index Page")

We used Ruby on Rails to develop the back end, using Postgres SQL as a database and AngularJS to provide the views for the front end. Our main feature on the site, revolved around users being able to tag each other in comments and receive notifications when this happened.

Using a directive to provide a comment box that searched for a RegEx to scan for an ‘@’ and then created functions in the Model and Seriallizer to handle sending a notification to a user and allowing them to access the comment, which would then update it to be read once it had been views. Once again as a group we worked with Balsamiq to create wireframes, created ER diagrams and then used Trello to organise our work for the week.

![Post show page](http://i.imgur.com/0JGwklb.png "Post show page")

I worked on using a filterFilter function from Angular to be able to filter the posts that a user will see by the topics that they have tagged as of interest to them. I spent time on the styling to appeal to our demographic of 14+. As a group, we settled on a Bulma framework to create a friendly looking forum with a clean finish on design.

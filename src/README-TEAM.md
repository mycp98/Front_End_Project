# BNTA Client Side Project

### Java Chaperones- REACT/JS Front End App
Authors - Marcy, Abdi, Cristian, Michelle, Aoife 

### What is JavaChaperones?

Let’s hear it from the team who made it (Robyn, Andrew, Alimaa and Adib.)

“This is an API using java that stores activities available in London. Users can book themselves on to activities which guides run. We have 4 packages for guides, activities, users and venues. Guides and venues are assigned to activities, which users can book on to. All packages can perform basic CRUD functions. Some specialist functions include using the join table, bookings to filter the activities that are cancelled and active. Returning all a user's bookings. Returning all a guide's assigned activities. Removing a user from a booking.
Technologies used for this were Spring boot, Java, postgresQL, postico and postman.
This project was motivated by a desire to have in-person social activities, aiming to provide inspiration.”


## How did we make a front end for JavaChaperones?

We used  Javascript, HTML, CSS and the React framework for this project. 
What were we thinking our finished project would look like?
Having used websites like Groupon, Eventbrite and other event-booking sites, we had a rough idea of what we would need as an end-user of a product like this one. 
However, we also had to take care to work within the confines of the functionality provided by the back-end, as if we tried to implement something that was not supported (for example, the end-points weren’t provided) it would be very difficult to make in React. 

### We decided our MVP would look something like the following:
Using components and containers within React 
HTML elements with accessibility-friendly features 
Some form of user select or user login, using data coming from the database 
Show the full list of available activities 
A user can show activities they’re currently booked on, book themselves to a new activity, and cancel their booking on an activity 
## Some nice-to-have features that were mentioned in the initial wireframe included:
A search function - so important for any booking site!
Full user authentication (I.e. passwords)
Additional functionality for guides and venues (e.g a guide can login, and rather than book activity, they can see what guests will attend the activities they are hosting)
Dynamic information display e.e. scrolls, collapsible content, etc. 
Setup and Instructions for using the Project
Setup for the back-end (courtesy of the Java Chaperones back-end team)
Fork the Repository from git@github.com:RobynGar/Java-Chaperones.git
Clone your forked repository
Open in your java IDE
Go to the db setup SQL file
Copy the SQL APART FROM the drop tables
Create a database called chaperones and paste the SQL queries.

### Setup for the Front End React app
Project Clone Link: git@github.com:mycp98/Front_End_Project.git
In your Front-End project file, install node modules (run the command in terminal) rpm-install
Sort out CORS (explanation below)
Run npm-start to begin *


*This command runs the app in the development mode.Open http://localhost:3000 to view it in your browser.
The page will reload when you make changes.You may also see any lint errors in the console.

[picture of what it should look like ]
### A Quick Note on Branches
Once you have the project cloned in your local machine, and your database set up, you should test the build.
We used a few branches for the development of this project. The important ones are develop and main. 
Main branch is the production-ready code base. It will be stable and working but may not include shiny new features we've added, that are still in build or testing phases. If you want to check out these new features, feel free to run develop - but be aware that it may not be fully functional!
Main branch - On successful run of the Main class, your IDE should look something like this.
[picture here ]

### Using the Site
Hopefully our React app will be user-friendly enough that you don’t need to add too many questions! However if in doubt, see a quick run-down below.

### Logging in
The first thing you’ll see on loading the app is the main screen. From here, you can see all the activities available, and if you wish, use the search functionality to filter activities by name. 
[pic]
However, we’d recommend you login using the user details. It’s set to login with an email address and phone number as a password. 
You can’t currently add a user in this version, so use the credentials in the database which are pre-filled for you - there are X users in total all with dummy data. 
[picture]
Using our dummy data, let’s take the user Colin. He’s a good guinea pig. 
colin@gmail.com
“Phone number here”

### Viewing your Bookings 
Once you’ve logged in, you’ll see a box pop up which will show your booked activities. They’ll be at least one in the database for every user, if you’re using the data supplied with the Java API - everyone is booked into the VIP Penguin Experience (and seriously, why wouldn’t you want to go to that?)

## Booking and Cancelling Activities
Once you’ve got the list of your booked activities, you can cancel them with the button which says ‘cancel activity’, and that will remove you - however, be aware it will only update when you login. 
Don't worry if you mis-click and try to book an activity you’re already booked onto - the back-end Java app prevents this. 

### Quirks of the System 

DONT DO 
The following… 


### Extensions and Features Coming Soon, Maybe…

~~~~ hakuna matata.  ~~~


## Thanks for reading this guide!

We hope you liked our app. This was our first experience building on top of an API that we didn’t make originally. 
We learned a lot about how to add to others’ work, the challenges that come from not having control over some of the functionality on the back-end, and about using States, Props and Hooks in React especially. 

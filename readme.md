# Variable Fitness Nutrition Recommendation Engine

We created a variable user fitness nutrition recommendation engine that gives personalized nutrition suggestions based on user health profile and their fitness goals.


## URL


The deployed application can be access at

[URL](https://github.com/harold-fv/project-setup/deployments/activity_log?environment=github-pages)


## Description


The personalized nuutrition recommendation engine is powered by 4 primary components.

A User health info input forms and a fitness goal selector that feeds the calculators for Bsaal Metabolic Rate (BMR) and BMI calculators
B Two API functions to call for and receive respones from two APIS (Nutritionix and Edamam)
C Searchbox and foodlog that allows the user to send their search query to the APIs to receive nutritional data in response
D A modal to display recommendations based on values outputted my BMR and BMI calculators

## User Story


AS A fitness motivated individual
I WANT to see personalized recommmendation based on my biometric data
SO THAT I can get help reaching my fitness goals


## Acceptance Criteria

GIVEN a webpage meets accessibility standards

WHEN I input my height, weight, gender, age and click submit
THEN it is stored in a variable

\WHEN I visit the deployed page or liveserver
THEN there is basic CSS styling

WHEN User submits health info
THEN my BMI and percentile is shown

WHEN User submits health info
THEN my BMR in calories per day is shown

WHEN user submits info
THEN I am presented with three fitness goals to choose from

WHEN I select a fitness goal type (weight loss, toning, strength training)
THEN the baseBMR is adjusted per selected fitness goal and the adjusted value is stored in var = targetBMR with:

if weight loss goal selected, targetBMR is < baseBMR
If toning goal is selected, targetBMR is = baseBMR
If strength training goal is selected, targetBMR is > baseBMR

WHEN I have completed all USER INPUTS
THEN the relevant data is formatted, packaged and stored to make the appropriate API call with

WHEN the API responds with a few meals and foods that fit the criteria
THEN the total sum of calories from suggested meals displayed is equal (or roughly equal) to the fitness goal adjusted
var targetBMR

WHEN the API response with suggested meals and food are received
THEN they are sorted and displayed so that the proportion of calories from protein, carbohydrates and fat are aligned with user health and fitness goals.

When the user submits a search query
Then a result log card is generated above the search input box, that displays the food name and total calories

WHEN a recommendation is appropriate
THEN it is displayed in the modal


## Screenshots


![image](Screenshot1)



## Mock-Up


![mockup](https://files.slack.com/files-tmb/T04J3A26NHK-F0507DJJP7U-992e0e9964/img_0406_720.jpg)

The following image shows the web application's appearance and functionality:



> **Note**: This layout is designed for desktop viewing, so you may notice that some of the elements don't look like the mock-up at a resolution smaller than 768px. Eventually you'll learn how to make elements responsive so that your web application is optimized for any screen size.

## Wireframe / USerflow

![Wireframe](https://files.slack.com/files-tmb/T04J3A26NHK-F050KP0EUBB-290939cdd2/img_3633_720.jpg)

## Usage


To see this website go to the github pages deployment associated with this repo

## Authors and acknowledgment


Michael Novas

Shabab Chowdhury

Harold Gonzales

Anthony Ayala Arrelano

## License


MIT License

## Project status


Completed


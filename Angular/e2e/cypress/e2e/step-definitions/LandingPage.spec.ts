import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import { Navigate} from "../page-obj/navigate";
Given(/^the user is on the landing page$/, () => {
	cy.visit("http://localhost:4200/dashboard");
});

Then(/^the user shall see the employee dashboard$/, () => {
	Navigate.employeeDashboard();
});

Then(/^the user shall see the top 4 Heroes displayed$/, () => {
	Navigate.listOfTopHeros();
});

Then(/^the user shall select a hero from the dashboard and see the hero details displayed$/, () => {
	Navigate.viewHeroDetails();
});

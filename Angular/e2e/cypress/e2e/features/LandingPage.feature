Feature: LandingPage Functionality

    This Feature tests login scenarios

    Background:
        Given the user is on the landing page

    Scenario: As a toh user, I want to navigate to landingpage in order to see the dashboard
        Then the user shall see the employee dashboard
        Then the user shall see the top 4 Heroes displayed
        Then the user shall select a hero from the dashboard and see the hero details displayed


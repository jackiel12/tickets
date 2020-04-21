# Tickets

## Overview

This is a simple Page built using React to display ticketing information from a fixed dataset "eventlist.js".

Some features of the page.
 - Filtering feature - Based on the React component setup, extra filters can be added by using the dropdown reusable component which takes in a list of data and renders it in a dropdown select element.
 - ToolTips - hovering over the ticket button on each event tile will cause a tooltip to appear showing further information about the item



## Instructions on how to run this application

Run the following commands in the terminal

- npm install
- npm start

Then, navigate to localhost:3000 on your browser

For the dev environment run **_npm run dev_**

## Design Decisions

The page was built using React. While the current use cse is small, (i.e. one page, one artist, one filter), there are elements on this page that are and would be repeated in the case that the application is required to grow.

For example, each event is required to be displayed on a card, with different information but the same structure. Using React, the logic and functionality for this card can be organized together into one component and easily applied repeatedly in the larger application.

For even futher reusability, I have created a DropDown component that takes in data and creates a Dropdown selection for it. The benefit of using React here is that additional filters an be added by simply using this dropdown component and feeding in different data sources. Traditionally, a separate selection element may need to be manually typed out with different data feeding into it which may require a lot of repeated and similar code. With React, you can have a reusable structure that can be plugged in to any data source in much more flexible ways in a larger app.
# COSC ReactJS and FastAPI Bootcamp - Assignment 2

## Overview

The junior developers at COSC were tasked with creating a website for COSC merchandise to showcase the launch of their new products. The project was developed using ReactJS. However, during the testing phase, senior developers identified several issues with the website. In this assignment, you will assist the junior developers in resolving these issues by applying fundamental concepts of ReactJS.

## Objective for This Assignment

The primary objective of this assignment is to assist the junior developers in addressing and resolving the issues identified with the COSC merchandise website. The following errors have been noted:

- Certain components are not being rendered.
- Routing functionality is not implemented.
- Props are not being passed from the login page to the shop page.
- Conditional rendering to display the username when logged in is missing.

Your task is to rectify these errors. Detailed descriptions of each issue are provided below.

## Tasks

 **Repository Setup:**
   - Download or clone the repository and work on the assigned tasks. Ensure that all modifications are made within the provided files.
   - Once the repository is downloaded or cloned, execute the following command to install the dependencies:
     ```
     npm install
     ```
   - Subsequently, start the development server using the command:
     ```
     npm run dev
     ```

1. **Missing Header Component:**
   - The senior developers at COSC have identified that the header component is missing, as it is not being rendered in `App.jsx`. To address this issue:
     - Import the header component into `App.jsx` and ensure that it is included in the component tree.

2. **Missing Routing Functionality:**
   - Currently, only the homepage is being displayed. However, additional pages, specifically the shop and login pages, are required. To resolve this:
     - Implement routing functionality using the `react-router-dom` library to enable navigation to the shop and login pages.

3. **Implement Username State Management:**
   - The username from the login page is not being passed to the shop page. To resolve this:
     - Use `useState` in `App.jsx` to store the username and pass it as a prop to the shop page.

4. **Conditional Rendering for Username Display:**
   - The shop page lacks a personalized welcome message. To address this:
     - Implement conditional rendering in the `Shop` component to display the username if it is provided, or a generic greeting if it is not.

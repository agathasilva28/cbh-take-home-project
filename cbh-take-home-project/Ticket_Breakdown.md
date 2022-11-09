# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

1- Migrate the database to add a new column (personal_id) on the agent's table

acceptance criteria

there is a new column where I can save de information for personal ids

do not include

create API routes

2- edit the agent's routes to receive and send the new personal_id data

Acceptance criteria

can I send personal_id on update and create routes?
Does the personal_id is saved when I send it on create and update routes
when I get an agent, it returns the personal_id
when I get a list of agents, it returns their personal ids
When the agent does not have a custom id, it returns your id as the personal id.

do not include

migrate database
editing forms on CLI

Dependencies:
task-1

2- edit agent's edit and create a form, so it includes custom personal ids

Acceptance criteria
when I try to edit/create an agent, there is input for a personal id
when I submit an agent's form, it saves the personal id

do not include

migrate database
create backend routes

Dependencies:
task-1
task-2
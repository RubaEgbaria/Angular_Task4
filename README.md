<h1> Task 3 </h1> 

<h3 > services </h3>
<ul>
<li> users – list </li>
<li> create </li>
<li> update </li>
<li> delete </li>
</ul>

<h1> Task 4 </h1>
 
<h3> Routing </h3> 
<ul>
<li>Create a new application with the routing option to configure the application to 
use the Router module.
</li>
<li>Add a navigation bar at the top of the page. The navigation bar should have a link 
for the homepage, an about us page and a users’ page.
</li>
<li>In the users’ page, display a list of all users (same as the previous task). When you 
click on a specific user, you should navigate to a user details page where you will 
display all of the selected user’s data. 
This page should have a back button that will navigate to the previous page (users 
list).</li>
<li>The user details page will have two tabs; details and posts.</li>
<li>The details tab will display the user information.</li>
<li>The posts tab will display this user’s posts. You can add, edit and delete posts.</li>
<li> Handle the case when the user tries to navigate to routes that don’t exist.</li>
<li>Configure the default route to navigate to the homepage</li>
</ul>

<h1> Task 5 </h1 >


Create a template-driven form to create & update a user.
<ul><li>Create a new component (UserForm).</li>
<li>When you click on the create button in the users list you should navigate to 
the user form component.</li>
<li>When you click on the update button you should also navigate to the user 
form component.</li>
<li>Note that we will have 2 routes for the same component.</li>
<li>In the user form component, you should display the input fields for the 
<li>create/update operations based on the current URL.</li>
<li>The user form component will have a back button and a submit button.</li>
<li>When you submit the form you should display a success message in case of 
a successful request, then after 2 seconds of displaying the message 
navigate back to the previous page.</li>
<li>You should handle any errors that occur and display a user-friendly 
message without navigating back to the previous page.</li>
<li>Mark the First Name, Last Name and Email fields as required fields.</li>
<li>Remember that you should disable the email field when you are updating a 
user.</li>
<li>Disable the submit button when the form is invalid to prevent sending an 
<li>Http request with invalid data.</li>
<li>Use the right type of input for each form field.</li>
</ul>

<h1> Task 6  </h1>

<h3>Part 1: </h3>

<p> Redo task 5 with reactive forms instead of template-driven forms. </p>
<p> Add the following validations to the fields: </p>
<ul>
<li>Required for the first name, last name and email fields.</li>
<li>Minimum length of 2 characters for the first name and last name fields.</li>
<li>Add email validation on the email field.</li>
<li>Create a custom validator to prevent submitting a user when their </li>
<li>first name is the same as their last name.</li>
<li>Show the appropriate messages for each error.</li>
</ul>
<h3>Part 2:</h3>
<p>Create forms to create and update posts using reactive forms.</p>
<li>Add the appropriate validations; do what the models say.</li>
<li>For the owner field, show the owner’s name in a disabled input field.</li>
<li>Remember to send the owner’s id when creating a post and don’t send it when updating a post.</li>
<li>Don’t disable the submit button, show the appropriate error messages when a user tries to submit an invalid form. </li>
<li>But don’t send Http request with invalid data (when the form is invalid). </li>
<li>For tags, use a FormArray instance.</li>
</ul>

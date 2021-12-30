> ## TC#01
>
>> ### 'Sign in' page has logo, 'Sign in' title, Sign up link, username & password fields
>
> Preconditions:
>
> Go to http://localhost:3000/signin
> 
> Steps:
> 
> 1. Pay attention that logo "Real world App" exists
> 
> 2. Pay attention that 'Sign in' title exists below logo "Real world App"
> 
> 3. Pay attention that 'Don't have an account? Sign Up' link below 'Sign in' button
> exists
>
> 4. Pay attention that field 'Username' exists and has 'Username' placeholder 
> 
> 5. Pay attention that field 'Password' exists and has 'Password' placeholder 
> 
> Expected result:
> 
> 1. Logo, 'Sign in' title, and Sign up link are existing on the 'Sign in' page
> 
------------------------------------------------------------------------------------------
>
> ## TC#02
>
>> ### 'Sign up' page has logo, 'Sign up' title, Sign in link and all form fields
>
> Preconditions:
>
> Go to http://localhost:3000/signup
> 
> Steps:
> 
> 1. Pay attention that logo "Real world App" exists
> 
> 2. Pay attention that 'Sign up' title exists below logo "Real world App"
> 
> 3. Pay attention that 'Have an account? Sign In' link below 'Sign up' button exists
>
> 4. Pay attention that 'First Name' field exists and and has 'First Name' placeholder 
> 
> 5. Pay attention that 'Last Name' field exists and and has 'Last Name' placeholder
> 
> 6. Pay attention that 'Username' field exists and and has 'Username' placeholder
> 
> 7. Pay attention that 'Password' field exists and and has 'Password' placeholder
> 
> 8. Pay attention that 'Confirm Password' field exists and and has 'Confirm Password' placeholder
> 
> Expected result:
> 
> 1. Logo, 'Sign up' title, Sign in link and all form fields are existing on the 'Sign up' page
> 
------------------------------------------------------------------------------------------
>
> ## TC#03
>
>> ### Unexciting user shouldn't be able to Log in
>
> Preconditions:
>
> Go to http://localhost:3000/login
>
> Test data:
>
>    username: Chris
>
>    password: 12345Qwert!
> 
> Steps:
>
> 1. Fill 'Username' and 'Password' fields with test data
>
> 3. Click on [Sign In] button
>
> Expected result:
>
> 1. All fields is cleared, page shows message "Username or password is invalid" - unsuccessfully login.
>
------------------------------------------------------------------------------------------
>
> ## TCN#04
>
>> ### User can't Sign up with blank fields - page shows messages for blank field
>
> Preconditions:
>
> Go to http://localhost:3000/signup
> 
> Steps:
>
> 1. Click on "First Name" field
>
> 2. Click on "Last Name" field
>
> 3. Click on "Username" field
>
> 4. Click on "Password" field
>
> 5. Click on "Confirm Password" field
>
> 6. Click on [Sign Up] button
>
> Expected result:
>
> 1. All fields shows messages that field is required, "Sign Up" button is disabled - unsuccessfully sign up.
>
------------------------------------------------------------------------------------------
>
> ## TCN#05
>
>> ### User can't login with blank username field - page shows message "Username is required"
>
> Preconditions:
>
> Go to http://localhost:3000/login
> 
> Steps:
>
> 1. Click on "First Name" field
>
> 2. Click on "Password" field and fill it with text: "12345Qwert!"
>
> 4. Click on [Sign Up] button
>
> Expected result:
>
> 1. Page shows message below 'First Name' field: Username is required, "Sign Up" button is disabled - unsuccessfully login.
>
------------------------------------------------------------------------------------------
>
> ## TCN#06
>
>> ### User with different 'password' field & 'confirm password' field shouldn't be able to sign up - page shows warning   message
>
> Preconditions:
>
> 1. Go to http://localhost:3000/signup
>
> Test data: 
>
> first name: Big
>
> last name: Red
>
> username: Tomato
> 
> Steps:
>
> 1. Fill all mandatory fields except 'password' and 'confirm password' with test data
>
> 2. Type '12345Qwert!' in 'password' field
>
> 3. Type '123456qwert!' in 'confirm password' field
>
> 4. Click on [Sign Up] button
>
> Expected result:
>
> 1. Below 'Confirm password' field - page shows message "Password does not match", "Sign Up" button is disabled - unsuccessfully sign up.
>
------------------------------------------------------------------------------------------
>
> ## TCN#07
>
>> ### User with password length less then 4 characters shouldn't be able to sign up - page shows warning message
>
> Preconditions:
>
> 1. Go to http://localhost:3000/signup
>
> Test data: 
>
> first name: Little
>
> last name: Green
>
> username: Bag
> 
> Steps:
>
> 1. Fill all mandatory fields except 'password' and 'confirm password' with test data
>
> 2. Type '1' in 'password' field
>
> 3. Type '1' in 'confirm password' field
>
> 4. Click on [Sign Up] button
>
> Expected result:
>
> 1. Below 'password' field - page shows message "Password must contain at least 4 characters

", "Sign Up" button is disabled - unsuccessfully sign up.
>
------------------------------------------------------------------------------------------
>
> ## TC#08
>
>> ### User should be able to Sign Up by filling all mandatory fields and click [SignUp] button
> 
> Steps:
> 
> 1. Go to http://localhost:3000/signin
> 
> 2. Click 'Don't have an account? Sign Up' link
> 
> 3. Fill all mandatory fields
> 
> 4. Click on [Sign Up] button (button has 'Sign Up' text)
> 
> Expected result:
> 
> 1. Sign Up form closes - user is on Log In page - account successfully created.
> 
------------------------------------------------------------------------------------------
>
> ## TC#09
>
>> ### User should be able to Log in
>
> Test data:
>
>    username: Snow
>
>    password: 12345Qwert! 
>
> Steps:
>
> 1. Go to http://localhost:3000/login
>
> 2. Fill 'Username' and 'Password' fields with test data
>
> 3. Click on [Sign In] button (button has 'Sign in' text)
>
> Expected result:
>
> 1. Sign in form closes - user is on homepage - user successfully login.
>
------------------------------------------------------------------------------------------
> 
> ## TC#10
>
>> ### User should be able to Log out
> 
> Preconditions:
> 
> 1. Make sure that user is logged in
> 
> 2. Go to http://localhost:3000 (homepage)
> 
> Steps:
> 
> 1. On homepage click on 'Log out' button in the sidebar
> 
> Expected result:
> 
> 1. Homepage closes - user is on Sign in page - user successfully logout.
> 
------------------------------------------------------------------------------------------
> 
> ## TC#11
>
>> ### User can view filtered transactions by data, by setting values in data field
> 
> Preconditions:
> 
> 1. Make sure that user is logged in
> 
> 2. Go to http://localhost:3000 (homepage)
> 
> Steps:
> 
> 1. Click on [Date: All] button;
>
>  2. Choose 'Saturday, 25', double click;
>
>  3. Pay attention at text on button.
> 
> Expected result:
>
> 1. Calendar is closes - filter button has text 'Date: Dec, 24 2021 - Dec, 25 2021'
>
> 2. List of users with current date transactions is shown
> 
------------------------------------------------------------------------------------------
> 
> ## TC#12
>
>> ### User can view filtered transactions by amounr range, by setting values in amount range field
> 
> Preconditions:
> 
> 1. Make sure that user is logged in
> 
> 2. Go to http://localhost:3000 (homepage)
> 
> Steps:
> 
> 1. Click on [Amount: $0 - $1,000] button;
>
>  2. Set range via click on 0-500 by clicking on it
>
>  3. Pay attention at text on button.
> 
> Expected result:
>
> 1. Amount range window shows text 'Amount: $0 - $500'
>
> 2. List of users with current amount range transactions is shown
> 
------------------------------------------------------------------------------------------
> 
> ## TC#013
>
>> ### All received notifications is shown when click 'Notifications' link at sidebar
> 
> Preconditions:
> 
> 1. Make sure that user is logged in
> 
> 2. Go to http://localhost:3000 (homepage)
> 
> Steps:
> 
> 1. On homepage click on 'Notification' link in the sidebar
> 
> Expected result:
> 
> 1. After clicking the link - 'Notification' page opens
> 
------------------------------------------------------------------------------------------
> 
> ## TC#014
>
>> ### All received notifications is shown when click 'bell' icon in right side of header
> 
> Preconditions:
> 
> 1. Make sure that user is logged in
> 
> 2. Go to http://localhost:3000 (homepage)
> 
> Steps:
> 
> 1. On homepage click on 'bell' icon in right side of header
> 
> Expected result:
> 
> 1. After clicking the icon - 'Notification' page opens
> 
------------------------------------------------------------------------------------------
> 
> ## TC#015
>
>> ### User should be able to create Bank Account by clicking 'Bank Accounts' link and click [CREATE] button
> 
> Preconditions:
> 
> 1. Make sure that user is logged in
> 
> 2. Go to http://localhost:3000 (homepage)
> 
> Steps:
> 
> 1. On homepage click on 'Bank Accounts' link in the sidebar
> 
> 2. User is on 'Bank Accounts' page - Click on [Create] button
> 
> 3. 'Create Bank Account' form opens - Fill all mandatory fields
> 
> 4. Click on [Save] button
> 
> Expected result:
> 
> 1. After clicking on [Save] button - Form page closes: new bank account name in the list is shown - new bank account is created.
> 
------------------------------------------------------------------------------------------
> 
> ## TC#016
>
>> ### User should be able to delete Bank Account by clicking 'Bank Accounts' link and click [DELETE] button
> 
> Preconditions:
> 
> 1. Make sure that user is logged in
> 
> 2. Make sure that user has bank account created
> 
> 3. Go to http://localhost:3000 (homepage)
> 
> Steps:
> 
> 1. On homepage click on 'Bank Accounts' link in the sidebar
> 
> 2. User is on 'Bank Accounts' page - choose any bank account name
> 
> 3. Click on [DELETE] button
> 
> Expected result:
> 
> 1. After clicking on [DELETE] button - bank account name has form: "'bank account name'(Deleted)" - bank account is successfully deleted
> 
------------------------------------------------------------------------------------------
> 
> ## TC#017
>
>> ### User not be able to create bigger payment as account balance is represented.
> 
> Preconditions:
> 
> 1. Make sure that user is logged in
> 
> 2. Make sure that user has account balance '$0.00'
> 
> 3. Go to http://localhost:3000 (homepage)
> 
> Steps:
> 
> 1. On homepage click on [New] button in header
> 
> 2. Choose any other user's name represented in list - click
> 
> 3. 'Transaction page' opens - In field 'Account' type '100'
> 
> 4. In field 'Add note' type any text
> 
> 3. Click on [PAY] button
> 
> Expected result:
> 
> 1. After clicking on [PAY] button - Page shows warning like: "user unable to make transaction - not enough money"
> 
------------------------------------------------------------------------------------------

> ## TC#018
>
>> ### User not be able to create bigger payment request as account balance is represented.
> 
> Preconditions:
> 
> 1. Make sure that user is logged in
> 
> 2. Make sure that user has account balance '$0.00'
> 
> 3. Go to http://localhost:3000 (homepage)
> 
> Steps:
> 
> 1. On homepage click on [New] button in header
> 
> 2. Choose any other user's name represented in list - click
> 
> 3. 'Transaction page' opens - In field 'Account' type '100'
> 
> 4. In field 'Add note' type 'any text'
> 
> 3. Click on [REQUEST] button
> 
> Expected result:
> 
> 1. After clicking on [REQUEST] button - Page shows warning like: "user unable to make transaction - not enough money"
> 
------------------------------------------------------------------------------------------
> 
> ## TC#019
>
>> ### User should be able to create payment transaction by filling all mandatory fields and click [PAY] button
> 
> Preconditions:
> 
> 1. Make sure that user is logged in
> 
> 2. Make sure that user has account balance with '$100.00'
> 
> 3. Go to http://localhost:3000 (homepage)
> 
> Steps:
> 
> 1. On homepage click on [New] button in header
> 
> 2. Choose any other user's name represented in list - click
> 
> 3. 'Transaction page' opens - In field 'Account' type '50'
> 
> 4. In field 'Add note' type any text
> 
> 3. Click on [PAY] button
> 
> Expected result:
> 
> 1. After clicking on [PAY] button - Page shows message: "Transaction Submitted!" - payment is successful.
> 
------------------------------------------------------------------------------------------
> 
> ## TC#020
>
>> ### User should be able to create request transaction by filling all mandatory fields and click [REQUEST] button
> 
> Preconditions:
> 
> 1. Make sure that user is logged in
> 
> 2. Make sure that user has account balance with '$100.00'
> 
> 3. Go to http://localhost:3000 (homepage)
> 
> Steps:
> 
> 1. On homepage click on [New] button in header
> 
> 2. Choose any other user's name represented in list - click
> 
> 3. 'Transaction page' opens - In field 'Account' type '50'
> 
> 4. In field 'Add note' type any text
> 
> 3. Click on [REQUEST] button
> 
> Expected result:
> 
> 1. After clicking on [REQUEST] button - Page shows message: "Transaction Submitted!" - request is successful.
> 
------------------------------------------------------------------------------------------
> 
> ## TC#021
>
>> ### User should be able to edit user settings by clicking 'My Account' link at sidebar
> 
> Preconditions:
> 
> 1. Make sure that user is logged in
> 
> 2. Go to http://localhost:3000 (homepage)
> 
> Test data:
> 
> first name: John
> 
> last name: Snow
> 
> email: john_snow@gmail.com
> 
> phone: 12345678910
> 
> 
> Steps:
> 
> 1. On homepage - click on 'My Account' link in sidebar
> 
> 2. User is on 'User settings' page - 'User Settings' form is presented
> 
> 3. Fill all mandatory fields with test data
> 
> 4. Click on [SAVE] button
> 
> Expected result:
> 
> 1. After clicking on [SAVE] button - Page shows message like: "User settings updated successfully"
> 
------------------------------------------------------------------------------------------
> 
> ## TC#022
>
>> ### User's payments should be shown by clicking 'MINE' link in header
> 
> Preconditions:
> 
> 1. Make sure that user is logged in
> 
> 2. Make sure that user has account balance '$100.00'
> 
> 3. Go to http://localhost:3000 (homepage)
> 
> 4. On homepage click on [New] button in header
> 
> 5. Choose any other user's name represented in list - click
> 
> 6. 'Transaction page' opens - In field 'Account' type '50'
> 
> 7. In field 'Add note' type any text
> 
> 8. Click on [PAY] button
> 
> 
> Steps:
> 
> 1. On homepage click on [New] button in header
> 
> 2. Choose any other user's name represented in list - click
> 
> 3. 'Transaction page' opens - In field 'Account' type '50'
> 
> 4. In field 'Add note' type any text
> 
> 3. Click on [PAY] button
> 
> 4. Click on 'MINE' link in header
> 
> Expected result:
> 
> 1. After clicking on 'MINE' link - List of payments and requests is opened: User payment is represented in the list with value '-$50'
> 
------------------------------------------------------------------------------------------
> 
> ## TC#023
>
>> ### User's requests should be shown by clicking 'MINE' link in header
> 
> Preconditions:
> 
> 1. Make sure that user is logged in
> 
> 2. Make sure that user has account balance '$100.00'
> 
> 3. Go to http://localhost:3000 (homepage)
> 
> 4. On homepage click on [New] button in header
> 
> 5. Choose any other user's name represented in list - click
> 
> 6. 'Transaction page' opens - In field 'Account' type '50'
> 
> 7. In field 'Add note' type any text
> 
> 8. Click on [REQUEST] button
> 
> 
> Steps:
> 
> 1. On homepage click on [New] button in header
> 
> 2. Choose any other user's name represented in list - click
> 
> 3. 'Transaction page' opens - In field 'Account' type '50'
> 
> 4. In field 'Add note' type any text
> 
> 3. Click on [REQUEST] button
> 
> 4. Click on 'MINE' link in header
> 
> Expected result:
> 
> 1. After clicking on 'MINE' link - List of payments and requests is opened: User request is represented in the list with value '-$50'
> 
------------------------------------------------------------------------------------------
> 
> ## TC#024
>
>> ### User should be able to create comment by clicking on any other user at homepage - filling the comment field and click [Enter] key
> 
> Preconditions:
> 
> 1. Make sure that user is logged in
> 
> 2. Go to http://localhost:3000 (homepage)
> 
> Steps:
> 
> 1. On homepage choose any other user's name in the list - click
> 
> 2. 'Transaction detail' page opens - type 'Hello' text in 'Write a comment...' field
> 
> 3. Click [Enter] key
> 
> Expected result:
> 
> 1. After clicking the [Enter] key: 'Hello' is presented in block 'Comments' below 'Write a comment...' field
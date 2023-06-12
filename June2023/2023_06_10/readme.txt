List<Feedback> feedbackList = new List<Feedback>();

1. Add a feedback
Feedback feedback = new Feedback
{
    Id = 1,
    Message = "This is a feedback message."
};
feedbackList.Add(feedback);

2. Read all feedback
foreach (var feedback in feedbackList)
{
    Console.WriteLine($"ID: {feedback.Id}, Message: {feedback.Message}");
}

3. Update Feedback
Feedback feedbackToUpdate = feedbackList.FirstOrDefault(f => f.Id == 1);
if (feedbackToUpdate != null)
{
    feedbackToUpdate.Message = "Updated feedback message.";
}

4. Delete Feedback
Feedback feedbackToRemove = feedbackList.FirstOrDefault(f => f.Id == 1);
if (feedbackToRemove != null)
{
    feedbackList.Remove(feedbackToRemove);
}


// Define two dates.
DateTime date1 = new DateTime(2010, 1, 1, 8, 0, 15);
DateTime date2 = new DateTime(2010, 8, 18, 13, 30, 30);

// Calculate the interval between the two dates.
TimeSpan interval = date2 - date1;
Console.WriteLine("{0} - {1} = {2}", date2, date1, interval.ToString());

// Display individual properties of the resulting TimeSpan object.
Console.WriteLine("   {0,-35} {1,20}", "Value of Days Component:", interval.Days);
Console.WriteLine("   {0,-35} {1,20}", "Total Number of Days:", interval.TotalDays);
Console.WriteLine("   {0,-35} {1,20}", "Value of Hours Component:", interval.Hours);
Console.WriteLine("   {0,-35} {1,20}", "Total Number of Hours:", interval.TotalHours);
Console.WriteLine("   {0,-35} {1,20}", "Value of Minutes Component:", interval.Minutes);
Console.WriteLine("   {0,-35} {1,20}", "Total Number of Minutes:", interval.TotalMinutes);
Console.WriteLine("   {0,-35} {1,20:N0}", "Value of Seconds Component:", interval.Seconds);
Console.WriteLine("   {0,-35} {1,20:N0}", "Total Number of Seconds:", interval.TotalSeconds);
Console.WriteLine("   {0,-35} {1,20:N0}", "Value of Milliseconds Component:", interval.Milliseconds);
Console.WriteLine("   {0,-35} {1,20:N0}", "Total Number of Milliseconds:", interval.TotalMilliseconds);
Console.WriteLine("   {0,-35} {1,20:N0}", "Ticks:", interval.Ticks);

// This example displays the following output:
//       8/18/2010 1:30:30 PM - 1/1/2010 8:00:15 AM = 229.05:30:15
//          Value of Days Component:                             229
//          Total Number of Days:                   229.229340277778
//          Value of Hours Component:                              5
//          Total Number of Hours:                  5501.50416666667
//          Value of Minutes Component:                           30
//          Total Number of Minutes:                       330090.25
//          Value of Seconds Component:                           15
//          Total Number of Seconds:                      19,805,415
//          Value of Milliseconds Component:                       0
//          Total Number of Milliseconds:             19,805,415,000
//          Ticks:                               198,054,150,000,000


Datetime Subtraction
DateTime dateOfBirth = new DateTime(YYYY, MM, DD);  // Replace YYYY, MM, and DD with your actual date of birth
DateTime currentDate = DateTime.Today;
TimeSpan duration = currentDate.Subtract(dateOfBirth);
int numberOfDays = duration.Days;

Console.WriteLine($"Number of days since your date of birth: {numberOfDays}");

==========================
	MISS AASIA
==========================

Using the interface type instead of the class type:

If you're creating an object of the class implementing the interface using the interface type, you'll only be able to access the members defined in the interface.
To access the additional members of the class, you need to use the class type itself.
Example:
csharp
Copy code
IMyInterface myObject = new MyClass();  // Can only access interface members
myObject.MyMethod();  // Accessible

MyClass myObject = new MyClass();  // Can access both interface and class members
myObject.MyMethod();  // Accessible
myObject.MyClassMethod();  // Accessible (additional class member)
If you've verified these points and are still unable to access the method, please provide the code snippets related to the interface, class, and object creation for further assistance.


You can also Have a look at:
https://github.com/dotnet/csharplang/issues/288

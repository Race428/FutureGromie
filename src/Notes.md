
Kinda Ironic that this text looks like the Star Wars Intro Titles... 






-                           EPISODE 1 
-                    Race's Interview at Grow

-  Race Acheson has the chance to interview for a position at an amazing company filled with people who are awesome to work with.... 

- Anyways, here are the things I had challenges with, and things I would improve.

1. Make the planet resident swapi request more effecient. 
    - If I had a application that was able to store data, I would get all the people with their swapi/people/:id, and then do the same with planets with swapi/planets/:id. 

    Then using the residents column, i would take the numeric value of each resident and do a join statement. 

    Just with this basic request I did, the request gets all the information. I only needed the name, so all the extra data was slowing down the request and taking up processing power. 

    Having all the data stored and only using the exact information I need would increase the speed of the request. 
2. I wish that there wasn't a defualt of 10 items per page.      However, since it was unavoidable, using the loop was         necessary. 


    DYNAMIC APPLICATION ---- 

    If I needed to create a dynamic function, I would have done a request to only get the count value in the results.data. 

    Save that value to a variable and then use the default "number of items per page" value and get the number of pages. There will most likley a page with less than the default limit per page. I would use a MATH.round() to round the page so I get every item. 

    Then do a for loop or if statement, starting at page 1, and incrementing the page value after each iteration. 

    To make the application effecient, I would request the data every hour or so, and then use that most recent data as that which is being requested by the client. 

    I would also integrate a "update data" override that would allow the client to refresh and do the whole request to get all the data again. 

    Thinking on a business perspective, I most of the time just want a summary of the data, so an hour old isn't bad. That is nice to see right when I log in. If I wanted more recent data, my mind would be prepared to wait a moment for all the requests to go through. Therefore, making it ok that the request takes significantly longer to get everything. 

3. AREAS OF CONCERN ---

    In order to sort by weight or height, I made any unkown value 0. However, this still is a height value and is not eqaul to "unknown". 

    For some reason I was able to get most of the people with unknown mass, and height. I did .includes(), for loops that checked the value if it was equal to "unknown", and there were still a few that were slipping through the loop.

    I had it where it would take all people with mass equal to "unknown" and push it to a new array, and then spice that person from the original array of people. 

    I was going to then sort those with a known mass, and then just add the unknown to the end of it. 

    Like I said, I had 20 people that were spliced out, but there were still a few people with unknown scattered in those with known mass or height. 

    I compared the string values, checked for spaces on the beginning and end, but wasn't able to find why they were slipping through. So just to make things simple only for this challenge, I decided to make the mass equal to 0. 

    ------------
    there was also Jabba who had a "," in the mass value. I had to use a .includes() method to see if there was a "," in any of the values. If yes, then it would replace the value with "", making the mass able to be sorted with the others. Otherwise, it would have been considered a "1". And Jabba does not weight 1. Maybe 1 ton, but not just 1.
    
    And I just did "kg" because I don't know what unit they use in that universe. 

    Same with "cm". 



    ........... 









# 05-Day-Scheduler

**Description:** The goal of this project was to creat a simple calendar application that allows the user to save events for each hour of the day.  Throughout the day each hour is highlighted based on whether it is the current, past or future hours.  It will also reload any saved events from the current day in the saved timeslot if the page is refreshed.


**Deployed Web App:** [Alex's Scheduler](https://ambertrand.github.io/05-Day-Scheduler/)

**Developer Notes:** For this project I was tasked with developing a current day scheduler that could save inputs in each hour block.  When the save button was hit it would save the text to the page and if it was refreshed it still stayed on the page.  When the time at the top of the page is equivalent to a time block it displays red and when its past it displays gray and future displays green.

For this project I started out by building out the hour blocks in HTML and was able to get good base product.  Getting to the Javascript after conferencing with some fellow classmates I heard a couple different ways they decided to code their time blocks so it made it harder to follow.  The last hurdle after getting the text to save to Local storage was pulling it back out when the page was refreshed.  This took a couple different classmates working together to figure it out but eventually I was able to get a MVP!

Below are screenshots of the finished product.

**Images:**
![Empty schedule](https://user-images.githubusercontent.com/65721950/88468664-f189da80-ceb4-11ea-9fde-15b9b82e47f2.png)
![Empty schedule pt2](https://user-images.githubusercontent.com/65721950/88468666-f5b5f800-ceb4-11ea-9575-554e53eb2d5a.png)
![Saved items](https://user-images.githubusercontent.com/65721950/88468668-f8b0e880-ceb4-11ea-98fb-637e7e8002fb.png)
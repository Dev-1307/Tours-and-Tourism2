function talk(){
var know = {
"ok" : "Thank You So Much ",
"Bye" : "Okay! Will meet soon..",
"Which place is good for travelling Holy places":"Varanasi, Chitrakoot, Ayodhya ,Vrindavan",
"which place is best to visit in october near Uttar Pradesh": "Agra,Lucknow,Varanasi,Mathura,Vrindavan",
"Which place is best for tour in October":"Shillong,Srinagar,Shimla,Auli,Kodaikanal,Spiti Valley,Pachmarhi.",
"Is October a good month to travel?":"Pleasant temperatures, fewer tourists, and shoulder-season deals make October a great time to travel to a large swath of the globe.",
"Which month is best for tourism":"Winter (November - February) This is the peak season for tourism in India. Favorable weather and temperature makes it ideal for sightseeing, city breaks and other outdoor activities.",
"Which month is best for Varanasi":"Winter season starts from November and lasts till March.",
"What months are cheaper to go on holiday":"May, June, and September.",
"What dates are cheaper to fly":"Flights are generally the most inexpensive between four months and three weeks before your departure date."
};
var user = document.getElementById('userBox').value;
document.getElementById('chatLog').innerHTML = user + "<br>";
if (user in know) {
document.getElementById('chatLog').innerHTML = know[user] + "<br>";
}else{
document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
}
}
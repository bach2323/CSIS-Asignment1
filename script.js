var  quoteArray = []; // java script blank array

// creating all quote object and push in array
var  quoteObject1 = {
    quote: 'My mother always used to say: The older you get, the better you get,\n unless you are  a banana.',
    source:'Rose (Betty White), The Golden Girls',
    citation: 'White, B. (2021, June 4). 101 funny quotes that will make you lol! (and they are all safe for work). Parade. \n Retrieved February 1, 2022, from https://parade.com/940913/parade/funny-quotes/ ',
    year: '2015'    
};

var  quoteObject2 = {
    quote: 'Before you criticize someone, you should walk a mile in their shoes. \n That way when you criticize them, you are a mile away from them and you have their shoes.',
    source:'Jack Handey',
    citation: 'Handey, J. (2022, Jan 31). 101 funny quotes that will make you lol! (and they are all safe for work). Parade. \n Retrieved February 1, 2022, \n from https://parade.com/940913/parade/funny-quotes/ ',
    year: '2022' 
};
var  quoteObject3 = {
    quote:  'Clothes make the man. Naked people have little or no influence in society.',
    citation: 'Twain, M. (2022, Jan 31). 101 funny quotes that will make you lol! (and they are all safe for work). \n Parade. \n Retrieved February 1, 2022, \n from https://parade.com/940913/parade/funny-quotes/ ',
    source:'Mark Twain',
    year: '2011'    
};
var  quoteObject4 = {
    quote: 'I love being married. It’s so great to find that one special person you want to annoy for the rest of your life.',
    source:'Rita Rudner',
    citation: 'Rudner, R. (2022, Jan 31). 101 funny quotes that will make you lol! (and they are all safe for work). Parade. \n Retrieved February 1, 2022, \n from https://parade.com/940913/parade/funny-quotes/ ',
    year: '2018'
};
var  quoteObject5 = {
    quote: 'When your mother asks, ‘Do you want a piece of advice?’ it is a mere formality. It doesn’t matter if you answer yes or no. You’re going to get it anyway.',
    source:'Erma Bombeck',
    citation: 'Bombeck, E. (2022, Jan 31). 101 funny quotes that will make you lol! (and they are all safe for work). Parade. \n Retrieved February 1, 2022, \n from https://parade.com/940913/parade/funny-quotes/ ',
    year: '2017'    
};
var  quoteObject6 = {
    quote: 'We - who laughs today may rethink tomorow, and laugh harder ',
    source:'The Bach Doan',
    citation: 'The Bach Doan ------',
    year: '2022'    
};
var  quoteObject6 = {
    quote: 'We - who laughs today may rethink tomorow, and laugh harder ',
    source:'The Bach Doan',
    citation: 'The Bach Doan ------',
    year: '2022'    
};
var  quoteObject7 = {
    quote: 'People think I speak nonsense, but when they at home and think about what I said, they will know my words are really nonsense  ',
    source:'The Bach Doan',
    citation: 'The Bach Doan ------',
    year: '2022'    
};


//  --- Adding above objects in array
quoteArray.push(quoteObject1);
quoteArray.push(quoteObject2);
quoteArray.push(quoteObject3);
quoteArray.push(quoteObject4);
quoteArray.push(quoteObject5);
quoteArray.push(quoteObject6);
quoteArray.push(quoteObject7);

//--  generate random number and use that number to show quote
function getRandomQuote() {
    var lenghtOfQuoteArray = quoteArray.length;
    //-- below line will generate random number from 0 to length of array
    var randomNumber = Math.floor(Math.random() * lenghtOfQuoteArray);
    return quoteArray[randomNumber]; // returning quote object

}

//-- generate HTML string and that will be shown in browser page.
function printQuote(){
 var quoteObject = getRandomQuote(); //-- Function will call method and return random object
 var htmlString = "<p class='quote'>" + quoteObject.quote + "</p><br>";
 htmlString += "<p class='source'>" + quoteObject.source +"</p><br>";
 //---Checking if citation and year exists then add in htmlString 
 if(quoteObject.citation){
    htmlString += "<p class='citation'>" + quoteObject.citation +"</p><br>";
 }
 if(quoteObject.year){
    htmlString += "<p class='year'>" + quoteObject.year +"</p><br>";
 }

 document.getElementById('quote-box').innerHTML = htmlString; // assigning the string to div body

}

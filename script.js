const quotes = [
    {
        name: 'Stephen King',
        quote: 'Get busy living or get busy dying.'
    },
    {
        name: 'John F.Kennedy',
        quote: 'Those who dare to fail miserably can achieve greatly.'
    },
    {
        name: 'Abraham Lincoln',
        quote: 'I am a success today because i had a friend who believed in me and I did not have the heart to let him down.'
    },
    {
        name: 'Leonardo Da Vinci',
        quote: 'It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.'
    },
    {
        name: 'Leo Tolstoy',
        quote: 'If you want to be happy, be.'
    },
    {
        name: 'Nelson Mandela',
        quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.'
    },
    {
        name: 'Walt Disney',
        quote: 'The way to get started is to quit talking and begin doing.'
    },
    {
        name: 'Steve Jobs',
        quote: 'Your time is limited, so do not waste it living someone elses life. Do not be trapped by dogma – which is living with the results of other peoples thinking.'
    },
    {
        name: 'Eleanor Roosevelt',
        quote: 'If life were predictable it would cease to be life, and be without flavor.'
    },
    {
        name: 'Oprah Winfrey',
        quote: 'If you look at what you have in life, you will always have more. If you look at what you do not have in life, you will never have enough.'
    },
    {
        name: 'James Cameron',
        quote: 'If you set your goals ridiculously high and its a failure, you will fail above everyone elses success. '
    },
    {
        name: 'John Lennon',
        quote: 'Life is what happens when you are busy making other plans.'
    },
    {
        name: 'Margaret Mead',
        quote: 'Always remember that you are absolutely unique. Just like everyone else.'
    },
    {
        name: 'Benjamin Franklin',
        quote: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.'
    }
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote (){
    let number = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;

}
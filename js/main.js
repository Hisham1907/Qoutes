var allQoutes=[

`
<p class="display-6 fw-semibold ">"Be the change that you wish to see in the world."</p>
            <p class="display-6 fw-semibold ">-- Mahatma Gandhi</p>


`
,
`

<p class="display-6 fw-semibold ">"Be yourself; everyone else is already taken."</p>
            <p class="display-6 fw-semibold ">-- Oscar Wilde</p>


`
,
`
<p class="display-6 fw-semibold ">"So many books, so little time."</p>
            <p class="display-6 fw-semibold ">-- Frank Zappa</p>

`
,
`
<p class="display-6 fw-semibold ">"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."</p>
            <p class="display-6 fw-semibold ">-- Albert Einstein</p>

`
,
`
<p class="display-6 fw-semibold ">"A room without books is like a body without a soul."</p>
            <p class="display-6 fw-semibold ">-- Marcus Tullius Cicero</p>

`,

`
<p class="display-6 fw-semibold ">"You know you're in love when you can't fall asleep because reality is finally better than your dreams."</p>
            <p class="display-6 fw-semibold ">--Dr. Seuss</p>

`
,
`
<p class="display-6 fw-semibold ">"A friend is someone who knows all about you and still loves you."</p>
            <p class="display-6 fw-semibold ">--Elbert Hubbard</p>

`
]

var counter =0;
function displayQoute(){
    document.getElementById("qoute").innerHTML=allQoutes[counter]; 
counter ++;
if (counter == 7)
{counter=0;}
}


let score,gamePlaying,roundScore,activePlayer;
init();
document.querySelector('.btn-roll').addEventListener('click',function(){

    if(gamePlaying){
        let dice=Math.floor(Math.random()*6)+1;
        let dom=document.querySelector('.dice');
        dom.style.display="block";
        dom.src='asset/dice-'+dice+'.png';
        console.log(dice);
    if(dice !==1){
        score+=dice;
        console.log(score);
        document.querySelector('#current-'+activePlayer).textContent=score;
    }else{
        nextPlayer();
    }
}

});

function nextPlayer(){
    activePlayer===0?activePlayer=1:activePlayer=0;
    score=0;
    document.querySelector('.player-0-panel').classList.toggle('winner');
    document.querySelector('.player-1-panel').classList.toggle('winner');
    document.querySelector('#current-0').textContent='0';
    document.querySelector('#current-1').textContent='0';
    document.querySelector('.dice').style.display='none';

}

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
        roundScore[activePlayer]+=score;
        document.querySelector('#score-'+activePlayer).textContent=roundScore[activePlayer];

        let input=document.querySelector('.finalScore').value;
        let winserScore;
        if(input){
            winserScore=input;
        }else{
            winserScore=100;
        }

        if(roundScore[activePlayer]>=winserScore){
            document.querySelector('#name-'+activePlayer).textContent="WINNER!";
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('#name-'+activePlayer).classList.add('active');
            gamePlaying=false;
        }else{
            nextPlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click',function(){
    init();
});


function init(){
    score=0,activePlayer=0,roundScore=[0,0],gamePlaying=true;
    document.querySelector('.dice').style.display="none";
    document.querySelector('#current-1').textContent='0';
    document.querySelector('#current-0').textContent='0';
    document.querySelector('#score-1').textContent='0';
    document.querySelector('#score-0').textContent='0';
    document.querySelector('.player-0-panel').classList.add('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('#name-0').textContent='Player-1';
    document.querySelector('#name-1').textContent='Player-2';
    document.querySelector('#name-0').classList.remove('active');
    document.querySelector('#name-1').classList.remove('active');
}

 const statGame = document.querySelector('button');
 


function hallway(e){
    console.log(e);
    

    const room = prompt('Hej du är nu i hallen. Vart vill du gå vidare. /sovrummet / köket / vardagsrummet')
    if (room === 'sovrummet') {
       bedroom()
    }
    else if (room === 'köket') {
       livingKitchen()
    }
    else if (room ==='vardagsrummet'){
       livingRoom()
    }
    else {
         alert('inget giltligt kommando, skriv in "sovrummet", "köket" eller "vardagsrummet"')
         hallway()
    }

}


function bedroom(){
    const userchoice = prompt('Nu är du i sovrummet. Det finns en säng om du är trött, eller så finns det lite spel på datorn eller gå tillbaka till hallen eller varför inte hämta något gött i köket. Vad vill du göra nu?')

    if (userchoice==='sova'){
        sleep()
    } else if(userchoice==='spela'){
        playOnComputer()                       
    } else if(userchoice==='gå tillbaka' || userchoice==='hallen') {
        hallway()
    } else if(userchoice==='köket') {
        livingKitchen()
    } else {
        alert('inget giltligt kommando, skriv in "sova", "spela", "köket" eller "gå tillbaka"')
        bedroom()
    }
}

function livingKitchen(){
    const userchoice = prompt('Nu är du i köket det finns kanske något gött i kylen eller om du är mer ambitjös finns det något att laga på spisen, eller varför inte ta en tur i sovrummet eller gå till vardagsrummet o se vad det finns för spänade där?')
    
    if (userchoice==='kylen'){
        goToFridge()
    } else if(userchoice==='spisen'){
        goToStove()
    } else if (userchoice==='gå tillbaka') {
        hallway()
    } else if (userchoice==='sovrummet') {
        bedroom()
    } else if (userchoice==='vardagsrummet') {
        livingRoom()
    } else {
        alert('inget giltligt kommando, skriv "kylen", "spisen", "sovrummet", "vardagsrummet" eller gå tillbaka"')
        livingKitchen()
    }
}

function livingRoom(){
    const userchoice = prompt('Nu är du i vardagsrummet, det finns en fin natur utanför fönstret. Det finns en ännu roligare tv att slöa framför. Eller varför inte se om du hittar något intresant i köket om du börjar bli sötsugen.');

    if (userchoice==='titta ut'){
        goToWindow()
    } else if(userchoice==='titta på tv'){
        goToTv()
    } else if(userchoice==='gå tillbaka'){
        hallway()
    } else if(userchoice==='köket') {
        livingKitchen()
    } else {
        alert('inget giltligt kommando, skriv "titta ut", "titta på tv", "gå tillbaka" eller "köket"')
        livingRoom()
    }
}

function playOnComputer() {
    alert('du spelar nu....')
    setTimeout(bedroom, 1000)
}

function sleep() {
    alert('du sover nu zzz.......')
    setTimeout(bedroom, 1000)
}

function goToFridge() {
    alert('Du rotar nu i kylen tryck ok när du har hämtat det du ska ha.')
    setTimeout(livingKitchen, 1000)
}

function goToStove()  {
    alert('du lagar nu något gött o äta tryck okej när du är klar')
    setTimeout(livingKitchen, 1000)
}

function goToWindow()  {
    alert('Du tittar nu ut igenom ett fönstret... Tryck okej när du är klar')
    setTimeout(livingRoom, 1000)
}

function goToTv()  {
    alert('Du tittar nu på tv... Tryck ok när du har tröttnat')
    setTimeout(livingRoom, 1000)
}

statGame.addEventListener('click', hallway)
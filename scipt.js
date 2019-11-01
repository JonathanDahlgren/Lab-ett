
function start(){
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
         alert('inget giltligt kommando, skriv in "sovrummet", "köket" eller "vardagsrummet"');
         start()
    }

}

start()             //Varför ska jag ha detta?

function bedroom(){
    const userchoice = prompt('Nu är du i sovrummet. Det finns en säng om du är trött, eller så finns det lite spel på datorn eller gå tillbaka till hallen eller varför inte hämta något gött i köket. Vad vill du göra nu?');

    if (userchoice==='sova'){
        sleep()
    } else if(userchoice==='spela'){
        playOnComputer()
    } else if(userchoice==='gå tillbaka') {
        start()
    } else if(userchoice==='köket') {
        livingKitchen()
    } else {
        alert('inget giltligt kommando, skriv in "sova", "spela", "köket" eller "gå tillbaka"');
        bedroom()
    }
}

start()

function livingKitchen(){
    const userchoice = prompt('Nu är du i köket det finns kanske något gött i kylen eller om du är mer ambitjös finns det något att laga på spisen, eller varför inte ta en tur i sovrummet eller gå till vardagsrummet o se vad det finns för spenade där?');
    
    if (userchoice==='kylen'){
        goToFridge()
    } else if(userchoice==='spisen'){
        goToStove()
    } else if (userchoice==='gå tillbaka') {
        start()
    } else if (userchoice==='sovrummet') {
        bedroom()
    } else if (userchoice==='vardagsrummet') {
        livingRoom()
    } else {
        alert('inget giltligt kommando, skriv "kylen", "spisen", "sovrummet", "vardagsrummet" eller gå tillbaka"')
        livingKitchen()
    }
}

start()             // varför ska jag ha start här?

function livingRoom(){
    const userchoice = prompt('Nu är du i vardagsrummet, det finns en fin natur utanför fönstret. Det finns en ännu roligare tv att slöa framför. Eller varför inte se om du hittar något intresant i köket om du börjar bli sötsugen.');

    if (userchoice==='titta ut'){
        goToWindow()
    } else if(userchoice==='titta på tv'){
        goToTv()
    } else if(userchoice==='gå tillbaka'){
        start()
    } else if(userchoice==='köket') {
        livingKitchen()
    } else {
        alert('inget giltligt kommando, skriv "titta ut", "titta på tv", "gå tillbaka" eller "köket"')
        livingRoom()
    }
}
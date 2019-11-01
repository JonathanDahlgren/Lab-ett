
const room = prompt('Hej du är nu i hallen. Vart vill du gå vidare. /sovrummet / köket / vardagsrummet')
if (room === 'sovrummet') {
    const goToBedroom = prompt('Nu är du i sovrummet. Det finns en säng om du är trött, eller så finns det lite spel på datorn eller gå tillbaka till hallen. Vad vill du göra nu?');
}
else if (room === 'köket') {
    const goToKitchen = prompt('Nu är du i köket. Du kanske är hungrig med tanke på att du har gått till köket, Vill du gå till kylen eller gå till spisen?');
}
else if (room ==='vardagsrummet'){
    const goToLivingroom = prompt('Du är i vardagsrummet, antagligen är du hyfsat trött. Det finns en fin natur på utsidan du kanske vill titta ut genom fönstret eller vill du kanske dega framför tvn?')
}
else {
    return ('inget giltligt kommando, skriv in sovrummet, köket eller vardagsrummet');
}

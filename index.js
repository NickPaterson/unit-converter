function convert() {
    let userInput = document.getElementById("userInput").value
    userInput = parseInt(userInput)

    let metersToFeet = userInput * 3.28084
    let feetToMeters = userInput * 0.3048000097536

    let litersToGallon = userInput * 0.264172
    let gallonToLiters = userInput * 3.78541103373138

    let kiloToPound = userInput * 2.20462
    let PoundToKilo = userInput * 0.453591830542594
                        
    let lengthResults = `${userInput} meters = ${metersToFeet.toFixed(3)} feet | 
                         ${userInput} feet = ${feetToMeters.toFixed(3)} meters`
                        
                        
    let volumeResults = `${userInput} liters = ${litersToGallon.toFixed(3)} gallons | 
                         ${userInput} gallons = ${gallonToLiters.toFixed(3)} liters`
                        
    let massResults   = `${userInput} kilos = ${kiloToPound.toFixed(3)} pounds | 
                         ${userInput} pounds = ${PoundToKilo.toFixed(3)} kilos`                                                     
    document.getElementById("lengthResults").textContent = lengthResults
    document.getElementById("volumeResults").textContent = volumeResults
    document.getElementById("massResults").textContent = massResults
}

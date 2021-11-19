let jahr = document.getElementById("jahr");
let einkommen = document.getElementById("einkommen");
let veranlagung = document.getElementById("veranlagung");
let ergebnis = document.getElementById("ergebnis");
let hinweis = document.getElementById("hinweis");

let berechnen = () => {

    // 2021 
    // Einzelveranlagung
    // Einkommen unter 9744
    if (einkommen.value <= 9744 && veranlagung.value == 1 && jahr.value == 2021) {
        ergebnis.innerHTML = "Es muss keine Einkommen­steuer gezahlt werden.";

        // Einkommen zwischen 9745 und 14753
    } else if (einkommen.value >= 9745 && einkommen.value <= 14753 && veranlagung.value == 1 && jahr.value == 2021) {
        let a = (einkommen.value - 9744) / 10000;
        let b = ((995.21 * a + 1400) * a).toFixed(2);
        ergebnis.innerHTML = `Die Einkommenssteuer beträgt ${b} Euro.`;

    } else if (einkommen.value >= 9745 && einkommen.value <= 14753 && veranlagung.value == 1 && jahr.value == 2021) {
        let a = (einkommen.value - 9744) / 10000;
        let b = ((995.21 * a + 1400) * a).toFixed(2);
        ergebnis.innerHTML = `Die Einkommenssteuer beträgt ${b} Euro.`;

        // Einkommen >= 14754 && Einkommen <= 57918
    } else if (einkommen.value >= 14754 && einkommen.value <= 57918 && veranlagung.value == 1 && jahr.value == 2021) {
        let a = (einkommen.value - 14753) / 10000;
        let b = ((208.85 * a + 2397) * a + 950.96).toFixed(2);
        ergebnis.innerHTML = `Die Einkommenssteuer beträgt ${b} Euro.`;

        // Einkommen >= 57919 && Einkommen <= 274612
    } else if (einkommen.value >= 57919 && einkommen.value <= 274612 && veranlagung.value == 1 && jahr.value == 2021) {
        let b = ((0.42 * einkommen.value - 9136.63)).toFixed(2);
        ergebnis.innerHTML = `Die Einkommenssteuer beträgt ${b} Euro.`;

        // Einkommen >= 274613 
    } else if (einkommen.value >= 275613 && veranlagung.value == 1 && jahr.value == 2021) {
        let b = (((0.45 * einkommen.value) - 17374.99)).toFixed(2);
        ergebnis.innerHTML = `Die Einkommenssteuer beträgt ${b} Euro.`;

        // 2021 
        // Zusammenveranlagung
        // Einkommen unter 9744
    } else if (einkommen.value <= 9744 && veranlagung.value == 2 && jahr.value == 2021) {
        ergebnis.innerHTML = "Es muss keine Einkommen­steuer gezahlt werden.";

    } else if (einkommen.value >= 9745 && einkommen.value <= 14753 && veranlagung.value == 2 && jahr.value == 2021) {
        let a = ((einkommen.value / 2) - 9744) / 10000;
        let b = ((995.21 * a + 1400) * a).toFixed(2);
        ergebnis.innerHTML = `Die Einkommenssteuer beträgt ${b} Euro.`;

        // Einkommen zwischen 14754 und 57918
    } else if (einkommen.value >= 14754 && einkommen.value <= 57918 && veranlagung.value == 2 && jahr.value == 2021) {
        let a = ((einkommen.value / 2) - 14753) / 10000;
        let b = ((208.85 * a + 2397) * a + 950.96).toFixed(2);
        ergebnis.innerHTML = `Die Einkommenssteuer beträgt ${b} Euro.`;

        // Einkommen zwischen 57919 und 274612
    } else if (einkommen.value >= 57919 && einkommen.value <= 274612 && veranlagung.value == 2 && jahr.value == 2021) {
        let b = ((0.42 * (einkommen.value / 2)) - 9136.63).toFixed(2);
        ergebnis.innerHTML = `Die Einkommenssteuer beträgt ${b} Euro.`;

        // Einkommen über 274613 
    } else if (einkommen.value >= 274613 && veranlagung.value == 2 && jahr.value == 2021) {
        let b = ((0.45 * (einkommen.value / 2)) - 17374.99).toFixed(2);
        ergebnis.innerHTML = `Die Einkommenssteuer beträgt ${b} Euro.`;

        // 2020 
        // Einzelveranlagung
        // Einkommen unter 9408
    } else if (einkommen.value <= 9408 && veranlagung.value == 1 && jahr.value == 2020) {
        ergebnis.innerHTML = "Es muss keine Einkommen­steuer gezahlt werden.";

        // Einkommen zwischen 9408 und 14532   
    } else if (einkommen.value >= 9409 && einkommen.value <= 14532 && veranlagung.value == 1 && jahr.value == 2020) {
        let a = (einkommen.value - 9408) / 10000;
        let b = ((972.87 * a + 1400) * a).toFixed(2);
        ergebnis.innerHTML = `Die Einkommenssteuer beträgt ${b} Euro.`;

        // Einkommen zwischen 14533 und 57051
    } else if (einkommen.value >= 14532 && einkommen.value <= 57051 && veranlagung.value == 1 && jahr.value == 2020) {
        let a = (einkommen.value - 14732) / 10000;
        let b = ((212.02 * a + 2397) * a + 972.79).toFixed(2);
        ergebnis.innerHTML = `Die Einkommenssteuer beträgt ${b} Euro.`;

        // Einkommen zwischen 57052 und 270500
    } else if (einkommen.value >= 57052 && einkommen.value <= 270500 && veranlagung.value == 1 && jahr.value == 2020) {
        let b = ((0.42 * einkommen.value - 8963.74)).toFixed(2);
        ergebnis.innerHTML = `Die Einkommenssteuer beträgt ${b} Euro.`;

        // Einkommen über 270501 
    } else if (einkommen.value >= 270501 && veranlagung.value == 1 && jahr.value == 2020) {
        let b = ((0.45 * einkommen.value) - 17078.74).toFixed(2);
        ergebnis.innerHTML = `Die Einkommenssteuer beträgt ${b} Euro.`;

        // 2020 
        // Zusammenveranlagung
        // Einkommen unter 9408
    } else if (einkommen.value <= 9408 && veranlagung.value == 2 && jahr.value == 2020) {
        ergebnis.innerHTML = "Es muss keine Einkommen­steuer gezahlt werden.";

        // Einkommen zwischen 9408 und 14532   
    } else if (einkommen.value >= 9409 && einkommen.value <= 14532 && veranlagung.value == 2 && jahr.value == 2020) {
        let a = ((einkommen.value / 2) - 9408) / 10000;
        let b = ((972.87 * a + 1400) * a).toFixed(2);
        ergebnis.innerHTML = `Die Einkommenssteuer beträgt ${b} Euro.`;

        // Einkommen zwischen 14533 und 57051   
    } else if (einkommen.value >= 14533 && einkommen.value <= 57051 && veranlagung.value == 2 && jahr.value == 2020) {
        let a = ((einkommen.value / 2) - 14533) / 10000;
        let b = ((212.02 * a + 2397) * a + 972.79).toFixed(2);
        ergebnis.innerHTML = `Die Einkommenssteuer beträgt ${b} Euro.`;

        // Einkommen zwischen 57052 und 270500   
    } else if (einkommen.value >= 57052 && einkommen.value <= 270500 && veranlagung.value == 2 && jahr.value == 2020) {
        let b = ((0.42 * (einkommen.value / 2) - 8963.74)).toFixed(2);
        ergebnis.innerHTML = `Die Einkommenssteuer beträgt ${b} Euro.`;

        // Einkommen über 270501
    } else if (einkommen.value >= 270501 && veranlagung.value == 2 && jahr.value == 2020) {
        let b = (((0.45 * (einkommen.value / 2)) - 17078.74)).toFixed(2);
        ergebnis.innerHTML = `Die Einkommenssteuer beträgt ${b} Euro.`;

        // 2019
        // Einzelveranlagung
        // Einkommen unter 9168
    } else if (einkommen.value <= 9168 && veranlagung.value == 1 && jahr.value == 2019) {
        ergebnis.innerHTML = "Es muss keine Einkommen­steuer gezahlt werden.";

        // Einkommen zwischen 9169 und 14254    
    } else if (einkommen.value >= 9169 && einkommen.value <= 14254 && veranlagung.value == 1 && jahr.value == 2019) {
        let a = (einkommen.value - 9168) / 10000;
        let b = ((980.14 * a + 1400) * a).toFixed(2);
        ergebnis.innerHTML = `Die Einkommenssteuer beträgt ${b} Euro.`;

        // Einkommen zwischen 14255 und 55960   
    } else if (einkommen.value >= 14255 && einkommen.value <= 55960 && veranlagung.value == 1 && jahr.value == 2019) {
        let a = (einkommen.value - 14732) / 10000;
        let b = ((212.02 * a + 2397) * a + 965.58).toFixed(2);
        ergebnis.innerHTML = `Die Einkommenssteuer beträgt ${b} Euro.`;

        // Einkommen zwischen 55961 und 265326   
    } else if (einkommen.value >= 55961 && einkommen.value <= 265326 && veranlagung.value == 1 && jahr.value == 2019) {
        let b = (0.42 * einkommen.value - 8780.90).toFixed(2);
        ergebnis.innerHTML = `Die Einkommenssteuer beträgt ${b} Euro.`;

        // Einkommen über 265327  
    } else if (einkommen.value >= 265327 && veranlagung.value == 1 && jahr.value == 2019) {
        let b = ((0.45 * einkommen.value) - 16740.68).toFixed(2);
        ergebnis.innerHTML = `Die Einkommenssteuer beträgt ${b} Euro.`;

        // 2019
        // Zusammenveranlagung
        // Einkommen unter 9168
    } else if (einkommen.value <= 9168 && veranlagung.value == 2 && jahr.value == 2019) {
        ergebnis.innerHTML = "Es muss keine Einkommen­steuer gezahlt werden.";

        // Einkommen zwischen 9169 und 14254     
    } else if (einkommen.value >= 9169 && einkommen.value <= 14254 && veranlagung.value == 2 && jahr.value == 2019) {
        let a = ((einkommen.value / 2) - 9168) / 10000;
        let b = ((980.14 * a + 1400) * a).toFixed(2);
        ergebnis.innerHTML = `Die Einkommenssteuer beträgt ${b} Euro.`;

        // Einkommen zwischen 14255 und 55960   
    } else if (einkommen.value >= 14255 && einkommen.value <= 55960 && veranlagung.value == 2 && jahr.value == 2019) {
        let a = ((einkommen.value / 2) - 14254) / 10000;
        let b = ((216.16 * a + 2397) * a + 965.58).toFixed(2);
        ergebnis.innerHTML = `Die Einkommenssteuer beträgt ${b} Euro.`;

        // Einkommen zwischen 55961 und 265326   
    } else if (einkommen.value >= 55961 && einkommen.value <= 265326 && veranlagung.value == 2 && jahr.value == 2019) {
        let b = ((0.42 * (einkommen.value / 2) - 8780.90)).toFixed(2);
        ergebnis.innerHTML = `Die Einkommenssteuer beträgt ${b} Euro.`;

        // Einkommen über 265327   
    } else if (einkommen.value >= 265327 && veranlagung.value == 2 && jahr.value == 2019) {
        let b = ((0.45 * (einkommen.value / 2) - 16740.68)).toFixed(2);
        ergebnis.innerHTML = `Die Einkommenssteuer beträgt ${b} Euro.`;
    }
}


/* Assignment problem- 1 */
    function anaToVori(ana) {
        const vori = ana / 16;
        return vori;
    }
    //🎀 function calling //🎀
    const herAna = anaToVori(16*2*3);
    console.log(herAna);
// -------------------------------------------------------------
/* Assignment problem- 2 */
    function pandaCost(singaraQuantity, samusaQuantity, jalebiQuantity) {
        const perSingaraCost = 7;
        const perSamusaCost = 10;
        const perJalebiCost = 15;
        /* finding total cost */
        const singaraQuantityCost = perSingaraCost * singaraQuantity;
        const samusQuantityCost = perSamusaCost * samusaQuantity;
        const jalebiQuantityCost = perJalebiCost * jalebiQuantity;
        const totalCost = singaraQuantityCost + samusQuantityCost + jalebiQuantityCost;
        return totalCost;
    }
    //🎀 function calling //🎀
    let babasTotalCost = pandaCost(7, 10, 15);
    console.log(babasTotalCost);
// -------------------------------------------------------------
/* Assignment problem- 3 */
    function picnicBudget()
/* Assignment problem- 4 */
/* Assignment problem- 5 */
/* Assignment problem- 1 */
    function anaToVori(ana) {
        const vori = ana / 16;
        return vori;
    }
    //🎀 function calling //🎀
    const herAna = anaToVori(16*2*3);
    console.log(herAna);
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* Assignment problem- 3 */
    function picnicBudget(people) {
        costPerPeopleWhile100 = 5000;
        costperpeoplewhile101To200 = 4000;
        costperpeoplewhile201Torest = 3000;
        if(people <= 100) {
            const cost = people * costPerPeopleWhile100;
            return cost;
        }
        else if(people <= 200) {
            const first100PeopleCost = 100 * costPerPeopleWhile100;
            const secondRangePeople = people - 100;
            const second100PeopleCost = secondRangePeople * costperpeoplewhile101To200;
            totalCost = first100PeopleCost + second100PeopleCost;
            return totalCost
        }
        else {
            const first100PeopleCost = 100 * costPerPeopleWhile100;
            const secondRangePeople = people - 100;
            const second100PeopleCost = secondRangePeople * costperpeoplewhile101To200;
            const restPeople = people - 200;
            const restPeopleCost = restPeople * costperpeoplewhile201Torest;
            const totalCost = first100PeopleCost + second100PeopleCost + restPeopleCost;
            return totalCost;
        }
    }
    //🎀 function calling //🎀
    const ourPicnicBudget = picnicBudget(1+9+90+1+99+1+1+48);
    console.log(ourPicnicBudget);
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* Assignment problem- 4 */
    friends = ['Rahim Kha', 'Abul Ali', 'Jomila Begum', 'Rami Malek', 'Upol Shah', 'Qurban Pathan']
    console.log(typeof friends);
    console.log(friends.length);
    function oddFriend(array) {
        let oddNames = [];
        for(let i=0; i<friends.length; i++) {
            let element = array[i];
            if((friends.indexOf(element))%2==1) {
                oddNames.push(element);
            }
            
        }
        return oddNames;   
    }
    //🎀 function calling //🎀   
    const firstOddName = oddFriend(friends);
    console.log(firstOddName); 
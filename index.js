/*🎀🎀🎀 Assignment problem- 1 🎀🎀🎀*/
    function anaToVori(ana) {
        //🎀🎀--error handeling--//🎀🎀
        if(typeof ana != 'number'){
            return 'enter a valid number';
        }
        if(ana <= 0){
            return 'please enter a number grater than 0';
        }
        const vori = ana / 16;
        return vori;
    }
        //🎀 function calling //🎀
        const herAna = anaToVori(16*2*3);
        console.log(herAna);
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*🎀🎀🎀 Assignment problem- 2 🎀🎀🎀*/
    function pandaCost(singaraQuantity, samusaQuantity, jalebiQuantity) {
        //🎀🎀--error handeling--//🎀🎀
        
        if(singaraQuantity <= 0 || samusaQuantity <= 0 || jalebiQuantity <= 0) {
            return 'Please enter a number grater than 0';
        }
        // if(typeof singaraQuantity != 'number' || samusaQuantity != 'number' || jalebiQuantity != 'number'){
        //     return 'Enter a valid number';
        // }
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
        let clintonsTotalCost = pandaCost(7,10,15);
        console.log(clintonsTotalCost);
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*🎀🎀🎀 Assignment problem- 3 🎀🎀🎀*/
    function picnicBudget(people) {
        //🎀🎀--error handeling--//🎀🎀
        if(people <= 0){
            return 'Please enter a valid number';
        }
        if(typeof people != 'number'){
            return 'People should be a valid number';
        }
        costPerPeopleWhile100 = 5000;
        costperpeoplewhile101To200 = 4000;
        costperpeoplewhile201ToRest = 3000;
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
            const restPeopleCost = restPeople * costperpeoplewhile201ToRest;
            const totalCost = first100PeopleCost + second100PeopleCost + restPeopleCost;
            return totalCost;
        }
    }
        //🎀 function calling //🎀
        const ourPicnicBudget = picnicBudget(1+9+90+1+99+1+1+48);
        console.log(ourPicnicBudget);
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*🎀🎀🎀 Assignment problem- 4 🎀🎀🎀*/
    const friends = ['Qurban Pathan', 'Abul Ali', 'Jomila Begum', 'Rami Malek', 'Upol Shah', 'Rahim Kha']
    function oddFriend(names) {
        //🎀🎀--error handeling--//🎀🎀
        if(typeof names != 'object') {
            return 'Please enter an array of friends'
        }
        if(names.length == 0) {
            return 'This is an empty array'
        }
        for( let i = 0; i < names.length; i++){
            var name = names[i];
            if(name.length % 2==1){
              return name;
            }
        }
        
    }
        //🎀 function calling //🎀
        var targetFriend = oddFriend(friends);
        console.log(targetFriend);
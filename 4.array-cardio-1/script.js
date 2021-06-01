// Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
        { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
        { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
        { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
        { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
      ];
  
      const people = [
        'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
        'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
        'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
        'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
        'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
      ];
      
      // Array.prototype.filter()
      // 1. Filter the list of inventors for those who were born in the 1500's
  
      // Array.prototype.map()
      // 2. Give us an array of the inventors first and last names
  
      // Array.prototype.sort()
      // 3. Sort the inventors by birthdate, oldest to youngest
  
      // Array.prototype.reduce()
      // 4. How many years did all the inventors live all together?
  
      // 5. Sort the inventors by years lived
  
      // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
      // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
  
  
      // 7. sort Exercise
      // Sort the people alphabetically by last name
  
      // 8. Reduce Exercise
      // Sum up the instances of each of these
      const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
  

      // 1
      let fifteen = inventors.filter(inventor => { //filter loops over the elements in an array and returns an array based on the return received from the callback fn. true or false
        if(inventor.year > 1500 && inventor.year < 1600) return true //return the filter fn. true i.e.-> keep the element in the newly made array
      })
      console.table(fifteen);

      // 2
      let names = inventors.map((inventor => `${inventor.first} ${inventor.last}`)) //same as filter, loops over elements and creates a new array according to the conditions inside callback fn.. We return the array element not true and flase in this case
      console.log(names);

      // 3
      let ordered = inventors.sort((a, b)=> (a.year > b.year)? 1 : -1)
      console.table(ordered);

      //4
      let reduced = inventors.reduce((accumulator, currentValue) => {//The first time the callback is called, accumulator and currentValue can be one of two values. 
        accumulator + (currentValue.passed - currentValue.year)      //If initialValue is provided in the call to reduce(), then accumulator will be equal to initialValue, 
      }, 0)//initial value is set to 0.                              //and currentValue will be equal to the first value in the array. If no initialValue is provided, 
      console.log(reduced);                                          //then accumulator will be equal to the first value in the array, and currentValue will be equal to the second.

      //5
      let oldest = inventors.sort((a, b) => (a.passed - a.year) > (b.passed - b.year) ? 1 : -1);
      console.table(oldest)

      //6
      // site = https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
      // let category = document.querySelector('.mw-category');
      // let links = Array.from(category.querySelectorAll('a'));
      // let de = links.map(link => link.textContent).filter(streetName => streetName.includes('de'));

      //7
      const alpha = people.sort((lastOne, nextOne) => {
        const [aLast, aFirst] = lastOne.split(', ')
        const [bLast, bFirst] = nextOne.split(', ')
        return aLast > bLast ? -1 : 1;
      });
      console.log(alpha);

      //8
      const transportation = data.reduce(function (obj, item){
        console.log(item);
        if(!obj[item]) obj[item] = 0;
        obj[item]++;
        return obj;
      }, {})

      console.log(transportation)
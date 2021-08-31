let form = document.getElementById('namefood')

form.addEventListener('submit', (evt)=>{
    evt.preventDefault();
    let name = document.getElementById('name')
    let food = document.getElementById('food')

    let namefoodObj = {
        name: name.value,
        food: food.value
    }

    // console.log(toString(messageObj))
    axios.post("https://gr8b8m8.herokuapp.com/submit/", namefoodObj)
        .then((res)=> {
            let name = res.data.name
            let food = res.data.food
            let tr = document.getElementById('input')
            let td1 = document.createElement('td')
            let td2 = document.createElement('td')
            td.textContent(name)
            td2.textContent(food)
            tr.appendChild(td1,td2)
        });
  });
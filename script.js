
const data = {}

getReservations('http://127.0.0.1:8000/');

function closeSeat(id, url, name) {
    fetch(url+id+'/'+ name)
        .then(res => res.json())
        .then(data => {
            document.getElementById("p"+id).innerHTML = data[id]['name'];
            document.getElementById("button"+id).disabled = true;
            console.log(data)
        })
    //console.log(data);
  }

  function getReservations(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            for(i=0; i< Object.keys(data).length; i++){
                console.log('hello');
                var number = i+1;
                var string = 'p'+number;
                console.log(string);
                if(data[number]['state']){
                    document.getElementById("button"+number).disabled = true;
                    document.getElementById(string).innerHTML = data[number]['name'];
                }
                
            }
            //console.log(data)
        })
    //console.log(data);
  }


  
  

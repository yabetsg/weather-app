// https://api.weatherapi.com/v1/current.json?key=5970c03ba0ec486bad4223716232104&q=london
export const getWeatherData = async (url)=>{
    
    try{
        const data = await fetch(url,{
        mode:'cors'
    });
     const response = await data.json();
     return response;
    }catch(e){
        alert(e);
    }
 
    
}


export const buildURL = (city)=>{
    return `https://api.weatherapi.com/v1/current.json?key=5970c03ba0ec486bad4223716232104&q=${city}`;
}

export const getUserInput =  async ()=>{
    return new Promise((resolve)=>{
        const form = document.querySelector('form');
        const userInput = document.getElementById('city');
        form.addEventListener('submit',(e)=>{ 
             e.preventDefault();
            let city = userInput.value;
            const url = buildURL(city);
            resolve(url);
    });
    })
    
   
}

const print = async () =>{
        const url = await getUserInput();  
        console.log(url);
       let response = await getWeatherData(url);
       console.log(response);
    
}
print();



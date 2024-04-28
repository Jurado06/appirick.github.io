const apiRick=async (pagina)=>{
    let url="https://rickandmortyapi.com/api/character/?page="+pagina;
    const api= await fetch(url);
    const data = await api.json();
    console.log("Data de Rick y Morty",data);
    divres=document.querySelector("#resultado");
    divres.innerHTML=""
        data.results.map(item=>{
        divitem=document.createElement('div')
        divitem.innerHTML=`
        <div class="card" style="width: 18rem;">
        <img src="${item.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text"><b>status:</b>${item.status}</p>
            <p class="card-text"><b>species:</b>${item.species}</p>
            <p class="card-text"><b>gender:</b>${item.gender}</p>
            
        </div>
        </div>
        `     
        divres.appendChild(divitem);
    })

}

apiRick(1)

const searchButton=document.getElementById('search-button');
const searchField=document.getElementById('search-field');
const errormsg=document.getElementById('error-massage');
const result=document.getElementById('total-result');
const searchResult=document.getElementById('search-result');

// event listenar part 
searchButton.addEventListener('click',function(){
  const searchText=searchField.value;
  if (searchText==='') {
    errormsg.innerText="Plz write your Books Name"
  }
  else{
    totalResult()
    const url=`https://openlibrary.org/search.json?q=${searchText}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>searchBooks(data.docs))
  }
  searchField.value=''
})
      // searchBooks part 
        const searchBooks=datas=>{ 
        const searchText=searchField.value;
        if (searchText==="") {
          errormsg.innerText="Plz write your Books Name"
          searchResult.textContent="";
        }
  
        errormsg.innerText='';
        datas?.forEach(data=>{
          const coverUrl=`https://covers.openlibrary.org/b/id/${data.cover_i}-M.jpg`
        const div=document.createElement('div')
        div.classList.add('col');
        div.innerHTML=`
            <div class="card h-100">
              <div class="card-body">
                <img src="${coverUrl}" class=" fluid        
                card-img-top" alt="..." width="500px"      
                height="500px" >
                <h6 class="card-title fs-3">Books Name: ${data.title}.</h6>
                <p class="card-text fs-4">Author Name: ${data.author_name} .</p>
                <p class="card-text fs-4">Author Name: ${data.publisher}.</p>
                <p class="card-text fs-4">First Published: ${data.first_publish_year}.</p>
              </div>
            </div>
        `
        searchResult.appendChild(div)
    }
        )
  }

// total result part 

const totalResult=()=>{
  const searchText=searchField.value;
  const url=`https://openlibrary.org/search.json?q=${searchText}`
  fetch(url)
  .then(res=>res.json())
  .then(data=>diplayResult(data))
}
// diplayResult
const diplayResult=data=>{
  if (data.numFound===0) {
    result.innerText="No Result Found"
  }
  else{
    const bookCount=data.docs;
    result.innerText=`Total Result Showing ${bookCount.length} and Total Founds: ${data.numFound}`
  }
  
}

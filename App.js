const fetch = require('node-fetch');
const fs = require('fs');

(async () => {
    try {
    // Default options are marked with *
    const res = await fetch('https://jsonplaceholder.typicode.com/posts'); 

  //console.log('Status Code:', res.status); 

    const posts= await res.json();
    //console.log(posts);

    fs.writeFile('result/post.json', JSON.stringify(posts), (err)=> {
      
        console.log(err);
    })
    
  } catch (err) {
    console.log(err.message); 
  }
})
();
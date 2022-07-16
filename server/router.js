const express =  require('express');

const router = express.Router();


router.get('/:search', (req, res) => {
    const word = req.params.search;
    console.log(search);
    
    const url =  `https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=`;
    console.log(url);
   

    fetch(url)
      .then(response => { return response.json(); })
        .then(data => { 
          console.log(data); 
          res.send(data);        
        })
          .catch(err => { console.log(err); });        
});

module.exports = router;
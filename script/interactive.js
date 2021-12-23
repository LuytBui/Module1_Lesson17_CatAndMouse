function showAnimalStatus(animal) {
    if (!animal.live) {
        document.write(`name:${animal.name} - death<br>`);
    } else {
        document.write(`name:${animal.name} |  
            breed:${animal.breed} | 
            weight:${animal.weight} | 
            speed:${animal.speed} | 
            <br>`);
    }

}
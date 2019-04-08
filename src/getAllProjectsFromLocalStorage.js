const arrayObjectsOfAllProjects = function (){
  const myArray = localStorage.getItem('projects').split(',');
  const chunk_size = 2
  function chunkArray(myArray, chunk_size){
	  let results = [];

	  while(myArray.length) {
	    results.push(myArray.splice(0,chunk_size));
	  }
	  return results
  }
  let allProjects = chunkArray(myArray,chunk_size)
  allProjects.map(elem => {
    return {id: elem[0], name: elem[1]}
  });
  return allProjects
}

export { arrayObjectsOfAllProjects }
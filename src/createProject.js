export class project {
  constructor(name){
  	this._name = name;
    this._projectId = maxIdofProjectsinLocalStorage()
    
   function maxIdofProjectsinLocalStorage (){
      let idsOfProjects = localStorage.getItem('projects').split(',').filter(elem => !isNaN(parseInt(elem)))
      //get latest id of a project stored in localstorage, or set it to 1
      let max = Math.max(...idsOfProjects) || 1
      return  max + 1;
    }
  	
  }

  get values() {
	return [this._projectId, this._name]
  }

}
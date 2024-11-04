

const getStoredGList =()=>{
    const storedListStr = localStorage.getItem('added-list');
    
   if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        
        return storedList;
   }
   else{
        return [];
   }
}

const addToStoredGLst = (id)=>{
    const storedList =getStoredGList();
    if (!storedList.includes(id)) {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('added-list', storedListStr);
    }
}
        


export {addToStoredGLst, getStoredGList };


const getStoredwGList =()=>{
    const storedListStr = localStorage.getItem('added-Wlist');
    
   if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        
        return storedList;
   }
   else{
        return [];
   }
}

const addToStoredwLst = (id)=>{
    const storedList =getStoredwGList();
    if (!storedList.includes(id)) {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('added-Wlist', storedListStr);
    }
}
        


export {addToStoredwLst,getStoredwGList};
import { toast } from 'react-toastify';
import {getStoredwGList} from './utility2'

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
    if (!storedList.includes(id) && !getStoredwGList().includes(id)) {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('added-list', storedListStr);
        toast("This item is added to cart");
    }
}

const removeFromStoredGList = (id) => {
    const storedList = getStoredGList();
    if (storedList.includes(id)) {
        console.log('sdfh');
        const updatedList = storedList.filter(item => item !== id); // Remove the specified item
        const storedListStr = JSON.stringify(updatedList);
        localStorage.setItem('added-list', storedListStr);
       
    }
}
        


export {addToStoredGLst, getStoredGList, removeFromStoredGList };
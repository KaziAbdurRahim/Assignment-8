
import { toast } from 'react-toastify';
import {getStoredGList} from './utility'
const getStoredwGList =()=>{
    const storedListStr = localStorage.getItem('added-Wlist');
    
    return storedListStr ? JSON.parse(storedListStr) : [];
}

const addToStoredwLst = (id)=>{
    const storedList =getStoredwGList();
    if (!storedList.includes(id) && !getStoredGList().includes(id)) {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('added-Wlist', storedListStr);
        toast("This item is added to the Wish List")
    }
}

const removeFromStoredwList = (id) => {
    const storedList = getStoredwGList();
    if (storedList.includes(id)) {
        
        const updatedList = storedList.filter(item => item !== id); // Remove the specified item
        const storedListStr = JSON.stringify(updatedList);
        localStorage.setItem('added-Wlist', storedListStr);
       
    }
}
        


export {addToStoredwLst,getStoredwGList,removeFromStoredwList};
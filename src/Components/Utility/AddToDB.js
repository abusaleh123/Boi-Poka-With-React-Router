import { toast } from "react-toastify";


const getStoredReadList = () => {
    const storedlistStr = localStorage.getItem('read-list');
    if(storedlistStr){
        const storedList = JSON.parse(storedlistStr);
        return storedList;
    }
    else{
        return [];
    }
}

const addToStoredReadList = (id) => {
    const storedList = getStoredReadList();
    if(storedList.includes(id)){
        toast.error('already Added')
    }
    else{
        storedList.push(id);
        const storedlistStr = JSON.stringify(storedList);
        localStorage.setItem('read-list',storedlistStr);
        toast.success('This Book added to your read list');
    }
}


export {addToStoredReadList, getStoredReadList};




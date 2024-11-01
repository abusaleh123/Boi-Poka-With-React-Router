

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
        console.log(id, "already exist in the read list");
    }
    else{
        storedList.push(id);
        const storedlistStr = JSON.stringify(storedList);
        localStorage.setItem('read-list',storedlistStr);
    }
}


export {addToStoredReadList, getStoredReadList};




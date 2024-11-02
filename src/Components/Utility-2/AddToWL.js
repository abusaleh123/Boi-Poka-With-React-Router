import { toast } from "react-toastify";

const getStoredWishList = () => {
    const storedListStr = localStorage.getItem('wist-list');
    if(storedListStr) {
        const storedlist = JSON.parse(storedListStr);
        return storedlist
    }
    else{
        return []
    }
}

const addToStoredWishlist = (id) => {
const storedList = getStoredWishList();
if(storedList.includes(id)){
    console.log(id, "Already Exist in the wish List");
    toast.error('already Added')
}
else{
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList)
    localStorage.setItem('wist-list', storedListStr);
    toast.success('Your Book Added to wish list')
}
}
export {addToStoredWishlist, getStoredWishList}
export const counterAdd = "counter/Add";
export const counterSub = "counter/Sub";

//action hamesha object return krta ha aur type bnana zaroori hai dispatch k lye...
//count = 1 is lye k if count nh aayega 1 krdyga...
export const onIncrement = (count = 1) => {
    return {
        type: counterAdd,
        count: count
    }
}

export const onDecrement = (count = 1) => {
    return {
        type: counterSub,
        count: count        
    }
}
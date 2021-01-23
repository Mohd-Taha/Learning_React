export const counterAdd = "counter/Add";
export const counterSub = "counter/Sub";
export const githubFetchData = "fetchGithub/Data"
export const githubFetchLoading = "fetchGithub/Loading"

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

//redux thunk ek middleware use kia ha hmny... jo k ksi bhi async action k lye chahiye hoga
//uski wjah sy hmy action sy function return krwana pryga jis m dispatch milyga aur hr dispatch pr
//jo kaam krwana ha krwaskty (unlimited dispatched jo k hm conditionally call krskty hain)
//yaha ek call kia ha loading true k lye then data aajany k baad show krwany k lye then loading false k lye
export const onFetchUser = (userName) => {
    return function (dispatch) {
        dispatch({
            type: githubFetchLoading
        })
        fetch(`https://api.github.com/users/${userName}`)
            .then((res) => res.json())
            .then(res => {
                dispatch({
                    type: githubFetchData,
                    user: res
                })
                dispatch({
                    type: githubFetchLoading
                })
            })
    }
}
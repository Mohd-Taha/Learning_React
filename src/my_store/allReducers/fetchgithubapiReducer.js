import { githubFetchData, githubFetchLoading } from '../actiontype'

const initialStore = {
    loading: false,
    user: null,
}

export function reducerGithubFetchApi(my_store = initialStore, action) {
    const new_store = { ...my_store }
    console.log(action)
    
    switch (action.type) {
        case githubFetchLoading:
            new_store.loading = !my_store.loading;
            return new_store;

        case githubFetchData:
            new_store.user = action.user;
            return new_store;
    }

    return new_store
}
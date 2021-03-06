import { counterAdd, counterSub } from '../actiontype'

const initial_store = {
    count: 0,
}

//jb bhi action dispatch hoga wo yaha milyga...
//isk paas initialy action paas if calling time kia hoga tu theek wrna initial store lelega...
//2nd parameter m hmarypaas action aata ha (wo object jo action sy return kia ha yaha aata ha)

export function reducerCounter(mystore = initial_store, action) {
    const newstore = { ...mystore };

    switch (action.type) {
        case counterAdd:
            newstore.count += action.count;
            return newstore;
        case counterSub:
            newstore.count -= action.count;
            return newstore;
    }

    return newstore
}
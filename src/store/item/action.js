import { types } from "../item/types"

const updateItemList = itemList => {
    return {
        type: types.items,
        payload: itemList
    }
}

export default updateItemList;
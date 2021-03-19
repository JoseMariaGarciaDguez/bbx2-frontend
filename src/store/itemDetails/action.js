import { types } from "../item/types"

const detailAdd = (detail) =>({
   
        type: types.detail,
        payload:{
            detail,
        }
    
})
export default detailAdd;
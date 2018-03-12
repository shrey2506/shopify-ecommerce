export const sortBy = (state={sortBy: "best_match"}, action) =>{
    switch(action.type) {
        case "CHANGE_SORTBY":
        return {sortBy:action.text}

        default:
        return state

    }
}
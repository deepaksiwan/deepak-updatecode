import
    {
        CAMPUS_GET_REQUEST,
        CAMPUS_GET_SUCCESS,
        CAMPUS_GET_FAIL
} from "../constants/asCampusConstants";
    
export const asCampus = (state={asCampus:[]}, action) =>
{
    switch ( action.type )
    {
        case CAMPUS_GET_REQUEST:
            return {loading:true, asCampus: []}
        case CAMPUS_GET_SUCCESS:
            return {loading:false, asCampus:action.payload}
        case CAMPUS_GET_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
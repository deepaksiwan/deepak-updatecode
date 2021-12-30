import
    {
        FEATURE_GET_REQUEST,
        FEATURE_GET_SUCCESS,
        FEATURE_GET_FAIL
} from "../constants/featureConstants";
    
export const feature = (state={feature:[]}, action) =>
{
    switch ( action.type )
    {
        case FEATURE_GET_REQUEST:
            return {loading:true, feature: []}
        case FEATURE_GET_SUCCESS:
            return {loading:false, feature:action.payload}
        case FEATURE_GET_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
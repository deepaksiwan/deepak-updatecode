import
    {
        BANNER_GET_REQUEST,
        BANNER_GET_SUCCESS,
        BANNER_GET_FAIL
} from "../constants/bannerConstants";
    
export const banner = (state={banner:[]}, action) =>
{
    switch ( action.type )
    {
        case BANNER_GET_REQUEST:
            return {loading:true, banner: []}
        case BANNER_GET_SUCCESS:
            return {loading:false, banner:action.payload}
        case BANNER_GET_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
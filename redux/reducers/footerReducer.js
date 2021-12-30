import
    {
        FOOTER_GET_REQUEST,
        FOOTER_GET_SUCCESS,
        FOOTER_GET_FAIL
} from "../constants/footerConstants";
    
export const footer = (state={footer:[]}, action) =>
{
    switch ( action.type )
    {
        case FOOTER_GET_REQUEST:
            return {loading:true, footer: []}
        case FOOTER_GET_SUCCESS:
            return {loading:false, footer:action.payload}
        case FOOTER_GET_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
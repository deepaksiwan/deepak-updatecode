import
    {
        PARTNER_GET_REQUEST,
        PARTNER_GET_SUCCESS,
        PARTNER_GET_FAIL
} from "../constants/partnerConstants";

export const partner = (state={partner:[]}, action) =>
{
    switch ( action.type )
    {
        case PARTNER_GET_REQUEST:
            return {loading: true, partner: []}
        case PARTNER_GET_SUCCESS:
            return {loading: false, partner: action.payload}
        case PARTNER_GET_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}
import
    {
        TESTIMONIAL_GET_REQUEST,
        TESTIMONIAL_GET_SUCCESS,
        TESTIMONIAL_GET_FAIL
} from "../constants/testimonialConstants";

export const testimonial = (state={testimonial:[]}, action) =>
{
    switch ( action.type )
    {
        case TESTIMONIAL_GET_REQUEST:
            return {loading: true, testimonial: []}
        case TESTIMONIAL_GET_SUCCESS:
            return {loading: false, testimonial: action.payload}
        case TESTIMONIAL_GET_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}
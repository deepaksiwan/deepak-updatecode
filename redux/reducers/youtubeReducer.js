import
    {
        YOUTUBE_GET_REQUEST,
        YOUTUBE_GET_SUCCESS,
        YOUTUBE_GET_FAIL
} from "../constants/youtubeConstants";

export const youtube = (state={youtube:[]}, action) =>
{
    switch ( action.type )
    {
        case YOUTUBE_GET_REQUEST:
            return {loading: true, youtube: []}
        case YOUTUBE_GET_SUCCESS:
            return {loading: false, youtube: action.payload}
        case YOUTUBE_GET_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}
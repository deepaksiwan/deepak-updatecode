import { BLOGS_GET_REQUEST, BLOGS_GET_SUCCESS, BLOGS_GET_FAIL, BLOGS_DETAILS_GET_REQUEST, BLOGS_DETAILS_GET_SUCCESS, BLOGS_DETAILS_GET_FAIL} from "../constants/blogsConstants"

const initialState = {
    blogs: [],
    blogsDetail:[]
}

export const blogs = ( state =initialState, action )=>{
    switch ( action.type )
    {
        case BLOGS_GET_REQUEST:
            return { loading: true, blogs: [] }
        case BLOGS_GET_SUCCESS:
            return { loading: false, blogs: action.payload }
        case BLOGS_GET_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}


export const blogsDetails = ( state = initialState, action )=>{
    switch ( action.type )
    {
        case BLOGS_DETAILS_GET_REQUEST:
            return {...state, loading: true}
        case BLOGS_DETAILS_GET_SUCCESS:
            return { loading: false, blogsDetail: action.payload }
        case BLOGS_DETAILS_GET_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}



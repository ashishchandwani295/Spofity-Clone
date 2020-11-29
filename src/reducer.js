export const initialState = {
    user: null,
    playlists: null,
    playing: false,
    item: null,
    tracks: null
    //to be removed later, only for testing purposes
    //token: 'BQD2LsBkYUq9TPyKt_iQDC-UKHnu9bCQaQfmQUYwjT-s2PuQnl-sTByUBSjJ6maKnF1gh_WuUeuXQWv7jFfuGe_aP8A_dmH07fjrBWDhq57jmTmFAiKPvH4QMSFVJWsCdZQjZ6cFBNeqfj7uaRqaAIgKaCr5Yw6c7bQ_7kD-'
}


const reducer = (state, action) => {
    //Action => type(set or get anything), [payload]

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }

        case 'SET_PLAYLIST':
            return {
                ...state,
                playlists: action.playlists
            }

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                tracks: action.tracks
            }
    
        default:
            return {state}
    }
}

export default reducer;
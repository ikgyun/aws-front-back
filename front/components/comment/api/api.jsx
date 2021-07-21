/*
    비동기통신에 대한 내용을 넣는공간
*/

export const getComment = async (dispatch) => {
    dispatch({type:'GET_COMMENT'})
    try{
        const response = await fetch('http://18.117.176.89/api/comment')
        const data = await response.json()

        const result = data.map( obj => {
            return {...obj, date:obj.updatedAt.substr(0,10)}
        })
        
        dispatch({type:'GET_COMMENT_SUCCESS',payload:result})
    } catch (e) {
        dispatch({ type:'GET_COMMENT_ERROR',payload:e })
    }
}
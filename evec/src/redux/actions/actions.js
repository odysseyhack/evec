/** */
import axios from 'axios'

// const url = "http://uniutrecht01.nine.ch:5000/api/"
const url = process.env.NODE_ENV === 'production' ? "/api/" : "http://localhost:5000/api/"

export function loadArticles (page) {
    return (dispatch) => {
        axios.get(`${url}repos/${page}`)
        .then((res) => {
            let articles = res.data.docs
            dispatch({type:'LOAD_ARTICLES', articles})
        }).catch((err) => {
            console.log(err)
        })
    }
}
export function getUser (_id) {
    return axios.get(`${url}user/${_id}`).then((res)=>{
        return res.data
    }).catch(err=>console.log(err))
}

export function getUserProfile (_id) {
    return (dispatch) => {
        axios.get(`${url}user/profile/${_id}`).then((res)=>{
            let profile = res.data
            dispatch({type: 'SET_PROFILE', profile})
        }).catch(err=>console.log(err))
    }
}

export function searchArticles (query_term, page) {
    return (dispatch) => {
        axios.get(`${url}repo/search/${query_term}/${page}`)
        .then((res) => {
            let articles = res.data.docs
            dispatch({type: 'LOAD_ARTICLES', articles})
        }).catch((err) => console.log(err))
    }
}

export function getUpdates () {
    return (dispatch) => {
        axios.get(`${url}updates`)
        .then((res) => {
            let updates = res.data
            dispatch({type: 'LOAD_UPDATES', updates})
        }).catch((err) => console.log(err))
    }
}

export function getArticle (article_id) {
    return (dispatch) => {
        axios.get(`${url}repo/${article_id}`)
        .then((res) => {
            let article = res.data
            dispatch({type: 'VIEW_ARTICLE', article})
        }).catch((err) => console.log(err))
    }
}
// article_id, author_id, comment
export function comment () {
    return (dispatch) => {

    }
}
//req.body.article_id
export function clap (article_id) {
    return (dispatch) => {
        console.log('clapping...')
        axios.post(`${url}article/clap`,{ article_id }).then((res) => {
            dispatch({type:'CLAP_ARTICLE'})
        }).catch((err)=>console.log(err))
    }
}

export function toggleClose() {
    return (dispatch) => {
        dispatch({type: 'TOGGLE_MODAL', modalMode: false})
    }
}
export function toggleOpen() {
    return (dispatch) => {
        dispatch({type: 'TOGGLE_MODAL', modalMode: true})        
    }    
}

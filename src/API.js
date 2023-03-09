import axios from 'axios';
const LOGIN_USER_KEY = 'WD_FORUM_LOGIN_USER_KEY';

var baseURL;
if (process.env.REACT_APP_ENVIRONMENT && process.env.REACT_APP_ENVIRONMENT === 'PRODUCTION') {
    baseURL = process.env.REACT_APP_API_BASE_URL;
} else {
    baseURL = 'https://tasty-taters-backend.whoswho2.repl.co';
}

const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
});

/**
 * Add requireToken: true in request config, for API that required Authorization token
 */
api.interceptors.request.use(
    config => {
        if (config.requireToken && localStorage.getItem(LOGIN_USER_KEY)) {
            config.headers.common['Authorization'] = JSON.parse(localStorage.getItem(LOGIN_USER_KEY)).token;
        }

        return config;
    },
    err => {
        console.error(err);
    }
);

export default class API {
    getPosts = async params => {
        try {
            const response = await api.get('/posts/', { params });
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    };
    addPost = async postBody => {
        const formData = new FormData();

        for (const key in postBody) {
            formData.append(key, postBody[key]);
        }

        try {
            const response = await api.post('/posts/add/', formData);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    };
    deletePost = async id => {
        try {
            return await api.delete(`/posts/delete/${id}/`);
        } catch (error) {
            throw new Error(error);
        }
    };
    getItem = async params =>{
        try{
            const res =  await api.get('/item')
            return res.data.results
        }
        catch(error){
            throw new Error (error)
        }
    }
    getReviews = async(item_id) =>{
        let url = "/reviews/?item_id=" + item_id;
        const reviews = await api.get(url).then((response)=>{
            return response.data.results
        }).catch(err=>{
            throw new Error(err)
        })
        return reviews
    }
    addReview = async(name, body, like_count, item) =>{
        let url = "/reviews/add" 
        const reviews = await api.post(url, {name, body, like_count, item}).then((response)=>{
            return response.data.results
        }).catch(err=>{
            throw new Error(err)
        })
        return reviews
    }
}

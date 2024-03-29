import TokenService from "../services/token-service";
import config from "../config";

const ArticleApiService = {
  getArticles() {
    return fetch(`${config.API_ENDPOINT}/articles`, {
      headers: {}
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getArticle(articleId) {
    return fetch(`${config.API_ENDPOINT}/articles/${articleId}`, {
      headers: {
        //authorization: `basic ${TokenService.getAuthToken()}`
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getArticleComments(articleId) {
    return fetch(`${config.API_ENDPOINT}/articles/${articleId}/comments`, {
      headers: {
        //authorization: `basic ${TokenService.getAuthToken()}`
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  postComment(articleId, text) {
    return fetch(`${config.API_ENDPOINT}/comments`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        //authorization: `basic ${TokenService.getAuthToken()}`
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        article_id: articleId,
        text
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default ArticleApiService;

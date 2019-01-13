import axios from 'axios';

class BVService {
  constructor() {
    this.URL = new URL(`http://${process.env.VUE_APP_BV_HOST}`);
    this.defaultSearchParams = new URLSearchParams();
    this.defaultSearchParams.set('apiversion', process.env.VUE_APP_BV_API_VERSION);
    this.defaultSearchParams.set('passkey', process.env.VUE_APP_BV_PASSKEY);
  }
  
  setSearchParams(params = {}) {
    //this.URL.searchParams = this.defaultSearchParams;
    // for (key in params) {
    //   console.log(key);
    // }
  }

  getReviewsURL() {
    // const params = [
    //   {Filter: 'id:data-gen-2s9kaf0ugzn0p2flzl73ahuys'},
    //   {stats: 'reviews'}
    // ];
    // this.setSearchParams(params);
    
    return 'https://stg.api.bazaarvoice.com/data/products.json?apiversion=5.4&passkey=caB45h2jBqXFw1OE043qoMBD1gJC8EwFNCjktzgwncXY4&Filter=id:data-gen-2s9kaf0ugzn0p2flzl73ahuys&stats=reviews';
    //return 'http://stg.api.bazaarvoice.com/data/reviews.json?apiversion=5.4&passkey=caB45h2jBqXFw1OE043qoMBD1gJC8EwFNCjktzgwncXY4&Filter=ProductId:data-gen-moppq9ekthfzbc6qff3bqokie&Sort=Rating:desc&Limit=10&Stats=Reviews';
  }
}
const BV = new BVService();

export default {

  getReviews() {
    return axios.get(BV.getReviewsURL());
  }
}
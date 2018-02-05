import Reflux from 'reflux';
import {fruits} from './reducers/fruits.js';

class ResultsStore extends Reflux.Store {
  constructor() {
    super();
    this.state = {
      results: fruits
    }
  }
}

export default ResultsStore;

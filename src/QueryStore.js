import Reflux from 'reflux';

export const QueryActions = Reflux.createActions(['save']);

class QueryStore extends Reflux.Store {
  constructor() {
    super();
    this.state = {query: ''};
    this.listenables = [QueryActions];
  }

  onSave(query) {
    this.setState({query});
  }
}

export default QueryStore;

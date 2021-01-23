import ApiClient from './ApiClient';

class TeamsAPI extends ApiClient {
  constructor() {
    super('teams', { accountScoped: true });
  }
}

export default new TeamsAPI();

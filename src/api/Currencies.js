import Base from 'api/Base';
import config from 'config/config';

export default class Currencies extends Base {
    getCurrencies () {
        return this.apiClient.get(config.getCurrencies);
    }
}

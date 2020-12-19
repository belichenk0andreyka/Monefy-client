import Base from 'api/Base';
import config from 'config/config';

export default class Register extends Base {
    register (data) {
        return this.apiClient.post(config.register, data, {});
    }
}

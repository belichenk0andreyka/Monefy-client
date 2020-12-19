import Base from 'api/Base';
import config from 'config/config';

export default class Authorization extends Base {
    auth (data) {
        return this.apiClient.post(config.auth, data, {});
    }
    authGoogle (data) {
        return this.apiClient.post(config.auth_google, data, {});
    }
    authFacebook (data) {
        return this.apiClient.post(config.auth_facebook, data, {});
    }
}

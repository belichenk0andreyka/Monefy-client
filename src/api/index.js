import Actions from 'api/Actions';
import ApiClient from 'api/ApiClient';
import Register from 'api/Registration';
import Authorization from 'api/Authorization';

export default function ({ apiPrefix }) {
    const api = new ApiClient({ prefix: apiPrefix});
    return {
        authorization: new Authorization({ apiClient: api }),
        register: new Register({ apiClient: api }),
        action: new Actions({ apiClient: api }),
    };
}

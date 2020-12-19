import apiFactory from 'api';
import config from 'config/config';

export default apiFactory({
    apiPrefix: config[process.env.NODE_ENV].apiPrefix,
});

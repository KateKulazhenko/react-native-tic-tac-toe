import local from './local';
import stage from './stage';

const config = {
    local,
    stage,
};

export default Object.freeze(Object.assign(({}, config[process.env.NODE_ENV])));
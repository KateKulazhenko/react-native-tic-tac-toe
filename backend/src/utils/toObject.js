import _ from 'lodash';

export default (doc, omit = []) => {
    let docInfo = null;

    if(!_.isNull(doc)) {
        docInfo = _.omit(doc.toObject(), omit);
    }

    return docInfo;
}
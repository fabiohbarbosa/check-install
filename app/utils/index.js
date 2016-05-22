import YAML from 'yamljs';
import Log from 'log';

let properties = YAML.load('./app/utils/properties.yaml');

exports.properties = properties;
exports.log = new Log(properties.log.level);

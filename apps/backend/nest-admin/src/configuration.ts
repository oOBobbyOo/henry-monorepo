import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import * as yaml from 'js-yaml'

const YAML_CONFIG_FILENAME = 'config.yaml'

const filePath = join(__dirname, '../config', YAML_CONFIG_FILENAME)

console.log('[ filePath ] >>:', filePath)

export default () => {
  return yaml.load(readFileSync(filePath, 'utf8')) as Record<string, any>
}

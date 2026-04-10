import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import * as yaml from 'js-yaml'
import { merge } from 'lodash-es'

const YAML_COMMON_CONFIG_FILENAME = 'config.yaml'

const filePath = join(__dirname, '../config', YAML_COMMON_CONFIG_FILENAME)

const envPath = join(
  __dirname,
  '../config',
  `config.${process.env.NODE_ENV || 'dev'}.yaml`,
)

const commonConfig = yaml.load(readFileSync(filePath, 'utf8'))

const devConfig = yaml.load(readFileSync(envPath, 'utf8'))

export default () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  return merge(commonConfig, devConfig) as Record<string, any>
}

import { Card, Descriptions, Space } from 'antd'
import { useTranslation } from 'react-i18next'
import pkg from '~/package.json'

interface PkgVersionInfo {
  name: string
  version: string
}

interface PkgJson {
  name: string
  version: string
  dependencies: PkgVersionInfo[]
  devDependencies: PkgVersionInfo[]
}

const { name, version, dependencies, devDependencies } = pkg

function transformVersionData(tuple: [string, string]): PkgVersionInfo {
  const [$name, $version] = tuple
  return {
    name: $name,
    version: $version,
  }
}

const pkgJson: PkgJson = {
  name,
  version,
  dependencies: Object.entries(dependencies).map(item =>
    transformVersionData(item),
  ),
  devDependencies: Object.entries(devDependencies).map(item =>
    transformVersionData(item),
  ),
}

function About() {
  const { t } = useTranslation()

  return (
    <Space className="w-full" direction="vertical" size={16}>
      <Card
        className="card-wrapper"
        title={t('page.about.title')}
        variant="borderless"
        size="small"
      >
        <p>{t('page.about.introduction')}</p>
      </Card>

      <Card
        className="card-wrapper"
        title={t('page.about.title')}
        variant="borderless"
        size="small"
      >
        <Descriptions
          bordered
          size="small"
          column={{ lg: 2, md: 2, sm: 2, xl: 2, xs: 1, xxl: 2 }}
        >
          {pkgJson.dependencies.map((item) => {
            return (
              <Descriptions.Item
                key={item.name}
                label={item.name}
                className="text-truncate"
              >
                {item.version}
              </Descriptions.Item>
            )
          })}
        </Descriptions>
      </Card>

      <Card
        className="card-wrapper"
        title={t('page.about.devDep')}
        variant="borderless"
        size="small"
      >
        <Descriptions
          bordered
          size="small"
          column={{ lg: 2, md: 2, sm: 2, xl: 2, xs: 1, xxl: 2 }}
        >
          {pkgJson.devDependencies.map((item) => {
            return (
              <Descriptions.Item
                key={item.name}
                label={item.name}
                className="text-truncate"
              >
                {item.version}
              </Descriptions.Item>
            )
          })}
        </Descriptions>
      </Card>
    </Space>
  )
}

export default About

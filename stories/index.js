import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import {muiTheme} from 'storybook-addon-material-ui'
import { action, decorateAction } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import backgrounds from '@storybook/addon-backgrounds'

import { Brandy, Heather, Sam, SamOption, Sidney, SidneyOption, Sidelle, Tabs } from 'ssp-ui'
import AllApps from '../src/svg-icons/AllApps'
import injectTapEventPlugin from 'react-tap-event-plugin'
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

storiesOf('Brandy', module)
.addDecorator(withKnobs)
.addDecorator(backgrounds([
  { name: 'metroBg', value: 'rgba(204, 224, 255, 0.2)', default: true },
  { name: 'metroBlue', value: '#002D72' }
]))
.add('default', () => <Brandy
  onLogoClick={action('[Brandy] logoclicked')} />)
.add('variant M', () => <Brandy
  logoVariant={text('logoVariant', 'm')}
  onLogoClick={action('[Brandy] logoclicked')} />)

storiesOf('Heather', module)
  .addDecorator(muiTheme())
  .addDecorator(withKnobs)
  .add('menu icon', () => <Heather
    notificationCount={number('notificationCount', 10)}
    isMenuOpen={boolean('isMenuOpen', false)}
    onMenuClick={action('clicked')}
    onLogoClick={action('clicked')}
    onUserProfileClick={action('clicked')} />)

storiesOf('Sam', module)
.addDecorator(muiTheme())
.addDecorator(withKnobs)
.add('closed', () => <Sam
  onLogoClick={action('[Sam] logo clicked')}
  open={boolean('open', false)}
  onRequestChange={action('[Sam] onRequestChange')}
  appVersion={'v0.0.2'}
  onCollapseClick={action('[Sam] collapse clicked')}
  onUserProfileClick={action('[Sam] userprofile clicked')} />)
.add('open with options', () => <Sam
  onLogoClick={action('[Sam] logo clicked')}
  open={boolean('open', true)}
  onRequestChange={action('[Sam] onRequestChange')}
  appVersion={text('appVersion', 'version 0.0.1')}
  onCollapseClick={action('[Sam] collapse clicked')}
  onUserProfileClick={action('[Sam] userprofile clicked')} >
  <SamOption selected={boolean('selected', false)} onClick={action('[SamOption] clicked')} icon={<AllApps />} label='Components' />
</Sam>)

storiesOf('Sidney', module)
  .addDecorator(withKnobs)
  .addDecorator(muiTheme())
  .add('bare bones', () => <Sidney
    onLogoClick={action('clicked')}
    onUserProfileClick={action('clicked')}
    onExpandClick={action('clicked')}
    appVersion={text('appVersion', 'v0.0.1')} />)
  .add('with options', () => <Sidney
    onLogoClick={action('clicked')}
    onUserProfileClick={action('clicked')}
    onExpandClick={action('clicked')}
    appVersion='v1.0.0' >
    <SidneyOption selected={boolean('selected', false)} onClick={action('SidneyOption Clicked')} >
      <AllApps />
    </SidneyOption>
  </Sidney>)

storiesOf('SidneyOption', module)
  .addDecorator(backgrounds([
    { name: 'metroBg', value: 'rgba(204, 224, 255, 0.2)', default: true },
    { name: 'metroBlue', value: '#002D72' }
  ]))
  .addDecorator(withKnobs)
  .addDecorator(muiTheme())
  .add('unselected', () => <SidneyOption
    selected={boolean('selected', false)}
    onClick={action('SidneyOption Clicked')} >
    <AllApps fill={text('fill', '#fff')} />
  </SidneyOption>)
  .add('selected', () => <SidneyOption
    selected={boolean('selected', true)}
    onClick={action('SidneyOption Clicked')} >
    <AllApps />
  </SidneyOption>)

storiesOf('Sidelle', module)
  .addDecorator(muiTheme())
  .add('bare bones', () => <Sidelle
    containerStyle={{left: '80px'}}
    title='Notifications' />)

storiesOf('SVG Icon', module)
.addDecorator(withKnobs)
.add('AllApps', () => <AllApps fill={text('fill', '#238788')} />)

const tabDefs = [
  {
    key: 'latest',
    label: 'Latest',
    content: <div className='text-center'>Showing Latest Data</div>
  },
  {
    key: 'historical',
    label: 'Historical',
    content: <div className='text-center'>Showing historical Data</div>
  },
  {
    key: 'future',
    label: 'future',
    content: <div className='text-center'>Showing future Data</div>
  }
]
const firstArgAction = decorateAction([
  args => args.slice(0, 1)
])

storiesOf('Tabs', module)
.addDecorator(muiTheme())
.addDecorator(backgrounds([
  { name: 'metroBg', value: 'rgba(204, 224, 255, 0.2)', default: true }
]))
.add('tabs', () => <Tabs tabDefs={tabDefs} handleChange={firstArgAction('button-click')} />)

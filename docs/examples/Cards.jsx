import React from 'react'
import {BusinessCard, UserCard, MiniCard} from 'ssp-ui'
import FlatButton from 'material-ui/FlatButton'
const cardOptions = {
  title: 'Personal',
  bodyDef: [
    {
      title: 'Profile & Settings',
      href: ''
    },
    {
      title: 'Logout',
      href: ''
    }
  ]
}
const CardDemo = () => {
  const tempItems = [
        { name: 'Profile & Settings', link: '#' },
        { name: 'Logout', link: '#' }
  ]

  const cardstyle = {
    margin: '-16px',
    padding: '16px 10px',
    borderBottom: '1px solid #CCCCCC '
  }

  const style = {
    padding: '16px 10px'
        // <UserCard username={'Peter Eliot'} items={tempItems} cardstyle={style}/>
  }

  return (
    <section>
      <h2 className='font-light'>Mini Cards <small>and use cases</small></h2>
      <div className='row'>
        <div className='col-md-4'>
          <MiniCard title='Mini Card'>
                      Card Content
                   </MiniCard>
        </div>
        <div className='col-md-4'>

          <UserCard
            username={'Peter Eliot'}
            cardstyle={cardstyle}
            cardOptions={cardOptions} />

        </div>
      </div>
    </section>
  )
}

export default CardDemo

import React from 'react'
import classnames from 'classnames'

import EntryHeader from 'components/entry/header'
import EntryNav from 'components/entry/nav'
import EntryBody from 'components/entry/body'

export default function Entry({ title, tagline, subtitle, date, image, html }) {
  return (
    <article className={classnames('entry', 'w-full overflow-hidden')}>
      <EntryHeader title={title} tagline={tagline} subtitle={subtitle} date={date} />

      <EntryNav />

      {(html || image) && <EntryBody html={html} image={image} />}
    </article>
  )
}

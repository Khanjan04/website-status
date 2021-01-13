import { FunctionComponent } from 'react';
// import Card from '../card';
import Card from 'components/card/card';
import classNames from './section.module.scss';
/*
type pullRequest = {
  title: string,
  completionDate: string,
  startedAt: string,
  author: string,
  profilePicture: string,
  issueStatus: string
}
*/
type pullReq = {
  title: string,
  completionDate: string,
  startedAt: string,
  author: string,
  profilePicture: string,
  issueStatus: string,
  id: number;
  level: string;
  start_date: string;
  end_date: string;
  is_active: number;
  is_user_subscribed: number;
}
/*
type Props = {
  heading: string,
  content: pullRequest[]
}
*/
type Props = {
  heading: string,
  content: pullReq[]
}

const Section: FunctionComponent<Props> = ({ heading, content }) => {

  const cards = content.map((pullReq, i) => {
    return <Card pullReq={pullReq} key={i} />
  })

  return (
    <div className={classNames.section}>
      <div className={classNames.heading}>{heading}</div>
      <div className={classNames.cardContainer}>
        {cards}
      </div>
    </div>
  )
}

export default Section;
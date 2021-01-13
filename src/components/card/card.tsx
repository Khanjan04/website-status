import { FunctionComponent } from 'react';
import classNames from './card.module.scss'

type Props = {
  pullReq: {
    title: {
      text: string,
      link?: string
    },
    data: [
      {
        key: string,
        value: string
      }
    ],
    button?: {
      text_2: string,
      link_2?: string
    },
    participants?: [
      {
        altText: string,
        imgUrl: string 
      }
    ]
  }
}

const Card: FunctionComponent<Props> = ({ pullReq }) => {
  const {
    title: {
      text,
      link
    },
    data: [
      {
        key,
        value
      }
    ],
    button : {
      text_2,
      link_2
    },
    participants : [
      {
        altText,
        imgUrl 
      }
    ]
  } = pullReq

  function informationElement(title, value) {
    return (
      <span className={classNames.statusElement}>
        <span className={classNames.statusLable}>{`${title}: `}</span><strong>{value}</strong>
      </span>
    )
  }

  return (
    <div className={classNames.card}>
      <span className={classNames.prTitle}>{title[text, link] }</span>
      {informationElement('Estimated completion', data)}
      {informationElement('Started', button:{})}
      <div className={classNames.cardFooter}>
        <div className={classNames.profilePicture}>
          <img src={profilePicture} alt="Author profile picture" />
          <strong>{author}</strong>
        </div>
        {informationElement('Status', issueStatus)}
      </div>
    </div>
  )
}

export default Card;
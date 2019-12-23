import React from 'react'
import { Button, Glyphicon } from "react-bootstrap";
import styled from 'styled-components'

import { FACEBOOK_BLUE, TWITTER_BLUE } from "./constants/colors";

import {
  ShareButtons,
} from 'react-share';

const {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
} = ShareButtons;

const WrapShareButtons = styled.div`

    & > .SocialMediaShareButton {
      display: inline-block;
      margin: 10px 0;
      margin-right: 10px;
    }

    & > .SocialMediaShareButton > .btn {
        width: 64px;
        height: 32px;
        padding: 0;
        border-radius: 0;
        border: 0;
    }

    & > .SocialMediaShareButton--facebook > .btn,
    & > .SocialMediaShareButton--facebook > .btn:hover,
    & > .SocialMediaShareButton--facebook > .btn:active,
    & > .SocialMediaShareButton--facebook > .btn:focus  {
        background: ${FACEBOOK_BLUE} /*blue*/;
    }

    & > .SocialMediaShareButton--twitter > .btn,
    & > .SocialMediaShareButton--twitter > .btn:hover,
    & > .SocialMediaShareButton--twitter > .btn:active,
    & > .SocialMediaShareButton--twitter > .btn:focus  {
        background: ${TWITTER_BLUE};
    }

    & > .SocialMediaShareButton--email > .btn {
      background:white;
      border: #00ADE8 1px solid;
    }
    & > .SocialMediaShareButton--email > .btn > .glyphicon{
      font-size: 18px;
      line-height: 25px;
      color: #00ADE8;
    }
    & > .SocialMediaShareButton > .btn > img {
        height: 32px;
    }
`

const SocialMediaButtons = (props) => (
  <WrapShareButtons>
    <FacebookShareButton
      url={props.url}
      quote={props.text}>
      <Button><img src='/static/facebook-icon.png' /></Button>
    </FacebookShareButton>

    <TwitterShareButton
      url={props.url}
      title={props.text}>
      <Button><img src='/static/twitter-icon.png' /></Button>
    </TwitterShareButton>

    <EmailShareButton
      subject={`Check out what I did on GoodWerk`}
      body={`${props.text}: ${props.url}`}>
      <Button><Glyphicon glyph="envelope" /></Button>
    </EmailShareButton>
  </WrapShareButtons>
)

export default SocialMediaButtons

import React from "react";
import styled from "styled-components";
import FaCircleONotch from "react-icons/lib/fa/circle-o-notch";

import ErrorBoundary from "../../errors/ErrorBoundary";
import MaxWidth from "../../common/flex/MaxWidth";
import Centered from "../../common/flex/Centered";
import Story from "./Story";

import media from "../../../utils/media";

const Heading = styled.h2`
  text-align: center;
  font-weight: 200;
  font-size: 2.5rem;
  margin-top: 6rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  color: #1c2022;
  text-shadow: 0 0 100px #3c4244;
  ${media.phone`margin-top: 3rem; margin-bottom: 0; `};
`;

const Stories = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const Loader = styled(FaCircleONotch)`
  color: #1c2022;
  font-size: 2rem;
  margin-top: 5rem;
  margin-bottom: 5rem;
  margin-right: 1rem;
  -webkit-animation: icon-spin 2s infinite linear;
  animation: icon-spin 2s infinite linear;

  @-webkit-keyframes icon-spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(359deg);
      transform: rotate(359deg);
    }
  }

  @keyframes icon-spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(359deg);
      transform: rotate(359deg);
    }
  }
`;

export default class MyMediumStories extends React.Component {
  state = {
    init: true,
    loading: false,
    myInfo: null,
    stories: []
  };

  fetchStories = async () => {
    const res = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40joomiguelcunha&api_key=${
        process.env.RSS_API_KEY
      }`
    );
    const json = await res.json();
    const myInfo = json.feed;
    const stories = json.items.map(item => {
      const { guid, title, pubDate, link, thumbnail } = item;
      return { guid, title, pubDate, link, thumbnail };
    });

    this.setState({ loading: false, myInfo, stories });
  };

  componentDidMount() {
    this.setState({ init: false, loading: true }, this.fetchStories);
  }

  render() {
    const { page } = this.props;
    const { init, loading, stories } = this.state;

    if (init) {
      return <div />;
    }

    return (
      <div>
        <MaxWidth width={1280}>
          <Centered horizontal>
            {loading && <Loader />}
            {stories.length > 0 && (
              <Stories>
                {stories.map(story => (
                  <Story
                    key={story.guid}
                    story={story}
                    pageColor={page.color}
                  />
                ))}
              </Stories>
            )}
          </Centered>
        </MaxWidth>
      </div>
    );
  }
}

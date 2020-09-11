import React, { useEffect, useState } from "react";
import forumApi from "../../utils/forum.api";
import {
  Card,
  Typography,
  CardContent,
  CardActions,
  IconButton,
  CardHeader,
  Avatar,
} from "@material-ui/core";
import {
  ThumbUpAlt as ThumbUpAltIcon,
  ThumbDownAlt as ThumbDownAltIcon,
  Delete as DeleteIcon,
} from "@material-ui/icons";
import moment from "moment";
import PostReply from "./PostReply";
import { useAuth0 } from "@auth0/auth0-react";
import * as _ from "lodash";

// "reply" refers to the submit form, "replies" refers to the previously submitted replies
const myStyle = {
  // cardContainer: {
  //   textAlign: "center",
  //   width: "700px",
  //   margin: "0 auto",
  //   paddingTop: 50,
  //   paddigBottom: 50
  // },
};

export default function Replies(props) {
  const [replies, setReplies] = useState([]);
  const { isAuthenticated, user } = useAuth0();

  // get all replies
  useEffect(() => {
    loadAllReplyForum();
  }, []);

  // Loads all replies and sets them to data
  function loadAllReplyForum() {
    forumApi
      .getAllReply(props.forumId)
      .then((res) => {
        setReplies(res.data.replies);
      })
      .catch((err) => console.log(err));
  }
  const deleteOnClick = (reply) => () => {
    forumApi.deleteReply(reply._id);
    loadAllReplyForum();
  };

  const likeButtonOnClick = (reply) => async () => {
    const currentUserId = user.sub;
    if (!_.includes(reply.likedUsers, currentUserId)) {
      const hasUserDislikedBefore = _.includes(
        reply.dislikedUsers,
        currentUserId
      );
      let dislikes = reply.dislikes;
      if (hasUserDislikedBefore) {
        dislikes = dislikes - 1;
      }
      const dislikedUsers = _.filter(
        reply.dislikedUsers,
        (dislikedUser) => dislikedUser !== currentUserId
      );

      const updatedReply = {
        ...reply,
        likes: reply.likes + 1,
        likedUsers: [...reply.likedUsers, currentUserId],
        dislikes,
        dislikedUsers,
      };

      await forumApi.updateReply(reply._id, updatedReply);
      await loadAllReplyForum();
    }
  };

  const dislikeButtonOnClick = (reply) => async () => {
    const currentUserId = user.sub;
    if (!_.includes(reply.dislikedUsers, currentUserId)) {
      const hasUserLikedBefore = _.includes(reply.likedUsers, currentUserId);
      let likes = reply.likes;
      if (hasUserLikedBefore) {
        likes = likes - 1;
      }
      const likedUsers = _.filter(
        reply.likedUsers,
        (likedUser) => likedUser !== currentUserId
      );

      const updatedReply = {
        ...reply,
        dislikes: reply.dislikes + 1,
        dislikedUsers: [...reply.dislikedUsers, currentUserId],
        likes,
        likedUsers,
      };
      await forumApi.updateReply(reply._id, updatedReply);
      await loadAllReplyForum();
    }
  };

  return (
    <div>
      {replies.map((reply) => {
        return (
          <Card key={reply._id}>
            <CardHeader
              avatar={
                <Avatar
                  alt={_.get(reply, "user.name")}
                  src={_.get(reply, "user.picture")}
                />
              }
              title={_.get(reply, "user.name")}
              subheader={moment(reply.date).format("lll")}
            />
            <CardContent style={myStyle.replyCardBody}>
              <Typography
                style={myStyle.replyCardBody}
                variant="body2"
                component="p"
              >
                {reply.reply_description}
              </Typography>
            </CardContent>
            <CardActions>
              <div className="likeDislikeBtns">
                <span className="likeCount">{reply.likes}</span>
                <IconButton
                  disabled={!isAuthenticated}
                  onClick={likeButtonOnClick(reply)}
                  size="small"
                >
                  <ThumbUpAltIcon className="likeBtn" size="small" />
                </IconButton>
                <IconButton
                  disabled={!isAuthenticated}
                  onClick={dislikeButtonOnClick(reply)}
                  size="small"
                >
                  <ThumbDownAltIcon className="dislikeBtn" />
                </IconButton>
                <span className="dislikeCount">{reply.dislikes}</span>
              </div>
              {isAuthenticated && user.sub === _.get(reply, "user.id") && (
                <DeleteIcon
                  onClick={deleteOnClick(reply)}
                  className="deleteBtn"
                  size="small"
                  variant="contained"
                />
              )}
            </CardActions>
          </Card>
        );
      })}
      {isAuthenticated && (
        <PostReply
          loadAllReplyForum={loadAllReplyForum}
          forumId={props.forumId}
        />
      )}
    </div>
  );
}
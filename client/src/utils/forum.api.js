import axios from "axios";

export default {
  // Create forum

  createForum: function (forum) {
    return axios.post("/api/forums", forum);
  },
  //get all forums from db
  getAllForum: function () {
    return axios.get("/api/forums");
  },
  deleteForum: function (forumId) {
    return axios.delete("/api/forums/" + forumId);
  },
  getById: function(forumId) {
    return axios.get("/api/forums/" + forumId);
  },
  createReplyToForum: function(forumId) {
    return axios.post("/api/forums/"+ forumId + "/replies");
  }
};

import axios from "axios";
function getToken(){
  let cookie = document.cookie;
  let output = {};
  cookie.split(/\s*;\s*/).forEach(function(pair) {
    pair = pair.split(/\s*=\s*/);
    output[pair[0]] = pair.splice(1).join('=');
  });
  if(output["token"]){
    return output["token"];
  }
  return "";
}
export default {
  // Create forum
  createForum: async function (forum) {
    return await axios.post("/api/forums", forum);
  },
  //get all forums from db
  getAllForum: async function (queryParam) {
    return await axios.get("/api/forums", { params: queryParam });
  },
  deleteForum: async function (forumId) {
    return await axios.delete("/api/forums/" + forumId);
  },
  getById: async function (forumId) {
    return await axios.get("/api/forums/" + forumId);
  },
  updateForum: async function (forumId, body) {
    return await axios.put("/api/forums/" + forumId, body);
  },
  createReplyToForum: async function (forumId, body) {
    return await axios.post("/api/forums/" + forumId + "/replies", body);
  },
  getAllReply: async function (forumId) {
    return await axios.get("/api/forums/" + forumId + "/replies");
  },
  deleteReply: async function (replyId) {
    return await axios.delete("/api/replies/" + replyId);
  },
  updateReply: async function (replyId, body) {
    return await axios.put("/api/replies/" + replyId, body);
  },
};

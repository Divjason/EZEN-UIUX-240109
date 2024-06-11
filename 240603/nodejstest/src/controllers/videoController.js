import Video from "../models/Video";

// export const home = (req, res) => {
//   console.log("Start");
//   Video.find()
//     .then((videos) => {
//       console.log("videos", videos);
//       return res.render("home", { pageTitle: "Home", videos: [] });
//     })
//     .catch((err) => console.log("errors", err));
// };

// export const home = async (req, res) => {
//   console.log("Start");
//   const videos = await Video.find({});
//   console.log("Finished");
//   console.log(videos);
//   return res.render("home", { pageTitle: "Home", videos });
// };

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    console.log(videos);
    return res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    return res.render("Server-error", { error });
  }
};

export const watch = (req, res) => {
  const { id } = req.params;
  return res.render("watch", {
    pageTitle: `Watching`,
    video,
  });
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  return res.render("edit", { pageTitle: `Editing` });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", {
    pageTitle: "Upload Video",
  });
};

export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  try {
    await Video.create({
      title,
      description,
      hashtags: hashtags.split(",").map((word) => `#${word}`),
    });
    return res.redirect("/");
  } catch (err) {
    console.log(err);
    return res.render("upload", {
      pageTitle: "Upload Video",
      errorMessage: err._message,
    });
  }
};

export const search = (req, res) => {
  return res.send("Search");
};

export const deleteVideo = (req, res) => {
  return res.send("Delete Video");
};

# Rest API Plan (\*현재 우리에게 필요한 페이지)

# Basic Router (\*Before)

/ => Home
/join => Join
/login => Login
/search => Search

# User Router

/edit-user => Edit User
/delete-user => Delete User

# Platform Router

/watch-video => Watch Video
/edit-video => Edit Video
/delete-video => Delete Video

# Basic Router (\*After)

/ => Home
/join => Join
/login => Login
/search => Search
=> Global Router

/users/edit => Edit User
/users/delete => Delete User

/videos/watch => Watch Video
/videos/edit => Edit Video
/videos/delete => Delete Video
/videos/comments => Comments on a Video
/videos/comments/delete => Delete Comments on a Video
=> Root Router

=> Final!!

# 유튜브 플랫폼 만들어서 관리 서버

/ => Home
/join => Join
/login => Login
/search => Search

/users:id => See user
/users/logout => Log out
/users/edit => Edit User Profile
/users/delete => Delete User Profile

/videos/:id => See video
/videos/:id/edit => Edit video
/videos/:id/delete => Delete video
/videos/upload => Upload video

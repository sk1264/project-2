# Unit 2 Project - Art Sightseeing Tracking App
This app will be designed to track works of art at various museums or shows around the world. Whenever a new piece of art is observed, it will be tracked in the full stack application where the user can input the name of the artwork, a photo, the location where it was seen, their interpretation and opinion of the artwork, and a rating of 1-5.
# Technologies Used
1. Javascript
2. CSS (Bootstrap)
3. HTML
4. EJS
5. Express
6. Node
7. Nodemon
8. MongoDB
9. Mongoose
10. Render.com (https://art-tracking-app.onrender.com/arts/)
# MVP
1. Create index/landing page where user can see all posts of art.
2. Create a form for user to log a new piece of artwork.
3. Allow the ability to edit or delete a post.
4. Style with CSS.
# Stretch Goals
1. Incorporate ability to upload your own photo, not just a URL image.
2. Extensively style with CSS.
3. Incorporate ability to use emojis.
# User Stories
1. As a user, I will be able to upload my own photos of artwork.
2. As a user, I will be able to include detailed information of artwork like location, review, and rating.
3. As a user, I will be able to access and update previously tracked artworks.
4. As a user, I will be able to delete previously tracked artworks.
# Wireframe
<img width="804" alt="Screenshot 2023-04-06 at 7 31 17 PM" src="https://user-images.githubusercontent.com/123710081/230512095-b919c70e-68df-4c50-8e45-e053a1132e52.png">

![Screenshot 2023-04-06 at 7 42 01 PM (2)](https://user-images.githubusercontent.com/123710081/230513052-56517dcb-17ae-410c-9ae7-2e1ede80e6ed.png)
# Code Snippet for Models

    name: String,
    location: String, 
    image: String,
    review: String,
    rating: Number

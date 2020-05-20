## Available Scripts

In the project directory, you can run:

### `yarn start`
### `yarn test`
### `yarn build`

## Instructions

Your task is to do some minor and some major changes to this application. In fact, it is half finished Movie App using
latest version of React on Typescript. Since it is latest version, it is not using class components anymore.

Before you start, clone, download or fork this repository so you can send us a link or archive with your changes via email
later.

Go through the app structure to understand how things are connected together first.

1) Change Movies scene (src/scenes/Movies.tsx) so it looks close to this design: 

![Movies Design](http://temp2.justart.org/movies_design.png)

You should ideally create reusable component (in src/components) MovieCard and style it using Styled Components
If you haven't heard of Styled Components yet, don't worry using css imported to index.tsx will be just fine.
In case you want to try to use Styled Components, you can find example in components/Button.tsx. It is nothing
complicated. It is basically Less or Sass like syntax.

You should also indicate that movies are being loaded by showing "Loading..." instead of movie list based on value
of loading variable.

Next thing is to load more movies when user clicks on "Load More" button. If there are no more movies to load, button
should be disabled.

When user clicks on MovieCard component, he should be navigated to MovieDetail scene which doesn't exist yet
and you will need to create it. To navigate to detail page, use navigate function from @reach/router module.

2) Create Movie Detail scene

You will need to create Movie Detail scene in src/scenes and add it to Router component (src/components/Router).
You will also need to load movie detail creating new api method in api/MoviesApi.tsx called 
getMovieDetail that will be returning object matching interface for movie detail in model/api/MovieDetail.ts. 
In a nutshell, you should create method very similar to already existing getTrendingMovies and call it in 
Movie Detail scene component in similar way how getTrendingMovies is used in Movies scene.

Try to make it look like in this design: 

![Movie Detail Design](http://temp2.justart.org/movie_detail_design.png)

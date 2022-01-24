const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

//function that compiles sass into css
//take the src sass file, then compile it into css file & pipe it to destination folder
function buildStyles() {
  //take the source sass file, use relative path
  return (
    // src("index.scss")
    //for all .scss files use *
    // ** means look into any subfolder
    src("sass/**/*.scss")
      //use sass func that was prev imported
      //use pipe method, passing sass() to compile the sass file
      .pipe(sass())
      //pass dest() to ouput the compiled css file into destination folder
      .pipe(dest("css"))
  );
}

//function that actively watch the .scss file
//if there are changes to it, this func will run buildStyles() & update the css file
function watchTask() {
  //invoke watch() & argument will be array of file(s) to watch
  //use * for all .scss files
  //2nd argument: func to run when these files change
  watch(["sass/**/*.scss"], buildStyles);
}

//export & run in order the series of functions
exports.default = series(buildStyles, watchTask);

//go to terminal & run gulp in order to run the functions
//if gulp doesn't run:
//inside package.json -> scripts -> add "gulp":"gulp"
//in terminal: npm run gulp

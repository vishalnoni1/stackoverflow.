//^css
//*no need to give width 100& if the position is static
//*you can first put everything in center  in navbar then justify it around 
//* you can put multpale classes and style them like= nav-item nav-button
//*you can giv min width to keepn some space for responsive
//*use postion relative then absolute to  possition corectly
//^starting process
/*Npm start to start project

instaling npm
in client side
npx create-react-app ./
npm i axios jwt-decode moment react-copy-to-clipboard react-router-dom redux react-redux redux-thunk


in server side
npm init
npm i bcryptjs jsonwebtoken cors dotenv express mongoose nodemon*/

//*react
//!export and import is important in react within multipale files
//^you can use childern in function  to  target childern of a tag

///*to style in react use object  like this
const style={
    backgroundColor,
    padding,
    color,
    
     }
    //*and return like this
    
  return (
    
    <div style={style}>
      {children}
    </div>
  )
 //* || to provide default value
 const avatar = ({children,backgroundColor,px,py, color ,borderRadius,fontSize,cursor}) => {
    const style={
   backgroundColor,
   padding:'${py} ${px}',
   color:color || "black",
   borderRadius,
   fontSize,
   textAlign:"center",
   cursor:cursor || null
    }
    
     return (
       
       <div style={style}>
         {children}
       </div>
     )
   }

   //*to style then change it in  prop
   //!new file should  start with capital spacially component
   //*in switch all routes can be put
   //^ for multiple thing use {}


   //^shoutcut
   //*rafce for importing exporting return for all components

   //^react
   //*routes is used to wrap route
   //* in rout use element inside curly braces and path
   //*BEFORE USING IT IMPORT IT


   //^comment in jsx
   //!{/*this is cpmment*/}

   //^conditions in react
   //*this is true ? this is false!
   //*all conditions in react?
/*{<any boolean statement> && <Component-to-be-displayed />}

{(<any boolean statement>) && <Component-to-be-displayed />}

(!this.state.isHidden &&  var1 === var2) && <Component-to-be-displayed />

{(<any boolean statement>) ?
 <Component-to-be-displayed-if-true />
  :
 <Component-to-be-displayed-if-false />
}

{ (!this.state.isHidden && var1 === var2) ? <Component-to-be-displayed /> : <Somthing />} 

{ ( (!this.state.isHidden) && (var1 === var2)) ? <Component-to-be-displayed /> : <Somthing /> }
if !signup is false then && then display this


//Source: https://stackoverflow.com/questions/49997358*/
//^to style in line in jsx
//*use 2 {{}}

{/*this is most use*/}

//*to import in the div something
//^<leftbar/> after imorting on top to import img img src={icon}
//*style in jsx
//^no - allowed while styling

//*import
//^ no need of from when importing a file

//*to display arrayb or anything
//^put inside {} and to return jsx use ()insted of curly braces

//*returning map
//^ to return 1 in a array use map nd key name it same in key function and return

//*to use  methods just use method and write for which you want to use like this in jsx
//^{questionsList.length} question 

//*to export a component as compont in another file
//^<questionsList questionsList={questionsList} />
//what is prop in react?


//^ Prop in React is an object that contains properties passed down from a parent component to a child component. It allows the parent component to pass data and methods down to the child components. Props are commonly used to render dynamic data and manage state in React applications.


//* link in html 
//^you can direcly write the component without any specific folder just by name and withou dot
//*<Link to={'/AskQuestion'}className='ask-btn'>Ask Question</Link
//^to use a function in retyrn
//*redirect(): like this ver name and ()
//^method of writingh a function in  jsx
//*const AskQuestion = () => {}
//^ to use a function
//*first imort then decalre ver = verible()then use it to change the name
//^ to redirect to oother page
const checkAuth = () => {
  if(user === null){
      alert("login or signup to ask a question")
      navigate('/Auth')
  }else{
      navigate('/AskQuestion')
  }
}
//!form
//*place holder 
//^place holder is for label in input in form

 //*value
 //^vale is simple text in submit button

 //!css
 //*first select whole body change heigh color bg then container then go with chronological order


 //* path
 //^ while routing element will be component name but path can differ

 //* to select in div from obj or arrau
 //^ use {and that name }

 //!backend
 //* you can import from any name but use the same name in the file 
 //* if the common export is not there ise { in import}

//^ backand part server
 //*first create a model and then routes and controllers. routes for controllers and route it in inde
 //* use async in backend

 //^ models
 //* used to create a schema with a function ()and object { } and then object in data type { with type : and required:""}


 //^ structure
 //* from model to controllers and controllers to routes.then api to get all data from url of server
 //* uset  arrow function for get request


 //^ actions
 //* now   actions to  dispatch it to store and get data from api that you exported then reducers

 //^ using hook
 //* if you are using dispatch function first create the veriable

 //^ redux
 //* we store the data in backend then get the data to frontend then we use or access the data


 //^ useselector hook 
 //* to acceass the data from the store that you saved in reducer

 //^ routes 
 //* its for routing to  that page
 //^ controllers
 //* its the main data of server

 //^ to catch error
 //* catch (error) {
   //* console.error(error);
   
   //^use { }for console or other things if there is more then one data

   //^ all patterns
   //*first create model
   //* then routes and index
   //* then controllers
   //* set all the data then dispatch to redux 
   //* redux use action reducers and api for actions and api should that you used in routes
   //* in reducers use combine reducers and reducers will have switch case

   //^ to send the data to the fronted use res and post is to post and get is to get data from backend and action is to get the data from backend or send and reducer is to dispatch the data to the store

   //^ reducer is used to retrive data from backend
//!how to get time from backend
//^use moment to handle time.
//* use {moment ().fromNow}

//^how to share
//* first create button and use onclick event then write  function
//* use copy and location.
//*first declare verible for location and saw what is in location it has all the adta like key, pathname search. and pathname is import to copy the url. use.pathname for that inside copy function.
//* use.pathname for that inside copy function.
//* like this.  
const handleShare =()=>{
copy(url + location.pathname)
}

//^:
//*In this example, name,: age,: isStudent, and hobbies are the keys, and 'John', 30, true, and ['reading', 'swimming', 'traveling'] are the values. The : is used to separate each key from its corresponding value.
//* it seprate key from value

//^ +
//* use to add string and numbers 
//* like this :   alert("Copied url : " + url + location.pathname);

//^ to use prop
//* first declare like ths handleshare={handeshare then use it in other code}


//^ use curly braces to use js in  jsx.


//^ delating answers and ques which match the person who ahs login
//*  {
  User?.result?._id===question?.userId && (
    <button onClick={handleDelete} type="button">  Delete
    </button>
    //* in this we are saying if both conditions are true then return this.
)
//* this is how use can write if question id marches user id show delete option


await Questions.findByIdAndRemove(_id) //^ this is backend code to remove the question if it matches id

//^ to work with backend use async

//^onClick={() => handleDelete(ans._id, question.noOfAnswers)} 
//*this is how you call beck function with peramiters

//^ change time like this
//*{moment (question.askedOn).fromNow()}

//^ backend
//*   const question= await Questions.findById(_id) by doing this you can get the whole data and can change any value. in data there is key and value\


//^ filterin users
const users = useSelector((state) => state.usersReducer);
const currentProfile = users.filter((user) => user.id === id)[0];//*to filter from the user list which matches id


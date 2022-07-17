import React from "react"
import { styled } from '@mui/material/styles';
import {Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton,
Typography, Divider, Container,Button} from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import imgg from "../../Images/algebra.jpg"
import imgg2 from "../../Images/code.png"
import imgg3 from "../../Images/art.jpg"
import imgg4 from "../../Images/ai.jpg"
import {makeStyles} from "@mui/styles"
import {createTheme} from "@mui/material/styles"

const theme = createTheme()

const useStyles = makeStyles({
    market:{
      display:"flex",
      justifyContent:"space-between",
      marginBottom:"2rem",
      [theme.breakpoints.down('sm')]:{
        flexDirection:"column"
      }
    },

    card:{
      marginRight:"2rem"
    }
})

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

const MarketContent = ()=>{
  const classes = useStyles()
    const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

     return(
         <Container maxWidth="lg">
             <Typography variant="h5" style={{marginTop:"2rem"}} >Popular Courses</Typography>
             <Typography variant="button">Discover our most popular courses for self learning</Typography>
             <Divider style={{marginBottom:"1.5rem"}}/>


        <div className={classes.market}>

          <div className={classes.card}>
        <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            $50
          </Avatar>}        
        title="Learn Linear Algebra"
        subheader="Start date: April 18, 2022"
      />
      <CardMedia component="img"  height="194" image={imgg} alt="Linear algebra" />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Learn everything from Linear Algebra,then test your knowledge with 400+ practice questions.
          At the end of the course you will be comfortable with the fundamentals of Math.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
       <Button variant="contained">Buy Course </Button>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>AND HERE'S WHAT YOU GET INSIDE OF EVERY SECTION:</Typography>
          <Typography paragraph>
          This 247-lesson course includes video and text explanations of everything from Linear Algebria, and its includes 69 quizzes
          (with solutions!) and an additional 12 worbooks with extra practice problems, to help you test your understanding along the way.
           </Typography>
          <Typography paragraph>
          Watch over my shoulder as I solve problems for every single math issue you’ll encounter in class.
          We start from the beginning... I explain the problemn setup and why I set it up that way,
          the steps I take and why I take them, how to work through the yucky,fuzzy middle parts,
          and how to simplify the answer when you get it.
          </Typography>
          <Typography paragraph>
          The notes section of each lesson is where you find the most important things to remember.
           It’s like Cliff Notes for books, but for math. Everything you need to know to pass your class and nothing you don’t.
          </Typography>
          <Typography>
          When you think you’ve got a good grasp on a topic within a course, you can test your knowledge 
          by taking one of the quizzes. If you pass, great! If not, you can review the videos and notes again or
          ask for help in the Q&A section.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
          </div>


          <div className={classes.card}>
        <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            $60
          </Avatar>}        
        title="Python Programming - From Basics to Advanced level "
        subheader="Start date: June 5, 2022"
      />
      <CardMedia component="img"  height="194" image={imgg2} alt="Linear algebra" />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
        This Python for beginners course will help you to become Zero to Hero. Learn Python Programming in Easy Way.
        {/* Learn everything from data types, Loops, Conditional statements, Functions and Modules
        Parse JSON and XML files */}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
       <Button variant="contained">Buy Course </Button>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Python Career Opportunities:</Typography>
          <Typography paragraph>
          <span style={{fontWeight:"bold"}}>Data analyst: </span> This is a very interesting opportunity. It is especially for those who like working
           with huge amounts of data and finding meaning in that data. This is again a very popular job role.
            There are many companies that are looking for people who can work with the large sets of data that
             they have access to. These companies are looking for people skilled in Python because Pandas, SciPy,
              and other Python libraries come in very handy in accomplishing this task. No wonder more and more 
              companies are looking for data analysts with experience in python to fill open positions.
           </Typography>
          <Typography paragraph>
          <span style={{fontWeigth:"bold"}}>Product manager: </span>Product managers have a very important role to play when it comes to helping businesses 
          to understand the market and why building one product will be better than building another.
           They study the market, research for new features related to a particular product or category, and advocate
            the building of certain products with facts. Data is a very important part of the work they do.
           This is why most companies today are looking for product managers that are skilled in python.
          </Typography>
          <Typography paragraph>
          Machine learning engineer: If you don’t already know, then let us tell you that the job postings for this position 
          have increased by more than 330% in the last couple of years. If you are skilled in python, you will be given 
          preference over other candidates. A machine learning engineer builds and trains machines, programs, and other 
          computer-based systems to apply their learned knowledge for making predictions. Python’s ability to work with
           data automation and algorithms makes it the ideal programming language that can be used in machine learning.
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
          </div>

          <div className={classes.card}>
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            $55
          </Avatar>}        
        title="The Ultimate Drawing Course - Beginner to Advanced"
        subheader="Start date: April 18, 2022"
      />
      <CardMedia component="img"  height="194" image={imgg3} alt="Linear algebra" />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Learn the #1 most important building block of all art, Drawing. This course will teach you 
        how to draw like a pro!
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
       <Button variant="contained">Buy Course </Button>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>
          Join over 450,000 learning student and start gaining the drawing skills you've always wanted.
           </Typography>
          <Typography paragraph>
          The Ultimate Drawing Course will show you how to create advanced art that will stand up as professional
          work. This course will enhance or give you skills in the world of drawing - or your money back
          </Typography>
          <Typography paragraph>
          The course is your track to obtaining drawing skills like you always knew you should have!
           Whether for your own projects or to draw for other people.
          </Typography>
          <Typography>
          This course will take you from having little knowledge in drawing 
          to creating advanced art and having a deep understanding of drawing fundamentals.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
          </div>
        
        <div className={classes.card}>
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            $75
          </Avatar>}        
        title="Artificial Intelligence A-Z™: Learn How To Build An AI "
        subheader="Start date: June 5, 2022"
      />
      <CardMedia component="img"  height="194" image={imgg4} alt="Linear algebra" />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Combine the power of Data Science, Machine Learning and Deep 
        Learning to create powerful AI for Real-World applications!
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
       <Button variant="contained">Buy Course </Button>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Python Career Opportunities:</Typography>
          <Typography paragraph>
          Learn key AI concepts and intuition training to get you quickly up to speed with all things AI. Covering:
            How to start building AI with no previous coding experience using Python
            How to merge AI with OpenAI Gym to learn as effectively as possible
            How to optimize your AI to reach its maximum potential in the real world
           </Typography>
          <Typography paragraph>
          <span style={{fontWeight: "bold"}}> Complete beginner to expert AI skills:</span> Learn to code self-improving AI for a range of purposes.
           In fact, we code together with you. Every tutorial starts with a blank page and we write up the
            code from scratch. This way you can follow along and understand exactly how the code comes together and what each line means.
          </Typography>
          <Typography paragraph>
          <span style={{fontWeight:"bold"}}> Intuition Tutorials: </span> Where most courses simply bombard you with dense theory and set you on your way,
           we believe in developing a deep understanding for not only what you’re doing, but why you’re doing it.
            That’s why we don’t throw complex mathematics at you, but focus on building up your intuition 
            in coding AI making for infinitely better results down the line.
          </Typography>
          <Typography paragraph>
          <span style={{fontWeight:"bold"}}> Real-world solutions:</span> You’ll achieve your goal in not only 1 game but in 3. 
          Each module is comprised of varying structures and difficulties, meaning you’ll be skilled enough 
          to build AI adaptable to any environment in real life, rather than just passing a 
          glorified memory “test and forget” like most other courses. Practice truly does make perfect.
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
          </div>
    </div>

    </Container>
    )
}

export default MarketContent
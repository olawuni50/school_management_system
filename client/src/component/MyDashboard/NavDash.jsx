import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {Box, Drawer, CssBaseline, Toolbar, List, Typography, Divider, IconButton, ListItem, ListItemIcon,
  InputBase, ListItemText, Avatar, Button, Paper} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import { styled, useTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useStyles } from "./NavStyles";
import {MenuIcon, ChevronLeft, ChevronRight, Inbox, Mail, Menu, Search, AddCircle, 
  HistoryEdu, Person,} from "@mui/icons-material";
import {getStudentBySearch} from "../../actions/grades"



const drawerWidth = 180;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function useQuery(){
  return new URLSearchParams(useLocation().search)
}

const NavDash = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const query = useQuery()
  const page = query.get('page') || 1
  const searchQuery = query.get('searchQuery')
  const [search, setSearch] = useState('')

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  console.log(user);

  useEffect(() => {
    const token = user?.token;

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    setUser(null);
  };

  const searchName = () =>{
    if(search.trim()){
      dispatch(getStudentBySearch({search}))
      navigate(`grades/search?searchQuery=${search || 'none'}`)
    } else{
      navigate('result')
    }
  }

  const handleKeyPress = (e) =>{
    if(e.keyCode === 13){
      searchName()
    }

  }

  // Sidebar menu start
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  // ends

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.icon}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <Menu />
            </IconButton>
          </div>

          <Typography
            variant="h5"
            noWrap
            component="div"
            component={Link}
            to="/"
            className={classes.head}
           >
            CalcG
          </Typography>
           {/* <div className={classes.search}>
            {/* <Search style={{display:"flex", justifyContent:"flex-start"}} /> */}
             {/* <Button varaint="contained" onClick={searchName} style={{display:"flex", justifyContent:"flex-start"}}>Search</Button>
            <InputBase placeholder="Search Student's name" name='search' onKeyPress={handleKeyPress}
             value={search} onChange={(e) => setSearch(e.target.value)} className={classes.input} />
          </div>  */} 

<Paper sx={{ p: '2px 2px', display: 'flex', alignItems: 'center', width: 300, height:40, marginRight:"1rem" }}>

      <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search Student's Name" 
        inputProps={{ 'aria-label': "Search Student's Name" }} value={search} name="search"
        onChange={(e) => setSearch(e.target.value)} onKeyPress={handleKeyPress}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={searchName} >
        <Search />
      </IconButton>

      </Paper>

          <Avatar
            className={classes.avatar}
            alt={user.result.name}
            src={user.result.imageUrl}
          >
            {user.result.name.charAt(0)}
          </Avatar>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader style={{display:"flex", justifyContent:"space-between"}}>
        <Typography variant="h5" noWrap component="div" component={Link} to="/" 
        style={{textDecoration:"none"}}>
            CalcG
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <div className={classes.welcome}>
          <List>
        
            Welcome! {" "}
             {user === user?.result?.googleId
              ? `${user.result.givenName}`
              : `${user?.result?.name}`}
          </List>
        </div>

        <List>
          {[
            <Typography variant="button" noWrap component={Link} to="/" style={{textDecoration:"none"}} >
              {" "}
              Home{" "}
            </Typography>,
            <Typography variant="button" component={Link} to="add-subject" style={{textDecoration:"none"}}>
              {" "}
              Add Subject
            </Typography>,
            <Typography variant="button" component={Link} to="result" style={{textDecoration:"none"}}>
              {" "}
              Check Result{" "}
            </Typography>,
            <Typography variant="button" component={Link} to="profile" style={{textDecoration:"none"}}>
              {" "}
              Profile{" "}
            </Typography>,
          ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 1 ? <Inbox /> : <AddCircle />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {[
            <Typography variant="button" onClick={logout} style={{textDecoration:"none"}}>
              {" "}
              Log out{" "}
            </Typography>,
          ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <Inbox /> : <Mail />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default NavDash;

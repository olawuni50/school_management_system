import React, { useState, useEffect } from "react";
import { styled, useTheme, alpha } from "@mui/material/styles";
import {Box, Drawer, CssBaseline,Toolbar, List, Typography, Divider, IconButton, Avatar, Button,ListItemIcon,
  ListItemText, ListItem, MenuItem, Menu,} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import { Link, useNavigate, useLocation } from "react-router-dom";
import decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { useStyles } from "./NavStyles";
import {FormatAlignLeft, ChevronLeft, ChevronRight, Inbox, Mail, KeyboardArrowDown, Dashboard, Person, AddCircle,
   HistoryEdu, Logout} from "@mui/icons-material";


// Side bar menu starts
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
// ends

// Drop down menu
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));
// ends

const NavBars = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  console.log(user);

  const logout = () => {
    // from reducer(auth.js)
    dispatch({ type: "LOGOUT" });
    navigate("/");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  // Sidebar (start)
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  // Sidebar (ends)

  // drop down start
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openn = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // ends

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <AppBar position="fixed" open={open}>
          <Toolbar className={classes.toolBar}>
            <div className={classes.menuBar}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: "none" }) }}
              >
                <FormatAlignLeft />
              </IconButton>
            </div>

            <div className={classes.menu}>
              <Typography
                variant="h5"
                noWrap
                // component="div"
                to="/"
                style={{color:"#1f2471", fontWeight:"bolder", textDecoration:"none"}}
                component={Link}
              >
                Calcg
              </Typography>

              <div className={classes.menu1}>
                <Typography variant="button" component={Link} to="/" className={classes.typo}
                style={{ marginLeft: "3rem", textDecoration:"none" }}> Home </Typography>

              <Typography
                  variant="button"
                  component={Link}
                  to="/service"
                  className={classes.typo}
                  style={{ marginLeft: "3rem" , textDecoration:"none" }}
                >
                  Services
                </Typography>

                <Typography
                  variant="button"
                  component={Link}
                  to="/about"
                  className={classes.typo}
                  style={{ marginLeft: "3rem" , textDecoration:"none" }}
                >
                  About Us
                </Typography>
                
                <Typography
                  variant="button"
                  component={Link}
                  to="/contact"
                  className={classes.typo}
                  style={{ marginLeft: "3rem" , textDecoration:"none" }}
                >
                  Contact Us
                </Typography>
                {/* <Typography
                  variant="button"
                  component={Link}
                  to="/marketplace"
                  className={classes.typo}
                  style={{ marginLeft: "3rem" , textDecoration:"none" }}
                >
                  Marketplace
                </Typography> */}
              </div>

              {user ? (
                <div className={classes.logIn}>
                  <Avatar
                    className={classes.avatar}
                    alt={user.result.name}
                    src={user.result.imageUrl}
                  >
                    {user.result.name.charAt(0)}
                  </Avatar>

                  <div className={classes.buttonLogin}>
                  <Button
                    id="demo-customized-button"
                    aria-controls="demo-customized-menu"
                    aria-haspopup="true"
                    aria-expanded={openn ? "true" : undefined}
                    variant="contained"
                    disableElevation
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDown />}
                  >
                    Welcome
                  </Button>
                  <StyledMenu
                    id="demo-customized-menu"
                    MenuListProps={{
                      "aria-labelledby": "demo-customized-button",
                    }}
                    anchorEl={anchorEl}
                    open={openn}
                    onClose={handleClose}
                  >
                    <Divider />
                    <Typography variant="button" style={{marginLeft:"1.5rem"}}>
                      {user === user?.result?.googleId
                        ? user.result.givenName
                        : user?.result?.name}
                    </Typography>
                    <Divider />
                    <MenuItem
                      onClick={handleClose}
                      disableRipple
                      component={Link}
                      to="/dashboard"
                    >
                      <Dashboard />
                      Dashboard
                    </MenuItem>
                    <MenuItem
                      onClick={handleClose}
                      disableRipple
                      component={Link}
                      to="/dashboard/add-subject"
                    >
                      <AddCircle />
                      Add Subject
                    </MenuItem>
                    <MenuItem
                      onClick={handleClose}
                      disableRipple
                      component={Link}
                      to="/dashboard/result"
                    >
                      <HistoryEdu />
                      Check Result
                    </MenuItem>
                    <Divider sx={{ my: 0.5 }} />
                    <MenuItem
                      onClick={handleClose}
                      disableRipple
                      component={Link}
                      to="/dashboard/profile"
                    >
                      <Person />
                      My Profile
                    </MenuItem>
                    <MenuItem onClick={logout} disableRipple>
                      <Logout />
                      Log Out
                    </MenuItem>
                  </StyledMenu>
                  </div>
                </div>


              ) : (
                <div className={classes.button}>
                  <Button
                    variant="contained"
                    style={{ paddingLeft: "9px", paddingRight: "9px" }}
                    component={Link}
                    to="/auth"
                  >
                    SignUp/Login
                  </Button>
                </div>
              )}
            </div>

            <div className={classes.menuBar}>
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
                <DrawerHeader>
                  <IconButton onClick={handleDrawerClose}>
                    {theme.direction === "ltr" ? (
                      <ChevronLeft />
                    ) : (
                      <ChevronRight />
                    )}
                  </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                  {[
                    <Typography variant="button" component={Link} to="/" style={{textDecoration:"none", marginTop:"2rem"}}>
                      Home
                    </Typography>,
                      <Typography variant="button" component={Link} to="/service" style={{textDecoration:"none"}}>
                      Service
                    </Typography>,
                    <Typography variant="button" component={Link} to="/about" style={{textDecoration:"none"}}>
                      About Us
                    </Typography>,
                  
                    <Typography variant="button" component={Link} to="/contact" style={{textDecoration:"none"}}>
                      Contact US
                    </Typography>,

                    <Typography variant="button" component={Link} to="/marketplace">
                      Marketplace
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
                <Divider />
                {/* <List>
                  {["All mail", "Trash", "Spam"].map((text, index) => (
                    <ListItem button key={text}>
                      <ListItemIcon>
                        {index % 2 === 0 ? <Inbox /> : <Mail />}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItem>
                  ))}
                </List> */}
              </Drawer>
            </div>
            {/* <Main open={open}>
        <DrawerHeader />
      
        </Main> */}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default NavBars;

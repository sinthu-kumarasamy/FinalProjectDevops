import React from 'react';
import clsx from 'clsx';
import { Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Badge from '@material-ui/core/Badge';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MusicIcon from '@material-ui/icons/MusicNote';

// import your components:
import Home from '../pages/Home.js';
import Believer from '../pages/Believer';
import Trampoline from '../pages/Trampoline';
import Show_me_the_meaning from '../pages/BackStreet';


const drawerWidth = 240;
const history = createBrowserHistory();

// css
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    paddingLeft: 50
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '10 80px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  drawerPaperCollapsed: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(0),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(0),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    color:'darkGreen'
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(5),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 100,
  },
  footer: {
    position: 'fixed',
    left: 100,
    bottom: 0,
    width: '100%',
    backgroundColor: 'grey',
    color: 'white',
    textAlign: 'center',
    fontStyle: 'italic',
  },
}));


export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [collapsed, setCollapsed] = React.useState(false);
  const [title, setTitle] = React.useState('Lyrical App');

  const handleDrawerOpen = () => {
    setOpen(true);
    setCollapsed(false);
  };

  const handleDrawerCollapsed = () => {
    setCollapsed(true);
    setOpen(false);
  };
  const onItemClick = title => () => {
    setTitle(title);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />

      {/* This is the header AppBar */}
      <AppBar position="absolute" className={clsx(classes.appBar, 
          open && classes.appBarShift, collapsed && classes.appBar)}>
        <Toolbar title={title} className={classes.toolbar}>

          {/* The Menu icon exposes the left pane menu bar */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>

          {/* The title is set by the components */}
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            {title}
          </Typography>

          {/* For kicks */}
          <IconButton color="inherit">
            <Badge badgeContent={2} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* The Router component routes URLs to your components */}
      <Router history={history} title={title} >

        {/* Drawers are left pane menu items in React-speak */}
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, 
              !open && classes.drawerPaperClose,
              collapsed && classes.drawerPaperCollapsed)
          }}
          open={open}
        >
    

          {/* Left pane menu items */}
          <List>

            {/* Charts menu item*/}
            <ListItem button component={Link} to="/song1" onClick={onItemClick('Believer')}>
              <ListItemIcon>
                <MusicIcon />
              </ListItemIcon>
              <ListItemText primary="Believer" />
              { title === 'Believer' && 
                <ListItemIcon>
                  <IconButton onClick={handleDrawerCollapsed}>
                    <ChevronLeftIcon />
                  </IconButton>
                </ListItemIcon>
              }
            </ListItem>

            {/* Deposits menu item*/}
            <ListItem button component={Link} to="/song2" onClick={onItemClick('Trampoline')}>
              <ListItemIcon>
                <MusicIcon />
              </ListItemIcon>
              <ListItemText primary="Trampoline" />
              { title === 'Trampoline' && 
                <ListItemIcon>
                  <IconButton onClick={handleDrawerCollapsed}>
                    <ChevronLeftIcon />
                  </IconButton>
                </ListItemIcon>
              }
            </ListItem>

            {/* Orders menu item */}
            <ListItem button component={Link} to="/song3" onClick={onItemClick('BackStreet')}>
              <ListItemIcon>
                <MusicIcon />
              </ListItemIcon>
              <ListItemText primary="BackStreet" />
              { title === 'BackStreet' && 
                <ListItemIcon>
                  <IconButton onClick={handleDrawerCollapsed} visible={title}>
                    <ChevronLeftIcon />
                  </IconButton>
                </ListItemIcon>
              }
            </ListItem>

            

          </List>

        </Drawer>

        {/* This is your mission control: Matches URLs above to your components */}
        <main className={classes.content}>
          <Route exact path="/" component={Home} />
          <Route path="/song1" component={Believer} />
          <Route path="/song2" component={Trampoline} />
          <Route path="/song3" component={Show_me_the_meaning} />


        </main>
      </Router>
      
     
    </div>
  );
}

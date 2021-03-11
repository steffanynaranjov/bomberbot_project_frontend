import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Sidebar from './Sidebar';
import image from './blue2.jpg';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));


const mainFeaturedPost = {
  title: 'About CodeSkills',
  description:
    'CodeSkills is an online IDE which is designed to allow users to edit and run HTML, JavaScript, and CSS code on a single page. Its interface is minimalist and split into four main frames, which correspond to editable HTML, JavaScript and CSS fields and a result field which displays the users project after it is run.',
  image: image,
  imageText: 'main image description',
};

const featuredPosts = [
  {
    title: 'CodeMirror',
    description:
      'CodeMirror is a versatile text editor implemented in JavaScript for the browser. It is specialized for editing code, and comes with a number of language modes and addons that implement more advanced editing functionality.',
    // image: 'https://source.unsplash.com/random',
    image: image,
    imageText: 'Image Text',
  },
  {
    title: 'React',
    description:
      'React (also reffered to as React Js or Reactjs)  is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.',
    image: image,
    imageText: 'Image Text',
  },
];


const sidebar = {
  title: 'About',
  description:
    'CodeSkillz was developed in February 2021 by a team of 4 developers in Cali, Valle del Cauca, Colombia.',
  archives: [
    { title: <a href="/https://bomberbot.com/">Bomberbot</a>, url: '#' },
    { title: <a href="/https://codemirror.net/">CodeMirror</a>, url: '#' },
    { title: <a href="/https://reactjs.org/">React</a>, url: '#' },
    { title: <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a>, url: '#' },
  ],
  social: [
    { name: <a href="https://github.com/Andres802/bomberbot_project_frontend/">Github 1</a>, icon: GitHubIcon },
    { name: <a href="https://github.com/Andres802/bomberbot_project_backend/">Github 2</a>, icon: GitHubIcon },
  ],
};


const divStyle = {
  marginLeft: '50px',
  marginRight: '80px',
};

export default function About() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <div style={divStyle}>
              <h3>What is our mission at CodeSkills?</h3>
              <p>We know the urgent need of Software Developers in our more and more virtualized world. Therefore we need</p>
              <p>efficient ways to teach student how to code. In 2020 many countries went completely virtual without actually</p>
              <p>having enough Software Develpers. So our mission is to accelerate the rate of new software developers.</p>
              <p>And the first step to do that is starting with a interactive text editor that gives instant feedback.</p>
              <p>At CodeSkills we believe that learning to code should be fun. So part of that is having an interactive Code</p>
              <p>Editor. It is way more fun for a child to code on a interactive code editor like CodeSkills than on a Code</p>
              <p>Editor like Vim or Emacs. And at Codeskills childs and teens are our main users. Several studies have proven</p>
              <p>that seing results is the best motivation when studying something.</p>
              <p>When using an interactive Code editor you see your results instanly and therefore you can understand easily</p>
              <p>which effect your code has and therefore you learn extremely fast.</p>
              <h3>How did we implement CodeSkills and what is it?</h3>
              <p> CodeSkills interface is minimalist and split into four main frames, which correspond to editable HTML</p>
              <p>, JavaScript and CSS fields and a result field which displays the user's project after it is run. As of 2021,</p>
              <p>CodeSkills uses CodeMirror to support its editable fields, providing multicursors, syntax highlighting, syntax</p>
              <p>verification (linter), brace matching, auto indentation, autocompletion, code/text folding, Search and Replace</p>
              <p>to assist web developers in their actions. On the left, a sidebar allows users to integrate external resources</p>
              <p>such as external CSS stylesheets and external JavaScript libraries. The most popular JavaScript frameworks</p>
              <p>and CSS frameworks are suggested to users and available via a click.CodeSkills allows users to publicly save t</p>
              <p>heir code an uncapped number of times for free. Each version is saved online at the application's website with</p>
              <p>an incremental numbered suffix.[citation needed] This allows users to re-access their saved code. Code saved</p>
              <p>on CodeSkills may also be edited into new versions, shared with other parties, and forked into a new line.</p>

            </div>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
    </React.Fragment>
  );
}

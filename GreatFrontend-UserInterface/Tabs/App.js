import Tabs from './Tabs';

import './styles.css';

export default function App() {
  return <Tabs data={[
    {
      value : "html",
      buttonName : "HTML", 
      text : "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser."
    },
    {
      value : "css",
      buttonName : "CSS", 
      text : "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML."
    },
    {
      value : "javascript",
      buttonName : "JavaScript", 
      text : "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS."
    },
  ]}/>;
}

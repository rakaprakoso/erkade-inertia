import React, { useEffect, useState } from 'react'
import { Route, useParams } from 'react-router-dom';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Layout from '@/Shared/Layout';
import axios from 'axios';
import { Parser, ProcessNodeDefinitions } from 'html-to-react'
import Header1 from '@/Components/Molecules/Header/Header1';
import Hero2 from '@/Components/Molecules/Hero/Hero2';
import Profile1 from '@/Components/Section/Profile/Profile1';
import Resume1 from '@/Components/Section/Resume/Resume1';
import Portfolio1 from '@/Components/Section/Portfolio/Portfolio';
import Footer1 from '@/Components/Molecules/Footer/Footer1';

const App = () => {
  const [data, setData] = useState(false);
  const { path } = useParams()

  useEffect(async () => {
    const dataFetch = await axios
      .get(`/api/renderPage?slug=${path}`)
      .then(function (response) {
        // console.log(response.data.content);
        return response.data.content;
      })
      .catch(function (error) {
        console.log(error);
      });
    setData(dataFetch);
  }, []);

  var reactComponent = htmlToReactParser.parseWithInstructions(
    data, isValidNode, processingInstructions);

  return (
      <div>
        {data && reactComponent}
      </div>
  );
};

// Persistent layout
// Docs: https://inertiajs.com/pages#persistent-layouts
// Dashboard.layout = page => <Layout title="Dashboard" children={page} />;

export default App;

var htmlToReactParser = new Parser();
var isValidNode = function () {
  return true;
};

// var preprocessingInstructions = [
//   {
//     shouldPreprocessNode: function (node) {
//       return node.attribs && node.attribs['react-element'] !== null;
//     },
//     preprocessNode: function (node) {
//       node.attribs = {id: `preprocessed-${node.attribs.id}`,};
//     },
//   }
// ];
var processNodeDefinitions = new ProcessNodeDefinitions(React);
var processingInstructions = [
  {
    replaceChildren: true,
    shouldProcessNode: function (node) {
      return node.attribs && node.attribs['react-element'] !== null;
    },
    processNode: function (node, children, index) {
      switch (node.attribs['react-element']) {
        case 'Header':
          return <Header1 />
        case 'Hero':
          return <Hero2 imgUrl="/img/background/IMG_0513.JPG" />
        case 'Profile':
          return <Profile1 />
        case 'Resume':
          return <Resume1 />
        case 'Portfolio':
          return <Portfolio1 />
        case 'Footer':
          return <Footer1 />
        default:
          break;
      }

    }
  },
  {
    shouldProcessNode: function (node) {
      return true;
    },
    processNode: processNodeDefinitions.processDefaultNode,
  },
];

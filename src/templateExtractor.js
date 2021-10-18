require("./handlebars_helper.js");
const Handlebars = require("handlebars");

// param: geojson
// {
//   ...,
//   "features": [
//     {
//       ...,
//       "properties": {
//         "type": "jizo"
//       }
//     }
//   ],
//   ...
// }

// param: templates
// {
//   "pin": "{{{type}}}.png",
// }

// return: embed geojson
// {
//   ...,
//   "features": [
//     {
//       ...,
//       "properties": {
//         "type": "jizo"
//       },
//       "results": {
//         "ping": "jizo.png"
//       }
//     }
//   ],
//   ...
// }

const templateExtractor = ({ geojson, templates }) => {
  const compiledTemplates = {};
  for (const [key, templateRaw] of Object.entries(templates)) {
    compiledTemplates[key] = Handlebars.compile(templateRaw);
  }

  geojson.features.forEach((feature) => {
    for (const key of Object.keys(templates)) {
      feature.result = {};
      feature.result[key] = compiledTemplates[key](feature.properties);
    }
  });

  return geojson;
};

module.exports = templateExtractor

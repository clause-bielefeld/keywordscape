// LIBRARY IMPORTS

// IMPORTANT example here: https://observablehq.com/@kikuomax/untitled
// IMPORANT example for dynamic data joins here: https://www.youtube.com/watch?v=ZOeWdkq-L90
// IMPORTS SECTION
//// large datasets help here: https://blog.scottlogic.com/2020/05/01/rendering-one-million-points-with-d3.html
//// render performance improvement: https://medium.com/@idmitme/real-time-d3-optimising-performance-449d2e246b50 (CANVAS)
// corpora
import { covid_news_corpus } from "./assets/covid_news_corpus.js"
import { vis_2020_proceedings_corpus } from "./assets/vis_2020_proceedings_corpus.js"
import { dynamic_graph_visualization_corpus } from "./assets/dynamic_graph_visualization_corpus.js"
import { uncertainty_visualization_corpus } from "./assets/uncertainty_visualization_corpus.js"
import { chi_2019_proceedings_corpus } from "./assets/chi_2019_proceedings_corpus.js"
import { blogger_corpus } from "./assets/blogger_corpus.js" 
import { eurovis_2021_proceedings_corpus } from "./assets/eurovis_2021_proceedings_corpus.js"
import { food_recipe_corpus } from "./assets/food_recipe_corpus.js"
import { meaning_shift_corpus} from "./assets/meaning_shift_corpus.js"
// base map points
import { covid_news_corpus_base_map_points } from "./assets/covid_news_corpus_base_map_points.js"
import { vis_2020_proceedings_corpus_base_map_points } from "./assets/vis_2020_proceedings_corpus_base_map_points.js"
import { dynamic_graph_visualization_corpus_base_map_points } from "./assets/dynamic_graph_visualization_corpus_base_map_points.js"
import { uncertainty_visualization_corpus_base_map_points } from "./assets/uncertainty_visualization_corpus_base_map_points.js"
import { chi_2019_proceedings_corpus_base_map_points } from "./assets/chi_2019_proceedings_corpus_base_map_points.js"
import { blogger_corpus_base_map_points } from "./assets/blogger_corpus_base_map_points.js"
import { eurovis_2021_proceedings_corpus_base_map_points } from "./assets/eurovis_2021_proceedings_corpus_base_map_points.js"
import { food_recipe_corpus_base_map_points } from "./assets/food_recipe_corpus_base_map_points.js"
import { meaning_shift_corpus_base_map_points } from "./assets/meaning_shift_corpus_base_map_points.js"
// corpus points
import { covid_news_corpus_corpus_points } from "./assets/covid_news_corpus_corpus_points.js"
import { vis_2020_proceedings_corpus_corpus_points } from "./assets/vis_2020_proceedings_corpus_corpus_points.js"
import { dynamic_graph_visualization_corpus_corpus_points } from "./assets/dynamic_graph_visualization_corpus_corpus_points.js"
import { uncertainty_visualization_corpus_corpus_points } from "./assets/uncertainty_visualization_corpus_corpus_points.js"
import { chi_2019_proceedings_corpus_corpus_points } from "./assets/chi_2019_proceedings_corpus_corpus_points.js"
import { blogger_corpus_corpus_points } from "./assets/blogger_corpus_corpus_points.js"
import { eurovis_2021_proceedings_corpus_corpus_points } from "./assets/eurovis_2021_proceedings_corpus_corpus_points.js"
import { food_recipe_corpus_corpus_points } from "./assets/food_recipe_corpus_corpus_points.js"
import { meaning_shift_corpus_corpus_points } from "./assets/meaning_shift_corpus_corpus_points.js"
// topic corpora
import { covid_news_corpus_topic_corpus } from "./assets/covid_news_corpus_topic_corpus.js"
import { vis_2020_proceedings_corpus_topic_corpus } from "./assets/vis_2020_proceedings_corpus_topic_corpus.js"
import { dynamic_graph_visualization_corpus_topic_corpus } from "./assets/dynamic_graph_visualization_corpus_topic_corpus.js"
import { uncertainty_visualization_corpus_topic_corpus } from "./assets/uncertainty_visualization_corpus_topic_corpus.js"
import { chi_2019_proceedings_corpus_topic_corpus } from "./assets/chi_2019_proceedings_corpus_topic_corpus.js"
import { blogger_corpus_topic_corpus } from "./assets/blogger_corpus_topic_corpus.js"
import { eurovis_2021_proceedings_corpus_topic_corpus } from "./assets/eurovis_2021_proceedings_corpus_topic_corpus.js"
import { food_recipe_corpus_topic_corpus } from "./assets/food_recipe_corpus_topic_corpus.js"
import { meaning_shift_corpus_topic_corpus } from "./assets/meaning_shift_corpus_topic_corpus.js"
//--------------------------------------------------------------------------------

// DATA SECTION || data binding(live) or loading(once), also data access functions (CRUD)
// WINDOW OBJECT PROPERTIES | = STATE OBJECT DATA | main state object | top object
window.corpus = covid_news_corpus
window.base_map_points = covid_news_corpus_base_map_points
window.corpus_points = covid_news_corpus_corpus_points
window.topic_corpus = covid_news_corpus_topic_corpus
window.base_map = ""
window.base_map_voronoi = ""
window.document_map_voronoi = ""
window.paragraph_map_voronoi = ""
window.map_type = "contour_map" // ['chloropleth_map', 'point_map','grid_map', 'contour_map']
window.selection_set_1_points = ""
//window.set_1_projection = ""
window.selection_set_2_points = ""
//window.set_2_projection = ""
window.set_1_2_union_points = ""
//window.set_1_2_union_projection = ""
window.set_1_2_intersection_points = ""
//window.set_1_2_intersection_projection = ""

window.projection_type = 'geoEquirectangular'  // ['geoEquirectangular, 'geoPatterson',  'geoFahey', 'geoMercator'. 'geoMiller', 'geoOrthographic', ''] // d3 geoprojections
window.canvas_map_base_map_type = 'blurred_contour_map' // ['voronoi_map', 'blurred_contour_map']
window.canvas_map_map_type = "contour_map" // ['point_map', 'contour_map']
window.canvas_map_set_mode = "union_mode"
window.canvas_map_bandwidth = 25.0
window.canvas_map_borderradius = 50.0
window.canvas_map_opacity = 0.2
window.canvas_map_grid_size = 1 //  // every n degree a point is created
window.canvas_map_projection_color_scale = 'Cividis' // ['Viridis, Cividis, Warm, Magma, Plasma, Cool, Greens, Blues, Oranges, YlOrBr, OrRd, GnBu, YlGnBu, YlGn]
window.canvas_map_base_color_scale = 'Demc' // ['Roma', 'RomaReverse' ''City', 'CityLand', 'Demc', 'DemcLand']
window.document_map_base_color_scale = 'Demc'
window.canvas_map_interaction = 'zoom'
window.point_grid_geojson = ""
window.background_point_grid_geojson = ""
window.render_labels = true
//window.render_document_vectors = 'no_document_vectors' // ['no_document_vectors', 'selected_document_vectors', 'all_document_vectors']
window.render_set_projection = false
window.render_base_map_borders = true
window.embedding_map_type = 'contextualized_word_embedding' // ['contextualized_word_embedding', 'document_embedding', 'paragraph_embedding']
window.document_grid_map_size = 10
window.semantic_depth = ""
window.semantic_width = ""

// selected sources out of the corpus and selected topic
window.source_selection_set_1 = []
window.source_selection_set_2 = []
window.source_document_vector_selection_set = []
window.selected_topic = ""

// WINDOW OBJECT GETTER AND SETTER
window.compute_set_projection = () => {
  compute_set_projection();
}
window.compute_query_projection = (query_type, query) => {
  compute_query_projection(query_type, query)
}
window.render_canvas = () => {
  render_canvas(canvas, canvas.__zoom || d3.zoomIdentity);
}
window.clear_canvas = () => {
  // take the global canvas and clear it
  clear_canvas(canvas);
}
window.make_projection = () => {
  projection = make_projection(window.projection_type, window_properties)
  projection_scale = projection.scale()
  return projection
}
window.make_geo_path_generator = () => {
  geo_path_generator = make_geo_path_generator(projection, on_screen_context)
}

window.set_corpus = (new_corpus) => {
  switch (new_corpus) {
    case "dataset_covid_news_corpus":
      window.corpus = covid_news_corpus
      window.base_map_points = covid_news_corpus_base_map_points
      window.corpus_points = covid_news_corpus_corpus_points
      window.topic_corpus = covid_news_corpus_topic_corpus
      break;
    case "dataset_vis_2020_proceedings_corpus":
      window.corpus = vis_2020_proceedings_corpus
      window.base_map_points = vis_2020_proceedings_corpus_base_map_points
      window.corpus_points = vis_2020_proceedings_corpus_corpus_points
      window.topic_corpus = vis_2020_proceedings_corpus_topic_corpus
      break;
    case "dataset_dynamic_graph_visualization_corpus":
      window.corpus = dynamic_graph_visualization_corpus
      window.base_map_points = dynamic_graph_visualization_corpus_base_map_points
      window.corpus_points = dynamic_graph_visualization_corpus_corpus_points
      window.topic_corpus = dynamic_graph_visualization_corpus_topic_corpus
      break;
    case "dataset_uncertainty_visualization_corpus":
      window.corpus = uncertainty_visualization_corpus
      window.base_map_points = uncertainty_visualization_corpus_base_map_points
      window.corpus_points = uncertainty_visualization_corpus_corpus_points
      window.topic_corpus = uncertainty_visualization_corpus_topic_corpus
      break;
    case "dataset_chi_2019_proceedings_corpus":
      window.corpus = chi_2019_proceedings_corpus
      window.base_map_points = chi_2019_proceedings_corpus_base_map_points
      window.corpus_points = chi_2019_proceedings_corpus_corpus_points
      window.topic_corpus = chi_2019_proceedings_corpus_topic_corpus
      break;
    case "dataset_blogger_corpus":
      window.corpus = blogger_corpus
      window.base_map_points = blogger_corpus_base_map_points
      window.corpus_points = blogger_corpus_corpus_points
      window.topic_corpus = blogger_corpus_topic_corpus
      break;
    case "dataset_eurovis_2021_proceedings_corpus":
      window.corpus = eurovis_2021_proceedings_corpus
      window.base_map_points = eurovis_2021_proceedings_corpus_base_map_points
      window.corpus_points = eurovis_2021_proceedings_corpus_corpus_points
      window.topic_corpus = eurovis_2021_proceedings_corpus_topic_corpus
      break;
    case "dataset_food_recipe_corpus":
      window.corpus = food_recipe_corpus
      window.base_map_points = food_recipe_corpus_base_map_points
      window.corpus_points = food_recipe_corpus_corpus_points
      window.topic_corpus = food_recipe_corpus_topic_corpus
      break;
    case "dataset_meaning_shift_corpus":
      window.corpus = meaning_shift_corpus
      window.base_map_points = meaning_shift_corpus_base_map_points
      window.corpus_points = meaning_shift_corpus_corpus_points
      window.topic_corpus = meaning_shift_corpus_topic_corpus
      break;
    case "null":
      // DO NOTHING
      break;
    default:
      console.log("ERROR: wrong data set selection.");
  }
  // after succesful switching the dataset recompute the maps
  //window.clear_canvas();
  //window.make_canvas();
  // recompute the projection
  window.make_projection()
  // recompute the geo_path_generator
  window.make_geo_path_generator()
  // recompute the zoom
  window.create_zoom()
  // recompute the maps
  window.compute_base_map();
  window.compute_document_map();
  window.compute_paragraph_map();
  // rerender canvas 
  window.render_canvas();
}

// => the following can be seen as the constructor of the window object

// DATA CRUD
// Create
// Read || data value/variable accessor functions
//const xValue = d => d.x
//const yValue = d => d.y
// Update
// Delete

// DATA space
// window properties data array for RESPONSIVE svg page

const nav_width = 324 // navigation bar width in pixels 
let window_properties = [{
  width: document.body.clientWidth - nav_width,
  height: document.body.clientHeight,
  margin: ""
}]

// data scales -> we are using a sphere projection, therefore xScale = lon, yScale = lat
const width = window_properties[0].width //955
const height = window_properties[0].height //657

//--------------------------------------------------------------------------------
// VIEW COMPONENT INIT SECTION || view objects, each view object is bound to a variable and to a data object from the above data section

// add custom color scales
const roma = ["#7e1900", "#801c01", "#811f02", "#822203", "#832504", "#852705", "#862a06", "#872d06", "#882f07", "#8a3108", "#8b3409", "#8c360a", "#8d380b", "#8e3b0c", "#8f3d0c", "#903f0d", "#92410e", "#93440f", "#944610", "#954811", "#964a12", "#974c13", "#984e14", "#995015", "#9a5315", "#9b5516", "#9c5717", "#9d5918", "#9e5b19", "#9f5d1a", "#a05f1b", "#a1611c", "#a2631c", "#a3651d", "#a4671e", "#a5691f", "#a66b20", "#a76d21", "#a86f21", "#a97122", "#aa7323", "#ab7524", "#ac7725", "#ad7926", "#ae7c27", "#af7e27", "#b08028", "#b18229", "#b2842a", "#b3862b", "#b4882c", "#b58a2d", "#b68c2e", "#b78e2e", "#b8902f", "#b99230", "#ba9431", "#bb9632", "#bc9933", "#bd9b35", "#be9d36", "#bf9f37", "#c0a138", "#c1a339", "#c2a63b", "#c3a83c", "#c4aa3e", "#c6ac3f", "#c7af41", "#c8b143", "#c9b344", "#cab646", "#cbb848", "#cdba4a", "#cebc4d", "#cfbf4f", "#d0c151", "#d2c354", "#d3c556", "#d4c859", "#d5ca5c", "#d6cc5e", "#d8ce61", "#d9d064", "#dad267", "#dbd36a", "#dcd56c", "#ddd76f", "#ded872", "#dfda75", "#e0db78", "#e0dc7b", "#e1de7e", "#e2df80", "#e3e083", "#e3e186", "#e4e289", "#e4e38b", "#e5e48e", "#e5e590", "#e5e593", "#e6e695", "#e6e798", "#e6e79a", "#e6e89d", "#e6e89f", "#e6e9a1", "#e6e9a4", "#e6eaa6", "#e6eaa8", "#e6ebaa", "#e5ebad", "#e5ebaf", "#e4ecb1", "#e4ecb3", "#e3ecb5", "#e2ecb7", "#e1edb9", "#e0edba", "#dfedbc", "#deedbe", "#ddedc0", "#dbedc1", "#daeec3", "#d8eec4", "#d7eec6", "#d5eec7", "#d3eec9", "#d1edca", "#cfedcb", "#cdedcc", "#cbedcd", "#c9edcf", "#c6edd0", "#c4ecd1", "#c1ecd1", "#bfecd2", "#bcebd3", "#b9ebd4", "#b7ead5", "#b4ead5", "#b1e9d6", "#aee9d7", "#abe8d7", "#a8e7d8", "#a5e7d8", "#a2e6d9", "#9fe5d9", "#9ce4d9", "#99e3da", "#96e2da", "#93e1da", "#90e0da", "#8ddfda", "#8addda", "#87dcdb", "#84dbda", "#81d9da", "#7ed8da", "#7bd6da", "#78d5da", "#75d3da", "#73d1d9", "#70d0d9", "#6eced9", "#6bccd8", "#69cad8", "#67c9d7", "#65c7d7", "#63c5d6", "#61c3d6", "#5fc1d5", "#5ebfd4", "#5cbed4", "#5abcd3", "#59bad2", "#58b8d2", "#56b6d1", "#55b4d0", "#54b2d0", "#53b0cf", "#52afce", "#50adcd", "#4fabcd", "#4ea9cc", "#4da7cb", "#4da5ca", "#4ca4ca", "#4ba2c9", "#4aa0c8", "#499ec7", "#489cc7", "#479ac6", "#4799c5", "#4697c4", "#4595c3", "#4493c3", "#4492c2", "#4390c1", "#428ec0", "#418cc0", "#418abf", "#4089be", "#3f87bd", "#3e85bd", "#3e84bc", "#3d82bb", "#3c80bb", "#3c7eba", "#3b7db9", "#3a7bb8", "#3979b8", "#3978b7", "#3876b6", "#3774b5", "#3773b5", "#3671b4", "#356fb3", "#356eb3", "#346cb2", "#336ab1", "#3369b0", "#3267b0", "#3165af", "#3164ae", "#3062ae", "#2f61ad", "#2f5fac", "#2e5dac", "#2d5cab", "#2d5aaa", "#2c59a9", "#2b57a9", "#2b55a8", "#2a54a7", "#2952a7", "#2951a6", "#284fa5", "#274da5", "#274ca4", "#264aa3", "#2549a3", "#2547a2", "#2446a1", "#2344a1", "#2342a0", "#22419f", "#213f9f", "#203e9e", "#1f3c9d", "#1f3b9c", "#1e399c", "#1d379b", "#1c369a", "#1b349a", "#1a3399"]
const city = ['#8ab4f8', '#9cc0f9', '#9ed6ad', '#bbe2c6', '#e8eaed', '#e2e4e8', '#fef7e0']
const cityland = ['#9ed6ad', '#a8dab5', '#bbe2c6', '#d1e6d9', '#f8f9fa', '#e2e4e8'] //'#f4eddc', '#f8f8f8'] // last two colors are hill and mountain
const demc = ['#1176dc', '#00b5ad', '#fefe98', '#f6f394', '#a6ed87', '#3dd872', '#8a6a5a', '#a9918c', '#e1d8d6', '#f9f7f7'] // we use demc adapted, demc raw => ['#1176dc', '#00b5ad', '#3dd872', '#a6ed87', '#f6f394', '#c0ae77', '#8a6a5a', '#a9918c', '#e1d8d6', '#f9f7f7']
const demcland = ['#00ab55', '#5cde78', '#b8f08a', '#f8f695', '#cabb7c', '#9d8164', '#91726c', '#bfada9', '#e9e3e2']
const population = ["#023858", "#045a8d", "#0570b0", "#3690c0", "#74a9cf", "#a6bddb", "#d0d1e6", "#ece7f2", "#fff7fb", "#fff", "#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"]
d3['interpolateRoma'] = d3.piecewise(d3.interpolateRgb, roma)
d3['interpolateRomaReverse'] = d3.piecewise(d3.interpolateRgb, roma.reverse())
d3['interpolateCity'] = d3.piecewise(d3.interpolateRgb, city)
d3['interpolateCityLand'] = d3.piecewise(d3.interpolateRgb, cityland)
d3['interpolateDemc'] = d3.piecewise(d3.interpolateRgb, demc)
d3['interpolateDemcLand'] = d3.piecewise(d3.interpolateRgb, demcland)
d3['interpolatePopulation'] = d3.piecewise(d3.interpolateRgb, population)

//// svg
// main svg component, bound to window_props
function makeSVG(data_to_bind_to) {
  return d3.select('#svg_container')
    .data(data_to_bind_to)
    .join('svg')
    .attr('width', data_to_bind_to => data_to_bind_to.width)
    .attr('height', data_to_bind_to => data_to_bind_to.height)
  //.attr('viewBox','0 0 '+Math.min(width,height)+' ' +Math.min(width,height))
}
let svg = makeSVG(window_properties);
// main group that holds the base map and the base map labels
/* const g = svg.append('g')
  .attr('id', 'main_group')

let topic_map_group = g.append('g')
let set_1_projection_group = g.append('g')
let set_2_projection_group = g.append('g')
let set_1_2_union_projection_group = g.append('g')
let set_1_2_intersection_projection_group = g.append('g')
let point_map_group = g.append('g')
let singe_document_projection_group = g.append('g')
let single_document_icon_group = g.append('g')
let label_group = svg.append('g') */

//// canvas
function makeCanvas(window_properties) {
  // get the canvas where to draw upon
  const canvas = document.getElementById('canvas_container');
  canvas.width = window_properties[0].width
  canvas.height = window_properties[0].height
  return canvas
}
// canvas layer 1
let canvas = makeCanvas(window_properties)
let on_screen_context = canvas.getContext('2d')

window.make_canvas = () => {
  canvas = makeCanvas(window_properties)
  on_screen_context = canvas.getContext('2d')
}

// projection 
function make_projection(projection_type, window_properties) {
  const projection = d3[projection_type.toString()]().fitExtent([[0, 0], [window_properties[0].width, window_properties[0].height]], { type: 'Sphere' }); // IMPORTANT: the extent has to be the same as the xScale and yScale extent of the respective scale!! this ensures that everything matches
  //.fitSize([width, height], {type: 'Sphere'});
  return projection
}
let projection = make_projection(window.projection_type, window_properties)
let projection_scale = projection.scale()
console.log(projection_scale)

// geo path
function make_geo_path_generator(projection, on_screen_context) {
  const geo_path_generator = d3.geoPath().context(on_screen_context).projection(projection);
  return geo_path_generator
}
let geo_path_generator = make_geo_path_generator(projection, on_screen_context)

// compute the base map feature collection and set the window.base_map and window.base_map_voronoi variables
compute_base_map();
window.compute_base_map = () => {
  compute_base_map();
}
//console.log(window.base_map)

// compute the document map feature collection and set the window.document_map_feature_collection and 
compute_document_map();
window.compute_document_map = () => {
  compute_document_map();
}
// TOOLTIP: create the tooltip for the document map
const tooltip = d3.select('#main_view').append("div")
  .attr('class', 'circle-tooltip')
  .style("position", "relative")
  .style("opacity", "0.0")
  .style('width', 32 + 'px')
  .style('height', 32 + 'px')
  .style('z-index', 5)
  .style('border-radius', '10%') // 50% = circle
  .style('background-color', 'transparent')
  .style('border-color', '#333333')
  .style('border-style', 'solid')
  .style('border-width', '3px')
  .on('click', (event) => {
    // when clicked find the nearest document and show its source_details
    //const x_y_point = [event.layerX, event.layerY]
    //const lon_lat_point = projection.invert(x_y_point)
    //const document_uri = window.document_map_voronoi.find(lon_lat_point[0], lon_lat_point[1])
    const search_navigation_component = document.querySelector('search-navigation-component')
    // show the resource details of this document
    search_navigation_component.show_resource_details(0) // the element will always be the first in the current search_results of the search_navigation_component
  });

function showTooltip(point) {
  d3.select('.circle-tooltip')
    .style('opacity', 1.0)
    .style('top', point[1] - 16 + 'px') // = y = pos - width/2 -> we have to do this because the div position is the left over top
    .style('left', point[0] - 16 + 'px') // = x pos - width/2
  /*     .html(`
        <div>
          <strong>X:</strong> ${point[1]}
          <br>
          <strong>Y:</strong> ${point[0]}
          <div onClick="console.log('what the heck')">Hello World</div>
        </div>
      `);  */
}

function hideTooltip() {
  d3.select('.circle-tooltip')
    .style('opacity', 0.0)
}
window.hideTooltip = () => {
  hideTooltip();
}

// QUICK ACCESS MENU: create the quick access menu in the right bottom corner
// menu div
const quick_access_menu = d3.select('#main_view').append("div")
  .attr('class', 'quick-access-menu')
  .style("position", "fixed")
  .style('bottom','3%')
  .style('right', '3%')
  .style("display", "flex")
  .style('flex-direction', 'column')
  .style('justify-content', 'center')
  .style('align-items', "center")
  .style("opacity", "1.0")
  .style('width', 200 + 'px')
  .style('height', 150 + 'px')
  .style('z-index', 5)
  .style('border-radius', '2%') // 50% = circle

const zoom_in_button = quick_access_menu.append('button')
    .style('flex', '1')
    .style('width', 30 + 'px')
    .style('height', 30 + 'px')
    .style("margin", 2 + 'px')
    .text('+')
    .on('click', (event) => {
      // get current projection scale
      //console.log(geo_zoom.projection().scale())
      const current_projection_scale_factor = geo_zoom.projection().scale()
      // increase the current projection scale and set the new scale factor to the geo_zoom object
      const new_projection_scale_factor = current_projection_scale_factor * 1.5
      geo_zoom.projection().scale([new_projection_scale_factor])
      //geo_path_generator.projection().scale(new_projection_scale_factor)
      // set the zoom level of the geo_zoom, ..this is a hack... found here: https://github.com/vasturiano/d3-geo-zoom/issues/7
      let zoomlevel = d3.zoomIdentity
      zoomlevel.k = (new_projection_scale_factor / projection_scale)
      d3.select('#canvas_container').call(d3.zoom().transform, zoomlevel);
      //console.log(geo_zoom.projection().scale())
      //console.log(d3.zoom().transform)
      //console.log(d3.zoomIdentity)
      //geo_zoom.projection().rotate([0,0,0.00001])
      // re-render the canvas accordingly
      render_canvas()
    });

const zoom_out_button = quick_access_menu.append('button')
    .style('flex', '1')
    .style('width', 30 + 'px')
    .style('height', 30 + 'px')
    .style("margin", 2 + 'px')
    .text('-')
    .on('click', (event) => {
        // get current projection scale
      //console.log(geo_zoom.projection().scale())
      const current_projection_scale_factor = geo_zoom.projection().scale()
      // increase the current projection scale and set the new scale factor to the geo_zoom object
      const new_projection_scale_factor = current_projection_scale_factor * 0.75
      geo_zoom.projection().scale([new_projection_scale_factor])
      //geo_path_generator.projection().scale(new_projection_scale_factor)
      // set the zoom level of the geo_zoom, ..this is a hack... found here: https://github.com/vasturiano/d3-geo-zoom/issues/7
      let zoomlevel = d3.zoomIdentity
      zoomlevel.k = (new_projection_scale_factor / projection_scale)
      d3.select('#canvas_container').call(d3.zoom().transform, zoomlevel);
      //console.log(geo_zoom.projection().scale())
      //console.log(d3.zoom().transform)
      //console.log(d3.zoomIdentity)
      //geo_zoom.projection().rotate([0,0,0.00001])
      // re-render the canvas accordingly
      render_canvas()
  });

const mode_selection_button = quick_access_menu.append('button')
    .style('flex', '1')
    .style('width', 60 + 'px')
    .style('height', 30 + 'px')
    .style("margin", 2 + 'px')
    .text('zoom')
    .on('click', (event) => {
        // change the mode to the next possible mode in the modes list
      if(event.target.innerHTML === 'zoom'){
        // if we currently have ZOOM, set the window canvas map navigation type to BRUSH
        window.set_canvas_map_interaction('brush')
        // set the zindices due to the choosen navigation type (switch either canvas or svg to the front for interaction type: zoom, brush, drag, click, hover)
        window.create_canvas_map_interaction();
        event.target.innerHTML = 'brush'
        event.target.style.backgroundColor = 'yellow'
      } else if(event.target.innerHTML === 'brush'){
        // if we currently have ZOOM, set the window canvas map navigation type to BRUSH
        window.set_canvas_map_interaction('zoom')
        // set the zindices due to the choosen navigation type (switch either canvas or svg to the front for interaction type: zoom, brush, drag, click, hover)
        window.create_canvas_map_interaction();
        event.target.innerHTML = 'zoom'
        event.target.style.backgroundColor = '#e7e7e7'
      }
}); 

const projection_enable_button = quick_access_menu.append('button')
    .style('flex', '1')
    .style('width', 60 + 'px')
    .style('height', 30 + 'px')
    .style('background-color', '#4CAF50')
    .text('proj on')
    .on('click', (event) => {
      if (event.target.innerHTML ==='proj off'){
        // enable the set projection
        window.render_set_projection = true;
        event.target.innerHTML = 'proj on'
        event.target.style.backgroundColor = '#4CAF50'
        render_canvas()
      } else if(event.target.innerHTML ==='proj on'){
        // disable the set projection
        window.render_set_projection = false;
        event.target.innerHTML = 'proj off'
        event.target.style.backgroundColor = '#555555'
        render_canvas()
      }
    });

// menu svg
const quick_access_menu_svg = quick_access_menu.append('svg')
  .style('flex', '3')
  .attr("width", 200)
  .attr("height", 50)
  .style('z-index', 10)

// color legend
let linearGradient = quick_access_menu_svg
  .append("linearGradient")
  .attr("id", "linear-gradient");

//Horizontal gradient
linearGradient
  .attr("x1", "0%")
  .attr("y1", "0%")
  .attr("x2", "100%")
  .attr("y2", "0%");

//Append multiple color stops by using D3's data/enter step
// solution found here: http://bl.ocks.org/nbremer/5cd07f2cb4ad202a9facfbd5d2bc842e
linearGradient
  .selectAll("stop")
  .data(demc)
  .enter()
  .append("stop")
  .attr("offset", function (d,i) {
    return i/(demc.length-1);
  })
  .attr("stop-color", function (d) {
    return d;
  });

var minLegend = 0
var maxLegend = 1
var sumMinMaxLegend = 1

var legendWidth = 180 //width * 0.3,
var legendHeight = 8;        

var legendsvg = quick_access_menu_svg
.append("g")
.attr("id", "legend")
.attr(
  "transform",
  "translate(" + (10 + legendWidth / 2) + "," + (15) + ")" // add leftside margin AND subtract top margin
);

//Draw the Rectangle
legendsvg
  .append("rect")
  .attr("class", "legendRect")
  .attr("x", -legendWidth / 2 + 0.5)
  .attr("y", 10)
  .attr("width", legendWidth)
  .attr("height", legendHeight)
  .style("fill", "url(#linear-gradient)")
  .style("stroke", "black")
  .style("stroke-width", "1px");
//Append title
legendsvg
  .append("text")
  .attr("class", "legendTitle")
  .attr("x", -55)
  .attr("y", 5)
  .text("Cluster Probability");

//Set scale for x-axis
var xScale2 = d3
  .scaleLinear()
  .range([0, legendWidth])
  .domain([
    0,
    1,
  ]);
var xAxis = legendsvg
  .append("g")
  .call(
    d3
      .axisBottom(xScale2)
      .tickValues([
        minLegend,
        (sumMinMaxLegend / 2 + minLegend) / 2,
        sumMinMaxLegend / 2,
        (sumMinMaxLegend / 2 + maxLegend) / 2,
        maxLegend,
      ])
      .tickFormat((x) => x.toFixed(2))
  )
  .attr("class", "legendAxis")
  .attr("id", "legendAxis")
  .attr(
    "transform",
    "translate(" + -legendWidth / 2 + "," + (10 + legendHeight) + ")"
  );


  // -------------------- computing document and paragraph map
compute_paragraph_map();
create_doc_2_paragraph_index();
create_paragraph_2_doc_index();
window.compute_paragraph_map = () => {
  compute_paragraph_map();
  create_doc_2_paragraph_index();
  create_paragraph_2_doc_index();
}

// CONTINOUS SIMULATION SECTION || Live , immediate
// 
//--------------------------------------------------------------------------------


//--------------------------------------------------------------------------------

// ACTIONS || INTERACTIONS 

// Responsiveness => see css file for fixing page layout as pre-requisite for responsiveness, because we need to know the width and height of the body element
// When using zoom, we do not need responsiveness, we just need to make sure that our visualization covers the whole page. the rest we can solve with zoom.
// RESPONSIVENESS (=> see css file for fixing page layout)
window.addEventListener('resize', () => {
  // if the window resizes, rerender our page with the new width and height attributes
  window_properties[0].width = document.body.clientWidth; // alternative = take the width and height from the parent div element
  window_properties[0].height = document.body.clientHeight;
  //render();
});


// Zoom
//// canvas zoom, using d3.geoZoom() from here: https://github.com/vasturiano/d3-geo-zoom, example found here: https://observablehq.com/@vasturiano/using-d3-geo-zoom-with-canvas
function create_zoom(projection, canvas) {
  return d3.geoZoom()
    .projection(projection)
    .northUp(true)
    .scaleExtent([0.5, 15])
    .onMove(render_canvas)(canvas);
}
window.create_zoom = () => {
  geo_zoom = create_zoom(projection, canvas)
  return geo_zoom
}
// init zoom
let geo_zoom = create_zoom(projection, canvas)

// Drag

// Hover 
let last_hovered_document_uri = ""
let last_hovered_paragraph_index = ""
on_screen_context.canvas.onmousemove = event => {
  event.preventDefault();
  //particles[0] = [event.layerX, event.layerY];
  //update();
  if (window.embedding_map_type === 'document_embedding') {
    // find the closes document and log its data
    const x_y_point = [event.layerX, event.layerY]
    //console.log(x_y_point)
    const lon_lat_point = projection.invert(x_y_point)
    const document_uri = window.document_map_voronoi.find(lon_lat_point[0], lon_lat_point[1])
    if (last_hovered_document_uri != document_uri) {
      // set the new last hovered doc uri
      last_hovered_document_uri = document_uri
      // update the search on the left side
      const search_navigation_component = document.querySelector('search-navigation-component')
      const source_document = window.corpus[document_uri]
      const search_results = [source_document]
      search_navigation_component.update_search_list(search_results)
      const closest_document_x_y_point = projection(source_document.document_vector)
      showTooltip(closest_document_x_y_point)
    }
  } else if (window.embedding_map_type === 'paragraph_embedding') {
    const x_y_point = [event.layerX, event.layerY]
    const lon_lat_point = projection.invert(x_y_point)
    const paragraph_index = window.paragraph_map_voronoi.find(lon_lat_point[0], lon_lat_point[1])
    if (last_hovered_paragraph_index != paragraph_index) {
      // set the new last hovered paragraph index
      last_hovered_paragraph_index = paragraph_index
      // find the appropriate document_uri for the respective paragraph_index 
      const document_uri = window.paragraph_2_doc_index[paragraph_index]
      // update the search on the left side
      const polygons = window.paragraph_map_voronoi.polygons();
      const search_navigation_component = document.querySelector('search-navigation-component')
      const source_document = window.corpus[document_uri]
      const search_results = [source_document]
      search_navigation_component.update_search_list(search_results)
      const closest_paragraph_x_y_point = projection(polygons.features[paragraph_index].properties.sitecoordinates)
      showTooltip(closest_paragraph_x_y_point)
    }
  }
};

// Click
//// TODO: problem: does interact with zoom ...
/* on_screen_context.canvas.ontouchmove = event => {
  event.preventDefault();
  //particles[0] = [event.layerX, event.layerY];
  //update();
  console.log([event.layerX, event.layerY])
}; */

// Brush
//// tutorial found here: https://medium.com/@xoor/brush-and-zoom-with-d3-js-and-canvas-71859cd28832
function brushed({ selection }) {
  let value = [];
  if (selection) {
    if(window.embedding_map_type === 'contextualized_word_embedding'){
      //const [[x0, y0], [x1, y1]] = selection;
      //console.log(selection)
      // the selection comes from a not transformed canvas object -> we have to add transform x and transform y and scale to the point
      // update the search list from here
      //console.log(projection.invert(selection[0]))
      //console.log(projection.invert(selection[1]))
      // find all the points in rectangle
      const selected_points = find_all_points_in_rectangle(selection);
      // aggregate the points towards their documents and rank the documents due to their label frequency in that region
      const ranked_documents_in_brushed_rectangle = rank_points_in_rectangle(selected_points)
      // get the search navigation component and call the brush search function
      const search_navigation_component = document.querySelector('search-navigation-component')
      search_navigation_component.list_brushed_search_results(ranked_documents_in_brushed_rectangle);
    } else if (window.embedding_map_type === 'paragraph_embedding') {
      // find documents for the brushed paragraphs
      const selected_documents = find_all_paragraph_vectors_in_rectangle(selection)
      //console.log(selected_documents)
      // add those documents to the search list
      const search_navigation_component = document.querySelector('search-navigation-component')
      search_navigation_component.update_search_list(selected_documents);
    } else if(window.embedding_map_type === 'document_embedding') {
      // find brushed documents
      const selected_documents = find_all_document_vectors_in_rectangle(selection)
      //console.log(selected_documents)
      // add brushed documents to the search lsit
      const search_navigation_component = document.querySelector('search-navigation-component')
      search_navigation_component.update_search_list(selected_documents);
    } 
  } else {
    console.log('no selection')
  }
}

const brush = d3.brush()
  .on("end", (selection) => { // start brush end
    if (window.canvas_map_interaction === 'brush') {
      brushed(selection);
    } else {
      console.log('ERROR: brushing called unfortunately...')
    }
  });
svg.call(brush);

function find_all_points_in_rectangle(selection) {
  //console.log(selection)
  // construct geojson polygon from rectangle coordinates
  const top_left_corner = projection.invert(selection[0]) // x0, y0, x direction in a canvas goes to the right, y direction in a canvas goes down
  const bottom_right_corner = projection.invert(selection[1]) // x1, y1
  const bottom_left_corner = [top_left_corner[0], bottom_right_corner[1]] //x, y
  const top_right_corner = [bottom_right_corner[0], top_left_corner[1]]
  //const rectangle_coordinates = [top_left_corner, bottom_left_corner, bottom_right_corner, top_right_corner, top_left_corner] // => right hand rule
  const rectangle_coordinates = [top_left_corner, top_right_corner, bottom_right_corner, bottom_left_corner, top_left_corner] // => left hand rule => D3 FOLLOWS LEFT HAND RULE!!! (??)
  const rectangle = { type: "Feature", geometry: { type: "Polygon", coordinates: [rectangle_coordinates] }, properties: {} }
  //console.log(rectangle)
  //console.log(geo_path_generator.area(rectangle))
  // loop through all the documents and score them towards the amount of points they have in the region// amount of words in length?
  // loop through all the points and check if they are in the region -> list them by their word2doc ranking and rate the docs that way?
  const selected_points = window.corpus_points.filter((point, index) => {
    if (d3.geoContains(rectangle, [point.lon, point.lat])) {
      return true
    } else {
      return false
    }
  });

  //console.log(selected_points)
  return selected_points
}

function find_all_document_vectors_in_rectangle(selection){
  //console.log(selection)
  // construct geojson polygon from rectangle coordinates
  const top_left_corner = projection.invert(selection[0]) // x0, y0, x direction in a canvas goes to the right, y direction in a canvas goes down
  const bottom_right_corner = projection.invert(selection[1]) // x1, y1
  const bottom_left_corner = [top_left_corner[0], bottom_right_corner[1]] //x, y
  const top_right_corner = [bottom_right_corner[0], top_left_corner[1]]
  //const rectangle_coordinates = [top_left_corner, bottom_left_corner, bottom_right_corner, top_right_corner, top_left_corner] // => right hand rule
  const rectangle_coordinates = [top_left_corner, top_right_corner, bottom_right_corner, bottom_left_corner, top_left_corner] // => left hand rule => D3 FOLLOWS LEFT HAND RULE!!! (??)
  const rectangle = { type: "Feature", geometry: { type: "Polygon", coordinates: [rectangle_coordinates] }, properties: {} }
  //console.log(rectangle)
  //console.log(geo_path_generator.area(rectangle))
  // loop through all the documents and score them towards the amount of points they have in the region// amount of words in length?
  // loop through all the points and check if they are in the region -> list them by their word2doc ranking and rate the docs that way?
  const selected_documents = window.corpus.filter((source, index) => {
    if (d3.geoContains(rectangle, source.document_vector)) {
      return true
    } else {
      return false
    }
  });

  //console.log(selected_points)
  return selected_documents
}

function find_all_paragraph_vectors_in_rectangle(selection){
    //console.log(selection)
  // construct geojson polygon from rectangle coordinates
  const top_left_corner = projection.invert(selection[0]) // x0, y0, x direction in a canvas goes to the right, y direction in a canvas goes down
  const bottom_right_corner = projection.invert(selection[1]) // x1, y1
  const bottom_left_corner = [top_left_corner[0], bottom_right_corner[1]] //x, y
  const top_right_corner = [bottom_right_corner[0], top_left_corner[1]]
  //const rectangle_coordinates = [top_left_corner, bottom_left_corner, bottom_right_corner, top_right_corner, top_left_corner] // => right hand rule
  const rectangle_coordinates = [top_left_corner, top_right_corner, bottom_right_corner, bottom_left_corner, top_left_corner] // => left hand rule => D3 FOLLOWS LEFT HAND RULE!!! (??)
  const rectangle = { type: "Feature", geometry: { type: "Polygon", coordinates: [rectangle_coordinates] }, properties: {} }
  //console.log(rectangle)
  //console.log(geo_path_generator.area(rectangle))
  // loop through all the documents and score them towards the amount of points they have in the region// amount of words in length?
  // loop through all the points and check if they are in the region -> list them by their word2doc ranking and rate the docs that way?
  const selected_documents = window.corpus.filter((source, index) => {
      const paragraphs = source.paragraphs
      let paragraph_vector_is_in_rectangle = false
      // for every document, check if its paragraph vectors are in the specified rectangle
      for (const paragraph of paragraphs){
        if(d3.geoContains(rectangle, paragraph.paragraph_vector)) {
          paragraph_vector_is_in_rectangle = true
          break;
        }
      }
      return paragraph_vector_is_in_rectangle
  });

  //console.log(selected_points)
  return selected_documents
}

function get_features_in_selection(selection, feature_collection) {
  //console.log(selection)
  // construct geojson polygon from rectangle coordinates
  //const top_left_corner = projection.invert(selection[0]) // x0, y0, x direction in a canvas goes to the right, y direction in a canvas goes down
  //const bottom_right_corner = projection.invert(selection[1]) // x1, y1
  //const bottom_left_corner = [top_left_corner[0], bottom_right_corner[1]] //x, y
  //const top_right_corner = [bottom_right_corner[0], top_left_corner[1]]
  //const rectangle_coordinates = [top_left_corner, bottom_left_corner, bottom_right_corner, top_right_corner, top_left_corner] // => right hand rule
  //const rectangle_coordinates = [top_left_corner, top_right_corner, bottom_right_corner, bottom_left_corner, top_left_corner] // => left hand rule => D3 FOLLOWS LEFT HAND RULE!!! (??)
  //const rectangle = { type: "Feature", geometry: { type: "Polygon", coordinates: [rectangle_coordinates] }, properties: {} }
  //console.log(rectangle)
  //console.log(d3.polygonHull(rectangle_coordinates))
  //console.log(geo_path_generator.area(rectangle))
  // loop through all the documents and score them towards the amount of points they have in the region// amount of words in length?
  // loop through all the points and check if they are in the region -> list them by their word2doc ranking and rate the docs that way?
  const view_rectangle = d3.polygonHull([selection[0],[selection[0][0], selection[1][1]],[selection[1][0], selection[0][1]] ,selection[1]])
  const reduced_feature_collection_features = feature_collection.features.filter((feature_polygon, index) => {
    //if (d3.geoContains(rectangle, [feature_polygon.properties.site[0], feature_polygon.properties.site[1]])) {
    if (d3.polygonContains(view_rectangle, geo_path_generator.centroid(feature_polygon))) { //projection([feature_polygon.properties.site[0], feature_polygon.properties.site[1]]))) {
      return true
    } else {
      return false
    }
  })
  // create new feature collection object and put filtered featuers in
  const reduced_feature_collection = {
    type: "FeatureCollection",
    features: reduced_feature_collection_features
  }

  return reduced_feature_collection
}

function rank_points_in_rectangle(selected_points) {
  // for every point find out its document and aggregate the labels over the document uri
  // solution found here: https://www.codegrepper.com/code-examples/javascript/javascript+group+by+sum+array+reduce
  let aggregation_set = []
  selected_points.reduce(function (res, value) {
    if (!res[value.word_2_doc_index]) {
      res[value.word_2_doc_index] = { word_2_doc_index: value.word_2_doc_index, labels: [] };
      aggregation_set.push(res[value.word_2_doc_index])
    }
    res[value.word_2_doc_index].labels = res[value.word_2_doc_index].labels.concat(value.labels) //+= value.qty;
    return res;
  }, {});
  // sort the objects in the aggregation set by the number of labels
  aggregation_set.sort((a, b) => (a.labels.length > b.labels.length) ? -1 : 1) // sort in descending order
  //console.log(aggregation_set)
  return aggregation_set
}

// Animations
function animate_set_story() {
  // todo: 
  // animate sequentially the voronoi region creation and collapse of a set
  // SEQUENTIAL STORY
}

function animated_semantic_map_creation() {
  // todo: animate the collapse of a voronoi set
  // VORONOI COLLAPSE
}
function set_canvas_map_interaction(new_interaction) {
  window.canvas_map_interaction = new_interaction
}
window.set_canvas_map_interaction = (new_interaction) => {
  set_canvas_map_interaction(new_interaction);
}

function create_canvas_map_interaction() {
  if (window.canvas_map_interaction === 'zoom') {
    // putting the svg behind the canvas when zoom is enabled
    // set property of html element
    canvas.style.zIndex = 1
    // set property of d3.selection element
    svg.style('z-index', 0);
    // delete the latest brush by calling brush with the empty selection
    svg.call(brush.move, null);
  } else if (window.canvas_map_interaction === 'brush') {
    // putting the svg in front of the canvas when brush is enabled
    // set property of html element
    canvas.style.zIndex = 0
    // set property of d3.selection element
    svg.style('z-index', 1);
  } else if (window.canvas_map_interaction === 'drag') {
    // same like for zoom, because we rely on d3.geoZoom() under the hood
    // putting the svg behind the canvas when zoom is enabled
    // set property of html element
    canvas.style.zIndex = 1
    // set property of d3.selection element
    svg.style('z-index', 0);
  } else {
    console.log('ERROR: no valid canvas_map_interaction provided.')
  }
}
window.create_canvas_map_interaction = () => {
  create_canvas_map_interaction();
}


//--------------------------------------------------------------------------------

// ONE TIME UPDATE SECTION || Single Rendering
function render() {
  // main svg view component
  //console.log('keywordscape render called');
  //console.log(window.source_selection_set_1)
  //console.log(window.source_selection_set_2)
  //console.log(window.selected_topic)    
}

function render_canvas() {
  // clear old canvas
  on_screen_context.clearRect(0, 0, canvas.width, canvas.height);

  if (window.embedding_map_type === 'contextualized_word_embedding') {
    // render base_map on canvas
    render_base_map_canvas(on_screen_context, window.base_map, geo_path_generator, window.canvas_map_base_color_scale)

    // render projection on canvas
    if (window.render_set_projection === true) {
      // render point grid as contour map
      render_set_contour_map_canvas(on_screen_context, window.point_grid_geojson, window.canvas_map_projection_color_scale, window.canvas_map_bandwidth, window.canvas_map_borderradius)
    }

    // render labels on canvas
    if (window.render_labels === true) {
      render_labels_on_canvas(on_screen_context, window.base_map)
    }

    // render document_vectors as icons on canvas
    //if (window.render_document_vectors != 'no_document_vectors') {
    //  render_document_vectors(on_screen_context, window.source_document_vector_selection_set)
    // }
  } else if (window.embedding_map_type === 'document_embedding') {
    // render document grid map
    render_document_map(on_screen_context, window.document_grid_map_feature_collection)
    // render document vectors
    const document_vectors = get_document_vectors()
    render_document_vectors(on_screen_context, document_vectors)
    // render projection on canvas
    if (window.render_set_projection === true) {
        render_document_projection(on_screen_context, window.document_grid_map_feature_collection)
    }
  } else if (window.embedding_map_type === 'paragraph_embedding') {
    // render paragraph grid map
    render_paragraph_map(on_screen_context, window.paragraph_grid_map_feature_collection)
    // render paragraph vectors
    const paragraph_vectors = get_paragraph_vectors_lists().flat()
    render_paragraph_vectors(on_screen_context, paragraph_vectors)
    if (window.render_set_projection === true) {
      render_paragraph_projection(on_screen_context, window.paragraph_grid_map_feature_collection)
    }
  }
  else {
    console.log('ERROR: no valid embedding_map_type provided.')
  }

}

//--------------------------------------------------------------------------------
// CONTINOUS UPDATE SECTION || Continious Rendering
//
//--------------------------------------------------------------------------------

// UTILITY FUNCTIONS
// returns the point arrays and the data array of the top n words of the data set
function get_base_map_points() {
  // get the baseland points out of the semantic map by filtering out the word points
  const base_map_points = window.base_map_points
  // OPTIONAL: convert rad to degree; only if not done in BACKEND already
  /*   const converted_map_points = base_map_points.map((point, index) => {
      const conv_lat = radians_to_degrees(point.lat)
      const conv_lon = radians_to_degrees(point.lon)
      return {
        'word_2_doc_index': point.word_2_doc_index,
        'lat': conv_lat,
        'lon': conv_lon,
        'labels': point.labels
      }
    });
    console.log(converted_map_points)
    return converted_map_points */
  return base_map_points
}

// return the point arrays of a given selection set
function get_selection_set_points(source_selection_set) {
  //console.log("length of selection set: " + source_selection_set.length)
  if (source_selection_set.length === 0) {
    return []
  }
  const selection_set_points = window.corpus_points.filter((point, index) => source_selection_set.includes(point.word_2_doc_index.toString()));
  //let selection_set_sources = window.corpus.filter(source => source_selection_set.includes(source.doi.toString()));
  //let selection_set_points_data = selection_set_sources.map((selected_source, index) => selected_source.points).flat();
  return selection_set_points
}

function compute_base_map() {
  // get the base map points
  const base_map_points = get_base_map_points()
  const base_map_feature_collection = create_base_map(base_map_points)
  //console.log(base_map_feature_collection.features.length)
  window.base_map = base_map_feature_collection
  // precompute the contours for the rendering of the base map
  const contours = compute_contours(base_map_feature_collection)
  window.base_map_contours = contours
  return base_map_feature_collection
}

function compute_set_projection() {
  // get set_1 points 
  window.selection_set_1_points = get_selection_set_points(window.source_selection_set_1)
  // get set_2 points 
  window.selection_set_2_points = get_selection_set_points(window.source_selection_set_2)
  //console.log(selection_set_1_points)
  let point_grid_geojson = ""
  let raw_point_grid_geojson = ""
  // because of the greyed out background feature we always compute the union now and create a background pointgrid in 
  // set porjection of UNION points
  window.selection_set_1_2_union_points = window.selection_set_1_points.concat(window.selection_set_2_points)
  // get set union feature collection
  create_set_projection_on_base_map(window.base_map, window.base_map_voronoi, window.selection_set_1_2_union_points)
  if (window.canvas_map_set_mode === 'union_mode') {
    // create grid points with appropriate grid sizing/granularity
    raw_point_grid_geojson = create_point_grid(window.canvas_map_grid_size)
    // add the number of labels to each point based on the voronoi lookup
    point_grid_geojson = set_data_to_point_grid_points(window.base_map, window.base_map_voronoi, raw_point_grid_geojson)
    window.point_grid_geojson = point_grid_geojson
    // compute semantic depth and semantic width of the selection set, relative to the selected POINT GRID
    compute_semantic_depth_and_semantic_width_of_set(window.selection_set_1_2_union_points, window.base_map)
  } else if (window.canvas_map_set_mode === 'intersection_mode') {
    // CREATE BACKGROUND
    // create grid points with appropriate grid sizing/granularity for the UNION BACKGROUND
    raw_point_grid_geojson = create_point_grid(window.canvas_map_grid_size)
    // add the number of labels to each point based on the voronoi lookup
    const background_point_grid_geojson = set_data_to_point_grid_points(window.base_map, window.base_map_voronoi, raw_point_grid_geojson)
    window.background_point_grid_geojson = background_point_grid_geojson
    // CREATE INTERSECTION PROJECTION as a subsequent task
    // INTERSECTION points
    const selection_set_1_points_array = window.selection_set_1_points.map((point, index) => { return { 'lon': point.lon, 'lat': point.lat, 'labels': point.labels } })
    //console.log(selection_set_1_points_array)
    const selection_set_2_points_array = window.selection_set_2_points.map((point, index) => { return { 'lon': point.lon, 'lat': point.lat, 'labels': point.labels } })
    //console.log(selection_set_2_points_array)
    // comparator solution found here: https://stackoverflow.com/questions/33356504/difference-and-intersection-of-two-arrays-containing-objects
    const comparator = function (a, b) {
      return a.lon === b.lon && a.lat === b.lat
    };
    const selection_set_1_2_intersection_points = selection_set_1_points_array.filter(a => selection_set_2_points_array.some(b => comparator(a, b)));
    //console.log(selection_set_1_2_intersection_points)
    window.selection_set_1_2_intersection_points = selection_set_1_2_intersection_points
    create_set_projection_on_base_map(window.base_map, window.base_map_voronoi, window.selection_set_1_2_intersection_points)
    // compute semantic depth and semantic width of the intersection set, relative to the selected POINT GRID
    compute_semantic_depth_and_semantic_width_of_set(window.selection_set_1_2_intersection_points, window.base_map)

    //old implementation: create_set_projection_on_base_map(window.base_map, window.base_map_voronoi, window.selection_set_1_2_intersection_points)
    // Create the projection of the INTERSECTION SET
    // create grid points with appropriate grid sizing/granularity
    //raw_point_grid_geojson = create_point_grid(window.canvas_map_grid_size)
    // add the number of labels to each point based on the voronoi lookup
    //point_grid_geojson = set_data_to_point_grid_points(window.base_map, window.base_map_voronoi, raw_point_grid_geojson)
    //window.point_grid_geojson = point_grid_geojson

    // new implementation: build separate grids and then intersect them 
    const point_grid_geojson = create_set_intersection_point_grid(window.selection_set_1_points, window.selection_set_2_points)
    //console.log(point_grid_geojson)
    window.point_grid_geojson = point_grid_geojson
  } else {
    console.log('ERROR: no valid canvas_map_set_mode provided.')
    return ""
  }

}

function compute_query_projection(query_type, query){
  // check for which map type we have to compute the query projection
  if (window.embedding_map_type === 'document_embedding') {
    let filtered_corpus = ''
    if(query === '') {
      filtered_corpus= []
    } else {
            // within the document grid map, check which cells do contain the keyword, timestamp, author, (star rating, tag) and highlight them
            //  to achieve this find the sources that contain the query and then project them onto the documen_grid_map_feature_collection
            if(query_type === 'single_source_projection'){
              // get the respective single source
                filtered_corpus = window.corpus.filter((source, index) => source.uri === query.toString());
            } else if(query_type === 'source_set_projection'){
              // get the documents that contain the respective indices as their uri
                filtered_corpus = window.corpus.filter((source, index) => query.includes(Number(source.uri))) 
            } else if(query_type === 'keyword'){
              // get the documents that contain the respective keyword
              filtered_corpus = window.corpus.filter((source, index) => source.keywords.includes(query.toString()));
            } else if (query_type === 'timestamp'){
                filtered_corpus = window.corpus.filter((source, index) => source.timestamp === query.toString());
            } else if (query_type === 'author'){
                filtered_corpus = window.corpus.filter((source, index) => source.authors.includes(query.toString()));
            } else if (query_type === 'star_rating'){
                filtered_corpus = window.corpus.filter((source, index) => source.rating === query.toString());
            } else if (query_type === 'tag'){
                filtered_corpus = window.corpus.filter((source, index) => source.tags.includes(query.toString()));
            } else {
              console.log('ERROR: no valid query type given.')
              return
            }
    }
    // get the document vectors of the filtered corpus
    const selected_document_vectors = filtered_corpus.map((source, index) => source.document_vector)
    // project these document vectors onto the document grid map -> find nearest voronoi feature and set this cell's projection counter +=1 
    create_set_projection_on_document_grid_map(selected_document_vectors, window.document_grid_map_feature_collection)
    //
} else if(window.embedding_map_type === 'paragraph_embedding'){
  let filtered_corpus = ''
  let filtered_paragraphs = ''
  let selected_paragraph_vectors = ''
    if(query === '') {
      filtered_corpus= []
      filtered_paragraphs = []
    } else {
      // within the paragraph map, check which cells do contain the keyword, timestamp, author, (star rating, tag) and highlight them
        if(query_type === 'single_source_projection'){
          filtered_corpus = window.corpus.filter((source, index) => source.uri === query.toString())
          filtered_paragraphs = filtered_corpus.map((source, index) => source.paragraphs).flat()
        } else if(query_type === 'source_set_projection'){
          // get the documents that contain the respective indices as their uri
          filtered_corpus = window.corpus.filter((source, index) => query.includes(Number(source.uri))) 
          filtered_paragraphs = filtered_corpus.map((source, index) => source.paragraphs).flat()
        } else if(query_type === 'keyword'){
          // get the paragraphs that contain the respective keyword
          const all_paragraphs = window.corpus.map((source, index) => source.paragraphs).flat()
          filtered_paragraphs = all_paragraphs.filter((paragraph, index) => paragraph.paragraph_keywords.includes(query.toString()))
        } else if (query_type === 'timestamp'){
          filtered_corpus = window.corpus.filter((source, index) => source.timestamp === query.toString())
          filtered_paragraphs = filtered_corpus.map((source, index) => source.paragraphs).flat()
        } else if (query_type === 'author'){
          filtered_corpus = window.corpus.filter((source, index) => source.authors.includes(query.toString()))
          filtered_paragraphs = filtered_corpus.map((source, index) => source.paragraphs).flat()
        } else if (query_type === 'star_rating'){
          filtered_corpus = window.corpus.filter((source, index) => source.rating === query.toString())
          filtered_paragraphs = filtered_corpus.map((source, index) => source.paragraphs).flat()
        } else if (query_type === 'tag'){
          filtered_corpus = window.corpus.filter((source, index) => source.tags.includes(query.toString()))
          filtered_paragraphs = filtered_corpus.map((source, index) => source.paragraphs).flat()
        } else {
          console.log('ERROR: no valid query type given.')
          return
        }
    }
    // get the paragraph vectors out of the filtered paragraphs
    selected_paragraph_vectors = filtered_paragraphs.map((paragraph, index) => paragraph.paragraph_vector)
    // project these selected paragraph vectors onto the paragraph grid map
    create_set_projection_on_paragraph_grid_map(selected_paragraph_vectors, window.paragraph_map_grid_voronoi, window.paragraph_grid_map_feature_collection)
    //
} else if(window.embedding_map_type === 'contextualized_word_embedding'){
    // check for irregular queries
    let selection_set_points = ''
    if(query === '') {
      selection_set_points= []
    } else {
        // QUERY: a query is defined either as a TIMESTAMP, KEYWORD, AUTHOR, STAR RATING or TAG
        let filtered_corpus = ''
        let source_selection_set = ''
        if(query_type === 'keyword'){
          // get the points of the base map corpus that contain the keyword
          selection_set_points = window.corpus_points.filter((point, index) => point.labels.includes(query.toString()));
        } else if(query_type === 'source_set_projection'){
          // get the documents that contain the respective indices as their uri
          filtered_corpus = window.corpus.filter((source, index) => query.includes(Number(source.uri))) 
          source_selection_set = filtered_corpus.map((source, index) => source.uri)
          selection_set_points = window.corpus_points.filter((point, index) => source_selection_set.includes(point.word_2_doc_index.toString()));
        } else if(query_type ==='timestamp'){
          filtered_corpus = window.corpus.filter((source, index) => source.timestamp === query.toString());
          source_selection_set = filtered_corpus.map((source, index) => source.uri)
          selection_set_points = window.corpus_points.filter((point, index) => source_selection_set.includes(point.word_2_doc_index.toString()));
        } else if(query_type ==='author'){
          filtered_corpus = window.corpus.filter((source, index) => source.authors.includes(query.toString()));
          source_selection_set = filtered_corpus.map((source, index) => source.uri)
          selection_set_points = window.corpus_points.filter((point, index) => source_selection_set.includes(point.word_2_doc_index.toString()));
        } else if(query_type ==='star_rating'){
          filtered_corpus = window.corpus.filter((source, index) => source.rating === query.toString());
          source_selection_set = filtered_corpus.map((source, index) => source.uri)
          selection_set_points = window.corpus_points.filter((point, index) => source_selection_set.includes(point.word_2_doc_index.toString()));
        } else if(query_type ==='tag'){
          filtered_corpus = window.corpus.filter((source, index) => source.tags.includes(query.toString()));
          source_selection_set = filtered_corpus.map((source, index) => source.uri)
          selection_set_points = window.corpus_points.filter((point, index) => source_selection_set.includes(point.word_2_doc_index.toString()));
        }
        else {
          console.log('ERROR: no valid query type given.')
          return
        }
    }

    // set these points as set 1 points
    window.selection_set_1_points = selection_set_points
    // set the set 2 points to empty
    window.selection_set_2_points = []
    //console.log(selection_set_1_points)
    let point_grid_geojson = ""
    let raw_point_grid_geojson = ""
    // because of the greyed out background feature we always compute the union now and create a background pointgrid in 
    // set porjection of UNION points
    window.selection_set_1_2_union_points = window.selection_set_1_points.concat(window.selection_set_2_points)
    // get set union feature collection
    create_set_projection_on_base_map(window.base_map, window.base_map_voronoi, window.selection_set_1_2_union_points)
    // create grid points with appropriate grid sizing/granularity
    raw_point_grid_geojson = create_point_grid(window.canvas_map_grid_size)
    // add the number of labels to each point based on the voronoi lookup
    point_grid_geojson = set_data_to_point_grid_points(window.base_map, window.base_map_voronoi, raw_point_grid_geojson)
    window.point_grid_geojson = point_grid_geojson
    // compute semantic depth and semantic width of the selection set, relative to the selected POINT GRID
    compute_semantic_depth_and_semantic_width_of_set(window.selection_set_1_2_union_points, window.base_map)
  }
// end of compute_query_set
}

function create_set_intersection_point_grid(selection_set_1_points, selection_set_2_points) {
  // create grid points with appropriate grid sizing/granularity for the UNION BACKGROUND
  let raw_point_grid_geojson_1 = create_point_grid(window.canvas_map_grid_size)
  // project the set 1 selection set points onto the base map
  create_set_projection_on_base_map(window.base_map, window.base_map_voronoi, selection_set_1_points)
  // add the number of labels to each point based on the voronoi lookup
  const selection_set_1_point_grid_geojson = set_data_to_point_grid_points(window.base_map, window.base_map_voronoi, raw_point_grid_geojson_1)
  //console.log(selection_set_1_point_grid_geojson)

  // do the same for the selection set 2 point
  let raw_point_grid_geojson_2 = create_point_grid(window.canvas_map_grid_size)
  create_set_projection_on_base_map(window.base_map, window.base_map_voronoi, selection_set_2_points)
  const selection_set_2_point_grid_geojson = set_data_to_point_grid_points(window.base_map, window.base_map_voronoi, raw_point_grid_geojson_2)
  //console.log(selection_set_2_point_grid_geojson)

  // for each point in the point grids, take the minimum number of labels, it does not matter which point grid we choose to iterate over, important is that we take the minimum of both
  selection_set_1_point_grid_geojson.forEach((point_feature, index) => {
    // check if the labels of both points on this coordinate are bigger than 0
    if (point_feature.properties.number_of_labels > 0 && selection_set_2_point_grid_geojson[index].properties.number_of_labels > 0) {
      point_feature.properties.number_of_labels = Math.min(point_feature.properties.number_of_labels, selection_set_2_point_grid_geojson[index].properties.number_of_labels)
      console.log(Math.min(point_feature.properties.number_of_labels, selection_set_2_point_grid_geojson[index].properties.number_of_labels));
    }
  });

  // return the intersection point grid, in this case it is set 1 because we applied the intersection operation on this set
  return selection_set_1_point_grid_geojson
}

// get most frequent element of array
function get_most_frequent_element(array) {
  if (array.length == 0)
    return null;
  var modeMap = {};
  var maxEl = array[0], maxCount = 1;
  for (var i = 0; i < array.length; i++) {
    var el = array[i];
    if (modeMap[el] == null)
      modeMap[el] = 1;
    else
      modeMap[el]++;
    if (modeMap[el] > maxCount) {
      maxEl = el;
      maxCount = modeMap[el];
    }
  }
  return maxEl;
}

function sortByFrequencyAndRemoveDuplicates(array) {
  var frequency = {}, value;
  // compute frequencies of each value
  for (var i = 0; i < array.length; i++) {
    value = array[i];
    if (value in frequency) {
      frequency[value]++;
    }
    else {
      frequency[value] = 1;
    }
  }
  // make array from the frequency object to de-duplicate
  var uniques = [];
  for (value in frequency) {
    uniques.push(value);
  }
  // sort the uniques array in descending order by frequency
  function compareFrequency(a, b) {
    return frequency[b] - frequency[a];
  }
  return uniques.sort(compareFrequency);
}

function arrayEquals(a, b) {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
}

/* IMPORTANT PROCESS FUNCTIONS ************************  */
// CREATE BASE MAP 
function create_base_map(base_map_points) {
  const base_map_points_array = []
  base_map_points.forEach((point, index) => {
    const smoothed_lon = point.lon + 0.0001 * (Math.random() - Math.random()); //  Math.sign(point.lon)
    const smoothed_lat = point.lat + 0.0001 * (Math.random() - Math.random());
    const projection_labels = []
    const sorted_label_set = sortByFrequencyAndRemoveDuplicates(point.labels)
    base_map_points_array.push([smoothed_lon, smoothed_lat, point.labels, point.lon, point.lat, projection_labels, point.topic_label, point.topic_label_probability, sorted_label_set]) // properties.site [smoothed_lon, smoothed_lat, point.labels, point.lon, point.lat, projection_labels, point.topic_label, point.topic_label_probability]
  });
  // TODO: iterate over the polygons and add the REAL point lon and lats WITHOUT the NOISE
  //console.log(base_map_points_array)
  // create geo voronoi regions 
  // IMPORTANT: ADD SMALL RANDOM NOISE! for some reason the regions cannot be created when the coordinates are to straight (geovoronoi algorithm bug...)
  // IMPORTANT: EVENTUALLY CHECK FOR REWIND the polygons, so that the points of each polygon are in the correct order ...
  // found here: https://stackoverflow.com/questions/54947126/geojson-map-with-d3-only-rendering-a-single-path-in-a-feature-collection
  // issues with too straight degree values: https://github.com/Fil/d3-geo-voronoi/issues/4 or https://github.com/d3/d3-geo/issues/104
  const base_map_voronoi = d3.geoVoronoi(base_map_points_array) // d3.geoDelaunay 
  // set the base_map voronoi for the subsequent projections
  window.base_map_voronoi = base_map_voronoi
  // get the polygons of the base_map
  const base_map_feature_collection = base_map_voronoi.polygons()

  return base_map_feature_collection
}

function render_base_map_canvas(context, base_map_feature_collection, geo_path_generator, canvas_map_base_color_scale) {
  const path = geo_path_generator
  //geo_path_generator.context(context) => context is already given in geo_path_generator creation/initialization
  // create color mapping for the base map, domain is [0,1] because the topic_label probability is in [0,1]
  const color_mapping = d3.scaleSequential(d3["interpolate" + canvas_map_base_color_scale]).domain([0, 1]).nice()
  // render the topic maps: fill the regions with the appropriate color due to their topic assignment probability
  if (window.canvas_map_base_map_type === 'voronoi_map') {
    for (const feature of base_map_feature_collection.features) {
      //if (c.value < 0) c.value = 0;
      context.beginPath();
      path(feature);
      context.fillStyle = color_mapping(feature.properties.site[7]); //feature.properties.site [smoothed_lon, smoothed_lat, point.labels, point.lon, point.lat, projection_labels, topic_label, topic_probability, sorted_label_set]
      /*     if (feature.properties.site[7] % 25 === 0) {
            context.lineWidth = c.value % 100 ? 0.5 : 2;
            context.stroke();
          } */
      context.fill();
    }
  } else if (window.canvas_map_base_map_type === 'blurred_contour_map') {
    draw_contours(context, window.base_map_contours, color_mapping, path)
  } else {
    console.log('ERROR: no valid base map type given.');
  }

  // draw the region borders
  if (window.render_base_map_borders) {
    context.beginPath();
    path(base_map_feature_collection);
    context.lineWidth = 0.08;
    context.strokeStyle = "#65696e";
    context.stroke();
  }
}

function compute_contours(base_map_feature_collection) {
  // create points from base map feature collection
  const points = base_map_feature_collection.features.map((feature, index) => [feature.properties.site[0], feature.properties.site[1], feature.properties.site[7]])//.filter(tricontour_point => isFinite(tricontour_point[2])) 
  let contours = ''
  // INFO: blur takes longer rendering times
  if (true) {
    // configure blur
    const geo_contour = d3.geoContour()
    geo_contour.contour(points, 0);
    const triangulation = geo_contour._triangulation();
    blur = (d, i) => d3.median([i, ...triangulation.neighbors(i)], j => points[j][2]);

    // create geo contours
    const contour_generator = d3.geoContour().thresholds(10).value(blur)
    contours = contour_generator(points) //d3.geoContour().thresholds(10).value(blur) //(points);
  } else {
    contours = d3.geoContour().thresholds(10)(points)
  }
  return contours
}

function draw_contours(context, contours, color_mapping, path) {
  // draw the sphere in the background
  context.beginPath();
  path({ type: "Sphere" });
  context.fillStyle = color_mapping(0);
  context.fill();
  context.lineWidth = 1;
  context.stroke();

  // draw the single contours
  context.lineWidth = 1;
  for (const c of contours) {
    context.beginPath();
    context.strokeStyle = context.fillStyle = color_mapping(c.value);
    path(c);
    context.fill();
    context.stroke();
  }

  /*   if (opts.lines) {
      context.strokeStyle = "white";
      context.fillStyle = "white";
      context.textAlign = "center";
      context.font = "12px Arial";
      context.globalAlpha = 1;
      for (const c of contours) {
        if (c.value % 20 === 0) {
          context.lineWidth = c.value % 100 === 0 ? 1 : 0.5;
          if (opts.labels && !opts.quick && c.value % 100 === 0) {
            drawLabels(context, c);
          } else {
            context.beginPath();
            path(c);
            context.stroke();
          }
        }
      }
    } */
}


//---------------------------------------------------------

function create_set_projection_on_base_map(base_map, base_map_voronoi, selection_set_points) {
  // clean the projection points of the base_map
  clean_base_map_projection_labels(base_map)
  //console.log(selection_set_points)
  //console.log(window.base_map)
  // for each point of the selection set points find the closest polygon in the basemap voronoi and add the points labels to the projection_labels
  selection_set_points.map((point, index) => {
    const feature_index = base_map_voronoi.find(+point.lon, +point.lat)
    // add the labels of the point to the projection labels; properties.site [smoothed_lon, smoothed_lat, point.labels, point.lon, point.lat, projection_labels]
    base_map.features[feature_index].properties.site[5] = base_map.features[feature_index].properties.site[5].concat(point.labels)
  });
}

function clean_base_map_projection_labels(base_map) {
  // for every feature // polygon of the base map clear the projection_labels
  base_map.features.forEach((feature, index) => {
    // // feature.properties.site [smoothed_lon, smoothed_lat, point.labels, point.lon, point.lat, projection_labels, topic_label, topic_probability]
    feature.properties.site[5] = []
  });
}

function compute_semantic_depth_and_semantic_width_of_set(selection_set_points, base_map) {
  // get the number of all possible tokens that the set has
  const all_tokens = selection_set_points.map((point, index) => point.labels).flat()
  //console.log(all_tokens)
  const number_of_all_tokens_of_set = all_tokens.length
  //console.log(number_of_all_tokens_of_set)
  const maximum_coverable_area = Math.min(number_of_all_tokens_of_set, base_map.features.length)
  //console.log(maximum_coverable_area)
  // get the number of all regions that the set covers 
  const covered_regions_of_set = base_map.features.filter((feature_polygon, index) => feature_polygon.properties.site[5].length > 0)
  //console.log(covered_regions_of_set)
  const number_of_all_covered_regions_of_set = covered_regions_of_set.length
  //console.log(number_of_all_covered_regions_of_set)
  //ALTERNATIVE: take the number of GRID REGIONS that the paper covers here => WRONG -> because one token can make more thatn 1 GRID point GLOW/can activate more than one grid point due to grid size/rasterization
  //const covered_regions_of_set = point_grid_geojson.filter((point, index) => point.properties.number_of_labels > 0)
  //console.log(covered_regions_of_set)
  //const number_of_all_covered_regions_of_set = covered_regions_of_set.length
  //console.log(number_of_all_covered_regions_of_set)
  // compute semantic depth and semantic width
  //const average_token_density_per_area = number_of_all_tokens_of_set / number_of_all_covered_regions_of_set
  const semantic_width = number_of_all_covered_regions_of_set / maximum_coverable_area
  const semantic_depth = 1 / semantic_width //1 / (number_of_all_covered_regions_of_set/maximum_coverable_area)
  //console.log(semantic_depth)
  //console.log(semantic_width)
  window.semantic_depth = semantic_depth
  //window.semantic_width = semantic_width 
  //alternative: for better explainability
  window.semantic_width = number_of_all_covered_regions_of_set + '/' + maximum_coverable_area

}



function create_point_grid(canvas_map_grid_size) {
  // longitudes ranges from -180 to 180 degree for every canvas_map_grid_size (e.g. 1 degree)
  const lons = d3.range(-180, 180, canvas_map_grid_size)
  // latitiudes from -90 to +90 degree for every canvas_map_grid_size
  const lats = d3.range(-90, 90, canvas_map_grid_size)
  // mapover each longitude all latitiudes
  const grid_points = lons.map((lon, i) => lats.map((lat, j) => [lon, lat])).flat()
  // create geojson from grid_points
  const point_grid_geojson = grid_points.map((point, index) => {
    return {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": point
      },
      "properties": {
        "index": index,
        "number_of_labels": [],
        "centroid": ""
      }
    }
  });
  return point_grid_geojson
}

function set_data_to_point_grid_points(base_map, base_map_voronoi, point_grid_geojson) {
  point_grid_geojson.forEach((point_feature, index) => {
    const feature_index = base_map_voronoi.find(point_feature.geometry.coordinates[0], point_feature.geometry.coordinates[1])
    const number_of_labels = base_map.features[feature_index].properties.site[5].length
    point_feature.properties.number_of_labels = number_of_labels
    point_feature.properties.centroid = projection(point_feature.geometry.coordinates)
  });
  return point_grid_geojson
}

// CREATE SET PROJECTION || as CONTOUR MAP-----------------------------

function render_set_contour_map_canvas(context, data_to_bind_to, canvas_map_projection_color_scale, bandwidth, borderradius) {
  //const context = canvas.getContext("2d"); 
  // create the path that draws the lines
  //let path = d3.geoPath().context(context);
  let path = geo_path_generator
  // set the opacity of the contour map we now draw upon the underlying base map and the labels
  context.globalAlpha = window.canvas_map_opacity //0.2;
  // set the style of the path stroke
  context.strokeStyle = "#fff";
  let isoline_color = "#fff"
  // extract the data (=number of labels) and the centroid coordinates of each point
  const data = data_to_bind_to.map(point_feature => point_feature.properties.number_of_labels)
  const centers = data_to_bind_to.map(point_feature => point_feature.geometry.coordinates)//point_feature.properties.centroid) // changed
  //console.log(centers)
  // adjust the color mapping to the data domain
  const number_of_labels_domain_extent = d3.extent(data_to_bind_to.map(point_feature => point_feature.properties.number_of_labels))
  const color_mapping = d3.scaleSequential(d3["interpolate" + canvas_map_projection_color_scale]).domain(number_of_labels_domain_extent)

  // check the mode (union or intersection)
  if (window.canvas_map_set_mode === 'union_mode') {
    if (window.canvas_map_map_type === 'contour_map') {
      draw_contour_map(path, context, data, centers, color_mapping, bandwidth, borderradius, isoline_color)
    } else if (window.canvas_map_map_type === 'point_map') {
      draw_point_map(path, context, data, centers, color_mapping)
    } else {
      console.log('ERROR: wrong canvas_map_map_type provided.')
    }
    //
  } else if (window.canvas_map_set_mode === 'intersection_mode') {
    // draw the union set using a greyed out color in the background
    const background_data_to_bind_to = window.background_point_grid_geojson
    const background_data = background_data_to_bind_to.map(point_feature => point_feature.properties.number_of_labels)
    const background_centers = background_data_to_bind_to.map(point_feature => point_feature.geometry.coordinates) //point_feature.properties.centroid) // changed
    const background_number_of_labels_domain_extent = d3.extent(background_data_to_bind_to.map(point_feature => point_feature.properties.number_of_labels))
    const background_color_mapping = d3.scaleSequential(d3["interpolateGreys"]).domain(background_number_of_labels_domain_extent)

    if (window.canvas_map_map_type === 'contour_map') {
      // draw the contour map for the background
      isoline_color = "#000" // black isolines for the background
      draw_background_contour_map(path, context, background_data, background_centers, background_color_mapping, bandwidth, borderradius, isoline_color);
      // then draw the contour map for the foreground on top of it
      isoline_color = "#fff" // white isolines for the foreground
      draw_contour_map(path, context, data, centers, color_mapping, bandwidth, borderradius, isoline_color);
    } else if (window.canvas_map_map_type === 'point_map') {
      // draw the point map for the background
      draw_point_map(path, context, background_data, background_centers, background_color_mapping)
      // draw the point map for the foreground on top of it
      draw_point_map(path, context, data, centers, color_mapping)
    } else {
      console.log('ERROR: wrong canvas_map_map_type provided.')
    }
  } else {
    console.log('ERROR: no valid canvas map set mode provided.')
  }

  // IMPORTANT: reset the global alpha(!) (imporant!!! so the next drawing can be started with resetted alpha channel and not blurry)
  context.globalAlpha = 1.0
}

function draw_contour_map(path, context, data, centers, color_mapping, bandwidth, borderradius, isoline_color) {
  const isopleth = isoplethFactory(centers, width, height)
  // added ZOOM ability to blurred contour maps -> the contour maps are drawn on a 2d plane -> therefore we have to use a normal geopath without projection BUT we have to rescale the bandwith towards the current
  // zoom levels scale factor. For this we use the initial projection_scale and the current projection scale and refactor the blur radius/bandwith appropriately
  const current_geo_projection = path.projection()
  const current_projection_scale_factor = current_geo_projection.scale()
  //console.log(current_projection_scale_factor)
  bandwidth = bandwidth * (current_projection_scale_factor / projection_scale)
  path = d3.geoPath().context(context)
  // draw contour borders
  context.strokeStyle = isoline_color;
  // draw the contours
  for (const c of isopleth(data, bandwidth, borderradius)) {
    //if (c.value < 0) c.value = 0;
    context.beginPath();
    path(c);
    context.fillStyle = color_mapping(c.value);
    if (c.value % 0.05 === 0) { // 0.25
      context.globalAlpha = 0.6
      context.lineWidth = c.value % 0.2 ? 0.5 : 2;
      context.stroke();
      context.globalAlpha = window.canvas_map_opacity
    }
    context.fill();
  }
}

function draw_background_contour_map(path, context, data, centers, color_mapping, bandwidth, borderradius, isoline_color) {
  const isopleth = isoplethFactory(centers, width, height)
  // added ZOOM ability to blurred contour maps -> the contour maps are drawn on a 2d plane -> therefore we have to use a normal geopath without projection BUT we have to rescale the bandwith towards the current
  // zoom levels scale factor. For this we use the initial projection_scale and the current projection scale and refactor the blur radius/bandwith appropriately
  const current_geo_projection = path.projection()
  const current_projection_scale_factor = current_geo_projection.scale()
  //console.log(current_projection_scale_factor)
  bandwidth = bandwidth * (current_projection_scale_factor / projection_scale)
  path = d3.geoPath().context(context)
  // draw contour borders
  context.strokeStyle = isoline_color;
  // draw the contours
  for (const c of isopleth(data, bandwidth, borderradius)) {
    //if (c.value < 0) c.value = 0;
    context.beginPath();
    path(c);
    //context.fillStyle = color_mapping(c.value);
    if (c.value % 0.05 === 0) { // 0.25
      context.globalAlpha = 0.6
      context.lineWidth = 2 //c.value % 0.2 ? 0.5 : 2;
      context.stroke();
      context.globalAlpha = window.canvas_map_opacity
    }
    //context.fill();
  }
}

function draw_point_map(path, context, data, centers, color_mapping) {
  //path = geo_path_generator.context(context)
  //path = d3.geoPath().context(on_screen_context);
  //console.log(path)
  // set the radius of the points
  path.pointRadius([2.5]);
  // draw the points
  for (let i = 0; i < data.length; i++) {
    context.beginPath();
    path({ type: "Point", coordinates: centers[i] });
    context.fillStyle = color_mapping(data[i]);
    context.fill();
    context.stroke();
  }
}

function isoplethFactory(centers, width, height, padding) {
  if (!padding) padding = 0;
  const scale = 0.2;
  const w = Math.round((width + 2 * padding) * scale);
  const h = Math.round((height + 2 * padding) * scale);
  const x = d3.scaleLinear([-padding, width + padding], [0, w]);
  const y = x; // Use scaleLinear([0, height], [0, h]); to change the aspect ratio (usually we wouldn't want that)

  // added
  centers = centers.map((point, index) => projection(point))
  //console.log(centers)
  //

  const delaunay = d3.Delaunay.from(centers.map(d => [x(d[0]), y(d[1])])); // d3.geoDelaunay.from(centers.map(d => [x(d[0]), y(d[1])]));
  const nn = nnmap(delaunay, w, h);
  const bl = d3.blur().width(w);
  const ct = d3.contours().size([w, h]);

  function rescale(contour) {
    for (const polygon of contour.coordinates) {
      for (const ring of polygon) {
        for (const pt of ring) {
          pt[0] = x.invert(pt[0]);
          pt[1] = y.invert(pt[1]);
        }
      }
    }
    return contour;
  }

  function nnmap(delaunay, width, height) {
    const site = new Uint16Array(width * height),
      distance = new Float32Array(width * height);
    width |= 0;
    height |= 0;

    let n = 0;
    for (let i = 0; i < width; i++) {
      for (let j = 0; j < height; j++) {
        site[i + width * j] = n = delaunay.find(i, j);
        distance[i + width * j] = Math.hypot(
          delaunay.points[2 * n] - i,
          delaunay.points[2 * n + 1] - j
        );
      }
    }
    return { site, distance, width, height };
  }

  function datamap(data, nn, borderradius, defaultValue) {
    return borderradius > 0
      ? Array.from(nn.site, (s, i) =>
        nn.distance[i] < borderradius ? data[s] : defaultValue
      )
      : Array.from(nn.site, s => data[s]);
  }

  function computecontours(data, bandwidth, borderradius, defaultValue = 0) {
    bl.radius(bandwidth * scale);
    return ct(bl(datamap(data, nn, borderradius * scale, defaultValue))).map(
      rescale
    );
  }

  computecontours.thresholds = _ =>
    _ ? (ct.thresholds(_), computecontours) : ct.thresholds();

  return computecontours;
}

function clear_canvas(canvas) {
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
}

// -------------------------
// CREATE LABELING
function render_labels_on_canvas(context, base_map_feature_collection) {
  const path = geo_path_generator
  geo_path_generator.context(context)

  // get the projection
  const projection = path.projection()
  //console.log(projection.scale())
  const current_scale = projection.scale()
  const scale_factor = Math.floor(current_scale / projection_scale)

  // draw the cluster region labels, adaptive to the projection scale, if we are closer than a scale/zoom of 300, we create the small region labels
  if (current_scale < 800) {
    const base_map_cluster_labels = create_base_map_cluster_labels();
    // set text properties of context
    context.textAlign = 'center'
    context.textBaseline = 'middle'
    context.font = `14px Arial` //`6px Times New Roman`
    context.fillStyle = '#333333'
    // for every feature check if the label fits into the polygon and if yes draw the label text into the polygon positioned at the centroid
    for (const cluster_label of base_map_cluster_labels) {
      const point = projection([cluster_label.lons, cluster_label.lats])
      const texts = cluster_label.labels
      for (let i = 0; i < scale_factor+1; i++) {
        if (typeof texts[i] !== 'undefined') {
          context.fillStyle = '#333333'
          context.globalAlpha = 0.9
          context.fillText(texts[i], point[0], point[1] + i * 12)
          context.globalAlpha = 1.0
        }
      }
      //const texts = cluster_label.labels[0]
      //const text_width = context.measureText(text).width
      // check if the root of the width of the polygon is larger then the widht of the text as an approximation to know that the text fits into the polygon
      //if (Math.sqrt(geo_path_generator.area(feature_polygon)) < text_width) {
      //  continue
      //} else {
      //  context.fillText(text, centroid[0], centroid[1])
      //}
      //context.fillText(text, point[0], point[1])
    }
  } else {
    // get the view_box width height and put it into the area selection variable -> then render only the labels in that selection area
    const selection = [[0, 0], [window_properties[0].width, window_properties[0].height]]
    //console.log(selection)
    const reduced_base_map_feature_collection = get_features_in_selection(selection, base_map_feature_collection)
    //console.log(reduced_base_map_feature_collection)
    // set text properties of context
    context.textAlign = 'center'
    context.textBaseline = 'middle'
    context.font = `12px Arial` //`6px Times New Roman`
    context.fillStyle = '#333333'

    // for every feature check if the label fits into the polygon and if yes draw the label text into the polygon positioned at the centroid
    for (const feature_polygon of reduced_base_map_feature_collection.features) {
      const centroid = geo_path_generator.centroid(feature_polygon)
      const text = feature_polygon.properties.site[8][0] // get first element of the sorted label set which is the most frequent one in that voronoi region
      const text_width = context.measureText(text).width
      // check if the root of the width of the polygon is larger then the widht of the text as an approximation to know that the text fits into the polygon
      if (Math.sqrt(geo_path_generator.area(feature_polygon)) < text_width) {
        continue
      } else {
        context.fillText(text, centroid[0], centroid[1])
      }
    }

    // fallback version due to rectangle error when going over equator line
/*     for (const feature_polygon of base_map_feature_collection.features) {
      // check if feature is in view

      const centroid = geo_path_generator.centroid(feature_polygon)
      const text = feature_polygon.properties.site[8][0] // get first element of the sorted label set which is the most frequent one in that voronoi region
      const text_width = context.measureText(text).width
      // check if the root of the width of the polygon is larger then the widht of the text as an approximation to know that the text fits into the polygon
      if (Math.sqrt(geo_path_generator.area(feature_polygon)) < text_width) {
        continue
      } else {
        context.fillText(text, centroid[0], centroid[1])
      }
    } */

  }
}

function create_base_map_cluster_labels() {
  // split the base map points subsets by their topic label and filter out the ones with topic_probability =1 
  const topic_label_points = window.base_map_points.filter((point, index) => point.topic_label_probability === 1.0)
  //const topic_label_points = window.base_map_points
  //console.log(topic_label_points)

  // aggregate the points over their topic labels
  let aggregation_set = []
  topic_label_points.reduce(function (res, value) {
    if (!res[value.topic_label]) {
      res[value.topic_label] = { topic_label: value.topic_label, labels: [], lons: [], lats: [] };
      aggregation_set.push(res[value.topic_label])
    }
    res[value.topic_label].labels = res[value.topic_label].labels.concat(value.labels) //+= value.qty;
    res[value.topic_label].lons = res[value.topic_label].lons.concat(value.lon)
    res[value.topic_label].lats = res[value.topic_label].lats.concat(value.lat)
    return res;
  }, {});
  // reduce every label set to a unique set and sort it by frequency
  aggregation_set.forEach((label_set, index) => {
    label_set.labels = sortByFrequencyAndRemoveDuplicates(label_set.labels)
    label_set.lons = d3.mean(label_set.lons)
    label_set.lats = d3.mean(label_set.lats)
  })
  //aggregation_set.sort((a, b) => (a.labels.length > b.labels.length) ? -1 : 1) // sort in descending order
  return aggregation_set
}

//--------------------------------------------------------------------------------

//  document map
function render_document_vectors(context, source_document_vector_selection_set) {
  //const path = d3.geoPath().context(context);
  const path = geo_path_generator
  path.pointRadius([1.5]);

  // draw the points
  for (let i = 0; i < source_document_vector_selection_set.length; i++) {
    context.beginPath();
    path({ type: "Point", coordinates: source_document_vector_selection_set[i] }); // additional projection? no!!! check for other projections! the path uses it diredtly! this could solve the projection set problem!
    context.fillStyle = "purple"//"#EA4335"
    context.fill();
    context.stroke();
  }
  //TODO: draw the icons on the map, tutorial found here: https://stackoverflow.com/questions/42627493/draw-icon-on-canvas-image
}

function render_document_map(context, document_grid_map_feature_collection) {
  const path = geo_path_generator
  //geo_path_generator.context(context) => context is already given in geo_path_generator creation/initialization
  // create color mapping for the base map, domain is [0,1] because the topic_label probability is in [0,1]
  const color_mapping = d3.scaleSequential(d3["interpolate" + window.document_map_base_color_scale]).domain([0, 1]).nice()
  /*   // draw the sphere in the background
      context.beginPath();
      path({ type: "Sphere" });
      context.fillStyle = "blue" //color_mapping(0);
      context.fill();
      context.lineWidth = 1;
      context.stroke();
    
      // draw the graticule
      const graticule = d3.geoGraticule10();
      context.beginPath();
      path(graticule);
      context.lineWidth = 0.5;
      context.strokeStyle = "#aaa";
      context.stroke(); */

  // set text properties of context
  context.textAlign = 'center'
  context.textBaseline = 'middle'
  context.font = `10px Arial` //`6px Times New Roman`
  const current_projection_scale_factor = geo_path_generator.projection().scale()
  //console.log(current_projection_scale_factor)
  const scale_factor = Math.floor(current_projection_scale_factor / projection_scale)

  // fill the regions with the appropriate color
  for (const feature of document_grid_map_feature_collection.features) {
    //if (c.value < 0) c.value = 0;
    context.beginPath();
    path(feature);
    context.fillStyle = color_mapping(feature.properties.site.properties.cell_document_count);
    /*     if (feature.properties.site[7] % 25 === 0) {
        context.lineWidth = c.value % 100 ? 0.5 : 2;
        context.stroke();
      } */
    context.fill();
    // draw the label 
    if (feature.properties.site.properties.cell_labels.length > 0) {
      const centroid = path.centroid(feature)
      //const point = projection([cluster_label.lons, cluster_label.lats])
      // add labels due to scale factor, the closer we get, the more labels we can plot
      const texts = sortByFrequencyAndRemoveDuplicates(feature.properties.site.properties.cell_labels)
      for (let i = 0; i < scale_factor + 1; i++) { // WE INITIALLY START WITH 2 labels for the respective region
        if (typeof texts[i] !== 'undefined') {
          context.fillStyle = '#333333'
          context.globalAlpha = 0.7
          context.fillText(texts[i], centroid[0], centroid[1] + i * 10)
          context.globalAlpha = 1.0
        }
      }

      //const text_0 = sortByFrequencyAndRemoveDuplicates(feature.properties.site.properties.cell_labels)[0]
      //const text_1 = sortByFrequencyAndRemoveDuplicates(feature.properties.site.properties.cell_labels)[1]
      //const text_width = context.measureText(text).width
      // check if the root of the width of the polygon is larger then the widht of the text as an approximation to know that the text fits into the polygon
      //if (Math.sqrt(geo_path_generator.area(feature_polygon)) < text_width) {
      //  continue
      //} else {
      //  context.fillText(text, centroid[0], centroid[1])
      //}
      // draw text with alpha
      // todo
      //context.fillStyle = '#333333'
      //context.globalAlpha = 0.6
      //context.fillText(text_0, centroid[0], centroid[1])
      //context.fillText(text_1, centroid[0], centroid[1]+10)
      //context.globalAlpha = 1.0
    }

  }
  // draw the region borders
  context.beginPath();
  path(document_grid_map_feature_collection);
  context.lineWidth = 0.08;
  context.strokeStyle = "#65696e";
  context.stroke();

}

function render_document_projection(context, document_grid_map_feature_collection) {
  const path = geo_path_generator
  //console.log(window.source_selection_set_1)
  //const selected_source_uri = window.source_selection_set_1[0]
  //const selected_sources = window.corpus.filter((source, index) => source.uri.toString() === selected_source_uri)
  //const selected_source = selected_sources[0]
  //console.log(selected_source)

  // filter the grid map for the features that contain the document vector
  //const view_rectangle = d3.polygonHull([selection[0],[selection[0][0], selection[1][1]],[selection[1][0], selection[0][1]] ,selection[1]])
  const reduced_document_grid_map_feature_collection_features = document_grid_map_feature_collection.features.filter((feature, index) => {
    if(feature.properties.site.properties.cell_projection_count > 0){
      return true
    } else {
      return false
    }

/*     if (d3.geoContains(feature, selected_source.document_vector)) {
        //ERROR CORRECTION: for some reason points points with big span at the top of the globe are always detected as containers => hack: filter them out
        for(const point of feature.geometry.coordinates[0]) {
          if(point.toString() === [0,90].toString() || point.toString() === [-90,90].toString()) {
            return false
          }
        }
        return true
    } else {
      return false
    } */

  })
  //console.log(reduced_document_grid_map_feature_collection_features)

  const reduced_document_grid_map_feature_collection = {
    type: "FeatureCollection",
    features: reduced_document_grid_map_feature_collection_features
  }
  // draw the region borders of the selected regions
  context.beginPath();
  path(reduced_document_grid_map_feature_collection);
  context.lineWidth = 3.0;
  context.strokeStyle = "#ff0000";
  context.stroke();
}

function set_data_to_document_grid_map(document_vectors, document_map_grid_voronoi, raw_point_grid_geojson) {
  // initialize the cell counting property in every cell of the grid map to 0 and set the label count to zero
  raw_point_grid_geojson.forEach((point_feature, index) => {
    point_feature.properties.cell_document_count = 0
    point_feature.properties.cell_labels = []
    point_feature.properties.cell_projection_count = 0
  });
  // for each document vector, find the nearest feature_polygon in the voronoi map and add 1 to the counting property
  document_vectors.forEach((document_vector, index) => {
    const feature_index = document_map_grid_voronoi.find(document_vector[0], document_vector[1])
    // add one to the respective count of the cell
    raw_point_grid_geojson[feature_index].properties.cell_document_count += 1
    // add the labels of the respective document vector to the point
    raw_point_grid_geojson[feature_index].properties.cell_labels = raw_point_grid_geojson[feature_index].properties.cell_labels.concat(window.corpus[index].keywords)
  })
  // normalize the cell_document_count 
  const document_counts_per_cell = raw_point_grid_geojson.map((point_feature, index) => point_feature.properties.cell_document_count)
  const max_document_count_per_cell = d3.max(document_counts_per_cell)
  //console.log(document_counts_per_cell)
  //console.log(max_document_count_per_cell)
  raw_point_grid_geojson.forEach((point_feature, index) => point_feature.properties.cell_document_count = point_feature.properties.cell_document_count / max_document_count_per_cell)
  return raw_point_grid_geojson
}

function create_set_projection_on_document_grid_map(document_vectors, document_grid_map_feature_collection) {
  // clean the old projection and set the cell projection count back to 0 
  document_grid_map_feature_collection.features.forEach((feature, index) => {
    feature.properties.site.properties.cell_projection_count = 0
  });
  // for each document vector, find the nearest feature_polygon in the voronoi map and add 1 to the projection count property
  document_vectors.forEach((document_vector, index) => {
    // check for each cell of the grid map, if the document vector is contained, if yes -> increment its projection count 
    for(let jindex=0; jindex < document_grid_map_feature_collection.features.length; jindex++) {
         const feature = document_grid_map_feature_collection.features[jindex]
          if(d3.geoContains(feature, document_vector)){
                //ERROR CORRECTION: for some reason points points with big span at the top of the globe are always detected as containers => hack: filter them out
                let error_signal = false
                for(const point of feature.geometry.coordinates[0]) {
                  if(point.toString() === [90,90].toString() || point.toString() === [-90,90].toString()) { // [0,90].toString() ALSO worth a try ...
                      // wrong detected point, set the error signal to true
                      error_signal = true
                  }
                }  
                  if(error_signal){
                    // continue with another try if this one was an error
                    continue;
                  } else {
                    // add one to the respective count of the cell and then break because we already found a cell that contains the document and there can only be one
                    document_grid_map_feature_collection.features[jindex].properties.site.properties.cell_projection_count += 1
                    break;
                  }
            }  
    }
  })
  // normalize the cell_projection_count 
  const projection_counts_per_cell = document_grid_map_feature_collection.features.map((feature, index) => feature.properties.site.properties.cell_projection_count)
  const max_projection_count_per_cell = d3.max(projection_counts_per_cell)
  //console.log(document_counts_per_cell)
  //console.log(max_document_count_per_cell)
  document_grid_map_feature_collection.features.forEach((feature, index) => feature.properties.site.properties.cell_projection_count = feature.properties.site.properties.cell_projection_count / max_projection_count_per_cell)
  return document_grid_map_feature_collection
}

function get_document_vectors() {
  // get the topic points out of the semantic map by filtering them out due to their topic level
  const document_vectors = window.corpus.map((source, index) => source.document_vector)
  // OPTIONAL: convert rad to degree; only if not done in BACKEND already
  /*   const converted_map_points = topic_points.map((point, index) => {
      const conv_lat = radians_to_degrees(point.lat)
      const conv_lon = radians_to_degrees(point.lon)
      return {
        'word_2_doc_index': point.word_2_doc_index,
        'lat': conv_lat,
        'lon': conv_lon,
        'labels': point.labels
      }
    });
    console.log(converted_map_points)
    return converted_map_points */
  return document_vectors
}

function compute_document_map() {
  // get the document vectors
  const document_vectors = get_document_vectors()
  window.document_map_voronoi = d3.geoVoronoi(document_vectors)
  // create a grid map to assign the density of document vectors in each cell
  // create grid points with appropriate grid sizing/granularity for the document map
  const raw_point_grid_geojson = create_point_grid(window.document_grid_map_size)
  // create geo voronoi from grid points
  let document_map_grid_voronoi = d3.geoVoronoi(raw_point_grid_geojson)
  // assign data to the points in the grid map
  const point_grid_geojson = set_data_to_document_grid_map(document_vectors, document_map_grid_voronoi, raw_point_grid_geojson)
  // create a new voronoi from the points
  document_map_grid_voronoi = d3.geoVoronoi(point_grid_geojson)
  const document_grid_map_feature_collection = document_map_grid_voronoi.polygons()
  // save the topic grid map feature collection to  a window variable 
  window.document_grid_map_feature_collection = document_grid_map_feature_collection
  //console.log(document_grid_map_feature_collection)
}

// paragraph map
function render_paragraph_map(context, paragraph_grid_map_feature_collection) {
  const path = geo_path_generator
  //geo_path_generator.context(context) => context is already given in geo_path_generator creation/initialization
  // create color mapping for the base map, domain is [0,1] because the topic_label probability is in [0,1]
  const color_mapping = d3.scaleSequential(d3["interpolate" + window.document_map_base_color_scale]).domain([0, 1]).nice()

  /*     // draw the sphere in the background
      context.beginPath();
      path({ type: "Sphere" });
      context.fillStyle = "blue" //color_mapping(0);
      context.fill();
      context.lineWidth = 1;
      context.stroke();
    
      // draw the graticule
      const graticule = d3.geoGraticule10();
      context.beginPath();
      path(graticule);
      context.lineWidth = 0.5;
      context.strokeStyle = "#aaa";
      context.stroke(); */

  // set text properties of context
  context.textAlign = 'center'
  context.textBaseline = 'middle'
  context.font = `11px Arial` //`6px Times New Roman`
  const current_projection_scale_factor = geo_path_generator.projection().scale()
  //console.log(current_projection_scale_factor)
  const scale_factor = Math.floor(current_projection_scale_factor / projection_scale)

  // fill the regions with the appropriate color
  for (const feature of paragraph_grid_map_feature_collection.features) {
    //if (c.value < 0) c.value = 0;
    context.beginPath();
    path(feature);
    context.fillStyle = color_mapping(feature.properties.site.properties.cell_paragraph_count);
    /*     if (feature.properties.site[7] % 25 === 0) {
        context.lineWidth = c.value % 100 ? 0.5 : 2;
        context.stroke();
      } */
    context.fill();
    // draw the label 
    if (feature.properties.site.properties.cell_labels.length > 0) {
      const centroid = path.centroid(feature)
      //const point = projection([cluster_label.lons, cluster_label.lats])
      // add labels due to scale factor, the closer we get, the more labels we can plot
      const texts = sortByFrequencyAndRemoveDuplicates(feature.properties.site.properties.cell_labels)
      for (let i = 0; i < scale_factor + 1; i++) { // WE INITIALLY START WITH 2 labels for the respective region
        if (typeof texts[i] !== 'undefined') {
          context.fillStyle = '#333333'
          context.globalAlpha = 0.7
          context.fillText(texts[i], centroid[0], centroid[1] + i * 10)
          context.globalAlpha = 1.0
        }
      }
      //const text_0 = sortByFrequencyAndRemoveDuplicates(feature.properties.site.properties.cell_labels)[0]
      //const text_1 = sortByFrequencyAndRemoveDuplicates(feature.properties.site.properties.cell_labels)[1]
      //const text_width = context.measureText(text).width
      // check if the root of the width of the polygon is larger then the widht of the text as an approximation to know that the text fits into the polygon
      //if (Math.sqrt(geo_path_generator.area(feature_polygon)) < text_width) {
      //  continue
      //} else {
      //  context.fillText(text, centroid[0], centroid[1])
      //}
      // draw text with alpha
      // todo
      //context.fillStyle = '#333333'
      //context.globalAlpha = 0.6
      //context.fillText(text_0, centroid[0], centroid[1])
      //context.fillText(text_1, centroid[0], centroid[1]+10)
      //context.globalAlpha = 1.0
    }

  }
  // draw the region borders
  context.beginPath();
  path(paragraph_grid_map_feature_collection);
  context.lineWidth = 0.08;
  context.strokeStyle = "#65696e";
  context.stroke();
}

function render_paragraph_projection(context, paragraph_grid_map_feature_collection){
  const path = geo_path_generator
  //console.log(window.source_selection_set_1)
  //const selected_source_uri = window.source_selection_set_1[0]
  //const selected_sources = window.corpus.filter((source, index) => source.uri.toString() === selected_source_uri)
  //const selected_source = selected_sources[0]
  //console.log(selected_source)

  // filter the grid map for the features that contain the document vector
  //const paragraph_vectors = selected_source.paragraphs.map((paragraph, index) => paragraph.paragraph_vector) 
  const reduced_paragraph_grid_map_feature_collection_features = paragraph_grid_map_feature_collection.features.filter((feature, index) => {
/*     for(const paragraph_vector of paragraph_vectors) {
      if (d3.geoContains(feature, paragraph_vector)) {
          //ERROR CORRECTION: for some reason points points with big span at the top of the globe are always detected as containers => hack: filter them out
          for(const point of feature.geometry.coordinates[0]) {
            if(point.toString() === [0,90].toString() || point.toString() === [-90,90].toString()) {
              return false
            }
          }
          return true
      }
    }
    return false  */
    if(feature.properties.site.properties.cell_projection_count > 0){
      return true
    } else {
      return false
    }
  })
  //console.log(reduced_document_grid_map_feature_collection_features)

  const reduced_paragraph_grid_map_feature_collection = {
    type: "FeatureCollection",
    features: reduced_paragraph_grid_map_feature_collection_features
  }
  // draw the region borders of the selected regions
  context.beginPath();
  path(reduced_paragraph_grid_map_feature_collection);
  context.lineWidth = 3.0;
  context.strokeStyle = "#ff0000";
  context.stroke();
}

function get_paragraph_vectors_lists() {
  // get the topic points out of the semantic map by filtering them out due to their topic level
  const paragraph_vectors_lists = window.corpus.map((source, index) => source.paragraphs.map((paragraph, jindex) => paragraph.paragraph_vector)) //.flat()
  // OPTIONAL: convert rad to degree; only if not done in BACKEND already
  /*   const converted_map_points = topic_points.map((point, index) => {
      const conv_lat = radians_to_degrees(point.lat)
      const conv_lon = radians_to_degrees(point.lon)
      return {
        'word_2_doc_index': point.word_2_doc_index,
        'lat': conv_lat,
        'lon': conv_lon,
        'labels': point.labels
      }
    });
    console.log(converted_map_points)
    return converted_map_points */
  return paragraph_vectors_lists
}

function create_doc_2_paragraph_index() {
  // given a document index it returns a list of paragraph indices
  const doc_2_paragraph_index = []
  let last_added_index = 0
  window.corpus.forEach((source, index) => {
    const document_paragraphs = []
    source.paragraphs.forEach((paragraph, jindex) => {
      document_paragraphs.push(last_added_index);
      last_added_index += 1
    });
    doc_2_paragraph_index.push(document_paragraphs)
  });
  window.doc_2_paragraph_index = doc_2_paragraph_index
}

function create_paragraph_2_doc_index() {
  // given a paragraph index return the document index that contains the paragraph
  const paragraph_2_doc_index = []
  let last_added_index = 0
  window.corpus.forEach((source, index) => {
    source.paragraphs.forEach((paragraph, jindex) => {
      paragraph_2_doc_index.push(last_added_index);
    });
    last_added_index += 1
  });
  window.paragraph_2_doc_index = paragraph_2_doc_index
}

function set_data_to_paragraph_grid_map(paragraph_vectors_lists, paragraph_map_grid_voronoi, raw_point_grid_geojson) {
  // initialize the cell counting property in every cell of the grid map to 0 and set the label count to zero
  raw_point_grid_geojson.forEach((point_feature, index) => {
    point_feature.properties.cell_paragraph_count = 0
    point_feature.properties.cell_labels = []
    point_feature.properties.cell_projection_count = 0
  });
  // for each document vector, find the nearest feature_polygon in the voronoi map and add 1 to the counting property
  paragraph_vectors_lists.forEach((paragraph_vector_list, index) => {
    paragraph_vector_list.forEach((paragraph_vector, jindex) => {
      const feature_index = paragraph_map_grid_voronoi.find(paragraph_vector[0], paragraph_vector[1])
      // add one to the respective count of the cell
      raw_point_grid_geojson[feature_index].properties.cell_paragraph_count += 1
      // TODO: add the labels of the respective paragraph vector to the point (NOT THE ONES OF THE WHOLE DOCUMENT ...)
      raw_point_grid_geojson[feature_index].properties.cell_labels = raw_point_grid_geojson[feature_index].properties.cell_labels.concat(window.corpus[index].paragraphs[jindex].paragraph_keywords)
    });
  });
  // normalize the cell_document_count 
  const paragraph_counts_per_cell = raw_point_grid_geojson.map((point_feature, index) => point_feature.properties.cell_paragraph_count)
  const max_paragraph_count_per_cell = d3.max(paragraph_counts_per_cell)
  //console.log(document_counts_per_cell)
  //console.log(max_document_count_per_cell)  console.log(point_grid_geojson)
  raw_point_grid_geojson.forEach((point_feature, index) => point_feature.properties.cell_paragraph_count = point_feature.properties.cell_paragraph_count / max_paragraph_count_per_cell)
  return raw_point_grid_geojson
}

function create_set_projection_on_paragraph_grid_map(selected_paragraph_vectors, paragraph_map_grid_voronoi, paragraph_grid_map_feature_collection){
  // clear the old projection
  paragraph_grid_map_feature_collection.features.forEach((feature, index) => {
    feature.properties.site.properties.cell_projection_count = 0
  });
  // for each paragraph vector, find the nearest feature_polygon in the voronoi map and add 1 to the projection count property
  selected_paragraph_vectors.forEach((paragraph_vector, index) => {
          for(let jindex=0; jindex < paragraph_grid_map_feature_collection.features.length; jindex++) {
            const feature = paragraph_grid_map_feature_collection.features[jindex]
            if(d3.geoContains(feature, paragraph_vector)){
              //ERROR CORRECTION: for some reason points points with big span at the top of the globe are always detected as containers => hack: filter them out
              let error_signal = false
              for(const point of feature.geometry.coordinates[0]) {
                if(point.toString() === [90,90].toString() || point.toString() === [-90,90].toString()) { // [0,90].toString() ALSO worth a try ...
                    // wrong detected point, set the error signal to true
                    error_signal = true
                }
              }  
                if(error_signal){
                  // continue with another try if this one was an error
                  continue;
                } else {
                  // add one to the respective count of the cell and then break because we already found a cell that contains the document and there can only be one
                  paragraph_grid_map_feature_collection.features[jindex].properties.site.properties.cell_projection_count += 1
                  break;
                }
            }  
        }
    });

  // normalize the cell_projection_count
  const projection_counts_per_cell = paragraph_grid_map_feature_collection.features.map((feature, index) => feature.properties.site.properties.cell_projection_count)
  const max_projection_count_per_cell = d3.max(projection_counts_per_cell)
  //console.log(document_counts_per_cell)
  //console.log(max_document_count_per_cell)  console.log(point_grid_geojson)
  paragraph_grid_map_feature_collection.features.forEach((feature, index) => feature.properties.site.properties.cell_projection_count = feature.properties.site.properties.cell_projection_count / max_projection_count_per_cell)
  return paragraph_grid_map_feature_collection
}

function compute_paragraph_map() {
  // get the paragraph vectors
  const paragraph_vectors_lists = get_paragraph_vectors_lists()
  //console.log(paragraph_vectors_lists.flat())
  window.paragraph_map_voronoi = d3.geoVoronoi(paragraph_vectors_lists.flat())
  // create a grid map to assign the density of document vectors in each cell
  // create grid points with appropriate grid sizing/granularity for the document map
  const raw_point_grid_geojson = create_point_grid(window.document_grid_map_size)
  // create geo voronoi from grid points
  let paragraph_map_grid_voronoi = d3.geoVoronoi(raw_point_grid_geojson)
  // assign data to the points in the grid map
  const point_grid_geojson = set_data_to_paragraph_grid_map(paragraph_vectors_lists, paragraph_map_grid_voronoi, raw_point_grid_geojson)
  // create a new voronoi from the points
  paragraph_map_grid_voronoi = d3.geoVoronoi(point_grid_geojson)
  const paragraph_grid_map_feature_collection = paragraph_map_grid_voronoi.polygons()
  // save the topic grid map feature collection to  a window variable 
  window.paragraph_grid_map_feature_collection = paragraph_grid_map_feature_collection
  //console.log(paragraph_grid_map_feature_collection)
}

function render_paragraph_vectors(context, paragraph_vectors) {
  //const path = d3.geoPath().context(context);
  const path = geo_path_generator
  path.pointRadius([1.5]);

  // draw the points
  for (let i = 0; i < paragraph_vectors.length; i++) {
    context.beginPath();
    path({ type: "Point", coordinates: paragraph_vectors[i] }); // additional projection? no!!! check for other projections! the path uses it diredtly! this could solve the projection set problem!
    context.fillStyle = "purple"//"#EA4335"
    context.fill();
    context.stroke();
  }
  //TODO: draw the icons on the map, tutorial found here: https://stackoverflow.com/questions/42627493/draw-icon-on-canvas-image
}


// EXECUTION SECTION
render_canvas();

//--------------------------------------------------------------------------------




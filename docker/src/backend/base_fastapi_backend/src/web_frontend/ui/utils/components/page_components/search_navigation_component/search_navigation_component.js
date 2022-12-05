// IMPORT THE USECASES THIS COMPONENT USES FROM THE INJECTION CONTAINER HERE

// Navigation Component Class
const template = document.createElement('template'); 
// NOTE: if the css part gets to big, it is also possible to use <link> tag to link to an external css file
template.innerHTML = `
<link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'>
<link rel="stylesheet" href="/static/ui/utils/components/page_components/search_navigation_component/assets/search_navigation_component.css" type="text/css" />
<!-- SearchNavigationComponent -->
<div class="search_navigation_component">
  <header class="l-header"> 
      <nav class="nav">
          <div class="nav__toggle" id="nav-toggle">
              <i class='bx bx-menu'></i> 
          </div>
          <div>
              <a href="#" class"nav__logo">KeywordScape</a>
          </div>
  
          <div class="nav__menu box-shadow-50-black" id="nav-menu">
              <div class="nav__close" id="nav-close"> 
                    <i class='bx bxs-arrow-to-left'></i>
              </div>
  
              <!-- BEGINS: SEARCH FIELD -->
              <div class="my_search_field position-absolute margin-auto w350 mt-20" style="z-index: 1000 !important;">
                  <img class="ml-15 opacity-4 cursor-pointer" src="static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/settings.svg" width="15px" id="settings_button" >
                  <input type="text" class="outline-none" id="search_input_field" placeholder="Search Corpus" list="search_datalist">
                  <datalist id="search_datalist"></datalist>
                  <div class="right-0 mr-15 align-in-center opacity-4">
                      <img id="search_button" src="static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/search.svg" width="15px">
                      <img src="static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/bar.svg" width="15px">
                      <img id="render_button" class="ml-10 cursor-pointer display-none" src="static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/play.svg" width="15px">
                      <img id="search_close_button" class="ml-10 cursor-pointer display-none" src="static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/close.svg" width="15px">
                      <img id="resource_details_back_button" class="ml-10 cursor-pointer display-none" src="static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/leftArrow.svg" width="15px">
                  </div>
              </div>
              <!-- ENDS: SEARCH FIELD -->
  
              <!-- BEGIN: SETTINGS MENU -->
              <div id="settings_form" class="settings display-none w350 mt-40">
                  <div class="checkbox setting-item">
                  </div>
               <!--   <div class="checkbox setting-item">
                    <h3>SEARCH FILTERS</h3>
                    <input type="checkbox" id="ranking_search_checkbox" name="ranking_search_checkbox">
                    <label for="ranking_search_checkbox">sort by rank</label>
                  </div> -->
                <div class="checkbox setting-item">
                    <h3>DATA SET SELECTION</h3>
                    <!--<label for="dataset_selection">Choose a data set:</label> -->
                    <select name="dataset_selection" id="dataset_selection"> 
                        <option value="null" selected="selected">--choose data set--</option>
                        <option value="dataset_covid_news_corpus">Covid News Corpus</option> 
                        <option value="dataset_vis_2020_proceedings_corpus">VIS 2020 Proceedings Corpus</option>
                        <option value="dataset_dynamic_graph_visualization_corpus">Dynamic Graph Visualization Corpus</option>
                        <option value="dataset_uncertainty_visualization_corpus">Uncertainty Visualization Corpus</option> 
                        <option value="dataset_chi_2019_proceedings_corpus">CHI 2019 Proceedings Corpus</option> 
                        <option value="dataset_blogger_corpus">Blogger Corpus</option> 
                        <option value="dataset_eurovis_2021_proceedings_corpus">EuroVIS 2021 Proceedings</option>
                        <option value="dataset_food_recipe_corpus">Food Recipe Corpus</option>
                        <option value="dataset_meaning_shift_corpus">Meaning Shift Corpus</option>  
                    </select>
                    <!-- <h3>Hyperparameters</h3>
                    <p>Voronoi regions for base map: 200</p>
                    <p>Voronoi regions per source: 40</p>
                    <p>Max number of points per pource: unlimited</p>
                    <p>Cluster Regions: 126</p>
                    <p>Voronoi regions per topic: 20</p> -->
                </div>
                <div class="checkbox setting-item">
                    <h3>DATA SET OVERVIEW</h3>
                    <details>
                        <summary>Timestamps</summary>
                        <div class="d-flex justify-content-start flex-row flex-wrap" id="timestamps_chip_list">
                        </div>
                    </details>
                    <details>
                        <summary>Keywords</summary>
                        <div class="d-flex justify-content-start flex-row flex-wrap" id="keywords_chip_list">
                        </div>
                     </details>
                     <details>
                        <summary>Authors</summary>
                        <div class="d-flex justify-content-start flex-row flex-wrap" id="authors_chip_list">
                        </div>
                    </details>
                    <details>
                        <summary>Star Ratings</summary>
                        <div class="d-flex justify-content-start flex-row flex-wrap" id="star_ratings_chip_list">
                        </div>
                    </details>
                    <details>
                        <summary>Tags</summary>
                        <div class="d-flex justify-content-start flex-row flex-wrap" id="tags_chip_list">
                        </div>
                    </details>
                    <!-- <h3>Hyperparameters</h3>
                    <p>Voronoi regions for base map: 200</p>
                    <p>Voronoi regions per source: 40</p>
                    <p>Max number of points per pource: unlimited</p>
                    <p>Cluster Regions: 126</p>
                    <p>Voronoi regions per topic: 20</p> -->
                </div>
                  <div class="checkbox setting-item">
                    <h3>OPTIONS</h3> 
                    <label for="embedding_map_type_input_select_label">Embedding Map Type:</label>
                    <select name="embedding_map_type_input_select" id="embedding_map_type_input_select">
                        <option value="contextualized_word_embedding">keyword map</option>
                        <option value="paragraph_embedding">paragraph map</option>
                        <option value="document_embedding">document map</option>
                    </select>
                <!--    <label for="canvas_map_interaction_input_select_label">Map Interaction:</label>
                    <select name="canvas_map_interaction_input_select" id="canvas_map_interaction_input_select">
                        <option value="zoom">Zoom</option>
                        <option value="brush">Brush</option>
                        <option value="drag">Drag</option>
                    </select> -->
                    <label for="canvas_map_base_map_projection_type_input_select_label">Base Map Type:</label>
                    <select name="canvas_map_base_map_projection_type_input_select" id="canvas_map_base_map_projection_type_input_select">
                        <option value="geoEquirectangular">geoEquirectangular</option>
                        <option value="geoPatterson">geoPatterson</option>   
                        <option value="geoFahey">geoFahey</option> 
                        <option value="geoMercator">geoMercator</option> 
                        <option value="geoMiller">geoMiller</option> 
                        <option value="geoOrthographic">geoOrthographic</option> 
                    </select>
                    <label for="canvas_map_base_map_type_input_select_label">Base Map Type:</label>
                    <select name="canvas_map_base_map_type_input_select" id="canvas_map_base_map_type_input_select">
                        <option value="blurred_contour_map">Blurred Contour Map</option>
                        <option value="voronoi_map">Voronoi Map</option>   
                    </select>
                    <label for="canvas_map_base_color_input_select_label">Base Map Color:</label>
                    <select name="canvas_map_base_color_input_select" id="canvas_map_base_color_input_select">
                        <option value="Demc">Demc</option>
                        <option value="DemcLand">DemcLand</option>   
                        <option value="City">City</option>
                        <option value="CityLand">CityLand</option> 
                        <option value="Roma">Roma</option>
                        <option value="RomaReverse">RomaReverse</option>
                    </select>
                    <label for="canvas_map_map_type_input_select_label">Projection Map Type:</label>
                    <select name="canvas_map_map_type_input_select" id="canvas_map_map_type_input_select">
                        <option value="contour_map">Contour Map</option>
                        <option value="point_map">Point Map</option>
                    </select>
                    <label for="canvas_map_projection_color_input_select_label">Projection Color:</label>
                    <select name="canvas_map_projection_color_input_select" id="canvas_map_projection_color_input_select">
                      <option value="Cividis">Cividis</option>
                      <option value="Viridis">Viridis</option>
                      <option value="Warm">Warm</option> 
                      <option value="Magma">Magma</option> 
                      <option value="Plasma">Plasma</option> 
                      <option value="Cool">Cool</option>
                      <option value="Greens">Greens</option> 
                      <option value="Blues">Blues</option> 
                      <option value="Oranges">Oranges</option> 
                      <option value="YlOrBr">YlOrBr</option> 
                      <option value="OrRd">OrRd</option>  
                      <option value="GnBu">GnBu</option> 
                      <option value="YlGnBu">YlGnBu</option>
                      <option value="YlGn">YlGn</option>
                      <option value="YlOrRd">YlOrRd</option>
                    </select>
     <!--               <label for="render_document_vectors_input_select_label">Document Vector Rendering:</label>
                    <select name="render_document_vectors_input_select" id="render_document_vectors_input_select">
                        <option value="no_document_vectors">No Document Vectors</option>
                        <option value="selected_document_vectors">Selected Document Vectors</option>   
                        <option value="all_document_vectors">All Document Vectors</option> 
                    </select> -->
                    <label for="canvas_map_grid_size_input_slider" id="canvas_map_grid_size_input_slider_label">Grid Size: 1</label>
                    <input type="range" id="canvas_map_grid_size_input_slider" min="1" max="10" step="1" value="1">
                    <label for="canvas_map_opacity_input_slider" id="canvas_map_opacity_input_slider_label">Canvas Opacity: 0.2</label>
                    <input type="range" id="canvas_map_opacity_input_slider" min="0" max="1" step="0.01" value="0.2">
                    <label for="canvas_map_bandwidth_input_slider" id="canvas_map_bandwidth_input_slider_label">Bandwidth/Blur Radius: 25.0</label>
                    <input type="range" id="canvas_map_bandwidth_input_slider" min="0" max="50" step="0.1" value="25.0">
                    <label for="canvas_map_borderradius_input_slider" id="canvas_map_borderradius_input_slider_label">Border Radius: 50.0</label>
                    <input type="range" id="canvas_map_borderradius_input_slider" min="0" max=100" step="0.1" value="50.0">
              <!--      <h5> Map Clustering </h5> -->
              <!--          <input type="range" id="hierarchy_depth_input_slider" name="volume" min="2" max="5" step="1" list="steplist" value="4">
                        <datalist id="steplist">
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                       </datalist>
                        <label for="hierarchy_depth_input_slider" id="hierarchy_depth_input_slider_label">Hierarchical Clustering Depth: 4</label> -->
                </div>
                <div class="checkbox setting-item">
                    <h3>TAG SET COMPARISON</h3>
                    <label for="source_selection_set_1_tag_choose">Tag Set 1:</label>
                    <select name="source_selection_set_1_tag_choose" id="source_selection_set_1_tag_choose">
                    </select>
                    <label for="source_selection_set_2_tag_choose">Tag Set 2:</label>
                    <select name="source_selection_set_2_tag_choose" id="source_selection_set_2_tag_choose">
                    </select>
                    <label for="canvas_map_set_mode_input_select">Mode:</label>
                    <select name="canvas_map_set_mode_input_select" id="canvas_map_set_mode_input_select">
                        <option value="union_mode">Union</option>
                        <option value="intersection_mode">Intersection</option>
                    </select>
                    <label id="semantic_width_label">Semantic Width:</label>
                    <label id="semantic_depth_label">Semantic Depth:</label>
                </div>
                <div class="checkbox setting-item">
                    <h3>TAG SET 1 SOURCES</h3>
                    <div id="tag_set_1_sources_list" class="search-result w350 mt-50">
                    </div>
                    <!--   <p id="set_1_2_union_sources_field"><b>Selected Sources: </b></p> -->
                    <!--   <p id="set_1_2_union_semantic_depth_field">Semantic Depth:</p> -->
                    <!--       <p id="set_1_2_union_semantic_width_field">Semantic Width:</p> -->
                </div>
                <div class="checkbox setting-item">
                    <h3>TAG SET 2 SOURCES</h3>
                    <div id="tag_set_2_sources_list" class="search-result w350 mt-50">
                    </div>
                    <!--   <p id="set_1_2_union_sources_field"><b>Selected Sources: </b></p> -->
                    <!--   <p id="set_1_2_union_semantic_depth_field">Semantic Depth:</p> -->
                    <!--       <p id="set_1_2_union_semantic_width_field">Semantic Width:</p> -->
                </div>
                <div class="checkbox setting-item">
                    <h3>EXPORT TAG SET</h3>
                    <label for="export_selection_set_tag_choose">Choose Tag Set:</label>
                    <select name="export_selection_set_tag_choose" id="export_selection_set_tag_choose">
                    </select>
                    <br>
                    <button id="export_selection_set_tag_button">Export</button>
                </div>
              </div>
              <!-- ENDS: SETTINGS MENU -->
  
              <!-- BEGIN: SEARCH RESULTS -->
              <div id="search_result_list" class="search-result display-none w350 mt-50">
              </div>
              <!-- ENDS: SEARCH RESULTS -->

              <!-- BEGINS: DISPLAY RESOURCE DETAILS -->
              <div id="resource_details" class="mt-80 d-flex flex-column align-items-center display-none">
              </div>
              <!-- ENDS: DISPLAY RESOURCE -->

              <!-- BEGINS: KEYWORDS LIST -->
       <!--       <div id="keywords_container" class="position-relative mt-80 display-none">
                  <h2 class="section-heading w350">Top 10 Keywords</h2>
                  <ul id="keyword_item_list">
                  </ul>
              </div> -->
              <!-- ENDS: KEYWORDS LIST -->

              <!-- BEGINS: RECOMMENDATION CARDS -->
              <div id="recommendation_container" class="position-relative mt-80">
                  <h2 class="section-heading w350">Extracted Topics</h2>
                  <div id="recommendation_container_scroll" class="cata-sub-nav">
                      <div id="rerecommendation_container_left_arrow" class="cursor-pointer position-absolute text-decoration-none bg-white br1-white border-radius-30 w40 text-center text-grey font-size-30 top-35 left-0 display-none">‹</div>
                      <div id="recommendation_container_right_arrow" class="display-none cursor-pointer position-absolute text-decoration-none bg-white br1-white border-radius-30 w40 text-center text-grey font-size-30 top-35 right-0">›</div>
                      <ul id="recommendation_card_list">
                      </ul>
                  </div>
              </div>
              <!-- ENDS: RECOMMENDATION CARDS -->
  
        </div>
      </nav>
  </header>
  
  </div>
  <!-- END OF SearchNavigationComponent-->
  
  <!-- DIALOGS -->
  <!-- END OF DIALOGS-->

`;

class SearchNavigationComponent extends HTMLElement {
    constructor() {
        super();
        this.innerHTML= template.innerHTML 
        this.search_autocomplete_recommendation_list_length = 5
        this.search_result_list_length = 50
        this.search_results = ""
        this.recommendation_card_list_length = 200
        this.keyword_item_list_length = 5
        this.selected_topic = ""
        this.display_set_1 = false
        this.display_set_2 = false
        this.display_set_1_2_union = false
        this.display_set_1_2_intersection = false
        this.display_single_source = false
        this.display_single_document_vector = false
        this.current_display_button_element = ''
        this.current_chip_label_element = ''
        //this.datasource = decentral_data_source_singleton
        // COMPONENT STATE
        // LIVE PROPERTIES: add live bindings to gun js here
        // USECASE RELATED PROPETIES: add state properties here, attributes on the tag in the DOM have corresponding properties in JS here, these are properties refreshed by use case calls
        //this.user_profile = {username:"", email:""}

        // EVENT LISTENERS
        // add event listeners to a hrefs / links and prevent default refresh behaviour so that we stay on our app page
         document.addEventListener('DOMContentLoaded', () => {
            // add event listeners to a hrefs / links and prevent default refresh behaviour so that we stay on our app page
            document.body.addEventListener('click', e => {
                if (e.target.matches("[data-link]")){
                    e.preventDefault();
                    //navigateTo(e.target.href);
                    console.log('search nav link clicked.')
                }
            });

            // IMPORTANT: initialize autocomplete search index when DOM content loaded
            // set up autocomplete search index
            this.set_up_autocomplete_search_index()

            // IMPORTANT: initialize the recommendation cards when DOM content loaded
            this.update_recommendation_card_list(window.topic_corpus);     

            // IMPORTANT: initialize the keyword item list when DOM content loaded
            //this.update_keyword_item_list();   

            // IMPORTANT: initialize the tag lists for the sets when DOM content loaded
            this.update_list_of_all_tags();

            // IMPORTANT add event listener to the set checkboxes make sets visible/invisible 
/*             const render_set_1_button = this.querySelector('#render_set_1_button');
            render_set_1_button.addEventListener('click', (event) => {
                console.log('render set 1 clicked');
                window.compute_and_render_set_1_projection();
            }); */

/*             const display_set_1_button = this.querySelector('#display_set_1_button');
            display_set_1_button.addEventListener('click', (event) => {
                // swap the button
                if(this.display_set_1 === true) {
                    this.display_set_1 = false
                    // change the display button style 
                    const button_image = display_set_1_button.firstElementChild
                    button_image.setAttribute('src', 'static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/map_off.svg');
                } else {
                    this.display_set_1 = true
                    // change the display button style
                    const button_image = display_set_1_button.firstElementChild
                    button_image.setAttribute('src', 'static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/map_on.svg');
                }

                // make visible if swapped to true
                if (this.display_set_1 === true) {
                    // get the svg container and hide the svg
                    const svg_container = document.getElementById('svg_container')
                    //svg_container.style.visibility = 'hidden'
                    // get the canvas container and display the canvas
                    const canvas_container = document.getElementById('canvas_container')
                    //canvas_container.style.visibility = 'visible';
                    // select all elements of class .set_1_element and set them to visible
                    for (let element of document.getElementsByClassName("set_1_element")) {
                        element.style.visibility = 'visible';
                        element.style.opacity = 1.0
                    } 
                  } else {
                    // select all elements of class .set_1_element to hidden
                    for (let element of document.getElementsByClassName("set_1_element")) {
                        element.style.visibility = 'hidden';
                        element.style.opacity = 0.0
                    } 
                  }
            }); */

/*             const render_set_2_button = this.querySelector('#render_set_2_button');
            render_set_2_button.addEventListener('click', (event) => {
                console.log('render set 2 clicked');
                window.compute_and_render_set_2_projection();
            }); */

/*             const display_set_2_button = this.querySelector('#display_set_2_button');
            display_set_2_button.addEventListener('click', (event) => {
                console.log('set 2 click')
                // swap the button
                if(this.display_set_2 === true) {
                    this.display_set_2 = false
                    // change the display button style 
                    const button_image = display_set_2_button.firstElementChild
                    button_image.setAttribute('src', 'static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/map_off.svg');
                } else {
                    this.display_set_2 = true
                    // change the display button style
                    const button_image = display_set_2_button.firstElementChild
                    button_image.setAttribute('src', 'static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/map_on.svg');
                }

                // make visible 
                if (this.display_set_2 === true) {
                    // select all elements of class .set_1_element to visible
                    for (let element of document.getElementsByClassName("set_2_element")) {
                        element.style.visibility = 'visible';
                        element.style.opacity = 1.0
                    } 
                  } else {
                    // select all elements of class .set_1_element to hidden
                    for (let element of document.getElementsByClassName("set_2_element")) {
                        element.style.visibility = 'hidden';
                        element.style.opacity = 0.0
                    } 
                  }
            }); */

/*             const render_set_1_2_union_button = this.querySelector('#render_set_1_2_union_button');
            render_set_1_2_union_button.addEventListener('click', (event) => {
                console.log('union render clicked')
                window.compute_and_render_set_1_2_union_projection();
            }); */

/*             const display_set_1_2_union_button = this.querySelector('#display_set_1_2_union_button');
            display_set_1_2_union_button.addEventListener('click', (event) => {
                // swap the button
                if(this.display_set_1_2_union === true) {
                    this.display_set_1_2_union = false
                    // change the display button style 
                    const button_image = display_set_1_2_union_button.firstElementChild
                    button_image.setAttribute('src', 'static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/map_off.svg');
                } else {
                    this.display_set_1_2_union = true
                    // change the display button style
                    const button_image = display_set_1_2_union_button.firstElementChild
                    button_image.setAttribute('src', 'static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/map_on.svg');
                }
                // make visible 
                if (this.display_set_1_2_union === true) {
                    // select all elements of class .set_1_element to visible
                    for (let element of document.getElementsByClassName("set_1_2_union_element")) {
                        element.style.visibility = 'visible';
                        element.style.opacity = 1.0
                    } 
                  } else {
                    // select all elements of class .set_1_element to hidden
                    for (let element of document.getElementsByClassName("set_1_2_union_element")) {
                        element.style.visibility = 'hidden';
                        element.style.opacity = 0.0
                    } 
                  }
            });
 */
           
/*             const render_set_1_2_intersection_button = this.querySelector('#render_set_1_2_intersection_button');
            render_set_1_2_intersection_button.addEventListener('click', (event) => {
                console.log('intersection render clicked');
                window.compute_and_render_set_1_2_intersection_projection();
            });
 */
/*             const display_set_1_2_intersection_button = this.querySelector('#display_set_1_2_intersection_button');
            display_set_1_2_intersection_button.addEventListener('click', (event) => {
                // swap the button
                if(this.display_set_1_2_intersection === true) {
                    this.display_set_1_2_intersection = false
                    // change the display button style 
                    const button_image = display_set_1_2_intersection_button.firstElementChild
                    button_image.setAttribute('src', 'static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/map_off.svg');
                } else {
                    this.display_set_1_2_intersection = true
                    // change the display button style
                    const button_image = display_set_1_2_intersection_button.firstElementChild
                    button_image.setAttribute('src', 'static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/map_on.svg');
                }
                // make visible 
                if (this.display_set_1_2_intersection === true) {
                    // select all elements of class .set_1_element to visible
                    for (let element of document.getElementsByClassName("set_1_2_intersection_element")) {
                        element.style.visibility = 'visible';
                        element.style.opacity = 1.0
                    } 
                  } else {
                    // select all elements of class .set_1_element to hidden
                    for (let element of document.getElementsByClassName("set_1_2_intersection_element")) {
                        element.style.visibility = 'hidden';
                        element.style.opacity = 0.0
                    } 
                  }
            }); */

            const embedding_map_type_input_select = this.querySelector('#embedding_map_type_input_select');
            embedding_map_type_input_select.addEventListener('change', (event) => {
                //console.log(event.target.value)
                const selected_embedding_map_type = event.target.value
                //console.log(selected_base_map_type)
                // set the window canvas map navigation type
                window.embedding_map_type = selected_embedding_map_type
                // recompute the projection
                window.make_projection();
                // recompute the geo_path_generator
                window.make_geo_path_generator();
                // recompute the zoom
                const geo_zoom = window.create_zoom();
                //console.log(geo_zoom.projection())
                // rotate a bit to fix first draw blue map error
                geo_zoom.projection().rotate([0,0,0.001])
                // re-render the canvas
                window.render_canvas();
                // open the search bar to show the hovered papers
                const search_result_list = this.querySelector('#search_result_list');
                search_result_list.style.display = 'block';
                // check if we need to hide the tooltip
                if(selected_embedding_map_type === 'contextualized_word_embedding' || selected_embedding_map_type === 'paragraph_embedding'){
                    window.hideTooltip();
                }
            });           

/*             const render_document_vectors_input_select = this.querySelector('#render_document_vectors_input_select');
            render_document_vectors_input_select.addEventListener('change', (event) => {
                //console.log(event.target.value)
                const document_vector_selection = event.target.value
                //console.log(selected_base_map_type)
                if(document_vector_selection === 'no_document_vectors'){
                    window.render_document_vectors = document_vector_selection
                    window.source_document_vector_selection_set = []
                  } else if(document_vector_selection === 'selected_document_vectors'){
                    window.render_document_vectors = document_vector_selection
                      // emtpy out the selection set, the single doc selection is done via separate buttons
                    window.source_document_vector_selection_set = []
                  } else if (document_vector_selection === 'all_document_vectors'){
                    window.render_document_vectors = document_vector_selection
                      // put all the document vectors of the whole corpus into the selection set
                    window.corpus.forEach(document_object => window.source_document_vector_selection_set.push(document_object.document_vector))
                    console.log(window.source_document_vector_selection_set)
                  } else {
                      console.log('ERROR: no valid document vector selection provided.')
                  }
                // recompute the base_map based on the new grid size
                window.compute_set_projection()
                this.update_semantic_depth_and_width_labels();
                // rerender the set projection with new color scale
                window.render_canvas();
            });  */

/*             const canvas_map_interaction_input_select = this.querySelector('#canvas_map_interaction_input_select');
            canvas_map_interaction_input_select.addEventListener('change', (event) => {
                //console.log(event.target.value)
                const selected_canvas_map_interaction = event.target.value
                //console.log(selected_base_map_type)
                // set the window canvas map navigation type
                window.set_canvas_map_interaction(selected_canvas_map_interaction)
                // set the zindices due to the choosen navigation type (switch either canvas or svg to the front for interaction type: zoom, brush, drag, click, hover)
                window.create_canvas_map_interaction();
            }); */

            const canvas_map_base_map_projection_type_input_select = this.querySelector('#canvas_map_base_map_projection_type_input_select');
            canvas_map_base_map_projection_type_input_select.addEventListener('change', (event) => {
                //console.log(event.target.value)
                const selected_base_map_projection_type = event.target.value
                //console.log(selected_base_map_type)
                // set the window selected color scheme to the selected color
                window.projection_type = selected_base_map_projection_type
                // recompute the projection
                window.make_projection()
                // recompute the geo_path_generator
                window.make_geo_path_generator()
                // recompute the zoom
                window.create_zoom()
                // TODO: re render labels when changing set projection ...
                // recompute the base_map based on the new grid size
                window.compute_set_projection()
                this.update_semantic_depth_and_width_labels();
                // rerender the set projection with new color scale
                window.render_canvas();
            });

            const canvas_map_base_map_type_input_select = this.querySelector('#canvas_map_base_map_type_input_select');
            canvas_map_base_map_type_input_select.addEventListener('change', (event) => {
                //console.log(event.target.value)
                const selected_base_map_type = event.target.value
                //console.log(selected_base_map_type)
                // set the window selected color scheme to the selected color
                window.canvas_map_base_map_type = selected_base_map_type
                // recompute the base_map based on the new grid size
                window.compute_set_projection()
                this.update_semantic_depth_and_width_labels();
                // rerender the set projection with new color scale
                window.render_canvas();
            });

            const canvas_map_base_color_input_select = this.querySelector('#canvas_map_base_color_input_select');
            canvas_map_base_color_input_select.addEventListener('change', (event) => {
                //console.log(event.target.value)
                const selected_base_map_color = event.target.value
                //console.log(selected_set_base_color)
                // set the window selected color scheme to the selected color
                window.canvas_map_base_color_scale = selected_base_map_color
                // recompute the base_map based on the new grid size
                window.compute_set_projection()
                this.update_semantic_depth_and_width_labels();
                // rerender the set projection with new color scale
                window.render_canvas();
            });
   
            const canvas_map_set_mode_input_select = this.querySelector('#canvas_map_set_mode_input_select');
            canvas_map_set_mode_input_select.addEventListener('change', (event) => {
                //console.log(event.target.value)
                const selected_set_mode = event.target.value
                console.log(selected_set_mode)
                // set the window selected color scheme to the selected color
                window.canvas_map_set_mode = selected_set_mode
                // set the global variable for rendering the set projection to true to render it
                window.render_set_projection = true;
                // recompute the base_map based on the new grid size
                window.compute_set_projection()
                this.update_semantic_depth_and_width_labels();
                // rerender the set projection with new color scale
                window.render_canvas();
            });

            const canvas_map_map_type_input_select = this.querySelector('#canvas_map_map_type_input_select');
            canvas_map_map_type_input_select.addEventListener('change', (event) => {
                //console.log(event.target.value)
                const selected_map_type = event.target.value
                console.log(selected_map_type)
                // set the window selected color scheme to the selected color
                window.canvas_map_map_type = selected_map_type
                // set the global variable for rendering the set projection to true to render it
                window.render_set_projection = true;
                // rerender the set projection with new color scale
                window.render_canvas();
            });

            const canvas_map_projection_color_input_select = this.querySelector('#canvas_map_projection_color_input_select');
            canvas_map_projection_color_input_select.addEventListener('change', (event) => {
                //console.log(event.target.value)
                const selected_color = event.target.value
                console.log(selected_color)
                // set the window selected color scheme to the selected color
                window.canvas_map_projection_color_scale = selected_color
                // set the global variable for rendering the set projection to true to render it
                window.render_set_projection = true;
                // rerender the set projection with new color scale
                window.render_canvas();
            });

            const canvas_map_grid_size_input_slider = this.querySelector('#canvas_map_grid_size_input_slider');
            canvas_map_grid_size_input_slider.addEventListener('change', (event) => {
                //console.log(event.target.value)
                // set the number of clusters / hierarchy depth we get from the range slider
                window.canvas_map_grid_size = +event.target.value
                //console.log(hierarchy_depth)
                const canvas_map_grid_size_input_slider_label = this.querySelector('#canvas_map_grid_size_input_slider_label');
                canvas_map_grid_size_input_slider_label.innerHTML = "Grid Size: " + window.canvas_map_grid_size
                // set the global variable for rendering the set projection to true to render it
                window.render_set_projection = true;
                // recompute the base_map based on the new grid size
                window.compute_set_projection()
                this.update_semantic_depth_and_width_labels();
                // rerender the set projection with new color scale
                window.render_canvas();
            });

            const canvas_map_opacity_input_slider = this.querySelector('#canvas_map_opacity_input_slider');
            canvas_map_opacity_input_slider.addEventListener('change', (event) => {
                //console.log(event.target.value)
                // set the number of clusters / hierarchy depth we get from the range slider
                window.canvas_map_opacity = +event.target.value
                // get the canvas map and set its new opacity 
                //const canvas = document.getElementById('canvas_container');
                //canvas.style.opacity = window.canvas_map_opacity
                //console.log(hierarchy_depth)
                const canvas_map_opacity_input_slider_label = this.querySelector('#canvas_map_opacity_input_slider_label');
                canvas_map_opacity_input_slider_label.innerHTML = "Canvas Opacity: " + window.canvas_map_opacity
                // set the global variable for rendering the set projection to true to render it
                window.render_set_projection = true;
                // re-render the canvas with the new opacity
                window.render_canvas();
            });

            const canvas_map_borderradius_input_slider = this.querySelector('#canvas_map_borderradius_input_slider');
            canvas_map_borderradius_input_slider.addEventListener('change', (event) => {
                //console.log(event.target.value)
                // set the number of clusters / hierarchy depth we get from the range slider
                window.canvas_map_borderradius = +event.target.value
                //console.log(hierarchy_depth)
                const canvas_map_borderradius_input_slider_label = this.querySelector('#canvas_map_borderradius_input_slider_label');
                canvas_map_borderradius_input_slider_label.innerHTML = "Border Radius: " + window.canvas_map_borderradius
                // set the global variable for rendering the set projection to true to render it
                window.render_set_projection = true;
                window.render_canvas();
            });

            const canvas_map_bandwidth_input_slider = this.querySelector('#canvas_map_bandwidth_input_slider');
            canvas_map_bandwidth_input_slider.addEventListener('change', (event) => {
                //console.log(event.target.value)
                // set the number of clusters / hierarchy depth we get from the range slider
                window.canvas_map_bandwidth = +event.target.value
                //console.log(hierarchy_depth)
                const canvas_map_bandwidth_input_slider_label = this.querySelector('#canvas_map_bandwidth_input_slider_label');
                canvas_map_bandwidth_input_slider_label.innerHTML = "Bandwith/Blur Radius: " + window.canvas_map_bandwidth
                // set the global variable for rendering the set projection to true to render it
                window.render_set_projection = true;
                window.render_canvas();
            });

/*             const hierarchy_depth_input_slider = this.querySelector('#hierarchy_depth_input_slider');
            hierarchy_depth_input_slider.addEventListener('change', (event) => {
                //console.log(event.target.value)
                // set the number of clusters / hierarchy depth we get from the range slider
                window.hierarchy_depth = +event.target.value
                //console.log(hierarchy_depth)
                const hierarchy_depth_input_slider_label = this.querySelector('#hierarchy_depth_input_slider_label');
                hierarchy_depth_input_slider_label.innerHTML = "Hierarchical Clustering Depth: " + window.hierarchy_depth
                window.compute_and_render_base_map();
                window.compute_and_render_labels();
            }); */

/*             const render_single_points_checkbox = this.querySelector('#render_single_points_checkbox');
            render_single_points_checkbox.addEventListener('change', (event) => {
                // set the window variable to true or false whether the checkbox is checked
                if(event.target.checked){
                    window.render_single_points = true
                } else {
                    window.render_single_points = false
                }
            }) */

/*             const chloropleth_map_checkbox = this.querySelector('#chloropleth_map_checkbox');
            chloropleth_map_checkbox.addEventListener('change', (event) => {
                // set the window variable to true or false whether the checkbox is checked
                if(event.target.checked){
                        window.map_type = "chloropleth_map"
                } else {
                        window.map_type = ""
                }
            }); */

            const source_selection_set_1_tag_choose = this.querySelector('#source_selection_set_1_tag_choose');
            source_selection_set_1_tag_choose.addEventListener('change', (event) => {
                console.log(event.target.value)
                const selected_tag = event.target.value
                // get all the sources that have the selected tag
                const selected_sources_ids = this.get_selected_sources_ids_from_tag(selected_tag)
                //console.log(selected_sources_ids)
                // set the window selected sources to the filtered sources
                window.source_selection_set_1 = selected_sources_ids
                // set the global variable for rendering the set projection to true to render it
                window.render_set_projection = true;
                // recompute the base_map based on the new grid size
                window.compute_set_projection()
                this.update_semantic_depth_and_width_labels();
                // rerender the set projection with new color scale
                window.render_canvas();
                // put the selected sources into the respective tag_selection_set list
                this.update_tag_set_list('#tag_set_1_sources_list', selected_tag)
            });

            const source_selection_set_2_tag_choose = this.querySelector('#source_selection_set_2_tag_choose');
            source_selection_set_2_tag_choose.addEventListener('change', (event) => {
                console.log(event.target.value)
                const selected_tag = event.target.value
                // get all the sources that have the selected tag 
                const selected_sources_ids = this.get_selected_sources_ids_from_tag(selected_tag)
                //console.log(selected_sources_ids)
                // set the window selected sources to the filtered sources
                window.source_selection_set_2 = selected_sources_ids
                // set the global variable for rendering the set projection to true to render it
                window.render_set_projection = true;
                // recompute the base_map based on the new grid size
                window.compute_set_projection()
                this.update_semantic_depth_and_width_labels();
                // rerender the set projection with new color scale
                window.render_canvas();
                // put the selected sources into the respective tag_selection_set list
                this.update_tag_set_list('#tag_set_2_sources_list', selected_tag)
            });
            
        });

        // Event Listener DATA SET Change feature
        const dataset_selection_list = this.querySelector('#dataset_selection');
        dataset_selection_list.addEventListener('change', () => {
            const selected_dataset = this.get_selected_dataset();
            // set the new corpus in the other window
            window.set_corpus(selected_dataset);
            this.set_up_autocomplete_search_index()
            // update the search list and the chip labels
            const search_navigation_component = document.querySelector('search-navigation-component')
            // initialize search list 
            const search_result_list = this.querySelector('#search_result_list');
            search_result_list.style.display = 'block';
            const search_close_button = this.querySelector('#search_close_button');
            search_close_button.style.display = 'block';
            search_navigation_component.update_search_list(window.corpus);
            search_navigation_component.update_chip_labels();   
            this.update_recommendation_card_list(window.topic_corpus);  
        });

        // when history is moved backwards call the router again so that the router refreshes the view state
        //window.addEventListener('popstate', router); 

        // EVENTS // listeners to events from other components here
        // update view after login or logout has been called
/*         document.addEventListener('login_or_logout', () => {
            // if user logged in or out change the navigation respectively 
            this.render();
        }); */

        }
       
        // Link the active elements to their listeners and connect to the use case functions here 
        //when component is loaded this is called:
        connectedCallback()
        {
            console.log('SearchNavigationComponent loaded successfully.');
            this.render();

            // EVENT LISTENERS
            // nav menu toggle
            const navMenu = this.querySelector('#nav-menu'); 
            const toggleMenu = this.querySelector('#nav-toggle');
            const closeMenu = this.querySelector('#nav-close');
            // show menu
            toggleMenu.addEventListener('click', () => {
                navMenu.classList.toggle('show');
            });
            // hide menu
            closeMenu.addEventListener('click', () => {
                navMenu.classList.remove('show');
            });
            // remove menu when link clicked
            const navLink = this.querySelectorAll('nav__link');
            function linkAction(){
                navMenu.classList.remove('show');
            }
            navLink.forEach(n => n.addEventListener('click', linkAction))

            // Event Listener AUTOCOMPLETE feature
            const search_input_field = this.querySelector('#search_input_field')
            const search_datalist = this.querySelector('#search_datalist')

            search_input_field.addEventListener('keyup', (event) => {

                // check if it is the enter key, if yes then start the search
                if (event.keyCode === 13) {
                    // Cancel the default action, if needed
                    event.preventDefault();
                    // click the search button when enter is pressed
                    const search_button = this.querySelector('#search_button');
                    search_button.click();
                }
                // holder array that contains possible matches for the input query
                let title_matches_array = []
                let author_matches_array = []
                //let keyword_matches_array = []

                if(event.target.value) {
                    const search_query = event.target.value // alternative: search_input_field.value
                    title_matches_array = this.document_titles.filter(document_title => document_title.toLocaleLowerCase().includes(search_query));
                    author_matches_array = this.document_authors.filter(document_author => document_author.toLocaleLowerCase().includes(search_query));
                    //keyword_matches_array = this.document_keywords.filter(keyword => keyword.toLocaleLowerCase() === search_query.toLocaleLowerCase());

                    //console.log(author_matches_array)
                    // first REMOVE all previous matches
                    search_datalist.innerHTML = ''
                    // ADD the top n new title matches (mumber specified in: search_autocomplete_recommendation_list_length)
                    if(title_matches_array.length > 0) {
                        for (let i = 0; i < title_matches_array.length; i++) {
                            if(i >= this.search_autocomplete_recommendation_list_length) {
                                break
                            }
                            let search_list_option = document.createElement('option')
                            search_list_option.innerHTML = title_matches_array[i]
                            search_datalist.appendChild(search_list_option)
                        }
                    }
                    // ADD the top n new author matches there is still space 
                    if(author_matches_array.length > 0) {
                        for (let j = search_datalist.childNodes.length; j < author_matches_array.length; j++) {
                            if(j >= this.search_autocomplete_recommendation_list_length) {
                                break
                            }
                            let search_list_option = document.createElement('option')
                            search_list_option.innerHTML = author_matches_array[j]
                            search_datalist.appendChild(search_list_option)
                        }
                    } 
                }

            });

            // Event listener settings button
            const settings_button = this.querySelector('#settings_button');
            settings_button.addEventListener('click',  () => {
                let settings_form = this.querySelector('#settings_form')
                if (settings_form.style.display == 'block') {
                    settings_form.style.display = 'none';
                    // when settings closed also close topics and keywords containers
                    const recommendation_container = this.querySelector('#recommendation_container');
                    recommendation_container.style.display = 'block'
                    //const keywords_container = this.querySelector('#keywords_container');
                    //keywords_container.style.display = 'none'
                    // show search results box 
                    const search_result_list = this.querySelector('#search_result_list');
                    search_result_list.style.display = 'block';
                    const search_close_button = this.querySelector('#search_close_button');
                    search_close_button.style.display = 'block';
                    // grey in the main view
                    //const main_view_container = document.querySelector('#main_view')
                    //main_view_container.style.opacity = 1.0
                } else {
                    settings_form.style.display = 'block';
                    // update the list of all tags to assign to set 1 or set 2
                    this.update_list_of_all_tags();
                    // update the chip labels
                    this.update_chip_labels();
                    // when settings opened also show topic recommendations and keywords
                    const recommendation_container = this.querySelector('#recommendation_container');
                    recommendation_container.style.display = 'none'
                    //const keywords_container = this.querySelector('#keywords_container');
                    //keywords_container.style.display = 'block'
                    // hide the search results box
                    const search_result_list = this.querySelector('#search_result_list');
                    search_result_list.style.display = 'none';
                    // grey out the main view
                    //const main_view_container = document.querySelector('#main_view')
                    //main_view_container.style.opacity = 0.3
                }
            });

            // Event Listener search button 
            const search_button = this.querySelector('#search_button');
            search_button.addEventListener('click', () => {
                // execute a search here and then recall update search list
                //console.log('search button clicked.')
                    //console.log(window.corpus)

                    // get search query
                    const search_input_field = this.querySelector('#search_input_field')
                    const search_query = search_input_field.value.toLocaleLowerCase()

                    // show search results box 
                    const search_result_list = this.querySelector('#search_result_list');
                    search_result_list.style.display = 'block';

                    // apply normal title string based search
                    let title_matches_array = []
                    let author_matches_array = []
                    let keyword_matches_array = []
                    title_matches_array = window.corpus.filter((source, index) => source.title.toLocaleLowerCase().includes(search_query));
                    // try if corpus elements have authors, else catch 
                    try {
                        author_matches_array = window.corpus.filter((source, index) => source.authors.join('').toLocaleLowerCase().includes(search_query))
                     }
                     catch (e) {
                        author_matches_array = []
                     }
                     try {
                        keyword_matches_array = window.corpus.filter((source, index) => source.keywords.join('').toLocaleLowerCase().includes(search_query))
                     }
                     catch (e) {
                        keyword_matches_array = []
                     }
                    //console.log(keyword_matches_array)
                    // if we match titles display titles, if no titles we check for authors else we display zero search
                    /*                     if(title_matches_array.length > 0) {
                        this.update_search_list(title_matches_array);
                    } else if (author_matches_array.length > 0) {
                        this.update_search_list(author_matches_array);
                    } else if (author_matches_array.length > 0) {
                        this.update_search_list(keyword_matches_array);
                    }  else {
                        this.update_search_list(window.corpus)
                    }
                    */

                    // combine the arrays and make them unique
                    let all_matches_array = title_matches_array.concat(author_matches_array).concat(keyword_matches_array)
                    all_matches_array = all_matches_array.filter(onlyUnique)
                    //console.log(all_matches_array)
                    if(all_matches_array.length > 0) {
                        this.update_search_list(all_matches_array);
                    } else {
                        this.update_search_list([])
                    }

                    // update the recommendation_card_list due to the search term -> all topics that contain the search term are displayed
                    let topic_keyword_matches_array = []
                    try {
                        topic_keyword_matches_array = window.topic_corpus.filter((topic, index) => topic.topic_words.join('').toLocaleLowerCase().includes(search_query))
                     }
                     catch (e) {
                        topic_keyword_matches_array = []
                     }

                     console.log(topic_keyword_matches_array)
                     // update recommendation card list
                     this.update_recommendation_card_list(topic_keyword_matches_array)

                    // show search exit button
                    const search_close_button = this.querySelector('#search_close_button');
                    search_close_button.style.display = 'block';

                    // hide search render button
                    const render_button = this.querySelector('#render_button');
                    render_button.style.display = 'none';
            });

            // Event listener search close button
            const search_close_button = this.querySelector('#search_close_button');
            search_close_button.addEventListener('click', () => {
                const resource_details = this.querySelector('#resource_details');
                resource_details.style.display = 'none'
                const search_result_list = this.querySelector('#search_result_list');
                search_result_list.style.display = 'none';
                const search_close_button = this.querySelector('#search_close_button');
                search_close_button.style.display = 'none';
                //const render_button = this.querySelector('#render_button');
                //render_button.style.display = 'block'
                //const recommendation_container = this.querySelector('#recommendation_container');
                //recommendation_container.style.display = 'block'
                // delete search input field text
                const search_input_field = this.querySelector('#search_input_field')
                search_input_field.value = ""
            });

            // Event listener resource_details_back_button
            const resource_details_back_button = this.querySelector('#resource_details_back_button');
            resource_details_back_button.addEventListener('click', () => {
                const resource_details = this.querySelector('#resource_details');
                resource_details.style.display = 'none'
                const search_result_list = this.querySelector('#search_result_list');
                search_result_list.style.display = 'block';
                const search_close_button = this.querySelector('#search_close_button');
                search_close_button.style.display = 'block';
                const render_button = this.querySelector('#render_button');
                render_button.style.display = 'none'
                const resource_details_back_button = this.querySelector('#resource_details_back_button');
                resource_details_back_button.style.display = 'none'
                // update search list
                this.update_search_list(this.search_results)
                this.update_recommendation_card_list(this.topic_results) // do we need that ?? 
                const recommendation_container = this.querySelector('#recommendation_container');
                recommendation_container.style.display = 'block'
                // delete search input field text
                const search_input_field = this.querySelector('#search_input_field')
                search_input_field.value = ""
            })

            // Event listener recommendation_container
            const recommendation_container = this.querySelector('#recommendation_container')
            recommendation_container.addEventListener('mouseover', () => {
                const recommendation_container_left_arrow = this.querySelector('#rerecommendation_container_left_arrow');
                const recommendation_container_right_arrow = this.querySelector('#recommendation_container_right_arrow');
                rerecommendation_container_left_arrow.style.display = 'block';
                recommendation_container_right_arrow.style.display = 'block';
            });
            recommendation_container.addEventListener('mouseout', () => {
                const recommendation_container_left_arrow = this.querySelector('#rerecommendation_container_left_arrow');
                const recommendation_container_right_arrow = this.querySelector('#recommendation_container_right_arrow');
                rerecommendation_container_left_arrow.style.display = 'none';
                recommendation_container_right_arrow.style.display = 'none';
            });

            // Event listener recommendation container left arrow
            const recommendation_container_left_arrow = this.querySelector('#rerecommendation_container_left_arrow');
            recommendation_container_left_arrow.addEventListener('click', () => {
                const recommendation_container = this.querySelector('#recommendation_container_scroll');
                recommendation_container.scrollLeft -= 120;
            }); 

            // Event listener recommendation container right arrow
            const recommendation_container_right_arrow = this.querySelector('#recommendation_container_right_arrow');
            recommendation_container_right_arrow.addEventListener('click', () => {
                const recommendation_container = this.querySelector('#recommendation_container_scroll');
                recommendation_container.scrollLeft += 120;
            }); 

            // event listener export button
            const export_selection_set_tag_button = this.querySelector('#export_selection_set_tag_button');
            export_selection_set_tag_button.addEventListener('click', () => {
                const export_selection_set_tag_choose = this.querySelector('#export_selection_set_tag_choose');
                console.log(export_selection_set_tag_choose.value)
                const selected_tag = export_selection_set_tag_choose.value
                // get the selected sources ids
                const selected_sources_ids = this.get_selected_sources_ids_from_tag(selected_tag)
                const selected_sources_list = window.corpus.filter((source, index) => selected_sources_ids.includes(source.uri.toString()))
                // export the selected sources as BIBJSON via DOWNLOAD
                const bibjson_list = convert_source_list_to_BIBJSON_list(selected_sources_list)
                download_json_file(bibjson_list, 'export.txt')
            }); 

            // add an eventlistener for when the document is loaded and then initialize the chiplists
            document.addEventListener("DOMContentLoaded", function(event) {
                const search_navigation_component = document.querySelector('search-navigation-component')
                // initialize search list 
                const search_result_list = this.querySelector('#search_result_list');
                search_result_list.style.display = 'block';
                const search_close_button = this.querySelector('#search_close_button');
                search_close_button.style.display = 'block';
                search_navigation_component.update_search_list(window.corpus);
                search_navigation_component.update_chip_labels();                
              });
        }

        render(){
            console.log('search navigation component render called.')
        }

        disconnectedCallback(){
            //
        }

        get_corpus_timestamps() {
            const timestamps = window.corpus.map((source, index) => source.timestamp)
            // make array a set of unique values
            const unique_timestamps = uniq(timestamps)
            return unique_timestamps
        }

        get_corpus_keywords() {
            const keywords = window.corpus.map((source, index) => source.keywords).flat()
            //TODO: eventually sort by importance?
            // make array a set of unique values
            const unique_keywords = sortByFrequencyAndRemoveDuplicates(keywords)
            return unique_keywords
        }

        get_corpus_authors(){
            const authors = window.corpus.map((source, index) => source.authors).flat()
            const unique_authors = sortByFrequencyAndRemoveDuplicates(authors)
            return unique_authors
        }

        get_corpus_star_ratings(){
            const star_ratings = window.corpus.map((source, index) => source.rating)
            const unique_star_rarings = sortByFrequencyAndRemoveDuplicates(star_ratings)
            return unique_star_rarings
        }

        get_corpus_tags(){
            const tags = window.corpus.map((source, index) => source.tags).flat()
            const unique_tags = sortByFrequencyAndRemoveDuplicates(tags)
            return unique_tags
        }

        create_chip_label_list(chip_label_list, colorlabel, chip_label_objects, call_back_function){
            // clear the old chip label list
            chip_label_list.innerHTML = ''
            // create list element for every chip_label_object
            const chip_label_objects_length = Math.min(100, chip_label_objects.length)
            for(let i=0; i < chip_label_objects_length; i++) { 
                let list_element = document.createElement('span')
                let custom_html = `${chip_label_objects[i]}`
                // add the passive attribute to the element
                list_element.setAttribute('active', 'false')
                // add event listener for clicks
                list_element.addEventListener('click', (event) => {   
                    if(event.target != this.current_chip_label_element){
                        // catch the initial state
                        if(this.current_chip_label_element != ''){
                            // get the last/old active chip_label element and set it inactive
                            const old_chip_label_element = this.current_chip_label_element
                            old_chip_label_element.setAttribute('active', 'false')
                            old_chip_label_element.style.borderStyle = 'none'
                        }
                        // set the clicked chip label to the current one
                        this.current_chip_label_element = event.target
                        // render the clicked label and update search list appropriately 
                    } else {
                        // if we are clicking on the same element twice -> deactivate it and rerender with empty set projection -> is handled by code below anyway!!!
                    }
                    // check the state of the list_element and reset its border if it is already active 
                    if(list_element.getAttribute('active').toString() === 'true'){
                        // set back to inactive
                        list_element.setAttribute('active', 'false')
                        list_element.style.borderStyle = 'none'
                        const empty_set_projection = ''
                        call_back_function(empty_set_projection);
                        window.render_set_projection = false
                    } else {
                        // set to active
                        list_element.setAttribute('active', 'true')
                        list_element.style.borderStyle = 'solid'
                        list_element.style.borderColor = 'green'
                        // call the callback that updates the search list and visualizes the clicked query 
                        call_back_function(list_element.innerHTML);
                    }
                });
                // set the class of the list element
                list_element.className = `chip_label ${colorlabel} font-size-11`
                // add the text value
                list_element.innerHTML = custom_html;
                // append to list
                chip_label_list.appendChild(list_element);
            }
        }

        create_timestamp_chip_labels(){
            // initialize the chip lists
            const timestamps_chip_list = this.querySelector('#timestamps_chip_list');
            // get all timestamps
            const timestamps = this.get_corpus_timestamps()
            const timestamp_chip_onclick_callback_fuction = (list_element_inner_html) => {
                // check if string is valid
                let search_results = ''
                if(list_element_inner_html !== '') {
                    // search the corpus for the respective sources either in the timestamps, keywords or authors
                    search_results = window.corpus.filter((source, index) => source.timestamp.toString() === list_element_inner_html.toString())
                } else {
                    search_results = []
                }
                // make search result list visible
                const search_result_list = this.querySelector('#search_result_list');
                search_result_list.style.display = 'block';
                this.update_search_list(search_results)
                // visualize the distribution of the selected keyword on the map
                this.render_query_set('timestamp', list_element_inner_html)
            }
            // for each timestamp add chip to the chip list
            this.create_chip_label_list(timestamps_chip_list, 'success', timestamps, timestamp_chip_onclick_callback_fuction)
        }

        create_keyword_chip_labels(){
            // initialize the chip lists
            const keywords_chip_list = this.querySelector('#keywords_chip_list');
            // get all timestamps
            const keywords = this.get_corpus_keywords()
            const keyword_chip_onclick_callback_fuction = (list_element_inner_html) => {
                // check if string is valid
                let search_results = ''
                if(list_element_inner_html !== '') {
                // search the corpus for the respective sources either in the timestamps, keywords or authors
                    search_results = window.corpus.filter((source, index) => source.keywords.includes(list_element_inner_html.toString()))
                } else {
                    search_results = []
                }
                // make search result list visible
                const search_result_list = this.querySelector('#search_result_list');
                search_result_list.style.display = 'block';
                this.update_search_list(search_results)
                // visualize the distribution of the selected keyword on the map
                this.render_query_set('keyword', list_element_inner_html)
            }
            // for each timestamp add chip to the chip list
            this.create_chip_label_list(keywords_chip_list, 'info', keywords, keyword_chip_onclick_callback_fuction)
        }

        create_author_chip_labels(){
            // initialize the chip lists
            const authors_chip_list = this.querySelector('#authors_chip_list');
            // get all timestamps
            const authors = this.get_corpus_authors()
            const author_chip_onclick_callback_fuction = (list_element_inner_html) => {
                // check if string is valid
                let search_results = ''
                if(list_element_inner_html !== '') {
                    // search the corpus for the respective sources either in the timestamps, keywords or authors
                    search_results = window.corpus.filter((source, index) => source.authors.includes(list_element_inner_html.toString()))
                } else {
                    search_results = []
                }
                // make search result list visible
                const search_result_list = this.querySelector('#search_result_list');
                search_result_list.style.display = 'block';
                this.update_search_list(search_results)
                // visualize the distribution of the selected keyword on the map
                this.render_query_set('author', list_element_inner_html)
            }
            // for each timestamp add chip to the chip list
            this.create_chip_label_list(authors_chip_list, 'warning', authors, author_chip_onclick_callback_fuction)
        }

        create_star_rating_chip_labels(){
            // initialize the chip lists
            const star_ratings_chip_list = this.querySelector('#star_ratings_chip_list');
            // get all timestamps
            const star_ratings = this.get_corpus_star_ratings()
            const star_rating_chip_onclick_callback_fuction = (list_element_inner_html) => {
                // check if string is valid
                let search_results = ''
                if(list_element_inner_html !== '') {
                    // search the corpus for the respective sources either in the timestamps, keywords or authors
                    search_results = window.corpus.filter((source, index) => source.rating.toString() === list_element_inner_html.toString())
                } else {
                    search_results = []
                }
                // make search result list visible
                const search_result_list = this.querySelector('#search_result_list');
                search_result_list.style.display = 'block';
                this.update_search_list(search_results)
                // visualize the distribution of the selected keyword on the map
                this.render_query_set('star_rating', list_element_inner_html)
            }
            // for each timestamp add chip to the chip list
            this.create_chip_label_list(star_ratings_chip_list, 'star_rating', star_ratings, star_rating_chip_onclick_callback_fuction)
        }

        create_tag_chip_labels(){
            // initialize the chip lists
            const tags_chip_list = this.querySelector('#tags_chip_list');
            // get all timestamps
            const tags = this.get_corpus_tags()
            const tag_chip_onclick_callback_fuction = (list_element_inner_html) => {
                // check if string is valid
                let search_results = ''
                if(list_element_inner_html !== '') {
                   // search the corpus for the respective sources either in the timestamps, keywords or authors
                   search_results = window.corpus.filter((source, index) => source.tags.includes(list_element_inner_html.toString()))
                } else {
                    search_results = []
                }
                // make search result list visible
                const search_result_list = this.querySelector('#search_result_list');
                search_result_list.style.display = 'block';
                this.update_search_list(search_results)
                // visualize the distribution of the selected keyword on the map
                this.render_query_set('tag', list_element_inner_html)
            }
            // for each timestamp add chip to the chip list
            this.create_chip_label_list(tags_chip_list, 'other', tags, tag_chip_onclick_callback_fuction)
        }

        update_chip_labels(){
            // initialize timestamp chip labels
            this.create_timestamp_chip_labels();
            // initialize keyword chip labels
            this.create_keyword_chip_labels();
            // initialize author chip labels
            this.create_author_chip_labels();
            // initialize star rating chip labels
            this.create_star_rating_chip_labels();
            // initialize tag chip labels
            this.create_tag_chip_labels();
        }

        nextImage() {
/*             var picture = document.getElementById('picture');
            picture.src = "static/ui/pages/web_pages/playgrounds/math_playground/assets/images/image01.jpg"; */
            console.log('next image')
        }
        
        previousImage() {
/*             var picture = document.getElementById('picture');
            picture.src = "static/ui/pages/web_pages/playgrounds/math_playground/assets/images/image02.jpg"; */
            console.log('prev image')
        }

        update_recommendation_card_list(topic_results){
            this.topic_results = topic_results
            const recommendation_card_results = topic_results
            const recommendation_card_list = this.querySelector('#recommendation_card_list');
            // clear old recommendations
            recommendation_card_list.innerHTML = ""

            // add new recommendation results to search list, if we have results
            const result_list_length = Math.min(this.recommendation_card_list_length, recommendation_card_results.length)
            for(let i=0; i < result_list_length; i++) {
                let topic = recommendation_card_results[i]
                let custom_html = `
                    <a class="nav-item active">
                        <div id="topic_${i}_div" class="carousel-1-cell box-shadow-5-black bg-white">
                            <img id="topic_${i}_image" src="static/ui/utils/components/page_components/search_navigation_component/assets/images/category-solid-192.png" width="150px">
                            <p class="font-weight-bold">Topic ${topic.topic_index}</p>
                            <p>${topic.topic_words.join(', ')}</p>
                        </div>
                    </a>
                `
                let list_element = document.createElement('li')
                list_element.innerHTML = custom_html;
                recommendation_card_list.appendChild(list_element);

                // add event listener when image clicked
                const list_element_image = list_element.querySelector('#topic_' + i.toString() + '_image')
                list_element_image.addEventListener('click', (event) => {
                    // OPEN TOPIC DETAILS 
                    this.show_topic_details(i)

                    // CHANGE COLOR AT SELECTION
/*                     let list_element_div = ""
                    // unselect the old element, if there is one
                    if(this.selected_topic !== ""){
                        list_element_div = this.querySelector('#' + this.selected_topic + '_div')
                        list_element_div.className = "carousel-1-cell box-shadow-5-black bg-white"
                    }

                    // if this element is already selected, unselect it and set this.selected_topic to ""
                    if(this.selected_topic === 'topic_' + (i)) {
                        list_element_div = this.querySelector('#' + this.selected_topic + '_div')
                        list_element_div.className = "carousel-1-cell box-shadow-5-black bg-white"
                        this.selected_topic = ""
                    } else {
                        // if this element is not selected make it to the new selected topic
                        this.selected_topic = 'topic_' + (i)
                        let list_element_div = this.querySelector('#' + this.selected_topic + '_div')
                        list_element_div.className = "carousel-1-cell box-shadow-5-black bg-blue"
                    } */
                });
                //list_element.className = 'result-item opacity-9';
            }

            // add the + CARD at the end
            let plus_list_element = document.createElement('li');
            plus_list_element.addEventListener('click', () => {
                console.log('PLUS CLICKED')
            });
            const plus_custom_html = `
                <a class="nav-item active">
                    <div id="addCarousel1" class="carousel-1-cell box-shadow-5-black bg-white">
                        +
                    </div>
                </a>
            `
            plus_list_element.innerHTML = plus_custom_html;
            recommendation_card_list.appendChild(plus_list_element)
        }

        update_keyword_item_list(){
            const keyword_item_results = window.corpus_keywords_list
            const keyword_item_list = this.querySelector('#keyword_item_list');
            // clear old top keywords
            keyword_item_list.innerHTML = ""

            // add new keyword results to keyword item list, if we have results
            const result_list_length = Math.min(this.keyword_item_list_length, keyword_item_results.length)
            for(let i=0; i < result_list_length; i++) {
                let keyword_item = keyword_item_results[i]
                let custom_html = `
                    <div class="keyword-item">
                        <input type="checkbox" name="item_${i}">
                        <label for="item_${i}">${keyword_item}</label>
                    </div>
                `
                let list_element = document.createElement('li')
                list_element.innerHTML = custom_html;
                keyword_item_list.appendChild(list_element);
            }
        }
        
        update_search_list(search_results){
            // set the given search results to the class variable to have access from everywhere, IMPORTANT: this is very important to show the correct source details when clicking on the title!!
            this.search_results = search_results
            const search_result_list = this.querySelector('#search_result_list');
            // remove old searches
            search_result_list.innerHTML = ""

            // add new search results to search list, if we have results
            const result_list_length = Math.min(this.search_result_list_length, search_results.length)
            for(let i = 0; i < result_list_length; i++){ 
                let source = search_results[i]
                let custom_html = `
                <div class="result-item opacity-9">
                    <!-- <img src="static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/source.svg" width="15px"> -->
                    <div class="_70-width">
                        <p class="font-weight-bold opacity-8 source-title" onClick="this.closest('search-navigation-component').show_resource_details(${i});">${source.title}</p>
                            <div class="bh-stars" data-bh-rating="${source.rating}">
                                <!-- <span>4,6</span> -->
                                <svg version="1.1" class="bh-star bh-star--1" onClick="this.closest('search-navigation-component').set_source_rating(${i}, 1.0, this.parentNode)" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xml:space="preserve"><path class="outline" d="M12,4.2L14.5,9l0.2,0.5l0.5,0.1l5.5,0.8L16.8,14l-0.4,0.4l0.1,0.5l1,5.3l-5-2.5L12,17.5l-0.4,0.2l-5,2.5L7.5,15l0.1-0.5 L7.2,14l-4-3.7l5.5-0.8l0.5-0.1L9.5,9L12,4.2 M11.9,2L8.6,8.6L1,9.7l5.5,5.1L5.2,22l6.8-3.4l6.8,3.4l-1.3-7.2L23,9.6l-7.6-1L11.9,2 L11.9,2z"/><polygon class="full" points="18.8,22 12,18.6 5.2,22 6.5,14.8 1,9.7 8.6,8.6 11.9,2 15.4,8.6 23,9.6 17.5,14.7"/><polyline class="left-half" points="12,18.6 5.2,22 6.5,14.8 1,9.7 8.6,8.6 11.9,2"/></svg>

                                <svg version="1.1" class="bh-star bh-star--2" onClick="this.closest('search-navigation-component').set_source_rating(${i}, 2.0, this.parentNode)" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xml:space="preserve"><path class="outline" d="M12,4.2L14.5,9l0.2,0.5l0.5,0.1l5.5,0.8L16.8,14l-0.4,0.4l0.1,0.5l1,5.3l-5-2.5L12,17.5l-0.4,0.2l-5,2.5L7.5,15l0.1-0.5 L7.2,14l-4-3.7l5.5-0.8l0.5-0.1L9.5,9L12,4.2 M11.9,2L8.6,8.6L1,9.7l5.5,5.1L5.2,22l6.8-3.4l6.8,3.4l-1.3-7.2L23,9.6l-7.6-1L11.9,2 L11.9,2z"/><polygon class="full" points="18.8,22 12,18.6 5.2,22 6.5,14.8 1,9.7 8.6,8.6 11.9,2 15.4,8.6 23,9.6 17.5,14.7"/><polyline class="left-half" points="12,18.6 5.2,22 6.5,14.8 1,9.7 8.6,8.6 11.9,2"/></svg>

                                <svg version="1.1" class="bh-star bh-star--3" onClick="this.closest('search-navigation-component').set_source_rating(${i}, 3.0, this.parentNode)" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xml:space="preserve"><path class="outline" d="M12,4.2L14.5,9l0.2,0.5l0.5,0.1l5.5,0.8L16.8,14l-0.4,0.4l0.1,0.5l1,5.3l-5-2.5L12,17.5l-0.4,0.2l-5,2.5L7.5,15l0.1-0.5 L7.2,14l-4-3.7l5.5-0.8l0.5-0.1L9.5,9L12,4.2 M11.9,2L8.6,8.6L1,9.7l5.5,5.1L5.2,22l6.8-3.4l6.8,3.4l-1.3-7.2L23,9.6l-7.6-1L11.9,2 L11.9,2z"/><polygon class="full" points="18.8,22 12,18.6 5.2,22 6.5,14.8 1,9.7 8.6,8.6 11.9,2 15.4,8.6 23,9.6 17.5,14.7"/><polyline class="left-half" points="12,18.6 5.2,22 6.5,14.8 1,9.7 8.6,8.6 11.9,2"/></svg>

                                <svg version="1.1" class="bh-star bh-star--4" onClick="this.closest('search-navigation-component').set_source_rating(${i}, 4.0, this.parentNode)" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xml:space="preserve"><path class="outline" d="M12,4.2L14.5,9l0.2,0.5l0.5,0.1l5.5,0.8L16.8,14l-0.4,0.4l0.1,0.5l1,5.3l-5-2.5L12,17.5l-0.4,0.2l-5,2.5L7.5,15l0.1-0.5 L7.2,14l-4-3.7l5.5-0.8l0.5-0.1L9.5,9L12,4.2 M11.9,2L8.6,8.6L1,9.7l5.5,5.1L5.2,22l6.8-3.4l6.8,3.4l-1.3-7.2L23,9.6l-7.6-1L11.9,2 L11.9,2z"/><polygon class="full" points="18.8,22 12,18.6 5.2,22 6.5,14.8 1,9.7 8.6,8.6 11.9,2 15.4,8.6 23,9.6 17.5,14.7"/><polyline class="left-half" points="12,18.6 5.2,22 6.5,14.8 1,9.7 8.6,8.6 11.9,2"/></svg>

                                <svg version="1.1" class="bh-star bh-star--5" onClick="this.closest('search-navigation-component').set_source_rating(${i}, 5.0, this.parentNode)" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xml:space="preserve"><path class="outline" d="M12,4.2L14.5,9l0.2,0.5l0.5,0.1l5.5,0.8L16.8,14l-0.4,0.4l0.1,0.5l1,5.3l-5-2.5L12,17.5l-0.4,0.2l-5,2.5L7.5,15l0.1-0.5 L7.2,14l-4-3.7l5.5-0.8l0.5-0.1L9.5,9L12,4.2 M11.9,2L8.6,8.6L1,9.7l5.5,5.1L5.2,22l6.8-3.4l6.8,3.4l-1.3-7.2L23,9.6l-7.6-1L11.9,2 L11.9,2z"/><polygon class="full" points="18.8,22 12,18.6 5.2,22 6.5,14.8 1,9.7 8.6,8.6 11.9,2 15.4,8.6 23,9.6 17.5,14.7"/><polyline class="left-half" points="12,18.6 5.2,22 6.5,14.8 1,9.7 8.6,8.6 11.9,2"/></svg>
                                <!-- <span>(3)</span> -->
                            </div>  
                        <p>${source.uri}</p>
                        <p>${source.timestamp}</p>
                        <p>${source.authors}</p>
                        <!-- <p class="tag_list_container"></p> -->
                        <details>
                            <summary>Tags</summary>
                            <div class="tag-container">
                                <input placeholder="Add tag..." />  
                            </div> 
                        </details>
                    </div>

   <!--             <div class="_20-width d-flex justify-content-between">
                       <img class="opacity-4 cursor-pointer" src="static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/settings.svg" width="15px">
                       <img class="opacity-4 cursor-pointer" src="static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/settings.svg" width="15px">
                       <img class="opacity-4 cursor-pointer" src="static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/settings.svg" width="15px"> 
                        <select name="source_selection_set_choose" id="${source.uri}">
                            <option value="null" selected="selected">----</option>
                            <option value="source_selection_set_1">Set 1</option>
                            <option value="source_selection_set_2">Set 2</option>
                        </select> 
                    </div>  -->

                    <div class="_20-width d-flex justify-content-between">
                        <div class="align-in-center flex-column text-primary mr-15">
                            <img class="opacity-4 cursor-pointer display-button" data-source_uri="${source.uri}" src="static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/map_off.svg" width="15px">
                            <p class="font-size-11">Display</p>
                        </div>
                 <!--       <div class="align-in-center flex-column text-primary mr-15">
                            <img class="opacity-4 cursor-pointer" onClick="this.closest('search-navigation-component').render_single_document_vector(${source.uri})" src="static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/near_by.svg" width="15px">
                            <p class="font-size-11">Locator</p>
                        </div> -->
                    </div>


                </div>
                `
                let list_element = document.createElement('div')
                list_element.addEventListener('click', (event) => {
                    //console.log(event.target)
                    //console.log('event fired.')
                    if(event.target.className.toString().includes('display-button') && this.display_single_source === false){ // this is executed after the button was clicked -> therefore the display single source variable is already true and we only have to change the image appropriately
                        //event.target.setAttribute('src', "static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/map_on.svg")
                        // swap the current_display button and set the old one off if a new one is clicked
                        if(event.target != this.current_display_button_element){
                            // turn of old display button
                            // make sure to not be in the initial state
                            if(this.current_display_button_element != ''){
                                const old_display_button_element = this.current_display_button_element
                                old_display_button_element.setAttribute('src', "static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/map_off.svg")
                            }
                            // empty out the selection 
                            // make the new display button the new current selected one 
                            this.current_display_button_element = event.target
                        }
                        // set the button as active if clicked 
                        this.current_display_button_element.setAttribute('src', "static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/map_on.svg")
                        // set the display single source to true
                        this.display_single_source = true
                        // render the single source 
                        this.render_single_source(source.uri)
                    } else if(event.target.className.toString().includes('display-button') && this.display_single_source === true) {
                        //event.target.setAttribute('src', "static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/map_off.svg")
                        // catch the case that we click another button than the first one
                        if(event.target != this.current_display_button_element){
                            // turn of old display button
                            // make sure to not be in the initial state
                            if(this.current_display_button_element != ''){
                                const old_display_button_element = this.current_display_button_element
                                old_display_button_element.setAttribute('src', "static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/map_off.svg")
                            }
                            // make the new display button the new current selected one and set it ON
                            this.current_display_button_element = event.target
                            this.current_display_button_element.setAttribute('src', "static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/map_on.svg")
                            // render the single source with the URI of the DISPLAY button that was clicked
                            //console.log(event.target.dataset.source_uri)
                            this.render_single_source(event.target.dataset.source_uri)
                        } else { // catch the case that we click the same button twice -> then we set the display to false and set the set projection to false
                            this.display_single_source = false
                            // empty out the selection set
                            window.source_selection_set_1 = []
                            window.render_set_projection = false;
                            // re-render the canvas 
                            window.render_canvas();
                            this.current_display_button_element.setAttribute('src', "static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/map_off.svg")
                        }
                    }
                }); 

                list_element.className = 'result-item opacity-9';
                list_element.innerHTML = custom_html

                // get the tag_list_container and add the tags for each search result
/*                 const tag_list_container = list_element.querySelector('.tag_list_container');
                const tags_of_source = source.tags
                for (let tag of tags_of_source) {
                    tag_list_container.innerHTML += '#'+ tag.toString() + ' '
                } */

                // TAG functionality 
                const tagContainer = list_element.querySelector('.tag-container');
                const input = list_element.querySelector('.tag-container input');
                const search_result_index = i
                // add all existing tags once after component loaded
                this.addTags(search_result_index, tagContainer);   

                input.addEventListener('keyup', (e) => {
                    if (e.keyCode === 32) { // Space
                      e.target.value.split(',').forEach(tag => {
                        this.search_results[search_result_index].tags.push(tag);  
                      });
                      this.addTags(search_result_index, tagContainer)
                      input.value = '';
                    }
                });

                tagContainer.addEventListener('click', (e) => {
                    console.log(e.target.tagName);
                    if (e.target.tagName === 'I') {
                      const tagLabel = e.target.getAttribute('data-item');
                      const index = this.search_results[search_result_index].tags.indexOf(tagLabel);
                      this.search_results[search_result_index].tags = [...this.search_results[search_result_index].tags.slice(0, index), ...this.search_results[search_result_index].tags.slice(index+1)];
                      this.addTags(search_result_index, tagContainer);    
                    }
                  })
                  search_result_list.appendChild(list_element)
            } // enf of for loop
/*             search_results.forEach(function(source, index) {

            }); */
        }

        update_tag_set_list(tag_set_element_id, tag){
            // get the documents that are tagged with this tag, IMPORTANT: this is very important to show the correct source details when clicking on the title!!
            const tag_search_results = window.corpus.filter((source, index) => source.tags.includes(tag))
            this.search_results = tag_search_results
            const tag_set_sources_list = this.querySelector(tag_set_element_id);
            // remove old tag set sources
            tag_set_sources_list.innerHTML = ""
            // add the sources to the list
            for(let i = 0; i < tag_search_results.length; i++){ 
                let source = tag_search_results[i]
                let custom_html = `
                <div class="result-item opacity-9">
                    <!-- <img src="static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/source.svg" width="15px"> -->
                    <div class="_70-width">
                        <p class="font-weight-bold opacity-8 source-title" onClick="this.closest('search-navigation-component').show_resource_details(${i});">${source.title}</p>
                            <div class="bh-stars" data-bh-rating="${source.rating}">
                                <!-- <span>4,6</span> -->
                                <svg version="1.1" class="bh-star bh-star--1" onClick="this.closest('search-navigation-component').set_source_rating(${i}, 1.0, this.parentNode)" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xml:space="preserve"><path class="outline" d="M12,4.2L14.5,9l0.2,0.5l0.5,0.1l5.5,0.8L16.8,14l-0.4,0.4l0.1,0.5l1,5.3l-5-2.5L12,17.5l-0.4,0.2l-5,2.5L7.5,15l0.1-0.5 L7.2,14l-4-3.7l5.5-0.8l0.5-0.1L9.5,9L12,4.2 M11.9,2L8.6,8.6L1,9.7l5.5,5.1L5.2,22l6.8-3.4l6.8,3.4l-1.3-7.2L23,9.6l-7.6-1L11.9,2 L11.9,2z"/><polygon class="full" points="18.8,22 12,18.6 5.2,22 6.5,14.8 1,9.7 8.6,8.6 11.9,2 15.4,8.6 23,9.6 17.5,14.7"/><polyline class="left-half" points="12,18.6 5.2,22 6.5,14.8 1,9.7 8.6,8.6 11.9,2"/></svg>

                                <svg version="1.1" class="bh-star bh-star--2" onClick="this.closest('search-navigation-component').set_source_rating(${i}, 2.0, this.parentNode)" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xml:space="preserve"><path class="outline" d="M12,4.2L14.5,9l0.2,0.5l0.5,0.1l5.5,0.8L16.8,14l-0.4,0.4l0.1,0.5l1,5.3l-5-2.5L12,17.5l-0.4,0.2l-5,2.5L7.5,15l0.1-0.5 L7.2,14l-4-3.7l5.5-0.8l0.5-0.1L9.5,9L12,4.2 M11.9,2L8.6,8.6L1,9.7l5.5,5.1L5.2,22l6.8-3.4l6.8,3.4l-1.3-7.2L23,9.6l-7.6-1L11.9,2 L11.9,2z"/><polygon class="full" points="18.8,22 12,18.6 5.2,22 6.5,14.8 1,9.7 8.6,8.6 11.9,2 15.4,8.6 23,9.6 17.5,14.7"/><polyline class="left-half" points="12,18.6 5.2,22 6.5,14.8 1,9.7 8.6,8.6 11.9,2"/></svg>

                                <svg version="1.1" class="bh-star bh-star--3" onClick="this.closest('search-navigation-component').set_source_rating(${i}, 3.0, this.parentNode)" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xml:space="preserve"><path class="outline" d="M12,4.2L14.5,9l0.2,0.5l0.5,0.1l5.5,0.8L16.8,14l-0.4,0.4l0.1,0.5l1,5.3l-5-2.5L12,17.5l-0.4,0.2l-5,2.5L7.5,15l0.1-0.5 L7.2,14l-4-3.7l5.5-0.8l0.5-0.1L9.5,9L12,4.2 M11.9,2L8.6,8.6L1,9.7l5.5,5.1L5.2,22l6.8-3.4l6.8,3.4l-1.3-7.2L23,9.6l-7.6-1L11.9,2 L11.9,2z"/><polygon class="full" points="18.8,22 12,18.6 5.2,22 6.5,14.8 1,9.7 8.6,8.6 11.9,2 15.4,8.6 23,9.6 17.5,14.7"/><polyline class="left-half" points="12,18.6 5.2,22 6.5,14.8 1,9.7 8.6,8.6 11.9,2"/></svg>

                                <svg version="1.1" class="bh-star bh-star--4" onClick="this.closest('search-navigation-component').set_source_rating(${i}, 4.0, this.parentNode)" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xml:space="preserve"><path class="outline" d="M12,4.2L14.5,9l0.2,0.5l0.5,0.1l5.5,0.8L16.8,14l-0.4,0.4l0.1,0.5l1,5.3l-5-2.5L12,17.5l-0.4,0.2l-5,2.5L7.5,15l0.1-0.5 L7.2,14l-4-3.7l5.5-0.8l0.5-0.1L9.5,9L12,4.2 M11.9,2L8.6,8.6L1,9.7l5.5,5.1L5.2,22l6.8-3.4l6.8,3.4l-1.3-7.2L23,9.6l-7.6-1L11.9,2 L11.9,2z"/><polygon class="full" points="18.8,22 12,18.6 5.2,22 6.5,14.8 1,9.7 8.6,8.6 11.9,2 15.4,8.6 23,9.6 17.5,14.7"/><polyline class="left-half" points="12,18.6 5.2,22 6.5,14.8 1,9.7 8.6,8.6 11.9,2"/></svg>

                                <svg version="1.1" class="bh-star bh-star--5" onClick="this.closest('search-navigation-component').set_source_rating(${i}, 5.0, this.parentNode)" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xml:space="preserve"><path class="outline" d="M12,4.2L14.5,9l0.2,0.5l0.5,0.1l5.5,0.8L16.8,14l-0.4,0.4l0.1,0.5l1,5.3l-5-2.5L12,17.5l-0.4,0.2l-5,2.5L7.5,15l0.1-0.5 L7.2,14l-4-3.7l5.5-0.8l0.5-0.1L9.5,9L12,4.2 M11.9,2L8.6,8.6L1,9.7l5.5,5.1L5.2,22l6.8-3.4l6.8,3.4l-1.3-7.2L23,9.6l-7.6-1L11.9,2 L11.9,2z"/><polygon class="full" points="18.8,22 12,18.6 5.2,22 6.5,14.8 1,9.7 8.6,8.6 11.9,2 15.4,8.6 23,9.6 17.5,14.7"/><polyline class="left-half" points="12,18.6 5.2,22 6.5,14.8 1,9.7 8.6,8.6 11.9,2"/></svg>
                                <!-- <span>(3)</span> -->
                            </div>  
                        <p>${source.uri}</p>
                        <p>${source.timestamp}</p>
                        <p>${source.authors}</p>
                        <p class="tag_list_container"></p>
                     <!--   <div class="tag-container">
                            <input placeholder="Add tag..." />  
                        </div> -->
                    </div>

   <!--             <div class="_20-width d-flex justify-content-between">
                       <img class="opacity-4 cursor-pointer" src="static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/settings.svg" width="15px">
                       <img class="opacity-4 cursor-pointer" src="static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/settings.svg" width="15px">
                       <img class="opacity-4 cursor-pointer" src="static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/settings.svg" width="15px"> 
                        <select name="source_selection_set_choose" id="${source.uri}">
                            <option value="null" selected="selected">----</option>
                            <option value="source_selection_set_1">Set 1</option>
                            <option value="source_selection_set_2">Set 2</option>
                        </select> 
                    </div>  -->

                    <div class="_20-width d-flex justify-content-between">
                        <div class="align-in-center flex-column text-primary mr-15">
                            <img class="opacity-4 cursor-pointer display-button" data-source_uri="${source.uri}" src="static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/map_off.svg" width="15px">
                            <p class="font-size-11">Display</p>
                        </div>
                 <!--   <div class="align-in-center flex-column text-primary mr-15">
                            <img class="opacity-4 cursor-pointer" onClick="this.closest('search-navigation-component').render_single_document_vector(${source.uri})" src="static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/near_by.svg" width="15px">
                            <p class="font-size-11">Locator</p>
                        </div> -->
                    </div>


                </div>
                `

                let list_element = document.createElement('div')
                list_element.addEventListener('click', (event) => {
                    //console.log(event.target)
                    //console.log('event fired.')
                    if(event.target.className.toString().includes('display-button') && this.display_single_source === false){ // this is executed after the button was clicked -> therefore the display single source variable is already true and we only have to change the image appropriately
                        //event.target.setAttribute('src', "static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/map_on.svg")
                        // swap the current_display button and set the old one off if a new one is clicked
                        if(event.target != this.current_display_button_element){
                            // turn of old display button
                            // make sure to not be in the initial state
                            if(this.current_display_button_element != ''){
                                const old_display_button_element = this.current_display_button_element
                                old_display_button_element.setAttribute('src', "static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/map_off.svg")
                            }
                            // empty out the selection 
                            // make the new display button the new current selected one 
                            this.current_display_button_element = event.target
                        }
                        // set the button as active if clicked 
                        this.current_display_button_element.setAttribute('src', "static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/map_on.svg")
                        // set the display single source to true
                        this.display_single_source = true
                        // render the single source 
                        this.render_single_source(source.uri)
                    } else if(event.target.className.toString().includes('display-button') && this.display_single_source === true) {
                        //event.target.setAttribute('src', "static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/map_off.svg")
                        // catch the case that we click another button than the first one
                        if(event.target != this.current_display_button_element){
                            // turn of old display button
                            // make sure to not be in the initial state
                            if(this.current_display_button_element != ''){
                                const old_display_button_element = this.current_display_button_element
                                old_display_button_element.setAttribute('src', "static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/map_off.svg")
                            }
                            // make the new display button the new current selected one and set it ON
                            this.current_display_button_element = event.target
                            this.current_display_button_element.setAttribute('src', "static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/map_on.svg")
                            // render the single source with the URI of the DISPLAY button that was clicked
                            //console.log(event.target.dataset.source_uri)
                            this.render_single_source(event.target.dataset.source_uri)
                        } else { // catch the case that we click the same button twice -> then we set the display to false and set the set projection to false
                            this.display_single_source = false
                            // empty out the selection set
                            window.source_selection_set_1 = []
                            window.render_set_projection = false;
                            // re-render the canvas 
                            window.render_canvas();
                            this.current_display_button_element.setAttribute('src', "static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/map_off.svg")
                        }
                    }
                }); 

                list_element.className = 'result-item opacity-9';
                list_element.innerHTML = custom_html
                // get the tag_list_container and add the tags for each search result
                const tag_list_container = list_element.querySelector('.tag_list_container');
                const tags_of_source = source.tags
                for (let tag of tags_of_source) {
                    tag_list_container.innerHTML += '#'+ tag.toString() + ' '
                }
                tag_set_sources_list.appendChild(list_element)
            }
        }

        update_list_of_all_tags(){
            // SET 1: get selection set 1 tag choose
            const source_selection_set_1_tag_choose = this.querySelector('#source_selection_set_1_tag_choose');
            // delete all existing displayed tags 
            source_selection_set_1_tag_choose.innerHTML = ""
            // append preview option
            let option_element = document.createElement('option')
            option_element.innerHTML = "--select tag--";
            option_element.setAttribute('value', 'null');
            option_element.setAttribute('selected', 'selected')
            source_selection_set_1_tag_choose.appendChild(option_element);
            // append all tag list options
            const list_of_all_tags = this.get_list_of_all_tags();
            for(let j=0; j < list_of_all_tags.length; j++){
                // append option element
                const option_element = document.createElement('option')
                option_element.innerHTML = list_of_all_tags[j];
                option_element.setAttribute('value', list_of_all_tags[j]);
                source_selection_set_1_tag_choose.appendChild(option_element);
            }

            // SET 2: get selection 2 tag choose
            const source_selection_set_2_tag_choose = this.querySelector('#source_selection_set_2_tag_choose');
            // delete all existing displayed tags 
            source_selection_set_2_tag_choose.innerHTML = ""
            // append preview option
            option_element = document.createElement('option')
            option_element.innerHTML = "--select tag--";
            option_element.setAttribute('value', 'null');
            option_element.setAttribute('selected', 'selected')
            source_selection_set_2_tag_choose.appendChild(option_element);
            for(let k=0; k < list_of_all_tags.length; k++){
                // append option element
                const option_element = document.createElement('option')
                option_element.innerHTML = list_of_all_tags[k];
                option_element.setAttribute('value', list_of_all_tags[k]);
                source_selection_set_2_tag_choose.appendChild(option_element);
            }

            // EXPORT TAG SET: get export selection tag choose
            const export_selection_set_tag_choose = this.querySelector('#export_selection_set_tag_choose');
            // delete all existing displayed tags 
            export_selection_set_tag_choose.innerHTML = ""
            // append preview option
            option_element = document.createElement('option')
            option_element.innerHTML = "--select tag--";
            option_element.setAttribute('value', 'null');
            option_element.setAttribute('selected', 'selected')
            export_selection_set_tag_choose.appendChild(option_element);
            for(let k=0; k < list_of_all_tags.length; k++){
                // append option element
                const option_element = document.createElement('option')
                option_element.innerHTML = list_of_all_tags[k];
                option_element.setAttribute('value', list_of_all_tags[k]);
                export_selection_set_tag_choose.appendChild(option_element);
            }

/*             <option value="null" selected="selected">----</option>
            <option value="source_selection_set_1">Set 1</option>
            <option value="source_selection_set_2">Set 2</option> */

        }

        createTag(label) {
            const div = document.createElement('div');
            div.setAttribute('class', 'tag');
            const span = document.createElement('span');
            span.innerHTML = label;
            const closeIcon = document.createElement('i');
            //closeIcon.innerHTML = 'close'; 
            closeIcon.setAttribute('class', 'bx bx-x');
            closeIcon.setAttribute('data-item', label);
            div.appendChild(span);
            div.appendChild(closeIcon);
            return div;
          }

        clearTags(tagContainer) {
            tagContainer.querySelectorAll('.tag').forEach(tag => {
            tag.parentElement.removeChild(tag);
            });
        }

        addTags(search_result_index, tagContainer) {
            this.clearTags(tagContainer);
            this.search_results[search_result_index].tags.slice().reverse().forEach(tag => {
                tagContainer.prepend(this.createTag(tag));
            });
        }

        show_resource_details(search_result_index){
            //console.log(search_result_index)
            // IMPORTANT: first hide search results and recommendation container and search exit button
            const search_result_list = this.querySelector('#search_result_list');
            search_result_list.style.display = 'none'
            const recommendation_container = this.querySelector('#recommendation_container');
            recommendation_container.style.display = 'none'
            const search_close_button = this.querySelector('#search_close_button');
            search_close_button.style.display = 'none';

            // THEN: display resource details and display details_back_button
            const resource_details = this.querySelector('#resource_details');
            // remove the old resource html
            resource_details.innerHTML = ""
            // make resource_details visible
            resource_details.style.display = 'block'
            const resource_details_back_button = this.querySelector('#resource_details_back_button');
            resource_details_back_button.style.display = 'block';
            // append the new resource details with the given uri
            const source = this.search_results[search_result_index] //window.corpus.filter((source, index) => source.uri === resource_uri)[0]
            //console.log(source)
            let custom_html = `
        <div class="position-relative">
            <img id="picture" src="static/ui/utils/components/page_components/search_navigation_component/assets/images/doc_background.jpg" width="400px">
       <!-- <div class="position-absolute right-0 bottom-0 p-10">
                <img id="previousImage" src="static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/leftArrow.svg" width="25px" onclick="this.previousImage();">
                <img id="nextImage" src="static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/rightArrow.svg" width="25px" onclick="this.nextImage();">
            </div> -->
        </div>

        <div class="w350 pt-10 pl-10">
            <p id="title" class="font-weight-bold text-primary">${source.title}</p>
            <br>
            <div class="bh-stars" data-bh-rating="${source.rating}">
                <!-- <span>4,6</span> -->
                <svg version="1.1" class="bh-star bh-star--1" onClick="this.closest('search-navigation-component').set_source_rating(${search_result_index}, 1.0, this.parentNode)" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xml:space="preserve"><path class="outline" d="M12,4.2L14.5,9l0.2,0.5l0.5,0.1l5.5,0.8L16.8,14l-0.4,0.4l0.1,0.5l1,5.3l-5-2.5L12,17.5l-0.4,0.2l-5,2.5L7.5,15l0.1-0.5 L7.2,14l-4-3.7l5.5-0.8l0.5-0.1L9.5,9L12,4.2 M11.9,2L8.6,8.6L1,9.7l5.5,5.1L5.2,22l6.8-3.4l6.8,3.4l-1.3-7.2L23,9.6l-7.6-1L11.9,2 L11.9,2z"/><polygon class="full" points="18.8,22 12,18.6 5.2,22 6.5,14.8 1,9.7 8.6,8.6 11.9,2 15.4,8.6 23,9.6 17.5,14.7"/><polyline class="left-half" points="12,18.6 5.2,22 6.5,14.8 1,9.7 8.6,8.6 11.9,2"/></svg>

                <svg version="1.1" class="bh-star bh-star--2" onClick="this.closest('search-navigation-component').set_source_rating(${search_result_index}, 2.0, this.parentNode)" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xml:space="preserve"><path class="outline" d="M12,4.2L14.5,9l0.2,0.5l0.5,0.1l5.5,0.8L16.8,14l-0.4,0.4l0.1,0.5l1,5.3l-5-2.5L12,17.5l-0.4,0.2l-5,2.5L7.5,15l0.1-0.5 L7.2,14l-4-3.7l5.5-0.8l0.5-0.1L9.5,9L12,4.2 M11.9,2L8.6,8.6L1,9.7l5.5,5.1L5.2,22l6.8-3.4l6.8,3.4l-1.3-7.2L23,9.6l-7.6-1L11.9,2 L11.9,2z"/><polygon class="full" points="18.8,22 12,18.6 5.2,22 6.5,14.8 1,9.7 8.6,8.6 11.9,2 15.4,8.6 23,9.6 17.5,14.7"/><polyline class="left-half" points="12,18.6 5.2,22 6.5,14.8 1,9.7 8.6,8.6 11.9,2"/></svg>

                <svg version="1.1" class="bh-star bh-star--3" onClick="this.closest('search-navigation-component').set_source_rating(${search_result_index}, 3.0, this.parentNode)" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xml:space="preserve"><path class="outline" d="M12,4.2L14.5,9l0.2,0.5l0.5,0.1l5.5,0.8L16.8,14l-0.4,0.4l0.1,0.5l1,5.3l-5-2.5L12,17.5l-0.4,0.2l-5,2.5L7.5,15l0.1-0.5 L7.2,14l-4-3.7l5.5-0.8l0.5-0.1L9.5,9L12,4.2 M11.9,2L8.6,8.6L1,9.7l5.5,5.1L5.2,22l6.8-3.4l6.8,3.4l-1.3-7.2L23,9.6l-7.6-1L11.9,2 L11.9,2z"/><polygon class="full" points="18.8,22 12,18.6 5.2,22 6.5,14.8 1,9.7 8.6,8.6 11.9,2 15.4,8.6 23,9.6 17.5,14.7"/><polyline class="left-half" points="12,18.6 5.2,22 6.5,14.8 1,9.7 8.6,8.6 11.9,2"/></svg>

                <svg version="1.1" class="bh-star bh-star--4" onClick="this.closest('search-navigation-component').set_source_rating(${search_result_index}, 4.0, this.parentNode)" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xml:space="preserve"><path class="outline" d="M12,4.2L14.5,9l0.2,0.5l0.5,0.1l5.5,0.8L16.8,14l-0.4,0.4l0.1,0.5l1,5.3l-5-2.5L12,17.5l-0.4,0.2l-5,2.5L7.5,15l0.1-0.5 L7.2,14l-4-3.7l5.5-0.8l0.5-0.1L9.5,9L12,4.2 M11.9,2L8.6,8.6L1,9.7l5.5,5.1L5.2,22l6.8-3.4l6.8,3.4l-1.3-7.2L23,9.6l-7.6-1L11.9,2 L11.9,2z"/><polygon class="full" points="18.8,22 12,18.6 5.2,22 6.5,14.8 1,9.7 8.6,8.6 11.9,2 15.4,8.6 23,9.6 17.5,14.7"/><polyline class="left-half" points="12,18.6 5.2,22 6.5,14.8 1,9.7 8.6,8.6 11.9,2"/></svg>

                <svg version="1.1" class="bh-star bh-star--5" onClick="this.closest('search-navigation-component').set_source_rating(${search_result_index}, 5.0, this.parentNode)" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xml:space="preserve"><path class="outline" d="M12,4.2L14.5,9l0.2,0.5l0.5,0.1l5.5,0.8L16.8,14l-0.4,0.4l0.1,0.5l1,5.3l-5-2.5L12,17.5l-0.4,0.2l-5,2.5L7.5,15l0.1-0.5 L7.2,14l-4-3.7l5.5-0.8l0.5-0.1L9.5,9L12,4.2 M11.9,2L8.6,8.6L1,9.7l5.5,5.1L5.2,22l6.8-3.4l6.8,3.4l-1.3-7.2L23,9.6l-7.6-1L11.9,2 L11.9,2z"/><polygon class="full" points="18.8,22 12,18.6 5.2,22 6.5,14.8 1,9.7 8.6,8.6 11.9,2 15.4,8.6 23,9.6 17.5,14.7"/><polyline class="left-half" points="12,18.6 5.2,22 6.5,14.8 1,9.7 8.6,8.6 11.9,2"/></svg>
                <!-- <span>(3)</span> -->
            </div>  
            <br>
            <div class="tag-container">
                <input  placeholder="Add tag ..." />  
            </div>
            <br>
            <p id="author" class="text-muted">${source.authors}</p>
            <p id="year" class="text-muted">${source.timestamp}</p>
        </div>

        <div class="d-flex mt-20 justify-content-start pl-10"> 
            <div class="align-in-center flex-column text-primary mr-15">
                <img class="opacity-4 cursor-pointer display-button" data-source_uri="${source.uri}" src="static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/map_off.svg" width="20px">
                <p>Display</p>
            </div>
<!--        <div class="align-in-center flex-column text-primary mr-15">
                <img class="opacity-4 cursor-pointer" onClick="this.closest('search-navigation-component').render_single_document_vector(${source.uri})" src="static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/near_by.svg" width="20px">
                <p>Locator</p>
            </div> -->
            <div class="align-in-center flex-column text-primary mr-15">
                <img class="opacity-4 cursor-pointer" src="static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/share.svg" width="20px">
                <p>Share</p>
            </div>
        </div>

        <br>
        <p class="w350 pt-10 pl-10" style="font-weight: bold;">Keywords:</p>
        <p class="w350 pt-10 pl-10 keyword_container"></p>
        <div class="w350 pt-10 pl-10">
            <details class="ml-0 p-0 text-muted" open>
                <summary style="font-weight: bold;">Summary</summary>
                <p>${source.summary}</p>
            </details>
        </div>
        <br>
        <p class="w350 pt-10 pl-10" style="font-weight: bold;">Annotation:</p>
        <p class="w350 pt-10 pl-10 annotation_input" contenteditable="true" data-placeholder="...write annotation here.">${source.annotation}</p>

     <!--   <div class="pl-10">
        <details class="ml-0 p-0 text-muted w350 mt-20">
            <summary>Content</summary>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
                more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </details>
        </div> -->
                `
            let resource_element = document.createElement('div')
            // add event listener for display source button
            resource_element.addEventListener('click', (event) => {
                //console.log(event.target)
                //console.log('event fired.')
                if(event.target.className.toString().includes('display-button') && this.display_single_source === false){ // this is executed after the button was clicked -> therefore the display single source variable is already true and we only have to change the image appropriately
                    //event.target.setAttribute('src', "static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/map_on.svg")
                    // swap the current_display button and set the old one off if a new one is clicked
                    if(event.target != this.current_display_button_element){
                        // turn of old display button
                        // make sure to not be in the initial state
                        if(this.current_display_button_element != ''){
                            const old_display_button_element = this.current_display_button_element
                            old_display_button_element.setAttribute('src', "static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/map_off.svg")
                        }
                        // empty out the selection 
                        // make the new display button the new current selected one 
                        this.current_display_button_element = event.target
                    }
                    // set the button as active if clicked 
                    this.current_display_button_element.setAttribute('src', "static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/map_on.svg")
                    // set the display single source to true
                    this.display_single_source = true
                    // render the single source 
                    this.render_single_source(source.uri)
                } else if(event.target.className.toString().includes('display-button') && this.display_single_source === true) {
                    //event.target.setAttribute('src', "static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/map_off.svg")
                    // catch the case that we click another button than the first one
                    if(event.target != this.current_display_button_element){
                        // turn of old display button
                        // make sure to not be in the initial state
                        if(this.current_display_button_element != ''){
                            const old_display_button_element = this.current_display_button_element
                            old_display_button_element.setAttribute('src', "static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/map_off.svg")
                        }
                        // make the new display button the new current selected one and set it ON
                        this.current_display_button_element = event.target
                        this.current_display_button_element.setAttribute('src', "static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/map_on.svg")
                        // render the single source with the URI of the DISPLAY button that was clicked
                        //console.log(event.target.dataset.source_uri)
                        this.render_single_source(event.target.dataset.source_uri)
                    } else { // catch the case that we click the same button twice -> then we set the display to false and set the set projection to false
                        this.display_single_source = false
                        // empty out the selection set
                        window.source_selection_set_1 = []
                        window.render_set_projection = false;
                        // re-render the canvas 
                        window.render_canvas();
                        this.current_display_button_element.setAttribute('src', "static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/map_off.svg")
                    }
                }
            }); 
            //resource_element.className = 'result-item opacity-9';
            resource_element.innerHTML = custom_html
            resource_details.appendChild(resource_element)
            // add tagging functionality
            const tagContainer = resource_element.querySelector('.tag-container');
            const input = resource_element.querySelector('.tag-container input');
            // add all existing tags once after component loaded
            this.addTags(search_result_index, tagContainer);    
            // add event listeners for tagging
            input.addEventListener('keyup', (e) => {
                if (e.keyCode === 32) { // Space
                    e.target.value.split(',').forEach(tag => {
                    this.search_results[search_result_index].tags.push(tag);  
                    });
                    this.addTags(search_result_index, tagContainer)
                    input.value = '';
                }
            });

            tagContainer.addEventListener('click', (e) => {
                console.log(e.target.tagName);
                if (e.target.tagName === 'I') {
                    const tagLabel = e.target.getAttribute('data-item');
                    const index = this.search_results[search_result_index].tags.indexOf(tagLabel);
                    this.search_results[search_result_index].tags = [...this.search_results[search_result_index].tags.slice(0, index), ...this.search_results[search_result_index].tags.slice(index+1)];
                    this.addTags(search_result_index, tagContainer);    
                }
                })
            
            // get the annotation_paragraph input
            const annotation_input = resource_element.querySelector('.annotation_input');
            annotation_input.addEventListener('input', (event) => {
                //console.log(event.target.innerHTML)
                const annotation_text = event.target.innerHTML
                source.annotation = annotation_text
            });

            // get the keyword_list_container and add the keywords
            const keyword_list_container = resource_element.querySelector('.keyword_container');
            for (let keyword of source.keywords) {
                keyword_list_container.innerHTML += '#'+ keyword.toString() + ' '
             }
        }

        show_topic_details(topic_result_index){
            //console.log(search_result_index)
            // IMPORTANT: update the search results list first with the best matching sources for this document => this is important to enable the click functions on the best matching sources because they need to be in the result list to be reachable
            const topic = this.topic_results[topic_result_index] //window.corpus.filter((source, index) => source.uri === resource_uri)[0]
            const search_results = window.corpus.filter((source, index) => topic.best_matching_documents_indices.includes(Number(source.uri))) 
            //console.log(topic.best_matching_documents_indices)
            this.update_search_list(search_results)
            //console.log(search_results)
            // IMPORTANT: first hide search results and recommendation container and search exit button
            const search_result_list = this.querySelector('#search_result_list');
            search_result_list.style.display = 'none'
            const recommendation_container = this.querySelector('#recommendation_container');
            recommendation_container.style.display = 'none'
            const search_close_button = this.querySelector('#search_close_button');
            search_close_button.style.display = 'none';

            // THEN: display topic details and display details_back_button
            const resource_details = this.querySelector('#resource_details');
            // remove the old resource html
            resource_details.innerHTML = ""
            // make resource_details visible
            resource_details.style.display = 'block'
            const resource_details_back_button = this.querySelector('#resource_details_back_button');
            resource_details_back_button.style.display = 'block';
            // append the new resource details with the given uri
            //console.log(source)
            let custom_html = `
            <div class="position-relative">
                <img id="picture" src="static/ui/utils/components/page_components/search_navigation_component/assets/images/doc_background.jpg" width="400px">
            <!-- <div class="position-absolute right-0 bottom-0 p-10">
                    <img id="previousImage" src="static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/leftArrow.svg" width="25px" onclick="this.previousImage();">
                    <img id="nextImage" src="static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/rightArrow.svg" width="25px" onclick="this.nextImage();">
                </div> -->
            </div>
    
            <div class="w350 pt-10 pl-10">
                <p id="title" class="font-weight-bold text-primary">${topic.topic_name.replace(/[0-9]/g, "")}</p>
                <br>
                <p id="topic_index" class="text-muted"><b>Topic Index:</b> ${topic.topic_index}</p>
                <p id="topic_size" class="text-muted"><b>Topic Size:</b> ${topic.topic_size} Paragraphs</p>
            </div>
    
            <div class="d-flex mt-20 justify-content-start pl-10"> 
                <div class="align-in-center flex-column text-primary mr-15">
                    <img class="opacity-4 cursor-pointer display-button" data-source_uri="${topic_result_index}" src="static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/map_off.svg" width="20px">
                    <p>Display</p>
                </div>
                <div class="align-in-center flex-column text-primary mr-15">
                    <img class="opacity-4 cursor-pointer" src="static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/share.svg" width="20px">
                    <p>Share</p>
                </div>
            </div>
    
            <br>
            <p class="w350 pt-10 pl-10" style="font-weight: bold;">Keywords:</p>
            <p class="w350 pt-10 pl-10 keyword_container"></p>
            <div class="w350 pt-10 pl-10">
                <details class="ml-0 p-0 text-muted" open>
                    <summary style="font-weight: bold;">Summary</summary>
                    <p>${topic.topic_summary}</p> 
                </details>
            </div>
            <br>
            <p class="w350 pt-10 pl-10" style="font-weight: bold;">Best Matching Sources:</p>
            <div class="w350 pt-10 pl-10">
                <ul id="best_matching_sources_list">
                </ul>
            </div>
            <br>
            <p class="w350 pt-10 pl-10" style="font-weight: bold;">Annotation:</p>
            <p class="w350 pt-10 pl-10 annotation_input" contenteditable="true" data-placeholder="...write annotation here.">${topic.annotation}</p>
            `
            let resource_element = document.createElement('div')
            resource_element.innerHTML = custom_html
            resource_details.appendChild(resource_element)
            // add event listener for projection display
            resource_element.addEventListener('click', (event) => {
                //console.log(event.target)
                //console.log('event fired.')
                if(event.target.className.toString().includes('display-button') && this.display_single_source === false){ // this is executed after the button was clicked -> therefore the display single source variable is already true and we only have to change the image appropriately
                    //event.target.setAttribute('src', "static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/map_on.svg")
                    // swap the current_display button and set the old one off if a new one is clicked
                    if(event.target != this.current_display_button_element){
                        // turn of old display button
                        // make sure to not be in the initial state
                        if(this.current_display_button_element != ''){
                            const old_display_button_element = this.current_display_button_element
                            old_display_button_element.setAttribute('src', "static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/map_off.svg")
                        }
                        // empty out the selection 
                        // make the new display button the new current selected one 
                        this.current_display_button_element = event.target
                    }
                    // set the button as active if clicked 
                    this.current_display_button_element.setAttribute('src', "static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/map_on.svg")
                    // set the display single source to true
                    this.display_single_source = true
                    // render the all the best matching sources associated to the current topic
                    const query = topic.best_matching_documents_indices
                    const query_type = 'source_set_projection'
                    this.render_query_set(query_type, query)
                } else if(event.target.className.toString().includes('display-button') && this.display_single_source === true) {
                    //event.target.setAttribute('src', "static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/map_off.svg")
                    // catch the case that we click another button than the first one
                    if(event.target != this.current_display_button_element){
                        // turn of old display button
                        // make sure to not be in the initial state
                        if(this.current_display_button_element != ''){
                            const old_display_button_element = this.current_display_button_element
                            old_display_button_element.setAttribute('src', "static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/map_off.svg")
                        }
                        // make the new display button the new current selected one and set it ON
                        this.current_display_button_element = event.target
                        this.current_display_button_element.setAttribute('src', "static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/map_on.svg")
                        // render the best matching sources of the topic with the URI of the DISPLAY button that was clicked
                        //console.log(event.target.dataset.source_uri)
                        // render the all the best matching sources associated to the current topic
                        const query = this.topic_results[event.target.dataset.source_uri].best_matching_documents_indices
                        const query_type = 'source_set_projection'
                        this.render_query_set(query_type, query)
                    } else { // catch the case that we click the same button twice -> then we set the display to false and set the set projection to false
                        this.display_single_source = false
                        // empty out the selection set
                        window.source_selection_set_1 = []
                        window.render_set_projection = false;
                        // re-render the canvas 
                        window.render_canvas();
                        this.current_display_button_element.setAttribute('src', "static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/map_off.svg")
                    }
                }
            }); 

            // get the annotation_paragraph input
            const annotation_input = resource_element.querySelector('.annotation_input');
            annotation_input.addEventListener('input', (event) => {
                //console.log(event.target.innerHTML)
                const annotation_text = event.target.innerHTML
                topic.annotation = annotation_text
            });

            // get the keyword_list_container and add the keywords
            const keyword_list_container = resource_element.querySelector('.keyword_container');
            for (let topic_word of topic.topic_words) {
                keyword_list_container.innerHTML += '#'+ topic_word.toString() + ' '
            }

            // get the best matching sources list and add the best matching sources to that specific topic
            const best_matching_sources_list = resource_element.querySelector('#best_matching_sources_list');
            // console.log(this.search_results)
            // IMPORTANT: sort the best_matching_document entries in an ascending order so that they match the search result uri order (=> this is always ascending!)
            const best_matching_documents_indices_sorted = topic.best_matching_documents_indices.sort(function(a, b){return a - b});
            //console.log(best_matching_documents_indices_sorted)
            for (const [counter_index, source_index] of best_matching_documents_indices_sorted.entries()) {
                const source = window.corpus.filter((source, index) => source.uri.toString() === source_index.toString())[0]
                const list_element = document.createElement('li')
                list_element.className = 'mt-20 ont-weight-bold opacity-8 source-title list-style-disc';
                list_element.innerHTML += `<p class="font-weight-bold opacity-8 source-title" onClick="this.closest('search-navigation-component').show_resource_details(${counter_index});">${source.title}</p>` //window.corpus[source_index].title
                best_matching_sources_list.appendChild(list_element)
            }
        }

        set_source_rating(search_result_index, rating, element){
            //console.log(rating)
            //console.log(element.getAttribute('data-bh-rating'))

            // change the underlying data source
            const source = this.search_results[search_result_index]
            // check if the source rating is the same -> if yes then we set it back (=double clicking same rating twice is setback)
            if(source.rating === rating){
             source.rating = 0.0   
             // change the view
             element.setAttribute('data-bh-rating', 0.0)
            } else {
                source.rating = rating
                // change the view
                element.setAttribute('data-bh-rating', rating)
            }
            //source.rating = ratingset_source_rating
            //console.log(this.search_results)
        }

        get_selected_topic(){
            //const topic_selection_list = this.querySelector('#topic_selection');
            const selected_topic = this.selected_topic //topic_selection_list.options[topic_selection_list.selectedIndex].value;
            return selected_topic
        }

        get_selected_dataset(){
            const dataset_selection_list = this.querySelector('#dataset_selection');
            const selected_dataset = dataset_selection_list.options[dataset_selection_list.selectedIndex].value;
            return selected_dataset
        }

        get_list_of_all_tags(){
            const list_of_all_tags = window.corpus.map((source, index) => source.tags).flat()
            const set_of_all_tags = new Set(list_of_all_tags)
            const distinct_list_of_all_tags = Array.from(set_of_all_tags)
            return distinct_list_of_all_tags
        }

        set_up_autocomplete_search_index(){
            this.document_titles = window.corpus.map((document, index) => document.title)
            const document_authors_list = window.corpus.map((document, index) => document.authors).flat() // create single array of all authors
            this.document_authors = document_authors_list.filter(onlyUnique);
            this.document_keywords = window.corpus.map((source, index) => source.keywords).flat().filter(onlyUnique)
            //const document_abstracts = nlp_corpus.map((document, index) => document.abstractText)
        }

        get_selected_sources_ids_from_tag(tag){
            const selected_sources = window.corpus.filter((source, index) => source.tags.includes(tag))
            const selected_sources_ids = selected_sources.map((source, index) => source.uri.toString())
            return selected_sources_ids
        }

        render_single_source(single_source_uri){
                // check the current embedding_map_type type: ['contextualized_word_embedding', 'document_embedding', 'paragraph_embedding']
                if (window.embedding_map_type === 'document_embedding') {
                    const query_type = 'single_source_projection'
                    const query = single_source_uri.toString()
                    this.render_query_set(query_type, query)
                    //console.log('doc emb')
                } else if(window.embedding_map_type === 'paragraph_embedding'){
                    const query_type = 'single_source_projection'
                    const query = single_source_uri.toString()
                    this.render_query_set(query_type, query)
                    //console.log('par emb')
                } else if(window.embedding_map_type === 'contextualized_word_embedding'){
                    const selected_sources_ids = []
                    // add the single source to a render/projection set
                    selected_sources_ids.push(single_source_uri.toString())
                    // set the window variable to the set
                    window.source_selection_set_1 = selected_sources_ids
                    // compute the set projection
                    window.compute_set_projection();
                    this.update_semantic_depth_and_width_labels();
                } else {
                    console.log('ERROR: single source could not be rendered.')
                    return
                }
                // set the global variable for rendering the set projection to true to render it
                window.render_set_projection = true;
                // re-render the canvas 
                window.render_canvas();
        }

        render_query_set(query_type, query){
            console.log(query_type)
            console.log(query)
            // compute the query projection due to the map type we are currently in
            window.compute_query_projection(query_type, query);
            this.update_semantic_depth_and_width_labels();
            // set the global variable for rendering the set projection to true to render it
            window.render_set_projection = true;
            // re-render the canvas 
            window.render_canvas();
        }

        render_single_document_vector(single_source_uri){
            if(this.display_single_document_vector === true) {
                this.display_single_document_vector = false
                // change the display button style 
                // TODO
                // set the global variable for rendering the set projection to false to not render it
                window.render_document_vectors = 'no_document_vectors';
                // re-render the canvas 
                window.render_canvas();
            } else {
            this.display_single_document_vector = true
            // put the document vector of the selected source into the list and rerender the projection
            const selected_source_list = window.corpus.filter((source, index) => source.uri.toString() === single_source_uri.toString())
            //console.log(selected_source_list)
            // clear the old document vector selection
            window.source_document_vector_selection_set = []
            // push the new one to the selection 
            window.source_document_vector_selection_set.push(selected_source_list[0].document_vector)
            console.log(window.source_document_vector_selection_set)
            // set the single source document vector rendering to seleced document vectors
            window.render_document_vectors = 'selected_document_vectors'
            // compute the set projection
            window.compute_set_projection();
            this.update_semantic_depth_and_width_labels();
            // re-render the canvas 
            window.render_canvas();
            }
        }

        list_brushed_search_results(ranked_documents_in_brushed_rectangle){
            //console.log(ranked_documents_in_brushed_rectangle)
            const all_labels_in_brushed_rectangle = ranked_documents_in_brushed_rectangle.map((document, index) => document.labels).flat()
            // remove duplicates from array
            const unique_labels_in_brushed_rectangle = sortByFrequencyAndRemoveDuplicates(all_labels_in_brushed_rectangle) 
            //console.log(all_labels_in_brushed_rectangle)
            //console.log(unique_labels_in_brushed_rectangle)
            const search_results = []
            // get for every document in the ranked list, the complete corpus information, print the result box in the result list and add the selected labels of the respective document
            for (let document of ranked_documents_in_brushed_rectangle) {
                const source_list = window.corpus.filter((source, index) => source.uri.toString() === document.word_2_doc_index.toString())
                search_results.push(source_list[0])
            }
            //console.log(search_results)

            // show search results box 
            const search_result_list = this.querySelector('#search_result_list');
            search_result_list.style.display = 'block';

            // set the given search results to the class variable to have access from everywhere
            this.search_results = search_results
            // remove old searches
            search_result_list.innerHTML = ""

            // create inital region overview search result
            const brush_overview_custom_html = `
            <div class="result-item opacity-9">
                <!-- <img src="static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/source.svg" width="15px"> -->
                <div class="_70-width">
                    <p class="font-weight-bold opacity-8 source-title">Brushed Region Overview:</p>
                    </br>
                    <p class="keyword_container"><strong>Brushed Region Keywords: </strong></p>
                </div>
            </div>
            `
            const brush_overview_element = document.createElement('div');
            brush_overview_element.className = 'result-item opacity-9';
            brush_overview_element.innerHTML = brush_overview_custom_html
            // get the keyword_list_container and add the brushed keywords
            const keyword_list_container = brush_overview_element.querySelector('.keyword_container');
            for (let keyword of unique_labels_in_brushed_rectangle) {
                keyword_list_container.innerHTML += '#'+ keyword.toString() + ' '
            }
            search_result_list.appendChild(brush_overview_element)

            // create brushed search results result elements
            for(let i = 0; i < search_results.length; i++){ 
                let source = search_results[i]
                let custom_html = `
                <div class="result-item opacity-9">
                    <!-- <img src="static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/source.svg" width="15px"> -->
                    <div class="_70-width">
                        <p class="font-weight-bold opacity-8 source-title" onClick="this.closest('search-navigation-component').show_resource_details(${i});">${source.title}</p>
                            <div class="bh-stars" data-bh-rating="${source.rating}">
                                <!-- <span>4,6</span> -->
                                <svg version="1.1" class="bh-star bh-star--1" onClick="this.closest('search-navigation-component').set_source_rating(${i}, 1.0, this.parentNode)" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xml:space="preserve"><path class="outline" d="M12,4.2L14.5,9l0.2,0.5l0.5,0.1l5.5,0.8L16.8,14l-0.4,0.4l0.1,0.5l1,5.3l-5-2.5L12,17.5l-0.4,0.2l-5,2.5L7.5,15l0.1-0.5 L7.2,14l-4-3.7l5.5-0.8l0.5-0.1L9.5,9L12,4.2 M11.9,2L8.6,8.6L1,9.7l5.5,5.1L5.2,22l6.8-3.4l6.8,3.4l-1.3-7.2L23,9.6l-7.6-1L11.9,2 L11.9,2z"/><polygon class="full" points="18.8,22 12,18.6 5.2,22 6.5,14.8 1,9.7 8.6,8.6 11.9,2 15.4,8.6 23,9.6 17.5,14.7"/><polyline class="left-half" points="12,18.6 5.2,22 6.5,14.8 1,9.7 8.6,8.6 11.9,2"/></svg>

                                <svg version="1.1" class="bh-star bh-star--2" onClick="this.closest('search-navigation-component').set_source_rating(${i}, 2.0, this.parentNode)" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xml:space="preserve"><path class="outline" d="M12,4.2L14.5,9l0.2,0.5l0.5,0.1l5.5,0.8L16.8,14l-0.4,0.4l0.1,0.5l1,5.3l-5-2.5L12,17.5l-0.4,0.2l-5,2.5L7.5,15l0.1-0.5 L7.2,14l-4-3.7l5.5-0.8l0.5-0.1L9.5,9L12,4.2 M11.9,2L8.6,8.6L1,9.7l5.5,5.1L5.2,22l6.8-3.4l6.8,3.4l-1.3-7.2L23,9.6l-7.6-1L11.9,2 L11.9,2z"/><polygon class="full" points="18.8,22 12,18.6 5.2,22 6.5,14.8 1,9.7 8.6,8.6 11.9,2 15.4,8.6 23,9.6 17.5,14.7"/><polyline class="left-half" points="12,18.6 5.2,22 6.5,14.8 1,9.7 8.6,8.6 11.9,2"/></svg>

                                <svg version="1.1" class="bh-star bh-star--3" onClick="this.closest('search-navigation-component').set_source_rating(${i}, 3.0, this.parentNode)" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xml:space="preserve"><path class="outline" d="M12,4.2L14.5,9l0.2,0.5l0.5,0.1l5.5,0.8L16.8,14l-0.4,0.4l0.1,0.5l1,5.3l-5-2.5L12,17.5l-0.4,0.2l-5,2.5L7.5,15l0.1-0.5 L7.2,14l-4-3.7l5.5-0.8l0.5-0.1L9.5,9L12,4.2 M11.9,2L8.6,8.6L1,9.7l5.5,5.1L5.2,22l6.8-3.4l6.8,3.4l-1.3-7.2L23,9.6l-7.6-1L11.9,2 L11.9,2z"/><polygon class="full" points="18.8,22 12,18.6 5.2,22 6.5,14.8 1,9.7 8.6,8.6 11.9,2 15.4,8.6 23,9.6 17.5,14.7"/><polyline class="left-half" points="12,18.6 5.2,22 6.5,14.8 1,9.7 8.6,8.6 11.9,2"/></svg>

                                <svg version="1.1" class="bh-star bh-star--4" onClick="this.closest('search-navigation-component').set_source_rating(${i}, 4.0, this.parentNode)" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xml:space="preserve"><path class="outline" d="M12,4.2L14.5,9l0.2,0.5l0.5,0.1l5.5,0.8L16.8,14l-0.4,0.4l0.1,0.5l1,5.3l-5-2.5L12,17.5l-0.4,0.2l-5,2.5L7.5,15l0.1-0.5 L7.2,14l-4-3.7l5.5-0.8l0.5-0.1L9.5,9L12,4.2 M11.9,2L8.6,8.6L1,9.7l5.5,5.1L5.2,22l6.8-3.4l6.8,3.4l-1.3-7.2L23,9.6l-7.6-1L11.9,2 L11.9,2z"/><polygon class="full" points="18.8,22 12,18.6 5.2,22 6.5,14.8 1,9.7 8.6,8.6 11.9,2 15.4,8.6 23,9.6 17.5,14.7"/><polyline class="left-half" points="12,18.6 5.2,22 6.5,14.8 1,9.7 8.6,8.6 11.9,2"/></svg>

                                <svg version="1.1" class="bh-star bh-star--5" onClick="this.closest('search-navigation-component').set_source_rating(${i}, 5.0, this.parentNode)" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xml:space="preserve"><path class="outline" d="M12,4.2L14.5,9l0.2,0.5l0.5,0.1l5.5,0.8L16.8,14l-0.4,0.4l0.1,0.5l1,5.3l-5-2.5L12,17.5l-0.4,0.2l-5,2.5L7.5,15l0.1-0.5 L7.2,14l-4-3.7l5.5-0.8l0.5-0.1L9.5,9L12,4.2 M11.9,2L8.6,8.6L1,9.7l5.5,5.1L5.2,22l6.8-3.4l6.8,3.4l-1.3-7.2L23,9.6l-7.6-1L11.9,2 L11.9,2z"/><polygon class="full" points="18.8,22 12,18.6 5.2,22 6.5,14.8 1,9.7 8.6,8.6 11.9,2 15.4,8.6 23,9.6 17.5,14.7"/><polyline class="left-half" points="12,18.6 5.2,22 6.5,14.8 1,9.7 8.6,8.6 11.9,2"/></svg>
                                <!-- <span>(3)</span> -->
                            </div>  
                        <p>${source.uri}</p>
                        <p>${source.timestamp}</p>
                        <p>${source.authors}</p>
                        <!-- <p class="tag_list_container"></p> -->
                        <details>
                            <summary>Tags</summary>
                            <div class="tag-container">
                                <input placeholder="Add tag..." />  
                            </div> 
                        </details>
                        </br>
                        <p><strong>Keyword Density: </strong>${ranked_documents_in_brushed_rectangle[i].labels.length}</p>
                        <p class="keyword_container"><strong>Brushed Keywords: </strong></p>
                     <!--   <div class="tag-container">
                            <input placeholder="Add tag..." />  
                        </div> -->
                    </div>

   <!--             <div class="_20-width d-flex justify-content-between">
                       <img class="opacity-4 cursor-pointer" src="static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/settings.svg" width="15px">
                       <img class="opacity-4 cursor-pointer" src="static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/settings.svg" width="15px">
                       <img class="opacity-4 cursor-pointer" src="static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/settings.svg" width="15px"> 
                        <select name="source_selection_set_choose" id="${source.uri}">
                            <option value="null" selected="selected">----</option>
                            <option value="source_selection_set_1">Set 1</option>
                            <option value="source_selection_set_2">Set 2</option>
                        </select> 
                    </div>  -->

                    <div class="_20-width d-flex justify-content-between">
                        <div class="align-in-center flex-column text-primary mr-15">
                            <img class="opacity-4 cursor-pointer display-button" data-source_uri="${source.uri}" src="static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/map_off.svg" width="15px">
                            <p class="font-size-11">Display</p>
                        </div>
                <!--    <div class="align-in-center flex-column text-primary mr-15">
                            <img class="opacity-4 cursor-pointer" onClick="this.closest('search-navigation-component').render_single_document_vector(${source.uri})" src="static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/near_by.svg" width="15px">
                            <p class="font-size-11">Locator</p>
                        </div> -->
                    </div>

                </div>
                `
                let list_element = document.createElement('div')
                list_element.addEventListener('click', (event) => {
                    //console.log(event.target)
                    //console.log('event fired.')
                    if(event.target.className.toString().includes('display-button') && this.display_single_source === false){ // this is executed after the button was clicked -> therefore the display single source variable is already true and we only have to change the image appropriately
                        //event.target.setAttribute('src', "static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/map_on.svg")
                        // swap the current_display button and set the old one off if a new one is clicked
                        if(event.target != this.current_display_button_element){
                            // turn of old display button
                            // make sure to not be in the initial state
                            if(this.current_display_button_element != ''){
                                const old_display_button_element = this.current_display_button_element
                                old_display_button_element.setAttribute('src', "static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/map_off.svg")
                            }
                            // empty out the selection 
                            // make the new display button the new current selected one 
                            this.current_display_button_element = event.target
                        }
                        // set the button as active if clicked 
                        this.current_display_button_element.setAttribute('src', "static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/map_on.svg")
                        // set the display single source to true
                        this.display_single_source = true
                        // render the single source 
                        this.render_single_source(source.uri)
                    } else if(event.target.className.toString().includes('display-button') && this.display_single_source === true) {
                        //event.target.setAttribute('src', "static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/map_off.svg")
                        // catch the case that we click another button than the first one
                        if(event.target != this.current_display_button_element){
                            // turn of old display button
                            // make sure to not be in the initial state
                            if(this.current_display_button_element != ''){
                                const old_display_button_element = this.current_display_button_element
                                old_display_button_element.setAttribute('src', "static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/map_off.svg")
                            }
                            // make the new display button the new current selected one and set it ON
                            this.current_display_button_element = event.target
                            this.current_display_button_element.setAttribute('src', "static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/map_on.svg")
                            // render the single source with the URI of the DISPLAY button that was clicked
                            //console.log(event.target.dataset.source_uri)
                            this.render_single_source(event.target.dataset.source_uri)
                        } else { // catch the case that we click the same button twice -> then we set the display to false and set the set projection to false
                            this.display_single_source = false
                            // empty out the selection set
                            window.source_selection_set_1 = []
                            window.render_set_projection = false;
                            // re-render the canvas 
                            window.render_canvas();
                            this.current_display_button_element.setAttribute('src', "static/ui/utils/components/page_components/search_navigation_component/assets/svg_icons/map_off.svg")
                        }
                    }
                }); 

                list_element.className = 'result-item opacity-9';
                // add html
                list_element.innerHTML = custom_html

                // get the keyword_list_container and add the brushed keywords
                const keyword_list_container = list_element.querySelector('.keyword_container');
                const unique_keywords_in_brushed_rect = uniq(ranked_documents_in_brushed_rectangle[i].labels)
                for (let keyword of unique_keywords_in_brushed_rect) {
                    keyword_list_container.innerHTML += '#'+ keyword.toString() + ' '
                }

                // get the tag_list_container and add the tags for each search result
/*                 const tag_list_container = list_element.querySelector('.tag_list_container');
                const tags_of_source = source.tags
                for (let tag of tags_of_source) {
                    tag_list_container.innerHTML += '#'+ tag.toString() + ' '
                } */

                // TAG functionality 
                const tagContainer = list_element.querySelector('.tag-container');
                const input = list_element.querySelector('.tag-container input');
                const search_result_index = i
                // add all existing tags once after component loaded
                this.addTags(search_result_index, tagContainer);   

                input.addEventListener('keyup', (e) => {
                    if (e.keyCode === 32) { // Space
                        e.target.value.split(',').forEach(tag => {
                        this.search_results[search_result_index].tags.push(tag);  
                        });
                        this.addTags(search_result_index, tagContainer)
                        input.value = '';
                    }
                });

                tagContainer.addEventListener('click', (e) => {
                    console.log(e.target.tagName);
                    if (e.target.tagName === 'I') {
                        const tagLabel = e.target.getAttribute('data-item');
                        const index = this.search_results[search_result_index].tags.indexOf(tagLabel);
                        this.search_results[search_result_index].tags = [...this.search_results[search_result_index].tags.slice(0, index), ...this.search_results[search_result_index].tags.slice(index+1)];
                        this.addTags(search_result_index, tagContainer);    
                    }
                })

                // append the element to the result list
                search_result_list.appendChild(list_element)
            }

            // show search exit button
            const search_close_button = this.querySelector('#search_close_button');
            search_close_button.style.display = 'block';

            // hide search render button 
            const render_button = this.querySelector('#render_button');
            render_button.style.display = 'none';
        }

        update_semantic_depth_and_width_labels(){
            const semantic_width_label = this.querySelector('#semantic_width_label');
            semantic_width_label.innerHTML = `Semantic Width: ${window.semantic_width}`
            const semantic_depth_label = this.querySelector('#semantic_depth_label');
            semantic_depth_label.innerHTML = `Semantic Depth: ${window.semantic_depth}`
        }

}

// Utility Functions
// Removes items duplicate in a given array.
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

function uniq(a) {
    return a.sort().filter(function(item, pos, ary) {
        return !pos || item != ary[pos - 1];
    });
}

function sortByFrequencyAndRemoveDuplicates(array) {
    var frequency = {}, value;
    // compute frequencies of each value
    for(var i = 0; i < array.length; i++) {
        value = array[i];
        if(value in frequency) {
            frequency[value]++;
        }
        else {
            frequency[value] = 1;
        }
    }
    // make array from the frequency object to de-duplicate
    var uniques = [];
    for(value in frequency) {
        uniques.push(value);
    }
    // sort the uniques array in descending order by frequency
    function compareFrequency(a, b) {
        return frequency[b] - frequency[a];
    }
    return uniques.sort(compareFrequency);
}

function convert_source_list_to_BIBJSON_list(source_list){
    const bibjson_list = []
    // for every source, create a new oject in the correct bibjson format, format can be found here: https://github.com/plus1tv/bibtex-bibjson
    for(const source of source_list){
        let source_bibjson_object = {}
        var source_name = "document_" + source.uri
        source_bibjson_object[source_name] = {}
        // add the props to the respective source object 
        source_bibjson_object[source_name].title = source.title
        source_bibjson_object[source_name].year = source.timestamp
        source_bibjson_object[source_name].doi = source.doi
        let author = []
        // add authors of list as single objects
        for (const author_obj of source.authors){
            let author_json = {}
            author_json.name = author_obj
            author.push(author_json)
        }
        source_bibjson_object[source_name].author = author   
        // add bibjson to list
        bibjson_list.push(source_bibjson_object)
    }
    return bibjson_list
}

function download_json_file(jsonData, fileName) {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([JSON.stringify(jsonData, null, 2)], {
      type: "text/plain"
    }));
    a.setAttribute("download", fileName);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
  

// Register the component // its name to the DOM
window.customElements.define('search-navigation-component', SearchNavigationComponent)
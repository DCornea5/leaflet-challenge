# Leaflet Homework - Visualising Data with Leaflet

## Background

![1-Logo](Images/1-Logo.png)

Welcome to the United States Geological Survey, or USGS for short! The USGS is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment; and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes. As a new hire, you will be helping them out with an exciting new project!

The USGS is interested in building a new set of tools that will allow them visualise their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. Their hope is that being able to visualise their data will allow them to better educate the public and other government organisations (and hopefully secure more funding..) on issues facing our planet.

### Before You Begin

1. Create a new repository for this project called `leaflet-challenge`. 
2. Clone the new repository to your computer.
3. Inside your local git repository, create a directory for the Leaflet challenge. 
4. This homework utilises both **html** and **Javascript** 
5. Push the above changes to GitHub.


### Level 1: Basic Visualisation

![2-BasicMap](Images/2-BasicMap.png)


1. **Get the data set**

   ![3-Data](Images/3-Data.png)

   The USGS provides earthquake data in a number of different formats, updated every 5 minutes.  
   [USGS GeoJSON Feed](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php)

   ![4-JSON](Images/4-JSON.png)

2. **Import & Visualise the Data**

   Create a map using Leaflet that plots all of the earthquakes from the data set based on their longitude and latitude.

   * The data markers reflect the magnitude of the earthquake in their size and colour. Earthquakes with higher magnitudes appear larger and darker in colour.

   * The popups provide additional information about the earthquake when a marker is clicked.

   * A legend that will provide context for the map data.
   
- - -

### Level 2: More Data (Optional)

![5-Advanced](Images/5-Advanced.png)

Plot a second data set on the map to illustrate the relationship between tectonic plates and seismic activity. 
Data on tectonic plates can be found at <https://github.com/fraxen/tectonicplates>.

* Plot a second data set on the map.

* Add a number of base maps to choose from as well as separate out our two different data sets into overlays that can be turned on and off independently.

* Add layer controls to our map.

- - -

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

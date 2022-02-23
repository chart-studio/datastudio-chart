# Create a graph and configurer google cloud platform

## Attention

Before sending file to your google cloud storage you have to change LOCAL = false to LOCAL = true.
Note that nothing will append when you will receive the data.

if you plan to make interaction with date or others, DONT FORGET TO ACTIVATE Chart INTERACTION = CrossFILTER in datastudio.

## Create your own graph

### Install dependency (npx - node)

      //dont use this one - not easy to handle and some bugs
      npx @google/dscc-gen viz --yarn
      npx @google/dscc-gen viz

      //Instead use this one
      npx @google/dscc-gen@2.0.30 viz --yarn
      npx @google/dscc-gen@2.0.30 viz

## Check your data

To check your data and use it later as localMessage.js, you need to:

- import an exemple or use one in data studio
- in your local editor, execute:

            yarn update_message
            or
            npm run update_message

## Create your graph

You can use whatever javascript library you want.

## Create the files and the manifest

      yarn build:dev or yarn build:prod

## Copy the result in your cloud storage

      yarn push:dev

      // and if it does not work do it manually

      gsutil cp -a public-read build/* gs://public_directory/myviz

## Google cloud tips

### Connect to google cloud

      gcloud auth login

### Change project

      gcloud config set project project_name_id

### Cancel a project

      gcloud config unset project

### Copy file to GCP

      gsutil cp "directory/file" "gs://directory"

### Create a storage

      gsutil mb -b on us-east1 gs://name

### Make a bucket public

      gsutil acl ch -u AllUsers:R gs://name

## Usefull link

### update a manifest

[Update a manifest](https://codelabs.developers.google.com/codelabs/community-visualization-dscc-gen/#9)

devMode allow to use cache to serve data quickly

### Buil a d3js graph by example

[Create custom javascript vizualisation in datastudio](https://codelabs.developers.google.com/codelabs/community-visualization#13)

[Create Data Studio Community Visualizations with dscc-gen](https://codelabs.developers.google.com/codelabs/community-visualization-dscc-gen/#9)

## Configure editor

[npm link package](https://www.npmjs.com/package/@google/dscc-gen)

[Create a Data Studio community visualization using D3 (video)](https://www.youtube.com/watch?v=7axX1R_ttOI)

[Apply filter in data visualisation](https://www.youtube.com/watch?v=kuUSNzd0ISg&t=2s)

[Manifest Doc](https://developers.google.com/datastudio/visualization/manifest-reference)
[Index.json Doc](https://developers.google.com/datastudio/visualization/config-reference)
[Explanation about data interactions (link1)](https://developers.google.com/datastudio/visualization/library-reference)
[Explanation about data interactions (link2)](https://developers.google.com/datastudio/visualization/interactions-guide)

### D3.js great chart

[brush with numeric labels](https://bl.ocks.org/timelyportfolio/50ffbfe3268466e316003997b6231f62)
[D3 - Labels on circular barplot](https://www.d3-graph-gallery.com/graph/circular_barplot_label.html)
[D3 - Brush histogram](https://bl.ocks.org/SevenChan07/495cd567e0ede0deeb14bb3599dce685)
[D3 - Brush Bar + histogram](http://bl.ocks.org/cdagli/3f6b27139323e59e0b445de1a04615c3)
[D3 - Demographic control of a D3 Brush](http://bl.ocks.org/timelyportfolio/5c136de85de1c2abb6fc)
[D3 - Brush and Zoom](https://bl.ocks.org/mbostock/34f08d5e11952a80609169b7917d4172)
[Vega tool - Focus + context - Smooth histogram zooming](https://vega.github.io/vega-lite/examples/interactive_bin_extent.html)

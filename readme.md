# Configurer google cloud platform

## POint d'attention

Lorsqu'on envoie des fichier avec LOCAL = true, aucune interaction ne s'éffectue et le dataset recu n'est pas de la même forme que celui renvoyé par data studio.
Ensuite NE PAS OUBLIER d'ACTIVER Chart INTERACTION = CrossFILTER dans datastudio. 
sinon ca ne marchera pas.

## Se connecter à google cloud

      gcloud auth login

## Change project

      gcloud config set project project_name_id

## Annuler le project

      gcloud config unset project

## Copier un fichier dans GCP

      gsutil cp "directory/file" "gs://directory"

## Créer un espace de stockage avec

      gsutil mb -b on us-east1 gs://name

## Rendre un bucket public

      gsutil acl ch -u AllUsers:R gs://name

## Installer les dépendances

      //ne fonctionne pas
      npx @google/dscc-gen viz --yarn
      npx @google/dscc-gen viz

      //Fonctionne
      npx @google/dscc-gen@2.0.30 viz --yarn
      npx @google/dscc-gen@2.0.30 viz

## Verifier la structure des données

Pour vérifier la structure des données, il faut:

- importer un jet de données au format CSV
- dans son répertoire de travail (vscode), lancer:

            yarn update_message
            ou 
            npm run update_message

Si ca ne fonctionne pas: taper la commande de copy directement:

            gsutil cp -a public-read build/* gs://hamis_test/viz-test

Les différents inputs qui existent sont:

- TEXT
- NUMBER
- YEAR_MONTH_DATE

## Mettre à jour le manifest

[Update a manifest](https://codelabs.developers.google.com/codelabs/community-visualization-dscc-gen/#9)

devMode allow to use cache to serve data quickly

## Construire son programme d3js

[Create custom javascript vizualisation in datastudio](https://codelabs.developers.google.com/codelabs/community-visualization#13)

[Create Data Studio Community Visualizations with dscc-gen](https://codelabs.developers.google.com/codelabs/community-visualization-dscc-gen/#9)

## Configurer les paramètres pour datastudio

[npm link package](https://www.npmjs.com/package/@google/dscc-gen)

[Vidéo youtube : Create a Data Studio community visualization using D3](https://www.youtube.com/watch?v=7axX1R_ttOI)

[Apply filter in data visualisation](https://www.youtube.com/watch?v=kuUSNzd0ISg&t=2s)

[Manifest Doc](https://developers.google.com/datastudio/visualization/manifest-reference)
[Index.json Doc](https://developers.google.com/datastudio/visualization/config-reference)
[1. Explication sur les interactions data de google](https://developers.google.com/datastudio/visualization/library-reference)
ou [2. interactions data de google](https://developers.google.com/datastudio/visualization/interactions-guide)

Cette vidéo explique comment configurer index.json pour paramétrer datastudio.

Exemple cools de d3.js

[brush with numeric labels](https://bl.ocks.org/timelyportfolio/50ffbfe3268466e316003997b6231f62)
[D3 - Labels on circular barplot](https://www.d3-graph-gallery.com/graph/circular_barplot_label.html)
[D3 - Brush histogram](https://bl.ocks.org/SevenChan07/495cd567e0ede0deeb14bb3599dce685)
[D3 - Brush Bar + histogram](http://bl.ocks.org/cdagli/3f6b27139323e59e0b445de1a04615c3)
[D3 - Demographic control of a D3 Brush](http://bl.ocks.org/timelyportfolio/5c136de85de1c2abb6fc)
[D3 - Brush and Zoom](https://bl.ocks.org/mbostock/34f08d5e11952a80609169b7917d4172)
[Vega tool - Focus + context - Smooth histogram zooming](https://vega.github.io/vega-lite/examples/interactive_bin_extent.html)